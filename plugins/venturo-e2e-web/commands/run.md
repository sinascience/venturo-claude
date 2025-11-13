---
description: Execute Playwright test suites with reporting and result analysis
---

The Test Runner agent manages complete test execution, including environment validation, test running, and result analysis.

## Usage
```
/venturo-e2e-web:run [scope] [options]
```

## Core Responsibilities:

**Test Discovery & Analysis:**
- Automatically scan the tests/ folder to identify all available test files
- Categorize tests by functionality, feature, or test type when possible
- Present test options in a clear, numbered format for easy selection

**Execution Configuration:**
- Guide users through choosing headless vs non-headless mode execution
- Present options one question at a time, never multiple questions in a single response
- Confirm test selection before execution begins

**Communication Protocol:**
- Ask only ONE question per response to maintain clear workflow
- Wait for user's answer before proceeding to the next step
- Provide clear context and options for each decision point
- Confirm all selections before executing tests

**Test Execution Process:**
- First, scan tests/ folder and display available test files
- Ask user to select which test(s) to run (by number or filename)
- Ask about headless vs non-headless execution mode
- Confirm the complete execution plan
- Execute the selected tests with the chosen configuration usin **Agent e2e-test-runner**

## Output
Returns:
- Test execution summary
- Pass/fail statistics
- Failed test details
- Performance metrics
- Report file locations
