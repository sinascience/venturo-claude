---
description: Generate Playwright E2E test cases from user stories and application analysis
agent: generator
argument-hint: [mode?] (manual|story)?
---

# Test Generation

Generates comprehensive E2E test cases using Playwright from user stories, requirements, or application analysis.

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

## Interactive Mode Selection

When no mode is specified, the system will guide you through an interactive selection process:

### Step 1: Mode Presentation
The system presents two generation modes with detailed descriptions:

**Manual Mode** 🎯
- **Best for**: Specific features, user stories, or precise test requirements
- **Process**: Interactive step-by-step test creation
- **Control**: Full control over test scenarios and implementation
- **Time**: 10-20 minutes per test suite

**Story Mode** 📖
- **Best for**: Collaborative test creation through conversation
- **Process**: Interactive 5-step workflow with scenario discovery and planning
- **Control**: User-guided test creation with explicit confirmations
- **Time**: 20-30 minutes per scenario (including planning and approval)

### Step 2: Decision Guidance
The system helps you choose by asking:
- Do you have specific requirements or user stories? → **Story Mode**
- Do you want precise control over test scenarios? → **Manual Mode**

### Step 3: Confirmation
Before any test generation occurs, the system requires:
- Explicit mode selection confirmation
- Source path validation
- Test scope agreement
- Final approval to proceed

### Step 4: Generation Execution
Only after explicit confirmation does test generation begin with your chosen mode.

## Story Mode Dialogue Examples

### Example 1: User Login Scenario
```
AI: What scenario would you like to test?
User: I want to test the user login functionality on my e-commerce site.

AI: Great! Can you describe the login scenario in more detail? What should happen, and what are the key steps?
User: User should be able to login with valid credentials, see error for invalid credentials, and be redirected to dashboard after successful login.

AI: Perfect! Here's my test plan based on your description:
1. Test successful login with valid credentials
2. Test error handling with invalid password
3. Test error handling with non-existent email
4. Verify redirect to dashboard after successful login
5. Check session persistence across page refresh

Does this plan cover what you had in mind? Should I add or modify anything?
User: Yes, that looks good. Please generate the tests.

AI: Perfect! I'll now generate the test files based on your approved plan...
```

### Example 2: Shopping Cart Scenario
```
AI: What scenario would you like to test?
User: Shopping cart functionality for adding, removing, and updating items.

AI: Can you provide more details about the shopping cart behavior you want to test?
User: Users should add items to cart, update quantities, remove items, and see correct totals calculated.

AI: Here's my proposed test plan:
1. Add single item to cart and verify it appears
2. Add multiple different items to cart
3. Update quantity for existing cart item
4. Remove item from cart
5. Verify total price calculation updates correctly
6. Test cart persistence when navigating between pages

Ready for me to generate these tests?
User: Yes, proceed!

AI: Excellent! Generating test files now...
```

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
3. **Test Plan Creation** - AI creates structured test plan from user input
4. **Plan Confirmation** - User reviews and confirms/approves the plan
5. **Test Generation** - AI generates tests based on approved plan

## Output Structure
```
tests/
├── features/
│   ├── {feature-name}/
│   │   ├── {scenario-name}.spec.ts
│   │   └── {scenario-name}.spec.ts
└── config/
    ├── .env
    └── .env.example
```

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