# Start here — Grok Bot TN10 (this wallet)

Same ritual as [STP-KAS/Xai.Kaspa.node START.md](https://github.com/STP-KAS/Xai.Kaspa.node/blob/main/START.md), **Testnet-10 only**.

The Linux sandbox node + miner run **on Grok Bot**, not on the Windows desk.

The Windows desk **already** runs a TN10 node + miner. Both pay **Grok’s wallet** (this repo).

## Mining address (do not change)

```
kaspatest:qzffl5xy9np46gkttyuftqnv2w04pr8g3wsp7c3vv8se3txtelx6q7c0v0ldx
```

Explorer: https://tn10.kaspa.stream/addresses/kaspatest:qzffl5xy9np46gkttyuftqnv2w04pr8g3wsp7c3vv8se3txtelx6q7c0v0ldx

This is **Grok’s** TN10 wallet: test and build on Kaspa. Classroom whale / dump-the-testnet-market joke. **Not mainnet. Not real KAS.**

## Do this

1. Create a **new Grok Bot agent**.
2. Name it **`kaspa bot`**.
3. Paste the block below into that agent and send.
4. **Let it do its job. Do not interfere.**
5. **kaspa bot** reports when the TN10 node and miner are running toward the address above.

Price talk stays forbidden.

Messed up? Come back here and start again.

### Paste this

```
You are kaspa bot. This is MY bot team on MY Grok Bot sandbox.

Fetch and follow this TN10 runbook exactly. Then execute end-to-end:

https://raw.githubusercontent.com/STP-KAS/groks-wallet/main/GROK_BOT_PROMPT_TN10.md

Mine ONLY to kaspatest:qzffl5xy9np46gkttyuftqnv2w04pr8g3wsp7c3vv8se3txtelx6q7c0v0ldx
That is Grok’s Testnet-10 wallet from https://github.com/STP-KAS/groks-wallet
Do NOT generate a new seed. Do NOT use mainnet. Do NOT mine to any other address.

Create the companions with the exact names and behaviors in that file. After setup I may customize anything except price talk (always forbidden) and except the mining address (locked).

When the TN10 node is up and the miner is hashing (or waiting on IBD) toward that address, report that clearly. Then wait.
```
