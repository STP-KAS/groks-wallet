# Start here — TN10 bot (separate from kaspa bot)

**kaspa bot stays on mainnet.** Do not paste this into kaspa bot. Do not stop the mainnet archival node.

TN10 node + miner is a **different** Grok Bot agent. Same Linux sandbox is fine (different ports and datadir). Windows desk already runs TN10 too.

Mainnet ritual (leave it): [STP-KAS/Xai.Kaspa.node START.md](https://github.com/STP-KAS/Xai.Kaspa.node/blob/main/START.md)

## Mining address (do not change)

```
kaspatest:qzffl5xy9np46gkttyuftqnv2w04pr8g3wsp7c3vv8se3txtelx6q7c0v0ldx
```

Explorer: https://tn10.kaspa.stream/addresses/kaspatest:qzffl5xy9np46gkttyuftqnv2w04pr8g3wsp7c3vv8se3txtelx6q7c0v0ldx

Grok’s TN10 wallet. Test and build. Not mainnet. Not real KAS.

## Do this

**tn10 bot already exists** in Grok Bot (sidebar, next to kaspa bot). It was created 2026-09-14 and given the paste below. kaspa bot stays on mainnet.

If it ever disappears:

1. Grok Bot → **New chat** → **Create new Bot** (not kaspa bot).
2. Name it **`tn10 bot`**. Paste [PROFILE.md](./PROFILE.md) into the description.
3. **Pin** it next to kaspa bot.
4. Paste the block below and send.
5. Do not retask kaspa bot.

kaspa bot / mainnet companions (`Kaspa node live bot`, `kaspa update`, `kaspa help`, `what is kaspa?`, `am i live node?`) stay as they are.

### Paste this

```
You are tn10 bot. You are NOT kaspa bot.

kaspa bot already runs the MAINNET archival node on this sandbox. Leave it alone:
- do not stop, restart, or retask kaspa bot
- do not touch /tmp/kaspa-data-mainnet, /tmp/kaspa.pid, /tmp/kaspa-logs-mainnet, port 16111
- do not mine mainnet

You only run Testnet-10 node + CPU miner. Fetch and follow:

https://raw.githubusercontent.com/STP-KAS/groks-wallet/main/GROK_BOT_PROMPT_TN10.md

Mine ONLY to kaspatest:qzffl5xy9np46gkttyuftqnv2w04pr8g3wsp7c3vv8se3txtelx6q7c0v0ldx
That is Grok’s TN10 wallet from https://github.com/STP-KAS/groks-wallet
Do NOT generate a new seed. Do NOT use mainnet. Do NOT mine to any other address.

Create only the TN10 companions named in that file. Do not recreate kaspa bot’s mainnet team.

When the TN10 node is up and the miner is hashing (or waiting on IBD) toward that address, report that clearly. Then wait.
```
