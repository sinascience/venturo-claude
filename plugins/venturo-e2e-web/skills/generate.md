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
**Purpose**: Generate tests through conversational 5-step workflow with user collaboration and explicit confirmations

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

3. **Test Plan Creation**
   - [ ] **MANDATORY**: Structure user input into actionable test plan
   - [ ] Identify primary test scenarios and edge cases
   - [ ] Suggest appropriate test patterns and approaches
   - [ ] Define test scope and expected deliverables

4. **Plan Confirmation**
   - [ ] **MANDATORY**: Present test plan to user for review and approval
   - [ ] Explain test scenarios and coverage approach
   - [ ] Allow user to modify or refine the plan
   - [ ] Obtain explicit user confirmation before proceeding

5. **Test Generation Execution**
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
   tests/features/{feature-name}/{scenario-name}.spec.ts
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

#### SOP-G010: Quality Assurance Framework
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

#### SOP-G012: Interactive Mode Selection Workflow (MANDATORY)
**Purpose**: Provide structured guidance when no generation mode is specified, ensuring informed decision-making and preventing accidental test generation

**Procedure**:
1. **Initial Assessment**
   - [ ] **MANDATORY**: Check if generation mode parameter is provided
   - [ ] **MANDATORY**: If no mode specified, initiate interactive selection
   - [ ] Assess user's existing resources (requirements, documentation, user stories)
   - [ ] Determine user's testing needs and objectives

2. **Mode Presentation and Education**
   - [ ] **MANDATORY**: Present both available modes with clear descriptions
   - [ ] Provide use case examples for each mode
   - [ ] Explain expected timeline and outcomes for each mode
   - [ ] Highlight pros and cons of each approach

3. **Decision Guidance**
   - [ ] **MANDATORY**: Ask clarifying questions about user's requirements
   - [ ] Guide user toward most appropriate mode based on resources
   - [ ] Validate user's understanding of chosen mode implications
   - [ ] Document user's decision criteria and rationale

4. **Confirmation and Validation**
   - [ ] **MANDATORY**: Obtain explicit mode selection confirmation
   - [ ] Validate source path accessibility and relevance
   - [ ] Confirm test scope and expected deliverables
   - [ ] **MANDATORY**: Get final approval before proceeding

5. **Safety Enforcement**
   - [ ] **MANDATORY**: Never generate test files without explicit user approval
   - [ ] Implement multi-step confirmation process
   - [ ] Validate all prerequisites before generation
   - [ ] Provide clear undo/abort options at any step

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