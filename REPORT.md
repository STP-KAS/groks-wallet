# groks-wallet TN10 GitHub report

**Date:** 14 September 2026  
**Wallet:** groks-wallet (Grok, STP-KAS desk)  
**Network:** Kaspa Testnet-10 only  
**GitHub:** https://github.com/STP-KAS/groks-wallet (private; no seed)

This is what ran after standing up the node, and how each STP-KAS GitHub relates to this wallet.

Mining address:

```
kaspatest:qzffl5xy9np46gkttyuftqnv2w04pr8g3wsp7c3vv8se3txtelx6q7c0v0ldx
```

Change (used as stillpay pay-to in the live quote):

```
kaspatest:qp3mgdcusyesaztxhuuqa8y3t0mtesgfgt765t34273ulugx9vh0c7zg793ld
```

The seed stays in `secrets/wallet.txt` on this machine. It is not in this report and not in git.

---

## What I did

1. Left the existing **mainnet** `kaspad` on TCP 16111 alone.
2. Started a **second** node: rusty-kaspa **v2.0.1** `--testnet --netsuffix=10` on P2P 16211 / gRPC 16210, reusing the 55 GB TN10 datadir.
3. Generated a new BIP32 wallet with the Kaspa WASM SDK. Mining payouts go to receive index 0.
4. Started `kaspa-miner` v0.2.7, 2 CPU threads, `--testnet`, to that address. It waits until the node is synced, then hashes.
5. Created the private GitHub `STP-KAS/groks-wallet`.
6. Listed every repo under **STP-KAS** (36). Ran unit tests / HTTP smokes where a command exists. Used the groks address against stillpay (TN10) and Ishum (mainnet-shaped).
7. On-chain 1-sompi stillpay journal: **after the first mined tKAS**. See the live section at the bottom.

---

## How the wallet maps to the GitHubs

Three kinds of repo:

| Kind | What “test with this wallet” means |
| --- | --- |
| **TN10 money** | Address prefix `kaspatest:`. Quote, receipt, 402, or a real tx from groks-wallet. |
| **Runnable, not TN10 spend** | `go test` / `npm test` / HTTP. Some refuse `kaspatest:` on purpose. |
| **Docs / mix / review** | Read and classify. No binary to pay with. |

PegLab genesis wants **2.01 tKAS**. One CPU-mined block may or may not cover that. Stillpay’s teaching unit is **1 sompi**. That is the first on-chain use.

---

## Results (commands that ran)

| Repo | Local | Command | Result |
| --- | --- | --- | --- |
| stillpay-tn10 | `C:\Users\Remco\stillpay-tn10` | `npm test` | **pass** |
| stillpay-tn10 | same | HTTP `:8771` | **200** |
| stillpay-tn10 | same | `assertAddress(groks)` | **accepted**; `kaspa:` refused `WRONG_NETWORK` |
| stillpay-tn10 | same | live quote 1 sompi groks→change | **402 stillpay-quote-v1**, receipt 1=1 |
| peglab-stp | `C:\Users\Remco\peglab-stp` | `npm test` + HTTP `:8765` | **pass**, **200**. Genesis not submitted (needs ≥2.01 tKAS) |
| peglab-poc | `C:\Users\Remco\peglab-poc` | `npm test` | **pass** |
| stillpay-mainnet | `C:\Users\Remco\stillpay-mainnet` | `npm test` | **pass**. Broadcast left off. This wallet is TN10, not mainnet |
| kaspa-x402 | `C:\Users\Remco\src\kaspa-x402` | `npm test` (RC1 suite) | **pass** (EXIT=0). Live funded proof **not** run this pass |
| grok-test-cascade / kascade | `grok-test-cascade-work\kascade` | `npm test` | **56 pass / 0 fail** |
| ishum | `Documents\kaspa\ishum` | `go test ./...` | **pass** |
| ishum | same | HTTP `:8092` `/pos` `/store` | **200**. `kaspatest:` is **not** a valid store pay-to (mainnet `kaspa:` only, by test) |
| kns | `C:\Users\Remco\kns` | `go test ./...` | **FAIL** `TestContractSourcesDoNotReadForeignState`: `KasName.sil` uses `readInputState` (silverscript #234) |
| kns-spec | `C:\Users\Remco\kns-spec` | `go test ./...` | **pass** |
| kaspa-data-vault | `C:\Users\Remco\kaspa-data-vault` | `go test ./...` | **pass** |
| kaspa-till | `Documents\kaspa\superappstablesalternative` | `go test ./...` | **pass** |
| gramlane | `Documents\kaspa\superapp` | `go test ./...` | **pass** |
| xai-reasoning-3 | `Documents\kaspa\xai-reasoning-3` | `go test ./...` | **pass** |
| grok-kaspa-collab | `Documents\kaspa\grok-kaspa-collab\desk` | `go test ./...` | **pass** |
| wallet-integration | `C:\Users\Remco\wallet-integration` | `npm test` | **pass**. Inject only; never asks for this seed |
| kaachat-desktop | `C:\Users\Remco\kaachat-desktop` | `npm test` | **pass** |
| argent-xai | `Documents\kaspa\argent-xai` | `check.ps1` | **pass** (pins match freeze) |
| dagknight-test-grok | `C:\Users\Remco\dagknight-test-grok` | `cargo test` | **8 pass / 0 fail** |

---

## Every STP-KAS GitHub (36)

### Used this wallet (TN10)

| Repo | What it is | Wallet use |
| --- | --- | --- |
| [groks-wallet](https://github.com/STP-KAS/groks-wallet) | This node + miner + address | Running |
| [stillpay-tn10](https://github.com/STP-KAS/stillpay-tn10) | 1 sompi receipt + timeout + local 402 | Quote + HTTP + (pending) 1 sompi tx |
| [peglab-stp](https://github.com/STP-KAS/peglab-stp) | TN10 toy that will depeg | Tests + HTTP. Genesis waits for ≥2.01 tKAS |
| [kaspa-x402](https://github.com/STP-KAS/kaspa-x402) | x402 v2 binding, `kaspa:testnet-10` | Full RC1 tests. Funded live proof needs more tKAS + adapter env |
| [grok-test-cascade](https://github.com/STP-KAS/grok-test-cascade) | Review of kaspahttp402/kascade | Re-ran kascade 56 tests. No re-broadcast of their escrow |

### Runnable, wallet does not pay them (wrong network or no spend path)

| Repo | Why this wallet does not spend |
| --- | --- |
| [stillpay-mainnet](https://github.com/STP-KAS/stillpay-mainnet) | `kaspa:` only. Tests pass. Do not broadcast from groks-wallet |
| [ishum](https://github.com/STP-KAS/ishum) | Store pay-to must be mainnet `kaspa:`. `kaspatest:` refused. Tests pass |
| [kns](https://github.com/STP-KAS/kns) / [kns-spec](https://github.com/STP-KAS/kns-spec) | Names / Web4 demo. kns-spec tests pass. kns fails #234 foreign `readInputState` |
| [kaspa-till](https://github.com/STP-KAS/kaspa-till) | Reserved L1 till. Tests pass. Not a TN10 miner sink |
| [gramlane](https://github.com/STP-KAS/gramlane) | Grams / KIP-21 desk. Tests pass |
| [wallet-integration](https://github.com/STP-KAS/wallet-integration) | Kasware/Kastle inject catalog. Never takes this seed |
| [kaachat-desktop](https://github.com/STP-KAS/kaachat-desktop), [stp-kachat](https://github.com/STP-KAS/stp-kachat), [kachat-test-with-silver](https://github.com/STP-KAS/kachat-test-with-silver) | Wallet-login chat. npm test on desktop pass. Handshake needs Kasware/Kastle, not this CLI key |
| [xai-reasoning-3](https://github.com/STP-KAS/xai-reasoning-3) | Dual-rail EUR till + optional kaspa QR. Tests pass |
| [grok-kaspa-collab](https://github.com/STP-KAS/grok-kaspa-collab) | Desk / QR. Tests pass |
| [windows-p2p-node-guide](https://github.com/STP-KAS/windows-p2p-node-guide) | Mainnet 16111 public node. Followed: did **not** second-bind 16111 |
| [Xai.Kaspa.node](https://github.com/STP-KAS/Xai.Kaspa.node) | Mainnet archival node prompt. Not this TN10 process |
| [rusty-kaspa](https://github.com/STP-KAS/rusty-kaspa) | Full node fork. Used the **v2.0.1 release binary**, did not rebuild the fork |
| [dagknight-test-grok](https://github.com/STP-KAS/dagknight-test-grok) | Confirmation-policy tests. 8 pass. Not a wallet |
| [argent-xai](https://github.com/STP-KAS/argent-xai) | Pin recheck. Pass |
| [peglab-poc](https://github.com/STP-KAS/peglab-poc) | Receipt engine sister. Tests pass |
| [kaspaexplained-delusional-stp](https://github.com/STP-KAS/kaspaexplained-delusional-stp) / [mixer-concept](https://github.com/STP-KAS/mixer-concept) | Education sites. No `npm test` script |
| [gramlanepeglab](https://github.com/STP-KAS/gramlanepeglab) | Darwin scorecard site. Servable, not a spender |

### Docs / verdicts (no spend surface)

[kaspa-master-file](https://github.com/STP-KAS/kaspa-master-file), [project-delusional](https://github.com/STP-KAS/project-delusional), [sixpack.wtf](https://github.com/STP-KAS/sixpack.wtf), [x402-vs-grok](https://github.com/STP-KAS/x402-vs-grok), [grok-heavy-test](https://github.com/STP-KAS/grok-heavy-test), [delusional-stp-grok-mix](https://github.com/STP-KAS/delusional-stp-grok-mix), [402-is-not-x402](https://github.com/STP-KAS/402-is-not-x402), [x402-ishum](https://github.com/STP-KAS/x402-ishum), [feedback-stp-delusional](https://github.com/STP-KAS/feedback-stp-delusional), [ok](https://github.com/STP-KAS/ok).

Read as classification. They do not take `kaspatest:` payments.

---

## Explain, in one page

The desk has two Kaspas. **Mainnet** is already public on 16111. **This wallet is Testnet-10.** Mixing them is how you lose coins or brick a datadir.

stillpay-tn10 is the GitHub that is *for* this wallet: 1 locked sompi = 1 receipt unit, `kaspatest:` only, broadcast off until a signed TN10 tx is journaled. That is why the first spend is 1 sompi receive→change with payload `stillpay-tn10 groks-wallet 1-sompi receipt`.

Ishum is a till. It is honest: it will not take a testnet address as the shop. Kaspa x402 RC1 is also TN10, but its live proof is a whole funded adapter (exact + batch + refund). A first mined coin is enough for stillpay; it is not enough to claim x402 mainnet-readiness.

kns failed on a known compiler rule: v1.0.0 SilverScript must not `readInputState` of a foreign covenant (#234 closed unmerged). That is a contract-source fail, not a wallet fail.

PegLab will depeg. Do not treat tPEG as money. Do not genesis it until this miner actually holds ≥2.01 tKAS.

---

## Two miners, one Grok wallet

Windows desk `kaspad` 31088 + `kaspa-miner` 8 threads already pay this address.

Grok Bot Linux sandbox is the second site. Ritual: [START-TN10.md](./START-TN10.md) (same shape as [Xai.Kaspa.node START.md](https://github.com/STP-KAS/Xai.Kaspa.node/blob/main/START.md), TN10, **this** `kaspatest:` locked). Runbook: [GROK_BOT_PROMPT_TN10.md](./GROK_BOT_PROMPT_TN10.md).

Stream: https://tn10.kaspa.stream/addresses/kaspatest:qzffl5xy9np46gkttyuftqnv2w04pr8g3wsp7c3vv8se3txtelx6q7c0v0ldx

Grok Bot agents cannot be created from Grok Build TUI. Owner: New → Create new agent → `kaspa bot` → paste START-TN10.md.

## Live on-chain (filled after first mined tKAS)

- Node synced: _pending_ (desk still in UTXO IBD when this section was written)
- Miner first block: _pending_
- Balance: _pending_
- stillpay 1 sompi txid: _pending_
