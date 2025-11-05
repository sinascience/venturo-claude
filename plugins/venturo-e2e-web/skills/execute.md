---
name: execute
description: Test execution management and result processing
tools: ["bash", "mcp__serena__*", "file-management", "reporting"]
---

# Test Execution Skill

Manages Playwright test suite execution, result collection, and comprehensive reporting.

## Core Capabilities

### 1. Test Execution
- Run entire test suites or specific tests
- Execute tests in different modes (headed/headless)
- Handle parallel test execution
- Manage test environment configuration

### 2. Result Collection
- Collect test execution metrics
- Capture screenshots and videos on failure
- Gather performance metrics and timing
- Record browser console logs and errors

### 3. Reporting
- Generate comprehensive test reports
- Create HTML and JSON report formats
- Include test coverage metrics
- Provide failure analysis and debugging info

### 4. Environment Management
- Configure test environments (dev/staging/prod)
- Manage test data and fixtures
- Handle environment-specific configurations
- Set up test isolation and cleanup

## Execution Workflow

1. **Preparation**
   - Validate test environment
   - Check test data availability
   - Verify browser configurations
   - Set up execution parameters

2. **Test Running**
   - Execute tests with specified configurations
   - Monitor test progress and status
   - Handle test failures and retries
   - Collect execution metrics

3. **Result Processing**
   - Aggregate test results and metrics
   - Generate execution reports
   - Analyze failure patterns
   - Create performance summaries

4. **Cleanup**
   - Clean up test data and temporary files
   - Reset test environments
   - Archive test results
   - Update test status tracking

## Execution Modes

### Development Mode
- Headed browser execution for visibility
- Detailed logging and debugging output
- Step-by-step test execution
- Real-time result display

### CI/CD Mode
- Headless execution for automation
- Optimized for speed and efficiency
- Comprehensive reporting for pipelines
- Integration with build systems

### Debug Mode
- Enhanced logging and debugging
- Browser DevTools integration
- Step-through test execution
- Detailed failure analysis

### Performance Mode
- Parallel test execution
- Resource optimization
- Performance metrics collection
- Load testing capabilities

## Reporting Features

### Test Summary
- Total tests executed
- Pass/fail statistics
- Execution time metrics
- Test coverage analysis

### Failure Analysis
- Detailed failure descriptions
- Screenshots and error logs
- Stack traces and debugging info
- Common failure pattern identification

### Performance Metrics
- Test execution times
- Browser performance metrics
- Network request analysis
- Resource utilization tracking

### Trend Analysis
- Historical test performance
- Failure rate trends
- Execution time improvements
- Coverage progression tracking

## Error Handling

- Test timeout management
- Browser crash recovery
- Network error handling
- Test data validation errors
- Environment setup failures