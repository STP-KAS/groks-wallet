import { readFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

const sdkPath =
  "C:/Users/Remco/grok-test-cascade-work/wasm-sdk/kaspa-wasm32-sdk/nodejs/kaspa/kaspa.js";
const kaspa = await import(pathToFileURL(sdkPath).href);
kaspa.initConsolePanicHook?.();

const addr = readFileSync(new URL("../secrets/address.txt", import.meta.url), "utf8").trim();
const rpc = new kaspa.RpcClient({
  url: "127.0.0.1:17210",
  encoding: kaspa.Encoding.Borsh,
  networkId: new kaspa.NetworkId("testnet-10"),
});

await rpc.connect();
try {
  const info = await rpc.getServerInfo();
  const { entries } = await rpc.getUtxosByAddresses([addr]);
  const sompi = entries.reduce((n, e) => n + BigInt(e.amount), 0n);
  console.log(
    JSON.stringify(
      {
        address: addr,
        isSynced: info.isSynced,
        serverVersion: info.serverVersion,
        networkId: String(info.networkId ?? "testnet-10"),
        utxos: entries.length,
        sompi: sompi.toString(),
        kas: (Number(sompi) / 1e8).toFixed(8),
      },
      null,
      2
    )
  );
} finally {
  await rpc.disconnect().catch(() => undefined);
}
