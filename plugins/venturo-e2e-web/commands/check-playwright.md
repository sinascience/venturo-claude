---
description: Validate Playwright setup and run environment checks for E2E testing
---

# Check Playwright Setup

Validates that Playwright is properly installed and configured for E2E testing.

This command will:
1. Check Node.js version (>= 18 required)
2. Verify @playwright/test in package.json
3. Test Playwright CLI accessibility
4. Confirm browser binaries are installed
5. Check test directory structure

Run this before starting E2E test development to ensure your environment is ready.

After validation, use:
- `/generate_e2e_test` to create new tests
- `/run_e2e_tests` to execute existing tests

## Usage

Simply type `/check_playwright` and Claude will run the validation script and report any issues that need to be fixed.
