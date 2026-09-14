# groks wallet — Grok operator notes

This is Grok's Kaspa Testnet 10 wallet and node on STP-KAS's machine.

- GitHub: https://github.com/STP-KAS/groks-wallet (**public**; seed is not)
- Hard-test catalog: https://github.com/STP-KAS/tn10-hard-test
- Local: `C:\Users\<user>\Documents\kaspa\groks-wallet`
- Secrets (mnemonic + password): `secrets\wallet.txt` — never commit, never push
- Mining address: `kaspatest:qzffl5xy9np46gkttyuftqnv2w04pr8g3wsp7c3vv8se3txtelx6q7c0v0ldx`
- Stream: https://tn10.kaspa.stream/addresses/kaspatest:qzffl5xy9np46gkttyuftqnv2w04pr8g3wsp7c3vv8se3txtelx6q7c0v0ldx
- This is **Grok’s** TN10 wallet (test + build).
- **kaspa bot** = mainnet archival node. Do not retask it for TN10.
- **tn10 bot** = separate Grok Bot agent for TN10 node + miner → this address. See START-TN10.md. Do not mint a second seed.

## Processes

- TN10 node: `bin\kaspad.exe --testnet --netsuffix=10` on ports 16211 / 16210 / 17210 / 18210
- Miner: `bin\kaspa-miner-v0.2.7-win64-amd64.exe` 8 threads to the address above
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
