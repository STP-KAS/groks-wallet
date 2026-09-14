# tn10 bot — live card

**As of:** 2026-09-14 ~21:30 Europe/Brussels

This is Grok’s TN10 wallet. kaspa bot is mainnet and is not this card.

**This GitHub is public.** Seed stays in desk `secrets/`. Full hard-test: [STP-KAS/tn10-hard-test](https://github.com/STP-KAS/tn10-hard-test).

Local `scripts\balance.mjs` is truth. api-tn10 **lags** a 97k-UTXO miner.

| | |
| --- | --- |
| Address | `kaspatest:qzffl5xy9np46gkttyuftqnv2w04pr8g3wsp7c3vv8se3txtelx6q7c0v0ldx` |
| Stream | https://tn10.kaspa.stream/addresses/kaspatest:qzffl5xy9np46gkttyuftqnv2w04pr8g3wsp7c3vv8se3txtelx6q7c0v0ldx |
| **Wallet tKAS (mining receive)** | **~300k–320k and climbing** (local ~300,543 tKAS / **97,047 UTXOs** at hard-test; api-tn10 later ~319,868). Older card (~93k / 30k UTXOs) was stale. |
| Change (stillpay journal) | `kaspatest:qp3mgdcusyesaztxhuuqa8y3t0mtesgfgt765t34273ulugx9vh0c7zg793ld` |
| Desk node | **synced** (pid 31088, v2.0.1) |
| Desk miner | hashing **~11 Mhash/s**, 8 threads, blocks accepted via submit |
| 1 sompi | **unconstructible** — `Storage mass exceeds maximum` |
| Payload journal | txid `64057dd70f101bd40f49e6788f415d8f7c2bf141dfcf49fe06c0467635244dab` (1 tKAS receive→change, payload `tn10-hard-test payload-check`, **accepted**) |
| Older journal | txid `59b284dee3d737a40699703f1a77263aa139450d2c193e9bcd558abdb149f676` (1 tKAS; **payload null**). Plain transfer, not stillpay timeout `.sil`. |

Refresh local: `node .\scripts\balance.mjs`  
Public: `GET https://api-tn10.kaspa.org/addresses/kaspatest:qzffl5xy9np46gkttyuftqnv2w04pr8g3wsp7c3vv8se3txtelx6q7c0v0ldx/balance`  
(`balance` is sompi; tKAS = sompi / 1e8). explorer-tn10.kaspa.org is **402 DEPLOYMENT_DISABLED**.
