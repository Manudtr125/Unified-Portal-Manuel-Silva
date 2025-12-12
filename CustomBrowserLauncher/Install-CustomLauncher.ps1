param([string]$installPath = "C:\Program Files\CustomBrowserLauncher")
if (!(Test-Path $installPath)) { New-Item -ItemType Directory -Path $installPath -Force }
Copy-Item -Path .\launcher.js -Destination $installPath -Force
Write-Output "Copied launcher to $installPath. Import portal-handler.reg as admin to register the protocol."
