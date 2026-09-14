import { createRequire } from "node:module";
import { readFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

const require = createRequire(
  "C:/Users/Remco/grok-test-cascade-work/wasm-sdk/kaspa-wasm32-sdk/examples/nodejs/javascript/transactions/simple-transaction.js"
);
globalThis.WebSocket = require("websocket").w3cwebsocket;

const sdkPath =
  "C:/Users/Remco/grok-test-cascade-work/wasm-sdk/kaspa-wasm32-sdk/nodejs/kaspa/kaspa.js";
const kaspa = await import(pathToFileURL(sdkPath).href);
kaspa.initConsolePanicHook?.();

const args = process.argv.slice(2);
const get = (flag, fallback) => {
  const i = args.indexOf(flag);
  return i >= 0 ? args[i + 1] : fallback;
};

const toAddr = get("--to");
const sompi = BigInt(get("--sompi", "1"));
const payloadText = get("--payload", "groks-wallet stillpay-tn10 receipt");
if (!toAddr || !toAddr.startsWith("kaspatest:")) {
  console.error("usage: node send-tkas.mjs --to kaspatest:... [--sompi 1] [--payload text]");
  process.exit(2);
}

const secret = readFileSync(new URL("../secrets/wallet.txt", import.meta.url), "utf8");
const pkLine = secret.split(/\r?\n/).find((l) => l.startsWith("receive-0-private-key:"));
const fromLine = secret.split(/\r?\n/).find((l) => l.startsWith("receive-0:"));
const privHex = pkLine.split(":")[1].trim();
const fromAddr = fromLine.slice("receive-0:".length).trim();
const privateKey = new kaspa.PrivateKey(privHex);

const net = new kaspa.NetworkId("testnet-10");
const rpc = new kaspa.RpcClient({
  url: "127.0.0.1:17210",
  encoding: kaspa.Encoding.Borsh,
  networkId: net,
});
await rpc.connect();
try {
  const info = await rpc.getServerInfo();
  if (!info.isSynced) {
    console.error(JSON.stringify({ ok: false, error: "node_not_synced" }));
    process.exit(3);
  }
  const { entries } = await rpc.getUtxosByAddresses([fromAddr]);
  if (!entries.length) {
    console.error(JSON.stringify({ ok: false, error: "no_utxos", from: fromAddr }));
    process.exit(4);
  }
  const sorted = [...entries].sort((a, b) => {
    const aa = BigInt(a.amount);
    const bb = BigInt(b.amount);
    return aa < bb ? 1 : aa > bb ? -1 : 0;
  });
  const need = sompi + 1000n + 20000n;
  const picked = [];
  let acc = 0n;
  for (const e of sorted) {
    picked.push(e);
    acc += BigInt(e.amount);
    if (acc >= need && picked.length >= 1) break;
    if (picked.length >= 4) break;
  }
  const txArgs = {
    entries: picked,
    outputs: [{ address: toAddr, amount: sompi }],
    priorityFee: 1000n,
    changeAddress: fromAddr,
    networkId: net,
  };
  if (payloadText) {
    txArgs.payload = Array.from(new TextEncoder().encode(payloadText));
  }
  const { transactions, summary } = await kaspa.createTransactions(txArgs);
  const txids = [];
  for (const pending of transactions) {
    await pending.sign([privateKey]);
    const txid = await pending.submit(rpc);
    txids.push(String(txid));
  }
  console.log(
    JSON.stringify(
      {
        ok: true,
        from: fromAddr,
        to: toAddr,
        sompi: sompi.toString(),
        payload: payloadText,
        txids,
        summary,
      },
      (_, v) => (typeof v === "bigint" ? v.toString() : v),
      2
    )
  );
} finally {
  await rpc.disconnect().catch(() => undefined);
}
