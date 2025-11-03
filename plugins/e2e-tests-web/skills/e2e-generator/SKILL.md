---
name: generating-e2e-tests
description: Generates Playwright E2E test files with auto-scenario mode or manual mode. Use when creating new E2E tests, converting user journeys to test cases, or generating test scenarios from codebase analysis. Supports data-testid selectors, sequential execution, and auto-run verification.
allowed-tools: Read, Write, Bash, Grep, Glob, SemanticSearch
---

# Generating E2E Tests with Playwright

## Purpose

Automates E2E test generation following QA Engineer Automation persona from `agent-e2e.md`. Supports two modes: Manual (user provides scenario) and Auto (AI analyzes codebase and generates scenario).

## Prerequisites

Before generating tests, ensure:
- Playwright is installed (use `validating-playwright-setup` skill if unsure)
- Feature path exists in the codebase
- Understanding of the feature to be tested

## Mode Selection

### 1️⃣ Manual Mode
User provides complete Gherkin scenario (Given/When/Then).

**When to use:**
- User has clear test scenario
- Specific edge cases to test
- Converting existing manual test cases

### 2️⃣ Auto Scenario Mode
AI analyzes codebase and generates scenarios automatically.

**When to use:**
- Exploring new features
- Generating comprehensive test coverage
- User unsure about implementation details

## Workflow

### Phase 1: Input Gathering

**Step 1 - Feature Path (Required)**
```
User provides: /src/features/{feature-name}/
```

**Validation:**
- Check path exists using Glob tool
- Verify it's a directory, not a file
- List files to confirm feature structure

**Step 2 - Mode Selection**
```
1 = Manual Mode
2 = Auto Scenario Mode
```

**Step 3 - Scenario/Focus**

*For Manual Mode:*
```
Scenario: [title]
Given [initial condition]
When [action performed]
Then [expected result]
```

*For Auto Mode:*
```
User provides: "Test user creation flow"
AI focuses analysis on relevant components
```

**Step 4 - Additional Info (Optional)**
- Mock API endpoints
- Authentication requirements
- Test data/fixtures
- Environment variables

### Phase 2: Codebase Analysis

**For Auto Mode, perform systematic analysis:**

1. **Identify Components:**
```bash
# Find React/Vue/Angular components
find {feature-path} -name "*.tsx" -o -name "*.jsx" -o -name "*.vue"
```

2. **Extract Selectors:**
```bash
# Search for data-testid attributes
grep -r "data-testid" {feature-path}
```

3. **Find API Calls:**
```bash
# Search for API endpoints
grep -r "fetch\|axios\|api\." {feature-path}
```

4. **Analyze State Management:**
```bash
# Find state/store usage
grep -r "useState\|useReducer\|store\|vuex" {feature-path}
```

5. **Check Routing:**
```bash
# Find route definitions
grep -r "route\|navigate\|router" {feature-path}
```

**Generate Analysis Report:**
```markdown
## Analysis Report

### Files Analyzed:
- [list of relevant files]

### Key Components:
- [component names and purposes]

### Selectors Found:
- data-testid="submit-button"
- data-testid="user-form"
- [etc.]

### API Endpoints:
- POST /api/users
- GET /api/users/:id
- [etc.]

### Potential Test Scenarios:
1. [scenario 1]
2. [scenario 2]
3. [scenario 3]

### Recommendations:
- [any concerns or suggestions]
```

**Ask user for confirmation:**
```
📋 Analysis complete. Review above report.
Lanjut generate test? (y/n)
```

### Phase 3: Test File Generation

**File Naming Convention:**
```
tests/features/{feature-name}/{action}-{entity}.spec.ts
```

Examples:
- `create-user.spec.ts`
- `edit-profile.spec.ts`
- `delete-account.spec.ts`

**Template Structure:**

```typescript
/**
 * Feature: {{feature_name}}
 * Scenario: {{scenario_title}}
 *
 * Location: tests/features/{{feature_name}}/{{file_name}}.spec.ts
 * 
 * Notes:
 *  - Sequential execution
 *  - Browser tetap terbuka jika mode headed aktif
 *  - Screenshot otomatis pada error
 */

import { test, expect, chromium } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
const IS_HEADED = process.env.HEADED === 'true';

test.describe.serial('{{feature_name}} - {{test_suite_name}}', () => {
  let browser;
  let context;
  let page;

  test.beforeAll(async () => {
    browser = await chromium.launch({ headless: !IS_HEADED });
    context = await browser.newContext({ baseURL: BASE_URL });
    page = await context.newPage();
  });

  test.afterAll(async () => {
    if (IS_HEADED) {
      console.log('Mode headed aktif — browser tetap terbuka untuk debugging.');
    } else {
      await browser.close();
    }
  });

  test.afterEach(async ({}, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
      const path = `test-results/failure-${testInfo.title}-${Date.now()}.png`;
      await page.screenshot({ path, fullPage: true });
      console.log(`📸 Screenshot saved: ${path}`);
    }
  });

  test('{{scenario_title}}', async () => {
    // Given: {{given_condition}}
    await page.goto('{{feature_path}}');
    await page.waitForTimeout(300);

    // When: {{when_action}}
    // Use data-testid selectors
    await page.getByTestId('{{selector}}').click();
    await page.waitForTimeout(300);

    // Then: {{then_expectation}}
    await expect(page.getByTestId('{{result_selector}}')).toBeVisible();
  });
});
```

**Key Implementation Rules:**
- ✅ Use `test.describe.serial()` for sequential execution
- ✅ Add 300ms delay between interactions
- ✅ Prioritize `data-testid` > `role` > `aria-label` > `text` > CSS selector
- ✅ Auto-screenshot on failure
- ✅ Keep browser open in headed mode
- ✅ Use environment variables for BASE_URL

### Phase 4: Run & Verify

**Auto-execute generated test:**

```bash
# Standard mode
npx playwright test tests/features/{{feature_name}}/{{file_name}}.spec.ts

# Headed mode for debugging
HEADED=true npx playwright test tests/features/{{feature_name}}/{{file_name}}.spec.ts
```

**Interpret Results:**

✅ **All tests passed:**
```
✅ Semua test berhasil dijalankan tanpa error.
🎯 Task complete — QA Engineer Automation selesai.
```

❌ **Tests failed:**
```
❌ Test gagal dijalankan.
Error: {{error_message}}
Lokasi: {{file_name}}.spec.ts:{{line_number}}

💡 Saran:
- Periksa selector / data-testid yang hilang
- Cek mock API atau dependency state
- Jalankan ulang test dengan flag --headed untuk debugging
```

**Only mark task complete if ALL tests pass.**

## QA Heuristics

### Selector Priority
1. `data-testid` (most reliable)
2. `role` with accessible name
3. `aria-label`
4. `text` content
5. CSS selectors (last resort)

### Stability Patterns
- ❌ Avoid `waitForTimeout` except 300ms between actions
- ✅ Use auto-waiting: `toBeVisible()`, `toHaveText()`
- ✅ Make tests idempotent (can run multiple times)
- ✅ Mock external APIs for consistency

### Error Handling
- Screenshot every test failure
- Log meaningful error messages
- Provide debugging suggestions
- Never silently fail

## Common Scenarios

### Creating New Resource
```gherkin
Scenario: Admin can create new user
Given admin is on user management page
When admin clicks "Add User" and fills valid form
Then new user appears in the list
```

### Editing Existing Resource
```gherkin
Scenario: User can update profile information
Given user is logged in and on profile page
When user updates name and clicks save
Then success message appears and data persists
```

### Deleting Resource with Confirmation
```gherkin
Scenario: Admin can delete user with confirmation
Given admin views user list
When admin clicks delete and confirms modal
Then user is removed from list
```

### Form Validation
```gherkin
Scenario: Form shows validation errors for invalid input
Given user is on registration form
When user submits form with invalid email
Then error message appears below email field
```

## Integration with agent-e2e.md

This skill implements the persona defined in `agent-e2e.md`:

**Personality traits:**
- Skeptis & metodis
- QA-minded (thinks about edge cases)
- Proaktif & natural communication

**Behavioral patterns:**
- Auto-activate without summary
- Interactive step-by-step guidance
- Context-aware codebase analysis
- Auto-run tests after generation
- Only complete when tests pass

**Reference persona document:**
```bash
cat agent-e2e.md
```

## Output Format

### Analysis Report
Shows files, components, selectors, APIs, and recommendations.

### Test File Preview
Displays full path and generated TypeScript code.

### Execution Results
Shows pass/fail status with actionable suggestions.

### Post Notes
Includes recommendations for edge cases, additional scenarios, or mock API improvements.

## Success Criteria

Task is complete when:
1. ✅ Test file generated following template
2. ✅ File saved to correct location
3. ✅ Test executed automatically
4. ✅ All tests passed without errors
5. ✅ No blockers or missing dependencies

## Reference Files

For implementation details, see:
- `agent-e2e.md` - Full persona specification
- `scripts/run-e2e-tests.sh` - Test execution script
- `scripts/check-playwright.js` - Environment validation
