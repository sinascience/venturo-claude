---
name: execute
description: Test execution management and result processing with standardized SOPs
tools: ["bash", "mcp__serena__*", "file-management", "reporting"]
---

# Test Execution Skill

Manages Playwright test suite execution, result collection, and comprehensive reporting following standardized operating procedures.

## SOP: Test Execution Standard Operating Procedure

### Document Control
- **SOP ID**: TE-001
- **Version**: 2.0.0
- **Effective Date**: Current
- **Owner**: Test Execution Specialist
- **Review Schedule**: Monthly

### Purpose & Scope
Standardize test execution process to ensure reliable, consistent test runs with comprehensive result analysis and reporting.

### Environment Setup SOP

#### SOP-TE001: Test Environment Validation
**Purpose**: Ensure test environment is properly configured before execution

**Procedure**:
1. **Pre-Execution Validation**
   - [ ] Check Playwright installation version
   - [ ] Verify browser availability (chromium, firefox, webkit)
   - [ ] Validate configuration file syntax (playwright.config.ts/js)
   - [ ] Check environment variable configuration availability

2. **Environment Configuration**
   - [ ] Set BASE_URL environment variable
   - [ ] Configure HEADED mode flag for debugging
   - [ ] Verify browser binary paths
   - [ ] Check system resource availability

3. **Dependency Validation**
   - [ ] Verify test file accessibility
   - [ ] Check page object and helper files
   - [ ] Validate environment variable configuration
   - [ ] Confirm mock API configurations

4. **Security & Permissions**
   - [ ] Verify file system permissions
   - [ ] Check network access for external APIs
   - [ ] Validate browser security settings
   - [ ] Confirm screenshot directory permissions

### Test Execution SOP

#### SOP-TE002: Test Run Execution
**Purpose**: Execute tests with proper configuration and monitoring

**Procedure**:
1. **Execution Command Preparation**
   ```bash
   # Standard execution
   npx playwright test tests/features/{feature-name}/{file-name}.spec.ts

   # Headed mode for debugging
   HEADED=true npx playwright test tests/features/{feature-name}/{file-name}.spec.ts

   # Parallel execution
   npx playwright test --workers=4

   # Specific browser execution
   npx playwright test --project=chromium
   ```

2. **Execution Monitoring**
   - [ ] Monitor test progress in real-time
   - [ ] Track individual test status
   - [ ] Capture console logs and errors
   - [ ] Record performance metrics

3. **Failure Handling**
   - [ ] Capture automatic screenshots on failure
   - [ ] Record browser state at failure point
   - [ ] Collect error logs and stack traces
   - [ ] Document test environment state

4. **Performance Monitoring**
   - [ ] Track execution time per test
   - [ ] Monitor memory usage
   - [ ] Record browser performance metrics
   - [ ] Log network request timing

### Mode-Specific Execution SOP

#### SOP-TE003: Development Mode Execution
**Purpose**: Execute tests in development environment with enhanced visibility

**Procedure**:
1. **Configuration Setup**
   - [ ] Set HEADED=true for visible browser
   - [ ] Enable verbose logging
   - [ ] Configure step-by-step execution
   - [ ] Set delay for observation (300ms recommended)

2. **Real-time Monitoring**
   - [ ] Display test progress indicators
   - [ ] Show browser state changes
   - [ ] Log user interactions in real-time
   - [ ] Provide status updates to user

3. **Interactive Features**
   - [ ] Keep browser open after completion
   - [ ] Enable browser DevTools access
   - [ ] Allow manual intervention
   - [ ] Provide debugging checkpoints

#### SOP-TE004: CI/CD Mode Execution
**Purpose**: Execute tests in automated CI/CD pipeline environment

**Procedure**:
1. **Pipeline Configuration**
   - [ ] Set headless mode for automation
   - [ ] Configure JUnit XML reporting
   - [ ] Set appropriate retry counts
   - [ ] Configure timeout values

2. **Optimization Settings**
   - [ ] Enable parallel execution
   - [ ] Optimize worker allocation
   - [ ] Disable video recording for speed
   - [ ] Minimize logging for CI logs

3. **Integration Requirements**
   - [ ] Generate pipeline-compatible reports
   - [ ] Set exit codes for build status
   - [ ] Configure artifact collection
   - [ ] Enable result archiving

#### SOP-TE005: Debug Mode Execution
**Purpose**: Execute tests with enhanced debugging capabilities

**Procedure**:
1. **Debug Configuration**
   - [ ] Enable Playwright Inspector
   - [ ] Configure step-through execution
   - [ ] Set detailed logging levels
   - [ ] Enable trace collection

2. **Enhanced Monitoring**
   - [ ] Capture detailed browser logs
   - [ ] Record network request/response pairs
   - [ ] Track element state changes
   - [ ] Document execution timeline

3. **Debugging Tools**
   - [ ] Enable browser DevTools
   - [ ] Configure breakpoints
   - [ ] Set watch expressions
   - [ ] Capture memory snapshots

### Result Processing SOP

#### SOP-TE006: Test Result Collection and Analysis
**Purpose**: Process and analyze test execution results comprehensively

**Procedure**:
1. **Result Aggregation**
   - [ ] Collect test execution statistics
   - [ ] Aggregate pass/fail counts
   - [ ] Calculate execution time metrics
   - [ ] Compile error summaries

2. **Failure Analysis**
   - [ ] Analyze failure patterns and root causes
   - [ ] Categorize errors by type and severity
   - [ ] Identify flaky test patterns
   - [ ] Document environmental factors

3. **Performance Analysis**
   - [ ] Calculate average execution times
   - [ ] Identify performance bottlenecks
   - [ ] Analyze resource utilization
   - [ ] Compare against historical data

4. **Quality Metrics**
   - [ ] Calculate test coverage percentages
   - [ ] Assess assertion effectiveness
   - [ ] Evaluate selector stability
   - [ ] Measure test reliability scores

### Reporting SOP

#### SOP-TE007: Comprehensive Test Reporting
**Purpose**: Generate detailed test reports with actionable insights

**Procedure**:
1. **Report Generation**
   - [ ] Create HTML reports with detailed results
   - [ ] Generate JSON reports for API integration
   - [ ] Produce JUnit XML for CI/CD systems
   - [ ] Compile executive summary reports

2. **Report Content Standards**
   - [ ] Include test execution summary
   - [ ] Document failure details with screenshots
   - [ ] Provide performance metrics and trends
   - [ ] Include recommendations for improvements

3. **Trend Analysis**
   - [ ] Compare current results with historical data
   - [ ] Identify performance trends
   - [ ] Track quality improvements over time
   - [ ] Highlight areas needing attention

4. **Report Distribution**
   - [ ] Store reports in standardized locations
   - [ ] Configure automatic notifications
   - [ ] Maintain report version history
   - [ ] Provide report access controls

### Error Handling SOP

#### SOP-TE008: Execution Error Management
**Purpose**: Handle various types of errors during test execution

**Procedure**:
1. **Test Timeout Errors**
   - [ ] Increase timeout values appropriately
   - [ ] Investigate element availability issues
   - [ ] Check network connectivity problems
   - [ ] Review test logic for race conditions

2. **Browser Crash Errors**
   - [ ] Implement browser restart procedures
   - [ ] Check system resource availability
   - [ ] Verify browser version compatibility
   - [ ] Document crash patterns

3. **Network Error Handling**
   - [ ] Implement retry mechanisms for network failures
   - [ ] Mock external dependencies when needed
   - [ ] Validate API endpoint availability
   - [ ] Check firewall and proxy settings

4. **Configuration Errors**
   - [ ] Validate configuration file syntax
   - [ ] Check environment variable settings
   - [ ] Verify file path configurations
   - [ ] Document configuration requirements

### Verification & Validation SOP

#### SOP-TE009: Test Execution Verification
**Purpose**: Verify test execution completeness and accuracy

**Procedure**:
1. **Execution Verification**
   - [ ] Confirm all tests were executed
   - [ ] Verify no tests were skipped unexpectedly
   - [ ] Check test execution order
   - [ ] Validate environment consistency

2. **Result Verification**
   - [ ] Confirm result accuracy and completeness
   - [ ] Verify error report details
   - [ ] Check screenshot capture functionality
   - [ ] Validate performance metric collection

3. **Quality Verification**
   - [ ] Assess test reliability metrics
   - [ ] Verify consistency across multiple runs
   - [ ] Check for flaky test indicators
   - [ ] Validate test isolation compliance

### Performance Optimization SOP

#### SOP-TE010: Execution Performance Optimization
**Purpose**: Optimize test execution performance and efficiency

**Procedure**:
1. **Parallel Execution Optimization**
   - [ ] Configure optimal worker count
   - [ ] Balance test distribution across workers
   - [ ] Monitor resource utilization
   - [ ] Adjust execution parameters based on results

2. **Resource Management**
   - [ ] Optimize memory usage during execution
   - [ ] Manage browser resource allocation
   - [ ] Implement efficient cleanup procedures
   - [ ] Monitor disk space usage

3. **Timing Optimization**
   - [ ] Reduce unnecessary wait times
   - [ ] Optimize selector performance
   - [ ] Implement efficient assertion strategies
   - [ ] Minimize test setup overhead

### Integration SOP

#### SOP-TE011: Cross-Skill Integration
**Purpose**: Coordinate with other skills for seamless workflow

**With Generation Skill**:
- [ ] Verify generated test compatibility
- [ ] Validate test structure and syntax
- [ ] Check selector availability
- [ ] Confirm data requirements

**With Live Testing Skill**:
- [ ] Prepare tests for live execution
- [ ] Configure debugging parameters
- [ ] Provide browser setup specifications
- [ ] Document interactive elements

**With Installation Skill**:
- [ ] Verify Playwright installation
- [ ] Check browser availability
- [ ] Validate configuration compatibility
- [ ] Confirm environment readiness

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
- Manage test data through environment variables
- Handle environment-specific configurations
- Set up test isolation and cleanup

## Execution Workflow

1. **Preparation**
   - Validate test environment
   - Check environment variable configuration
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
   - Clean up temporary files and reset environment variables
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

## Quality Standards

- SOP compliance in all execution procedures
- Comprehensive error handling and recovery
- Performance monitoring and optimization
- Detailed result analysis and reporting
- Environment validation and configuration
- Cross-skill integration and coordination
- Verification and validation protocols
- Continuous improvement processes