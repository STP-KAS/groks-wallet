$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$bin = Join-Path $root "bin\kaspad.exe"
$logDir = Join-Path $root "logs"
New-Item -ItemType Directory -Force -Path $logDir | Out-Null
$log = Join-Path $logDir "kaspad-tn10.log"

if (-not (Test-Path $bin)) { throw "missing $bin" }

$args = @(
  "--testnet",
  "--netsuffix=10",
  "--utxoindex",
  "--listen=0.0.0.0:16211",
  "--rpclisten=127.0.0.1:16210",
  "--rpclisten-borsh=127.0.0.1:17210",
  "--rpclisten-json=127.0.0.1:18210",
  "--outpeers=8",
  "--maxinpeers=32",
  "--ram-scale=0.4"
)

Write-Host "starting TN10 kaspad -> $log"
& $bin @args
