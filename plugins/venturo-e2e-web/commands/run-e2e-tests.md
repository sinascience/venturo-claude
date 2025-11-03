---
description: Run Playwright E2E tests with options for headed mode and debugging
---

# Run E2E Tests

Execute Playwright E2E tests with various runtime options.

## Basic Usage

Run all tests in headless mode:
```
/run_e2e_tests
```

## Options

### Run specific test file
Provide the test file path as an argument:
```
/run_e2e_tests tests/features/user-management/create-user.spec.ts
```

### Headed mode (browser visible)
Useful for debugging and seeing test execution:
```
/run_e2e_tests --headed
```

### Debug mode
Opens Playwright Inspector for step-by-step debugging:
```
/run_e2e_tests --debug
```

### Custom reporter
Change the test output format:
```
/run_e2e_tests --reporter=html
```

## What This Command Does

1. Validates Playwright installation
2. Executes test files with Playwright
3. Captures screenshots on failures
4. Provides debugging suggestions if tests fail
5. Shows detailed test results

## When Tests Fail

If tests fail, Claude will:
- Show the error message and location
- Suggest debugging steps
- Point to screenshot files in `test-results/`
- Recommend running with `--headed` or `--debug` flags

## Environment Variables

The command respects these variables:
- `BASE_URL`: Application URL (default: http://localhost:3000)
- `HEADED`: Set to 'true' for headed mode

## Examples

```bash
# Run all tests
/run_e2e_tests

# Run specific feature tests
/run_e2e_tests tests/features/auth/

# Debug a failing test
/run_e2e_tests tests/features/user-management/create-user.spec.ts --debug

# Run with visible browser
/run_e2e_tests --headed
```

## After Running

Claude will report:
- ✅ Number of tests passed
- ❌ Failed tests with error details
- 📸 Screenshot locations for failures
- 💡 Suggestions for fixing issues

Use this command regularly to ensure E2E tests stay green!
