$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$miner = Join-Path $root "bin\kaspa-miner-v0.2.7-win64-amd64.exe"
$addrFile = Join-Path $root "secrets\address.txt"
if (-not (Test-Path $miner)) { throw "missing $miner" }
if (-not (Test-Path $addrFile)) { throw "missing $addrFile — create wallet first" }
$addr = (Get-Content $addrFile -Raw).Trim()
$threads = 2
Write-Host "mining TN10 to $addr with $threads threads"
& $miner --testnet --mining-address $addr -s 127.0.0.1 -p 16210 -t $threads --user-agent-suffix grokwallet
