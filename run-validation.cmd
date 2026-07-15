@echo off
setlocal EnableExtensions EnableDelayedExpansion

cd /d "C:\My NPMJS\universal-vue-components"

if errorlevel 1 (
echo ERROR: Project directory was not found.
pause
exit /b 1
)

if not exist "package.json" (
echo ERROR: package.json was not found in:
echo %CD%
pause
exit /b 1
)

if not exist "validation-logs" mkdir "validation-logs"

set "FULL_LOG=validation-logs\validation-output.txt"
set "SUMMARY=validation-logs\validation-summary.txt"
set "SCRIPTS_FILE=validation-logs\package-scripts.txt"
set "ARCHIVE=validation-logs\validation-results.zip"
set "TEMP_OUTPUT=%TEMP%\uvc-validation-command-output.txt"

type nul > "%FULL_LOG%"
type nul > "%SUMMARY%"
type nul > "%SCRIPTS_FILE%"

set /a FAILURES=0
set /a PASSED=0

echo Validation started: %date% %time%>>"%FULL_LOG%"
echo Repository: %CD%>>"%FULL_LOG%"
echo.>>"%FULL_LOG%"

node -e "const p=require('./package.json'); console.log(JSON.stringify(p.scripts||{},null,2))" >"%SCRIPTS_FILE%" 2>&1

call :RUN "git branch --show-current" "git branch --show-current"
call :RUN "git status --short" "git status --short"
call :RUN "git diff --check" "git diff --check"
call :RUN "git diff --stat" "git diff --stat"
call :RUN "node --version" "node --version"
call :RUN "pnpm --version" "pnpm --version"

call :RUN "pnpm install --frozen-lockfile" "pnpm install --frozen-lockfile"
call :RUN "pnpm exec playwright install chromium" "pnpm exec playwright install chromium"

call :RUN "pnpm validate:workspace" "pnpm validate:workspace"
call :RUN "pnpm validate:metadata" "pnpm validate:metadata"
call :RUN "pnpm build:packages" "pnpm build:packages"
call :RUN "pnpm lint" "pnpm lint"
call :RUN "pnpm typecheck" "pnpm typecheck"
call :RUN "pnpm test" "packages"
call :RUN "pnpm lint" "pnpm lint"
call :RUN "pnpm typecheck" "pnpm typecheck"
call :RUN "pnpm test" "pnpm test"
call :RUN "pnpm validate:exports" "pnpm validate:exports"

call :RUN "pnpm build:website" "pnpm build:website"
call :RUN "pnpm build:examples" "pnpm build:examples"

call :RUN "pnpm test:e2e" "pnpm test:e2e"
call :RUN "pnpm test:a11y" "pnpm test:a11y"
call :RUN "pnpm test:packed" "pnpm test:packed"

call :RUN "pnpm validate:links" "pnpm validate:links"
call :RUN "pnpm validate:sizes" "pnpm validate:sizes"

call :RUN "pnpm check" "pnpm check"
call :RUN "pnpm build" "pnpm build"

call :RUN "final git diff --check" "git diff --check"
call :RUN "final git status --short" "git status --short"

echo.>>"%SUMMARY%"
echo ============================================================>>"%SUMMARY%"
echo FINAL RESULTS>>"%SUMMARY%"
echo ============================================================>>"%SUMMARY%"
echo Passed: !PASSED!>>"%SUMMARY%"
echo Failed: !FAILURES!>>"%SUMMARY%"
echo Completed: %date% %time%>>"%SUMMARY%"

echo.>>"%FULL_LOG%"
echo ============================================================>>"%FULL_LOG%"
echo FINAL RESULTS>>"%FULL_LOG%"
echo ============================================================>>"%FULL_LOG%"
echo Passed: !PASSED!>>"%FULL_LOG%"
echo Failed: !FAILURES!>>"%FULL_LOG%"
echo Completed: %date% %time%>>"%FULL_LOG%"

if exist "%ARCHIVE%" del /q "%ARCHIVE%"

powershell.exe -NoProfile -ExecutionPolicy Bypass -Command ^
"Compress-Archive -LiteralPath '%FULL_LOG%','%SUMMARY%','%SCRIPTS_FILE%' -DestinationPath '%ARCHIVE%' -Force"

echo.
echo ============================================================
echo VALIDATION FINISHED
echo ============================================================
echo Passed: !PASSED!
echo Failed: !FAILURES!
echo.
echo Upload this file to ChatGPT:
echo %CD%%ARCHIVE%
echo.
pause
exit /b 0

:RUN
set "LABEL=%~1"
set "COMMAND=%~2"

echo.
echo ============================================================
echo Running: !LABEL!
echo ============================================================

echo.>>"%FULL_LOG%"
echo ============================================================>>"%FULL_LOG%"
echo COMMAND: !COMMAND!>>"%FULL_LOG%"
echo STARTED: %date% %time%>>"%FULL_LOG%"
echo ============================================================>>"%FULL_LOG%"

cmd.exe /d /s /c "!COMMAND!" >"%TEMP_OUTPUT%" 2>&1
set "EXIT_CODE=!ERRORLEVEL!"

type "%TEMP_OUTPUT%"
type "%TEMP_OUTPUT%">>"%FULL_LOG%"

echo.>>"%FULL_LOG%"
echo EXIT CODE: !EXIT_CODE!>>"%FULL_LOG%"
echo !LABEL! -- exit=!EXIT_CODE!>>"%SUMMARY%"

if "!EXIT_CODE!"=="0" (
set /a PASSED+=1
) else (
set /a FAILURES+=1
)

exit /b 0
