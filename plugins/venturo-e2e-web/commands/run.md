---
description: Execute Playwright test suites with comprehensive reporting and result analysis
agent: runner
argument-hint: [scope] [options]
---

# Test Execution

Executes Playwright test suites with proper configuration, comprehensive reporting, and detailed result analysis.

## Usage
```
/venturo-e2e-web:run [scope] [options]
```

## Scope Options
- `all` - Run all tests in the project
- `folder` - Run tests in specific folder
- `file` - Run specific test file
- `grep` - Run tests matching pattern

## Browser Options
- `--project=chromium` - Run on Chrome browser
- `--project=firefox` - Run on Firefox browser
- `--project=webkit` - Run on Safari browser
- `--all-browsers` - Run on all configured browsers

## Execution Modes
- `--headed` - Run with visible browser for debugging
- `--debug` - Run with Playwright Inspector
- `--ui` - Run in interactive UI mode
- `--workers=N` - Specify number of parallel workers

## Reporting Options
- `--reporter=html` - Generate HTML report (default)
- `--reporter=junit` - Generate JUnit XML for CI
- `--reporter=line` - Simple line-by-line output
- `--reporter=list` - Detailed test list output

## Examples
```bash
/venturo-e2e-web:run all
/venturo-e2e-web:run tests/auth/
/venturo-e2e-web:run tests/login.spec.ts --project=chromium
/venturo-e2e-web:run all --reporter=junit --workers=4
/venturo-e2e-web:run all --headed --debug
```

## Execution Workflow

1. **Environment Validation**
   - Check Playwright installation
   - Verify browser availability
   - Validate configuration files
   - Check environment variable configuration

2. **Test Execution**
   - Run tests with specified parameters
   - Monitor progress and capture results
   - Handle failures and retries appropriately
   - Collect performance metrics

3. **Result Processing**
   - Generate comprehensive test reports
   - Analyze failure patterns and root causes
   - Create execution summaries and statistics
   - Provide actionable insights

4. **Report Generation**
   - HTML reports with detailed results
   - Performance metrics and timing analysis
   - Failure analysis with debugging information
   - Trend analysis and recommendations

## Report Features

### Test Summary
- Total tests executed
- Pass/fail statistics
- Execution time metrics
- Browser and environment details

### Failure Analysis
- Detailed failure descriptions
- Screenshots and error logs
- Stack traces and debugging info
- Common failure patterns

### Performance Metrics
- Test execution times
- Browser performance data
- Network request analysis
- Resource utilization

## Debugging Support

When tests fail, provides:
- Specific failure reproduction steps
- Debugging command suggestions
- Screenshot and trace file locations
- Performance bottleneck identification

## Output
Returns comprehensive test results including:
- Execution summary and statistics
- Failed test details and debugging info
- Performance analysis and recommendations
- Report file locations and access instructions