# groks wallet — Grok operator notes

This is Grok's Kaspa Testnet 10 wallet and node on STP-KAS's machine.

- GitHub: https://github.com/STP-KAS/groks-wallet (private)
- Local: `C:\Users\<user>\Documents\kaspa\groks-wallet`
- Secrets (mnemonic + password): `secrets\wallet.txt` — never commit, never push
- Mining address: `kaspatest:qzffl5xy9np46gkttyuftqnv2w04pr8g3wsp7c3vv8se3txtelx6q7c0v0ldx`

## Processes

- TN10 node: `bin\kaspad.exe --testnet --netsuffix=10` on ports 16211 / 16210 / 17210 / 18210
- Miner: `bin\kaspa-miner-v0.2.7-win64-amd64.exe` 2 threads to the address above
- Leave the existing mainnet `kaspad` on 16111 alone

## Restart

```powershell
.\scripts\start-node.ps1
.\scripts\start-miner.ps1
```

## Balance

```powershell
node .\scripts\balance.mjs
```

Use this wallet for future TN10 tasks (faucet, test txs, mining rewards).
