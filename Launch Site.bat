@echo off
echo Starting South LA Intel site...
echo.
echo Once you see "Ready", the site will open automatically.
echo Keep this window open while using the site.
echo Close this window to shut down the site.
echo.

cd /d "%~dp0"
start "" "http://localhost:3002"
timeout /t 3 /nobreak >nul
npx next start -p 3002
pause
