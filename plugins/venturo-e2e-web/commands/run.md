---
description: Execute Playwright test suites with reporting and result analysis
argument-hint: [scope] [options]
---

# Test Execution

**Use the Test Runner agent to execute test suites with reporting and result analysis.**

The Test Runner agent manages complete test execution, including environment validation, test running, and result analysis.

## Usage
```
/venturo-e2e-web:run [scope] [options]
```

## Scope Options
- `all` - Run all tests in project
- `folder` - Run tests in specific folder
- `file` - Run specific test file
- `grep` - Run tests matching pattern
- (no scope) - Run all tests by default

## Browser & Execution Options
- `--project=chromium|firefox|webkit` - Target browser (default: all configured)
- `--headed` - Run with visible browser for debugging
- `--debug` - Run with Playwright Inspector
- `--workers=N` - Parallel worker count

## Reporter Options
- `--reporter=html` - HTML report (default)
- `--reporter=junit` - JUnit XML for CI/CD
- `--reporter=list` - Console list output

## Examples
```bash
/venturo-e2e-web:run all                                    # All tests
/venturo-e2e-web:run tests/auth/                            # Folder scope
/venturo-e2e-web:run tests/login.spec.ts                    # Specific file
/venturo-e2e-web:run all --project=chromium                 # Browser specific
/venturo-e2e-web:run all --headed --debug                   # Debug mode
/venturo-e2e-web:run all --reporter=junit --workers=4       # CI/CD run
```

## Execution Includes
- Pre-run environment validation
- Browser availability check
- Configuration file validation
- Parallel test execution management
- Comprehensive result analysis
- Failure diagnostics and reporting

## Output
Returns:
- Test execution summary
- Pass/fail statistics
- Failed test details
- Performance metrics
- Report file locations