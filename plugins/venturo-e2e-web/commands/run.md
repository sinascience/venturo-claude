---
description: Execute Playwright test suites with reporting and result analysis
argument-hint: [scope] [options]
---

# Test Execution

Execute tests with the Test Runner agent. Specify scope and options to control execution.

## Usage
```
/venturo-e2e-web:run [scope] [options]
```

## Scope Options
- `all` - Run all tests
- `folder` - Run tests in specific folder
- `file` - Run specific test file
- `grep` - Run tests matching pattern

## Browser & Execution Options
- `--project=chromium|firefox|webkit` - Target browser
- `--all-browsers` - Run on all browsers
- `--headed` - Run with visible browser
- `--debug` - Run with Playwright Inspector
- `--ui` - Interactive UI mode
- `--workers=N` - Parallel workers

## Reporter Options
- `--reporter=html` - HTML report (default)
- `--reporter=junit` - JUnit XML
- `--reporter=list` - List output

## Examples
```bash
/venturo-e2e-web:run all
/venturo-e2e-web:run tests/auth/
/venturo-e2e-web:run tests/login.spec.ts --project=chromium
/venturo-e2e-web:run all --headed --debug
```