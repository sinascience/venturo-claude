---
description: Generate Playwright E2E test cases from user stories and application analysis
argument-hint: [mode?] (manual|story)?
---

# Test Generation

**Use the Test Generator agent to generate comprehensive E2E test cases using Playwright from user stories, requirements, or application analysis.**

The Test Generator agent will guide you through creating maintainable, reliable tests following Playwright best practices and comprehensive coverage of user scenarios.

## Usage
```
/venturo-e2e-web:generate [mode?] [source]
```

**Mode Selection:**
- If no mode is provided, interactive guidance will help you choose
- Modes: `manual`, or `story`
- Explicit mode selection always works: `/venturo-e2e-web:generate manual`

## Modes
- `manual` - Interactive test generation with user guidance
- `story` - Generate tests from user stories/requirements

## Options
- `--source=path` - Specify source directory or file to analyze
- `--pattern=inline` - Choose test pattern (inline utilities for self-contained tests)
- `--browser=chromium|firefox|webkit` - Target browser for tests
- `--device=desktop|mobile|tablet` - Target device type

## What it does
1. Analyzes user stories or application structure
2. Identifies test scenarios and user journeys
3. Generates structured test files with best practices
4. Creates self-contained test files with inline utilities
5. Implements proper selectors and assertions
6. Validates generated tests for syntax and structure

## Examples
```bash
# Interactive mode selection (recommended for new users)
/venturo-e2e-web:generate

# Explicit mode selection (for experienced users)
/venturo-e2e-web:generate manual
/venturo-e2e-web:generate story --source=./requirements.md
```

## Mode Selection

When no mode is specified, choose your generation approach:

**1. Manual Mode** - Langsung buat test dengan panduan langkah demi langkah
**2. Story Mode** - Test dibuat melalui percakapan 4 langkah dengan persetujuan Anda

Silahkan balas dengan angka **1** untuk Manual Mode atau **2** untuk Story Mode.


## Generation Process

### Manual Mode
1. Specify feature or user story to test
2. Provide requirements or acceptance criteria
3. Choose test pattern and structure
4. Review and customize generated tests
5. Validate and save test files


### Story Mode
1. **Scenario Discovery** - AI asks "What scenario would you like to test?"
2. **Scenario Description** - User provides detailed scenario description
3. **Automated Test Plan & Approval** - AI generates complete test plan including positive/negative cases and asks for single approval
4. **Test Generation** - AI generates tests based on approved plan

## Output Structure
```
tests/
├── login/
│   ├── successful-login.spec.ts
│   ├── invalid-login.spec.ts
│   └── forgot-password.spec.ts
├── registration/
│   ├── successful-registration.spec.ts
│   ├── validation-errors.spec.ts
│   └── duplicate-email.spec.ts
├── dashboard/
│   ├── navigation.spec.ts
│   ├── data-display.spec.ts
│   └── user-profile.spec.ts
└── .env
```

**MANDATORY Requirements:**
- **1 scenario = 1 file** - No exceptions
- **Feature-based grouping** - All tests organized by feature
- **No fixture/helper files** - All utilities inline
- **VPS compatible** - Single files ready for deployment

## Best Practices Applied
- Uses data-testid selectors for stability
- Implements proper wait strategies
- Includes comprehensive assertions
- Uses inline utilities for self-contained tests
- Handles test data through environment variables
- Provides clear test documentation

## Next Steps
After generation:
- Review generated tests for completeness
- Run tests to validate functionality
- Customize environment variables and test scenarios
- Integrate with CI/CD pipeline
- Maintain and update tests regularly