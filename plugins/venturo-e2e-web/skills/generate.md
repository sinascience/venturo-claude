---
name: generate
description: E2E test case generation from user stories and application analysis with standardized SOPs
tools: ["mcp__serena__*", "code-analysis", "pattern-recognition"]
---

# Test Generation Skill

Generates comprehensive E2E test cases from user stories, application analysis, and testing patterns following standardized operating procedures.

## SOP: Test Generation Standard Operating Procedure

### Document Control
- **SOP ID**: TG-001
- **Version**: 2.0.0
- **Effective Date**: Current
- **Owner**: Test Generation Specialist
- **Review Schedule**: Monthly

### Purpose & Scope
Standardize E2E test generation process to ensure consistent, high-quality test cases that follow Playwright best practices and comprehensive coverage of user scenarios.

### Generation Modes SOP

#### SOP-G001: Manual Mode Generation
**Purpose**: Generate tests from user-provided scenarios with interactive guidance

**Procedure**:
1. **Path Input Validation**
   - [ ] Verify feature path exists and is valid
   - [ ] Check path structure follows `/src/features/{feature-name}/` pattern
   - [ ] Validate accessibility of source files

2. **Scenario Input Collection**
   - [ ] Collect user story in Gherkin format
   - [ ] Extract Given/When/Then steps
   - [ ] Validate scenario completeness and clarity

3. **Additional Information Gathering**
   - [ ] Collect mock API requirements
   - [ ] Gather authentication specifications
   - [ ] Document test data requirements
   - [ ] Record environment variable needs

4. **Progress Tracking**
   ```
   Progress: [✔] Path | [✔] Scenario | [⏳] Additional Info
   ```

#### SOP-G002: Auto Scenario Mode Generation
**Purpose**: Generate test scenarios automatically through codebase analysis

**Procedure**:
1. **Feature Path Validation**
   - [ ] Verify feature path exists
   - [ ] Analyze component structure and relationships
   - [ ] Identify relevant APIs and state management

2. **Focus Area Specification**
   - [ ] Collect user focus description
   - [ ] Identify specific behaviors to test
   - [ ] Limit scope to prevent over-generation

3. **Automated Analysis**
   - [ ] Scan components for interactive elements
   - [ ] Map API calls and data flows
   - [ ] Identify user interaction patterns
   - [ ] Generate scenario with `[AUTO-GENERATED SCENARIO]` tag

4. **User Confirmation**
   - [ ] Present generated scenario for review
   - [ ] Obtain user approval before proceeding
   - [ ] Allow scenario modifications if needed

### Code Analysis SOP

#### SOP-G003: Codebase Analysis Methodology
**Purpose**: Systematic analysis of application structure for comprehensive test coverage

**Procedure**:
1. **Structure Verification**
   - [ ] Validate file structure exists
   - [ ] Identify selector availability and hierarchy
   - [ ] Check for existing test patterns

2. **Selector Prioritization Analysis**
   - [ ] Search for `data-testid` attributes (Priority 1)
   - [ ] Identify `role` attributes (Priority 2)
   - [ ] Locate `aria-label` attributes (Priority 3)
   - [ ] Find text content selectors (Priority 4)
   - [ ] Use CSS selectors as last resort (Priority 5)

3. **API and State Management Analysis**
   - [ ] Identify API endpoints and methods
   - [ ] Map state management patterns
   - [ ] Document data flow and dependencies
   - [ ] Identify mocking requirements

4. **Component Interaction Mapping**
   - [ ] Map user interaction flows
   - [ ] Identify form validation patterns
   - [ ] Document navigation and routing
   - [ ] Analyze error handling patterns

#### SOP-G009: Advanced Code Analysis Techniques
**Purpose**: Apply sophisticated analysis methods for comprehensive test coverage

**Procedure**:
1. **Static Code Analysis**
   - [ ] Scan source code for component patterns
   - [ ] Analyze function signatures and parameters
   - [ ] Identify event handlers and callbacks
   - [ ] Map data transformation logic

2. **Dynamic Pattern Recognition**
   - [ ] Identify common UI interaction patterns
   - [ ] Detect form validation schemas
   - [ ] Map authentication and authorization flows
   - [ ] Analyze state change triggers

3. **Dependency Graph Analysis**
   - [ ] Map component dependency relationships
   - [ ] Identify shared utilities and helpers
   - [ ] Analyze service layer interactions
   - [ ] Document API integration points

4. **Test Coverage Gap Analysis**
   - [ ] Compare existing tests with application features
   - [ ] Identify untested code paths
   - [ ] Detect missing edge case scenarios
   - [ ] Prioritize test generation based on risk

#### SOP-G010: Pattern-Based Test Generation
**Purpose**: Generate tests based on recognized application patterns

**Procedure**:
1. **Design Pattern Recognition**
   - [ ] Identify MVC/MVVM patterns
   - [ ] Detect component composition patterns
   - [ ] Recognize state management patterns (Redux, Context, etc.)
   - [ ] Map service/repository patterns

2. **User Flow Pattern Analysis**
   - [ ] Identify CRUD operation patterns
   - [ ] Detect search and filter patterns
   - [ ] Map authentication/authorization flows
   - [ ] Analyze form submission workflows

3. **Error Handling Pattern Detection**
   - [ ] Map error boundary implementations
   - [ ] Identify validation error patterns
   - [ ] Analyze network error handling
   - [ ] Document user feedback mechanisms

4. **Test Pattern Application**
   - [ ] Apply Page Object Model patterns
   - [ ] Implement data-driven test patterns using environment variables
   - [ ] Use environment variable-based test patterns
   - [ ] Apply assertion library patterns

### Test File Generation SOP

#### SOP-G004: Playwright Test File Standards
**Purpose**: Ensure consistent, maintainable test file structure

**Procedure**:
1. **File Structure Standards**
   ```
   tests/features/{feature-name}/{action}-{entity}.spec.ts
   tests/.env                              # Environment configuration
   tests/.env.example                      # Environment template
   ```

2. **Template Application**
   - [ ] Use sequential execution: `test.describe.serial()`
   - [ ] Configure browser for headed mode when debugging
   - [ ] Implement automatic screenshot on failure
   - [ ] Include comprehensive file header documentation

3. **Code Generation Standards**
   - [ ] Generate TypeScript files with proper typing
   - [ ] Include proper imports and setup
   - [ ] Use BASE_URL environment variable from tests/.env
   - [ ] Configure browser launch options

4. **Environment Integration**
   - [ ] Generate tests that read from process.env
   - [ ] Include environment variable validation
   - [ ] Support multiple environments (dev/staging/prod)
   - [ ] Implement fallback for missing variables

5. **Selector Implementation**
   - [ ] Prioritize `data-testid` selectors
   - [ ] Use semantic HTML selectors
   - [ ] Avoid fragile CSS selectors
   - [ ] Include fallback selector strategies

### Configuration Management SOP

#### SOP-G013: Environment File Management (MANDATORY)
**Purpose**: Standardize management of environment variables and configuration files to ensure secure, consistent, and maintainable test execution across different environments

**Procedure**:
1. **Environment File Creation and Validation**
   - [ ] **MANDATORY**: Create `tests/.env` file for all test configurations
   - [ ] **MANDATORY**: Create `tests/.env.example` as template
   - [ ] Validate environment variable naming conventions (UPPER_SNAKE_CASE)
   - [ ] Check for sensitive data exposure in generated files

2. **Security and Access Control**
   - [ ] **MANDATORY**: Ensure `tests/.env` is in `.gitignore`
   - [ ] Validate no hardcoded credentials in generated tests
   - [ ] Check for API keys, passwords, or sensitive tokens
   - [ ] Implement environment variable encryption if needed

3. **Multi-Environment Support**
   - [ ] **MANDATORY**: Support environments: `development`, `staging`, `production`
   - [ ] Create environment-specific configurations
   - [ ] Implement environment variable inheritance
   - [ ] Validate environment-specific test data

4. **Environment Variable Standards**
   ```
   # MANDATORY Environment Variables for tests/.env
   BASE_URL=https://your-app-url.com          # Application base URL
   TEST_USER_EMAIL=test@example.com           # Test account email
   TEST_USER_PASSWORD=securePassword123      # Test account password
   API_BASE_URL=https://api.your-app.com     # API base URL
   ENVIRONMENT=development                    # Current environment
   ```

#### SOP-G014: Configuration Externalization (MANDATORY)
**Purpose**: Implement systematic externalization of test configurations to enable flexible, maintainable, and environment-agnostic test execution

**Procedure**:
1. **Configuration Structure Design**
   - [ ] **MANDATORY**: Create centralized configuration files
   - [ ] Implement configuration hierarchy: default → environment → local
   - [ ] Design configuration validation schemas
   - [ ] Support runtime configuration updates

2. **Externalization Implementation**
   - [ ] **MANDATORY**: Separate test logic from configuration data
   - [ ] Implement configuration loading mechanisms
   - [ ] Create configuration override strategies
   - [ ] Support configuration inheritance across environments

3. **Configuration File Structure**
   ```typescript
   // tests/config/environment.ts
   export const config = {
     baseUrl: process.env.BASE_URL || 'http://localhost:3000',
     apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:3001',
     environment: process.env.ENVIRONMENT || 'development',
     timeouts: {
       default: 30000,
       navigation: 60000,
       element: 10000
     }
   };
   ```

4. **Configuration Validation**
   - [ ] Validate configuration completeness
   - [ ] Check configuration type safety
   - [ ] Implement configuration error handling
   - [ ] Provide configuration documentation

#### SOP-G015: Server-Ready Test Generation (MANDATORY)
**Purpose**: Ensure generated tests are fully prepared for server deployment with proper configuration, authentication, and resource management

**Procedure**:
1. **Server Environment Preparation**
   - [ ] **MANDATORY**: Validate server connectivity requirements
   - [ ] Check server-specific configurations
   - [ ] Implement server authentication mechanisms
   - [ ] Prepare server-side test data

2. **Deployment Configuration**
   - [ ] **MANDATORY**: Create server deployment manifests
   - [ ] Configure server-side test execution
   - [ ] Implement server resource management
   - [ ] Set up server monitoring and logging

3. **Server Authentication Setup**
   ```typescript
   // tests/auth/server-auth.setup.ts
   export const serverAuth = {
     staging: {
       username: process.env.STAGING_USER,
       password: process.env.STAGING_PASSWORD,
       token: process.env.STAGING_TOKEN
     },
     production: {
       username: process.env.PROD_USER,
       password: process.env.PROD_PASSWORD,
       token: process.env.PROD_TOKEN
     }
   };
   ```

4. **Server Readiness Validation**
   - [ ] Test server connectivity and accessibility
   - [ ] Validate server configuration correctness
   - [ ] Check server performance requirements
   - [ ] Implement server rollback strategies

5. **VPS Deployment Standards**
   - [ ] **MANDATORY**: Ensure tests can run in headless mode
   - [ ] Configure appropriate timeouts for server execution
   - [ ] Implement proper error handling for network issues
   - [ ] Set up resource monitoring for server tests

### Quality Assurance SOP

#### SOP-G005: Test Quality Validation
**Purpose**: Ensure generated tests meet quality standards and best practices

**Procedure**:
1. **Syntax Validation**
   - [ ] Verify TypeScript compilation
   - [ ] Check Playwright API usage
   - [ ] Validate import statements

2. **Logic Validation**
   - [ ] Ensure test independence
   - [ ] Verify proper assertion usage
   - [ ] Check wait strategies
   - [ ] Validate test data handling

3. **Best Practices Compliance**
   - [ ] Confirm naming conventions
   - [ ] Check documentation quality
   - [ ] Verify error handling
   - [ ] Validate cleanup procedures

4. **Configuration Validation (MANDATORY)**
   - [ ] **MANDATORY**: Verify environment variable usage in tests
   - [ ] **MANDATORY**: Validate tests/.env file exists and is properly formatted
   - [ ] **MANDATORY**: Check no hardcoded credentials in generated tests
   - [ ] **MANDATORY**: Validate configuration externalization implementation
   - [ ] **MANDATORY**: Verify server-readiness for VPS deployment
   - [ ] Check environment variable validation mechanisms
   - [ ] Validate multi-environment support implementation
   - [ ] Test configuration fallback mechanisms

5. **Coverage Validation**
   - [ ] Assess scenario coverage
   - [ ] Check assertion completeness
   - [ ] Verify edge case handling
   - [ ] Validate success criteria

### Error Handling SOP

#### SOP-G006: Generation Error Management
**Purpose**: Handle errors during test generation process

**Procedure**:
1. **Input Validation Errors**
   - [ ] Provide clear error messages for invalid paths
   - [ ] Suggest correct path formats
   - [ ] Offer examples of valid scenarios

2. **Analysis Errors**
   - [ ] Handle missing selectors gracefully
   - [ ] Provide suggestions for adding data-testid
   - [ ] Document limitations and workarounds

3. **Generation Errors**
   - [ ] Capture syntax errors immediately
   - [ ] Provide specific fix suggestions
   - [ ] Allow manual correction options

4. **Validation Errors**
   - [ ] Report quality issues clearly
   - [ ] Provide improvement recommendations
   - [ ] Allow iterative refinement

### Performance Metrics SOP

#### SOP-G007: Generation Performance Monitoring
**Purpose**: Monitor and optimize test generation performance

**Metrics**:
- Generation time per test case
- Code quality scores
- Selector stability ratings
- User satisfaction feedback

**Targets**:
- Generation time: < 30 seconds per test case
- Code quality: > 90% compliance
- Selector stability: > 95% reliable
- User satisfaction: > 4.5/5 rating

### Integration SOP

#### SOP-G008: Cross-Skill Coordination
**Purpose**: Coordinate with other skills for seamless workflow

**With Installation Skill**:
- [ ] Verify Playwright installation
- [ ] Check browser availability
- [ ] Validate configuration files

**With Execution Skill**:
- [ ] Ensure generated tests are executable
- [ ] Provide execution parameters
- [ ] Document special requirements

**With Live Testing Skill**:
- [ ] Prepare tests for live execution
- [ ] Provide debugging configurations
- [ ] Document interactive elements

## Core Capabilities

### 1. User Story Analysis
- Parse user stories for test scenarios
- Extract acceptance criteria and test conditions
- Identify critical user journeys
- Map user flows to test cases

### 2. Application Analysis
- Analyze application structure and components
- Identify interactive elements and forms
- Map navigation paths and user workflows
- Detect potential test scenarios

### 3. Test Case Generation
- Create Playwright test files with proper structure
- Generate page objects and test utilities
- Implement test data management through environment variables
- Create maintainable test patterns

### 4. Best Practices Integration
- Follow Playwright naming conventions
- Implement proper waits and assertions
- Use appropriate selectors and locators
- Include error handling and cleanup

## Test Patterns

### User Authentication
- Login/logout flows
- Role-based access testing
- Session management
- Password reset flows

### Form Interactions
- Form validation testing
- Data submission workflows
- File upload scenarios
- Multi-step form processes

### Navigation Testing
- Menu navigation flows
- Breadcrumb navigation
- Search functionality
- Filtering and sorting

### Data Management
- CRUD operations testing
- Data consistency checks
- Pagination testing
- Search and filter operations

### Quality Assurance SOP

#### SOP-G011: Quality Assurance Framework
**Purpose**: Ensure comprehensive quality standards across test generation processes

**Procedure**:
1. **Test Quality Validation**
   - [ ] Verify test independence and isolation
   - [ ] Check proper test data management
   - [ ] Validate clear and descriptive test naming
   - [ ] Ensure comprehensive assertion coverage

2. **Code Quality Assessment**
   - [ ] Verify TypeScript compilation compliance
   - [ ] Check Playwright API usage correctness
   - [ ] Validate import statement accuracy
   - [ ] Ensure proper error handling implementation

3. **Best Practices Compliance**
   - [ ] Confirm naming convention adherence
   - [ ] Check documentation completeness and quality
   - [ ] Verify cleanup procedure implementation
   - [ ] Validate appropriate wait strategies

4. **Performance and Maintainability**
   - [ ] Assess test execution performance
   - [ ] Verify robust selector strategy implementation
   - [ ] Check maintainability and modularity
   - [ ] Validate resource optimization

#### SOP-G012: Continuous Quality Improvement
**Purpose**: Implement continuous improvement processes for test generation quality

**Procedure**:
1. **Quality Metrics Collection**
   - [ ] Track test generation success rates
   - [ ] Monitor code quality scores over time
   - [ ] Measure selector stability ratings
   - [ ] Collect user satisfaction feedback

2. **Pattern Learning and Adaptation**
   - [ ] Analyze successful test patterns
   - [ ] Identify common failure modes
   - [ ] Adapt generation algorithms based on feedback
   - [ ] Update pattern recognition libraries

3. **Quality Standards Evolution**
   - [ ] Review and update quality standards quarterly
   - [ ] Incorporate new Playwright best practices
   - [ ] Adapt to emerging testing technologies
   - [ ] Refine SOP procedures based on experience

4. **Knowledge Base Enhancement**
   - [ ] Document lessons learned from test failures
   - [ ] Build repository of effective test patterns
   - [ ] Create troubleshooting guides for common issues
   - [ ] Share best practices across team members

## Quality Standards

### MANDATORY Requirements
- **Environment Management**: `tests/.env` file REQUIRED for all generated tests
- **Configuration Externalization**: NO hardcoded credentials in generated tests
- **Server Readiness**: Tests MUST be ready for VPS deployment
- **Multi-Environment Support**: MUST support dev/staging/production environments
- **Security Compliance**: `.env` files MUST be in `.gitignore`

### General Standards
- Tests are independent and isolated
- Proper test data management
- Clear and descriptive test names
- Comprehensive assertion coverage
- Appropriate wait strategies
- Robust selector strategies
- SOP compliance in all procedures
- Quality assurance validation
- Performance monitoring
- Error handling protocols
- Continuous quality improvement
- Knowledge base enhancement

### Configuration Standards (MANDATORY)
- Use `process.env.VARIABLE_NAME` for all configurable values
- Implement fallback values for environment variables
- Support multiple environments through environment-specific configurations
- Validate all required environment variables before test execution
- Provide clear error messages for missing configuration