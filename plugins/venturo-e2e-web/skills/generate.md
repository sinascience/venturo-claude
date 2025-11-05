---
name: generate
description: E2E test case generation from user stories and application analysis
tools: ["mcp__serena__*", "code-analysis", "pattern-recognition"]
---

# Test Generation Skill

Generates comprehensive E2E test cases from user stories, application analysis, and testing patterns.

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
- Implement test data fixtures and helpers
- Create maintainable test patterns

### 4. Best Practices Integration
- Follow Playwright naming conventions
- Implement proper waits and assertions
- Use appropriate selectors and locators
- Include error handling and cleanup

## Generation Workflow

1. **Input Analysis**
   - Parse user stories or requirements
   - Analyze application structure
   - Identify key user journeys
   - Extract test conditions

2. **Test Design**
   - Map scenarios to test cases
   - Design test data requirements
   - Plan page object structure
   - Define assertion strategies

3. **Implementation**
   - Generate test files with proper structure
   - Create page objects and utilities
   - Implement test fixtures and data
   - Add appropriate waits and assertions

4. **Validation**
   - Verify test syntax and structure
   - Check selector validity
   - Validate test logic
   - Ensure best practices compliance

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

## Quality Standards

- Tests are independent and isolated
- Proper test data management
- Clear and descriptive test names
- Comprehensive assertion coverage
- Appropriate wait strategies
- Robust selector strategies