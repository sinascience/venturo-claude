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

#### SOP-G001: Interactive Story Mode Generation
**Purpose**: Generate tests through conversational 4-step workflow with user collaboration and automated test plan generation

**Procedure**:
1. **Scenario Discovery**
   - [ ] **MANDATORY**: Ask user "What scenario would you like to test?"
   - [ ] Provide guidance on what makes a good test scenario
   - [ ] Offer examples of common testing scenarios
   - [ ] Help user articulate their testing needs clearly

2. **Scenario Description Collection**
   - [ ] **MANDATORY**: Collect detailed scenario description from user
   - [ ] Ask clarifying questions about user flows, expected behaviors, edge cases
   - [ ] Document acceptance criteria and success conditions
   - [ ] Identify key user interactions and system responses

3. **Automated Test Plan Generation & Approval**
   - [ ] **MANDATORY**: Generate comprehensive test plan automatically including:
     - Main test scenarios (3-5 core test cases)
     - Positive test cases (happy path scenarios)
     - Negative test cases (edge cases, error conditions)
     - Test execution steps and expected results
   - [ ] Present complete plan to user for single approval
   - [ ] Include clear coverage explanation (positive/negative cases)
   - [ ] Obtain simple user confirmation: "Y/N" or "Approve/Modify"

4. **Test Generation Execution**
   - [ ] **MANDATORY**: Generate tests based on approved plan only
   - [ ] Create self-contained test files with inline utilities
   - [ ] Implement environment variable management
   - [ ] Ensure all quality standards and mandatory requirements


### Code Analysis SOP

#### SOP-G002: Exploratory Codebase Analysis
**Purpose**: Flexible analysis approach to support interactive story mode conversations

**Procedure**:
1. **Scenario-Based Analysis**
   - [ ] **MANDATORY**: Analyze code based on user's described scenario
   - [ ] Focus on components relevant to user's testing needs
   - [ ] Identify interactive elements mentioned in scenario
   - [ ] Map user flows described in the scenario

2. **Contextual Selector Discovery**
   - [ ] Search for `data-testid` attributes in relevant components (Priority 1)
   - [ ] Identify `role` attributes for accessibility-based testing (Priority 2)
   - [ ] Locate `aria-label` attributes for semantic testing (Priority 3)
   - [ ] Find text content selectors when needed (Priority 4)
   - [ ] Use CSS selectors as fallback for specific elements (Priority 5)

3. **Targeted API and State Analysis**
   - [ ] Identify API endpoints relevant to user's scenario
   - [ ] Map state management for described user flows
   - [ ] Document data dependencies mentioned in scenario
   - [ ] Identify mocking requirements for user's test case

4. **Interactive Pattern Mapping**
   - [ ] Map user interactions described in scenario
   - [ ] Identify form validation patterns for user flows
   - [ ] Document navigation paths mentioned by user
   - [ ] Analyze error handling relevant to scenario



### Test File Generation SOP

#### SOP-G003: Interactive Test File Standards
**Purpose**: Generate consistent test files based on user-approved scenarios

**Procedure**:
1. **File Structure Standards**
   ```
   tests/{feature-name}/{scenario-name}.spec.ts
   tests/.env                              # Environment configuration
   tests/.env.example                      # Environment template
   ```

2. **Scenario-Based Template Application**
   - [ ] **MANDATORY**: Use sequential execution: `test.describe.serial()`
   - [ ] Configure browser for headed mode when debugging
   - [ ] Implement automatic screenshot on failure
   - [ ] Include scenario-based file header documentation
   - [ ] Structure tests according to user-approved plan

3. **Context-Aware Code Generation**
   - [ ] Generate TypeScript files with proper typing
   - [ ] Include imports and setup for user's scenario
   - [ ] Use BASE_URL environment variable from tests/.env
   - [ ] Configure browser options based on scenario requirements

4. **Interactive Environment Integration**
   - [ ] **MANDATORY**: Generate tests that read from process.env
   - [ ] Include environment variable validation
   - [ ] Support multiple environments (dev/staging/prod)
   - [ ] Implement fallback for missing variables
   - [ ] Align environment setup with user's testing context

5. **Scenario-Driven Selector Implementation**
   - [ ] **MANDATORY**: Prioritize `data-testid` selectors from analysis
   - [ ] Use semantic HTML selectors for user interactions
   - [ ] Avoid fragile CSS selectors when possible
   - [ ] Include fallback selector strategies for user's scenario
   - [ ] Ensure selectors match user-described elements

### Configuration Management SOP

#### SOP-G004: Environment File Management (MANDATORY)
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

#### SOP-G005: Configuration Externalization (MANDATORY)
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

#### SOP-G006: Server-Ready Test Generation (MANDATORY)
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

#### SOP-G007: Test Quality Validation
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

#### SOP-G008: Generation Error Management
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


### Integration SOP

#### SOP-G009: Cross-Skill Coordination
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
- **MANDATORY**: Generate single test files with inline utilities only
- Implement test data management through environment variables
- Create maintainable test patterns with 1 scenario = 1 file rule

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

#### SOP-G011: Continuous Quality Improvement
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

### Fallback Mode Management SOP

#### SOP-G012: Focused Mode Selection Workflow (MANDATORY)
**Purpose**: Provide quick, focused mode selection with minimal user interaction while ensuring informed decision-making

**Procedure**:
1. **Initial Assessment**
   - [ ] **MANDATORY**: Check if generation mode parameter is provided
   - [ ] **MANDATORY**: If no mode specified, initiate focused selection
   - [ ] Keep interaction to maximum 2 user responses

2. **Simple Mode Presentation**
   - [ ] **MANDATORY**: Present two clear options with brief descriptions
   - [ ] Use numbered responses: "1. Manual Mode - [brief description]"
   - [ ] Use numbered responses: "2. Story Mode - [brief description]"
   - [ ] **MANDATORY**: Request response with number: "Silahkan balas dengan angka 1 atau 2"

3. **Direct User Response**
   - [ ] **MANDATORY**: Accept user response as single number (1 or 2)
   - [ ] No additional clarifying questions allowed
   - [ ] Proceed directly to chosen mode workflow
   - [ ] Document user's selection

4. **Single Confirmation**
   - [ ] **MANDATORY**: Confirm user's choice with one question
   - [ ] Validate source path accessibility if needed
   - [ ] **MANDATORY**: Get final approval before proceeding
   - [ ] Keep total questions to maximum 2 (selection + confirmation)

5. **Safety Enforcement**
   - [ ] **MANDATORY**: Never generate test files without explicit user approval
   - [ ] Maintain clear option to cancel at any step
   - [ ] Ensure user understands chosen mode implications
   - [ ] Validate all prerequisites before generation

#### SOP-G013: User Guidance and Education Framework (MANDATORY)
**Purpose**: Ensure users receive comprehensive guidance to make informed decisions about test generation approaches

**Procedure**:
1. **Resource Assessment**
   - [ ] **MANDATORY**: Evaluate available source materials
   - [ ] Assess application complexity and scope
   - [ ] Identify user's testing experience level
   - [ ] Determine available time and resources

2. **Educational Content Delivery**
   - [ ] **MANDATORY**: Explain each generation mode in detail
   - [ ] Provide real-world examples and use cases
   - [ ] Show sample outputs for each mode
   - [ ] Explain trade-offs and decision factors

3. **Interactive Decision Support**
   - [ ] **MANDATORY**: Ask targeted questions to understand needs
   - [ ] Provide personalized recommendations based on responses
   - [ ] Allow for questions and clarification
   - [ ] Adapt guidance based on user feedback

4. **Expectation Management**
   - [ ] **MANDATORY**: Set clear expectations about timelines and outcomes
   - [ ] Explain what will and won't be generated
   - [ ] Describe post-generation steps and requirements
   - [ ] Provide realistic estimates of effort and complexity

#### SOP-G014: Generation Prevention and Safety Controls (MANDATORY)
**Purpose**: Implement robust safety measures to prevent accidental test generation and ensure explicit user consent

**Procedure**:
1. **Pre-Generation Validation**
   - [ ] **MANDATORY**: Verify explicit mode selection
   - [ ] Validate source path accessibility and permissions
   - [ ] Check for existing test files that might be overwritten
   - [ ] Assess system resource availability

2. **Multi-Step Confirmation**
   - [ ] **MANDATORY**: First confirmation: Mode selection and approach
   - [ ] **MANDATORY**: Second confirmation: Source path and scope
   - [ ] **MANDATORY**: Third confirmation: Final approval to generate
   - [ ] Document all confirmation points for audit trail

3. **Abort and Undo Mechanisms**
   - [ ] **MANDATORY**: Provide clear abort options at each step
   - [ ] Allow users to modify decisions before generation
   - [ ] Implement rollback procedures if needed
   - [ ] Maintain state for resumption capabilities

4. **Post-Generation Review**
   - [ ] **MANDATORY**: Present generated test summary
   - [ ] Allow for immediate review and modification
   - [ ] Provide guidance on next steps and maintenance
   - [ ] Document generation process and decisions

#### SOP-G015: Single-File Test Structure Validation (MANDATORY)
**Purpose**: Ensure generated tests follow 1 scenario = 1 file rule with no external dependencies

**Procedure**:
1. **File Structure Validation**
   - [ ] **MANDATORY**: Each file contains exactly one test scenario
   - [ ] **MANDATORY**: All test utilities are inline functions
   - [ ] **MANDATORY**: No external fixture files
   - [ ] **MANDATORY**: No separate helper files
   - [ ] **MANDATORY**: No page object files

2. **Content Validation**
   - [ ] All selectors are defined within the test file
   - [ ] All test data is inline or from environment variables
   - [ ] All utility functions are defined within the file
   - [ ] No imports of external test utilities

3. **Directory Structure Validation**
   - [ ] Tests are in `tests/{feature-name}/` structure
   - [ ] Feature directories contain only test files
   - [ ] No utility or helper directories under test directories
   - [ ] No shared fixture directories

#### SOP-G016: Feature-Based Grouping Enforcement (MANDATORY)
**Purpose**: Enforce mandatory feature-based organization for all generated tests

**Procedure**:
1. **Feature Identification**
   - [ ] **MANDATORY**: Identify primary feature for each scenario
   - [ ] **MANDATORY**: Create appropriate feature directory
   - [ ] **MANDATORY**: Use consistent feature naming
   - [ ] **MANDATORY**: Group related scenarios under same feature

2. **Directory Structure Enforcement**
   - [ ] **MANDATORY**: All tests in `tests/{feature-name}/`
   - [ ] **MANDATORY**: Feature names match application features
   - [ ] **MANDATORY**: No tests outside feature directories
   - [ ] **MANDATORY**: No cross-feature dependencies

3. **File Organization Validation**
   - [ ] **MANDATORY**: One scenario per file
   - [ ] **MANDATORY**: Descriptive scenario-based file names
   - [ ] **MANDATORY**: No multi-scenario files
   - [ ] **MANDATORY**: No shared test files across features

#### SOP-G017: Story Mode Feature Identification (MANDATORY)
**Purpose**: Ensure Story Mode workflow includes mandatory feature identification step

**Procedure**:
1. **Feature Discovery Integration**
   - [ ] **MANDATORY**: After scenario description, ask for feature name
   - [ ] **MANDATORY**: Include "Nama fitur untuk grouping folder?" question
   - [ ] **MANDATORY**: Validate feature name appropriateness
   - [ ] **MANDATORY**: Confirm feature directory creation

2. **Test Plan Integration**
   - [ ] **MANDATORY**: Include feature directory in test plan output
   - [ ] **MANDATORY**: Show file paths as `tests/{feature}/{scenario}.spec.ts`
   - [ ] **MANDATORY**: Validate plan complies with single-file rule
   - [ ] **MANDATORY**: Ensure no multi-file dependencies

3. **Generation Validation**
   - [ ] **MANDATORY**: Generate tests to correct feature directory
   - [ ] **MANDATORY**: Validate single-file output structure
   - [ ] **MANDATORY**: Confirm no fixture/helper files created
   - [ ] **MANDATORY**: Verify feature-based compliance

## Automated Test Plan Generation Templates

### Test Plan Structure Template
```
## 📋 Test Plan: [Feature/Scenario Name]

### 🎯 Main Test Scenarios (3-5 core cases)
1. **[Scenario 1]**: [Brief description]
2. **[Scenario 2]**: [Brief description]
3. **[Scenario 3]**: [Brief description]

### ✅ Positive Test Cases (Happy Path)
1. **[Positive Case 1]**: [Description + expected result]
2. **[Positive Case 2]**: [Description + expected result]
3. **[Positive Case 3]**: [Description + expected result]

### ❌ Negative Test Cases (Edge Cases & Errors)
1. **[Negative Case 1]**: [Error condition + expected handling]
2. **[Negative Case 2]**: [Invalid input + expected validation]
3. **[Negative Case 3]**: [System error + expected fallback]

### 📝 Test Execution Steps
For each scenario:
- **Given**: [Preconditions]
- **When**: [User actions]
- **Then**: [Expected outcomes]

### 🎯 Expected Results
- [Specific success criteria]
- [Error handling validation]
- [Performance expectations]
```

### Common Test Pattern Templates

#### Form Submission Pattern
```
**Main Scenarios:**
1. Successful form submission with valid data
2. Form validation with empty required fields
3. Form submission with invalid data format

**Positive Cases:**
- All required fields filled correctly → Success message displayed
- Optional fields left empty → Form processes correctly
- File upload with valid format → File uploaded successfully

**Negative Cases:**
- Required fields empty → Validation errors shown
- Invalid email format → Email validation error
- File too large → File size error message
- Duplicate submission → Duplicate prevention message
```

#### Login/Authentication Pattern
```
**Main Scenarios:**
1. Successful login with valid credentials
2. Login attempt with invalid password
3. Login attempt with non-existent user

**Positive Cases:**
- Valid credentials → Dashboard/home page access
- Remember me checked → Session persistence
- Successful logout → Redirect to login page

**Negative Cases:**
- Invalid password → "Invalid credentials" error
- Non-existent user → "User not found" error
- Empty fields → Validation errors for both fields
- Account locked → "Account suspended" message
```

#### Navigation Pattern
```
**Main Scenarios:**
1. Navigate to main pages
2. Access protected routes
3. Handle broken/invalid routes

**Positive Cases:**
- Click navigation links → Correct pages load
- Browser back/forward → Proper navigation history
- Direct URL access → Correct page displays

**Negative Cases:**
- Invalid routes → 404 page displayed
- Protected routes without auth → Redirect to login
- Broken links → Error handling or fallback
```

### User Approval Template
```
## 🤔 Test Plan Approval

Saya telah membuat rencana tes otomatis untuk skenario Anda di atas. Rencana ini mencakup:

✅ **Coverage lengkap**: Positive cases (happy path) + Negative cases (edge cases)
✅ **3-5 skenario utama** sesuai kebutuhan Anda
✅ **Test steps yang jelas** untuk setiap skenario
✅ **Expected results yang spesifik**

**Apakah Anda menyetujui rencana tes ini?**
- Balas: **Y/Yes/Approve** untuk melanjutkan ke pembuatan test
- Balas: **N/No/Modify** untuk mengubah rencana

Silakan berikan persetujuan Anda untuk melanjutkan. 🚀
```

## Implementation Notes

### Automated Plan Generation Process:
1. **Analyze user scenario** from Step 2 input
2. **Select appropriate pattern template** based on scenario type
3. **Generate comprehensive plan** with positive/negative cases
4. **Present to user** with clear approval request
5. **Execute test generation** upon approval

### Template Usage Guidelines:
- Use **form pattern** for user input scenarios
- Use **auth pattern** for login/register scenarios
- Use **navigation pattern** for routing scenarios
- **Customize templates** based on specific user needs
- **Always include** both positive and negative cases
- **Keep scenarios** to 3-5 main cases for focus