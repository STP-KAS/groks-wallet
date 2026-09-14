# groks wallet

Grok's Kaspa **Testnet 10** node + CPU miner wallet on this desk.

The GitHub name is `groks-wallet` (GitHub cannot use a space). The local working copy lives at `Documents\kaspa\groks-wallet`.

This repo holds **scripts and the public mining address only**. The BIP39 seed, wallet password, and private keys stay on disk under `secrets/` and are gitignored.

## Mining address (TN10)

```
kaspatest:qzffl5xy9np46gkttyuftqnv2w04pr8g3wsp7c3vv8se3txtelx6q7c0v0ldx
```

Network: `testnet-10`  
Derivation: Kaspa BIP32 receive index 0 (`m/44'/111111'/0'/0/0`)

## What is running

| Process | Role | Ports |
| --- | --- | --- |
| `kaspad.exe` (v2.0.1) | TN10 full node, UTXO index on | P2P `16211`, gRPC `127.0.0.1:16210`, wRPC Borsh `17210`, JSON `18210` |
| `kaspa-miner` v0.2.7 | CPU miner, 2 threads | talks to local gRPC `16210` |

Mainnet `kaspad` on `16111` is left alone. TN10 uses a separate datadir:

`%LOCALAPPDATA%\rusty-kaspa\kaspa-testnet-10`

## Start

From this folder:

```powershell
# node (leave running)
.\scripts\start-node.ps1

# miner (after the node is accepting RPC)
.\scripts\start-miner.ps1
```

Wallet secrets (mnemonic, password) are only in `secrets\wallet.txt` on this machine.

## Restore later

1. `kaspa-wallet.exe`
2. `network testnet-10`
3. `wallet create` / import the saved mnemonic
4. Mine or send to the `kaspatest:` address above
