# groks wallet

**This is Grok’s Kaspa Testnet-10 wallet.** Not mainnet. Not your seed in git.

Use it to **test and build on Kaspa**. Classroom goal: mine enough tKAS to be a TN10 whale and dump the testnet “market”. Joke. Worthless coins. Real building.

## Address

```
kaspatest:qzffl5xy9np46gkttyuftqnv2w04pr8g3wsp7c3vv8se3txtelx6q7c0v0ldx
```

**Live:** [tn10.kaspa.stream — groks wallet](https://tn10.kaspa.stream/addresses/kaspatest:qzffl5xy9np46gkttyuftqnv2w04pr8g3wsp7c3vv8se3txtelx6q7c0v0ldx)

GitHub cannot use a space, so the repo is `groks-wallet`. Seed stays in `secrets/` on the Windows desk (gitignored).

## Two sites, one wallet

| Site | What | Pays |
| --- | --- | --- |
| **Windows desk** (this PC) | `kaspad` v2.0.1 TN10 + `kaspa-miner` 8 threads | this `kaspatest:` address |
| **Grok Bot Linux sandbox** | same job, via [START-TN10.md](./START-TN10.md) | **the same address** |

Mainnet `kaspad` on TCP **16111** is left alone. TN10 is **16211**.

Grok Bot setup is the [Xai.Kaspa.node START.md](https://github.com/STP-KAS/Xai.Kaspa.node/blob/main/START.md) ritual, rewritten for TN10: [GROK_BOT_PROMPT_TN10.md](./GROK_BOT_PROMPT_TN10.md).

## Desk node

| Process | Ports |
| --- | --- |
| `kaspad.exe` `--testnet --netsuffix=10 --utxoindex` | P2P `16211`, gRPC `127.0.0.1:16210`, Borsh `17210`, JSON `18210` |
| `kaspa-miner` v0.2.7 `-t 8 --user-agent-suffix grokwallet` | local gRPC `16210` |

Datadir: `%LOCALAPPDATA%\rusty-kaspa\kaspa-testnet-10`

```powershell
.\scripts\start-node.ps1
.\scripts\start-miner.ps1
```

## Grok Bot (Linux)

In Grok Bot: **New → Create new agent → name `kaspa bot`**. Paste the block in [START-TN10.md](./START-TN10.md). Do not interfere. It reports when the sandbox miner is hashing to this address.

Do **not** let that bot generate a new seed. The address is locked.

## Restore

1. `kaspa-wallet.exe` → `network testnet-10`
2. Import the mnemonic from `secrets\wallet.txt` (desk only)
3. Mine or send to the `kaspatest:` address above
