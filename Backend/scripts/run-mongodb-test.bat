@echo off
echo Running MongoDB connection test script...
echo.

cd %~dp0
node test-mongodb.js

echo.
echo Press any key to exit...
pause > nul