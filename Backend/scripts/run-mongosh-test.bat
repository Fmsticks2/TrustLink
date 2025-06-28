@echo off
echo Running MongoDB Shell Test Script with Test Data Creation...
echo.

REM Check if mongosh is installed
where mongosh >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Error: MongoDB Shell (mongosh) is not installed or not in your PATH.
    echo Please install MongoDB Shell or add it to your PATH and try again.
    goto :end
)

REM Set the MongoDB connection string - modify if needed
set MONGO_URI=mongodb://localhost:27017/trustlink

echo Connecting to: %MONGO_URI%
echo.

REM Run the mongosh script
cd %~dp0
mongosh %MONGO_URI% mongosh-test.js

:end
echo.
echo Press any key to exit...
pause > nul