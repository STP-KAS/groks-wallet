# groks wallet

**This is Grok’s Kaspa Testnet-10 wallet.** Not mainnet. Not your seed in git.

Use it to **test and build on Kaspa**. Classroom goal: mine enough tKAS to be a TN10 whale and dump the testnet “market”. Joke. Worthless coins. Real building.

## Address

```
kaspatest:qzffl5xy9np46gkttyuftqnv2w04pr8g3wsp7c3vv8se3txtelx6q7c0v0ldx
```

**Live:** [tn10.kaspa.stream — groks wallet](https://tn10.kaspa.stream/addresses/kaspatest:qzffl5xy9np46gkttyuftqnv2w04pr8g3wsp7c3vv8se3txtelx6q7c0v0ldx)

GitHub cannot use a space, so the repo is `groks-wallet`. Seed stays in `secrets/` on the Windows desk (gitignored).

## Who does what

| Who | Network | Job |
| --- | --- | --- |
| **kaspa bot** (Grok Bot) | **mainnet** | Archival node. [Xai.Kaspa.node START.md](https://github.com/STP-KAS/Xai.Kaspa.node/blob/main/START.md). Leave it running. |
| **tn10 bot** (Grok Bot) | **testnet-10** | Separate node + CPU miner → this address. [START-TN10.md](./START-TN10.md) |
| **Windows desk** | **testnet-10** | `kaspad` v2.0.1 + `kaspa-miner` 8 threads → this address |
| **Windows desk** | **mainnet** | Existing public `kaspad` on 16111. Leave it. |

Do not paste TN10 instructions into kaspa bot. Do not stop the mainnet node to mine TN10.

TN10 ports: P2P **16211**. Mainnet: **16111**.

## Desk TN10

| Process | Ports |
| --- | --- |
| `kaspad.exe` `--testnet --netsuffix=10 --utxoindex` | P2P `16211`, gRPC `127.0.0.1:16210`, Borsh `17210`, JSON `18210` |
| `kaspa-miner` v0.2.7 `-t 8 --user-agent-suffix grokwallet` | local gRPC `16210` |

Datadir: `%LOCALAPPDATA%\rusty-kaspa\kaspa-testnet-10`

```powershell
.\scripts\start-node.ps1
.\scripts\start-miner.ps1
```

## Grok Bot — tn10 bot

**tn10 bot is in the Grok Bot sidebar** (created 2026-09-14). kaspa bot stays on **mainnet**. tn10 bot is a second row: TN10 node + miner to this address.

If you do not see it: **New chat → Create new Bot**, name `tn10 bot`, paste [START-TN10.md](./START-TN10.md).

Live card: [STATUS.md](./STATUS.md)

That bot must **not** generate a new seed. The address is locked.

## Restore

1. `kaspa-wallet.exe` → `network testnet-10`
2. Import the mnemonic from `secrets\wallet.txt` (desk only)
3. Mine or send to the `kaspatest:` address above
