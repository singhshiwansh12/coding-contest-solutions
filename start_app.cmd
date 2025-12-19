@echo off
echo Starting MongoDB for Contest Solutions...
if not exist "data" mkdir data
start "MongoDB" "C:\Program Files\MongoDB\Server\8.2\bin\mongod.exe" --dbpath ./data

echo Waiting for MongoDB to initialize...
timeout /t 5 /nobreak >nul

echo Starting Contest Solutions Server...
npm start
pause
