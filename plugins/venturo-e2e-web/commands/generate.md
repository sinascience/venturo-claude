---
description: Generate Playwright E2E test cases from user stories and application analysis
agent: generator
argument-hint: [mode] (manual|auto)
---

# Test Generation

Generates comprehensive E2E test cases using Playwright from user stories, requirements, or application analysis.

## Usage
```
/venturo-e2e-web:generate [mode] [source]
```

## Modes
- `manual` - Interactive test generation with user guidance
- `auto` - Automatic test generation from application analysis
- `story` - Generate tests from user stories/requirements

## Options
- `--source=path` - Specify source directory or file to analyze
- `--pattern=pom|inline` - Choose test pattern (Page Object Model or inline)
- `--browser=chromium|firefox|webkit` - Target browser for tests
- `--device=desktop|mobile|tablet` - Target device type

## What it does
1. Analyzes user stories or application structure
2. Identifies test scenarios and user journeys
3. Generates structured test files with best practices
4. Creates page objects and test utilities
5. Implements proper selectors and assertions
6. Validates generated tests for syntax and structure

## Examples
```bash
/venturo-e2e-web:generate manual
/venturo-e2e-web:generate auto --source=./src/components
/venturo-e2e-web:generate story --pattern=pom
```

## Generation Process

### Manual Mode
1. Specify feature or user story to test
2. Provide requirements or acceptance criteria
3. Choose test pattern and structure
4. Review and customize generated tests
5. Validate and save test files

### Auto Mode
1. Analyze application structure and components
2. Identify user flows and interactions
3. Generate comprehensive test coverage
4. Create page objects and utilities
5. Provide test execution guidance

### Story Mode
1. Parse user stories for test scenarios
2. Extract acceptance criteria
3. Map requirements to test cases
4. Generate behavior-driven tests
5. Include test data and fixtures

## Output Structure
```
tests/
├── features/
│   ├── {feature-name}/
│   │   ├── {scenario-name}.spec.ts
│   │   └── {scenario-name}.spec.ts
├── pages/
│   ├── {PageName}.ts
│   └── {PageName}.ts
├── helpers/
│   ├── {helper-name}.ts
│   └── {helper-name}.ts
└── fixtures/
    ├── {fixture-name}.ts
    └── {fixture-name}.ts
```

## Best Practices Applied
- Uses data-testid selectors for stability
- Implements proper wait strategies
- Includes comprehensive assertions
- Follows Page Object Model when appropriate
- Handles test data management
- Provides clear test documentation

## Next Steps
After generation:
- Review generated tests for completeness
- Run tests to validate functionality
- Customize test data and scenarios
- Integrate with CI/CD pipeline
- Maintain and update tests regularly