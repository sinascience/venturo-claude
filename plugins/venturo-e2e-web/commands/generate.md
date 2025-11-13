---
description: Generate Playwright E2E tests with verified selectors and complete code generation
---

## Usage
```
/venturo-e2e-web:generate
```

---

## Initial Mode Selection

Present two options:
1. **Manual Mode** — User provides specific test scenarios
2. **Automatic Mode** — AI analyzes feature and proposes comprehensive test plan

---

## **Manual Mode**

### Step 1: Collect Scenarios
Ask user to list scenario titles:
```
Example:
1. Login gagal - invalid email
2. Login sukses
3. Checkout - add 4 items, remove 2
```

### Step 2: Get Component Path
For each scenario, ask:
```
"Component path for '{scenario}'?"
Example: src/features/auth/login.component.tsx
```

If user doesn't know, offer to search by feature name.

### Step 3: Validate Selectors (MANDATORY)
Use grep_search/semantic_search to find:
- All `data-testid` attributes
- Form fields (name, id, labels)
- Buttons (role, text)
- Error/success elements

Present findings:
```
Scenario: Login sukses
Component: src/auth/login.component.tsx

Found selectors:
✓ data-testid="email-input"
✓ data-testid="password-input"
✓ button role="submit" text="Sign In"
✗ Missing: error message data-testid

Recommendations:
- Use getByTestId for inputs
- Add data-testid="login-error" for error states
- Use getByRole for submit button
- Never use getByLabel

Options:
A) Proceed with existing selectors
B) I'll add missing data-testid first
C) Try different component path
```

### Step 4: Build Test Plan
After selector validation, create detailed plan:
```
Scenario: Login sukses
File: tests/auth/login-success.spec.ts

Steps:
1. Navigate to BASE_URL + '/login'
2. Fill email with TEST_EMAIL (from .env)
3. Fill password with TEST_PASSWORD (from .env)
4. Click submit
5. Assert: URL contains '/dashboard'
6. Assert: User menu visible

Selectors (verified):
- page.getByTestId('email-input')         // login.component.tsx:15
- page.getByTestId('password-input')      // login.component.tsx:18
- page.getByRole('button', {name: 'Sign In'})  // login.component.tsx:25
- page.getByTestId('user-menu')           // dashboard.component.tsx:10

Environment variables:
- BASE_URL (default: http://localhost:3000)
- TEST_EMAIL
- TEST_PASSWORD

Approve to generate code?
```

### Step 5: Generate Code
Upon approval, generate complete `.spec.ts` file:

```typescript
import { test, expect } from '@playwright/test';

// Environment variables
const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
const TEST_EMAIL = process.env.TEST_EMAIL!;
const TEST_PASSWORD = process.env.TEST_PASSWORD!;

test.describe('Login Success Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL + '/login');
  });

  test('should login successfully with valid credentials', async ({ page }) => {
    // Arrange: Get verified selectors
    // From: src/auth/login.component.tsx:15
    const emailInput = page.getByTestId('email-input');
    // From: src/auth/login.component.tsx:18
    const passwordInput = page.getByTestId('password-input');
    // From: src/auth/login.component.tsx:25
    const submitButton = page.getByRole('button', { name: 'Sign In' });

    // Act: Perform login
    await emailInput.fill(TEST_EMAIL);
    await passwordInput.fill(TEST_PASSWORD);
    await submitButton.click();

    // Assert: Verify successful login
    await expect(page).toHaveURL(/dashboard/);
    // From: src/dashboard/dashboard.component.tsx:10
    await expect(page.getByTestId('user-menu')).toBeVisible();
  });
});
```

Also generate `.env.example`:
```bash
# tests/.env.example
BASE_URL=http://localhost:3000
TEST_EMAIL=test@example.com
TEST_PASSWORD=SecurePass123!
```

---

## **Automatic Mode**

### Step 1: Feature Selection
Ask: "What feature should I analyze?"
```
Example: "login", "checkout", "user profile"
```

### Step 2: Path Specification
Offer options:
```
A) Provide feature path (e.g., src/features/checkout)
B) Search by keyword
C) Full repository scan (slower)
```

Confirm before scanning:
```
"Analyzing: {path}
This may take 30-60s. Continue?"
```

### Step 3: Deep Codebase Analysis
Perform comprehensive scan:

**1. Component Discovery:**
- Main feature components
- Sub-components
- Route definitions

**2. Selector Extraction:**
- All `data-testid` attributes
- Form elements with names/labels
- Interactive elements (buttons, links)
- Conditional elements (modals, alerts, errors)

**3. Logic Analysis:**
- Validation rules
- API calls (endpoints, methods)
- Success/error state handling
- Navigation flows
- State transitions

**4. Environment Requirements:**
- Base URLs
- Credentials needed
- API endpoints
- Feature flags

### Step 4: Present Discovery Report
```
Feature: Checkout Process
Path: src/features/checkout/
Components: 5 files analyzed

Selector Inventory:
✓ 12 data-testid found
✓ 8 form inputs with labels
✓ 4 buttons with accessible roles
✗ 3 error states missing data-testid (flagged)

API Interactions:
- POST /api/cart/add
- POST /api/checkout/validate
- POST /api/orders/create

Navigation Flow:
/cart → /checkout → /payment → /confirmation

Env Variables Required:
- BASE_URL
- TEST_EMAIL
- TEST_CREDIT_CARD
- API_ENDPOINT

Generate test plan? (Yes/No)
```

### Step 5: Generate Test Plan
Create structured plan with verified selectors:

```
Test Plan: Checkout Flow

Positive Scenarios:
1. Complete checkout with valid card
   File: tests/checkout/complete-checkout-success.spec.ts
   Selectors: cart-items, checkout-btn, card-input, confirm-btn
   Assertions: order-success visible, URL=/confirmation
   
2. Apply discount code
   File: tests/checkout/apply-discount.spec.ts
   Selectors: discount-input, apply-btn, total-price
   Assertions: discount-label visible, price updated

Negative Scenarios:
1. Invalid credit card format
   File: tests/checkout/invalid-card.spec.ts
   Selectors: card-input, card-error
   Assertions: error message visible, submit disabled
   
2. Empty cart checkout attempt
   File: tests/checkout/empty-cart-block.spec.ts
   Selectors: cart-empty-msg, checkout-btn
   Assertions: checkout-btn disabled

Boundary Conditions:
1. Max cart items exceeded (>50)
   File: tests/checkout/max-items-limit.spec.ts
   Selectors: cart-count, max-warning
   Assertions: warning visible, add-btn disabled

Total: 5 test files
Missing selectors: 3 (will add TODO comments)

Approve plan? (Yes/Edit/Cancel)
```

### Step 6: Generate All Test Files
For each approved scenario, generate complete `.spec.ts`:

**Example: tests/checkout/complete-checkout-success.spec.ts**
```typescript
import { test, expect } from '@playwright/test';

// Environment variables
const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
const TEST_EMAIL = process.env.TEST_EMAIL!;
const TEST_CREDIT_CARD = process.env.TEST_CREDIT_CARD!;

test.describe('Checkout - Complete Purchase', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL + '/cart');
    
    // Pre-condition: Add items to cart
    // From: src/features/cart/cart.component.tsx:45
    const addButton = page.getByTestId('add-to-cart');
    await addButton.click();
  });

  test('should complete checkout with valid payment', async ({ page }) => {
    // Arrange: Get selectors
    // From: src/features/cart/cart.component.tsx:67
    const checkoutButton = page.getByTestId('checkout-btn');
    // From: src/features/checkout/payment.component.tsx:23
    const cardInput = page.getByTestId('card-input');
    // From: src/features/checkout/payment.component.tsx:34
    const confirmButton = page.getByRole('button', { name: 'Confirm Payment' });

    // Act: Proceed to checkout
    await checkoutButton.click();
    await expect(page).toHaveURL(/checkout/);
    
    // Fill payment details
    await cardInput.fill(TEST_CREDIT_CARD);
    await confirmButton.click();

    // Assert: Verify successful order
    await expect(page).toHaveURL(/confirmation/);
    // From: src/features/checkout/confirmation.component.tsx:12
    await expect(page.getByTestId('order-success')).toBeVisible();
    await expect(page.getByTestId('order-number')).toContainText(/ORD-/);
  });

  test.afterEach(async ({ page }) => {
    // Cleanup: Clear cart if needed
    await page.goto(BASE_URL + '/cart/clear');
  });
});
```

Generate shared `.env.example` for all tests:
```bash
# tests/.env.example
BASE_URL=http://localhost:3000
TEST_EMAIL=test@example.com
TEST_PASSWORD=SecurePass123!
TEST_CREDIT_CARD=4111111111111111
API_ENDPOINT=http://localhost:3000/api
```

---

## **Code Generation Rules**

All generated tests MUST follow:

### **1. Selector Priority (Verified Only)**
Priority order:

1. data-testid (if exists in codebase)
   Example: page.getByTestId('element-id')

2. getByRole + accessible name (for semantic HTML)
   Example: page.getByRole('button', { name: 'Submit' })

3. getByLabel (for form inputs)
   Example: page.getByLabel('Email Address')

4. NEVER use:
   - getByText() for dynamic/multilingual content
   - XPath selectors
   - CSS selectors (unless no alternative)

### **2. Selector Documentation**
Always comment source location:

Example:
  // From: src/component/file.tsx:line_number
  const element = page.getByTestId('element-id');

### **3. Environment Variables (MANDATORY)**
- ALL dynamic data from .env
- Use TypeScript non-null assertion for required vars
- Provide defaults only for URLs

Example:
  const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
  const REQUIRED_VAR = process.env.REQUIRED_VAR; // Fails if missing

### **4. Assertion Rules**
Based on actual component behavior:

1. Visibility checks
   - await expect(element).toBeVisible();
   - await expect(element).toBeHidden();

2. State validation
   - await expect(button).toBeDisabled();
   - await expect(input).toHaveValue(expectedValue);

3. URL/Navigation
   - await expect(page).toHaveURL(/pattern/);

4. Content (use data-testid, not text)
   - await expect(page.getByTestId('message')).toContainText('success');

Minimum 1 assertion per test

### **5. File Structure**

Example structure:
  import { test, expect } from '@playwright/test';

  // Environment variables
  const VAR = process.env.VAR;

  test.describe('Feature Name', () => {
    test.beforeEach(async ({ page }) => {
      // Setup
    });

    test('should do something when condition', async ({ page }) => {
      // Arrange: Setup selectors with source comments
      
      // Act: User interactions
      
      // Assert: Verify behavior
    });

    test.afterEach(async ({ page }) => {
      // Cleanup
    });
  });

### **6. Code Quality**
- TypeScript strict mode compatible
- Async/await (no `.then()` chains)
- ESLint + Prettier compliant
- Meaningful test descriptions
- No hardcoded data

---

## **Execution Safety**

Before generating ANY code:

Pre-flight Checklist:
- Component paths verified (files exist)
- Selectors extracted from codebase
- Missing selectors documented
- Env vars identified
- User approved test plan
- No assumed/guessed selectors

Block generation if:
- Component path invalid
- Zero selectors found
- Critical selectors missing (forms, buttons)
- User hasn't approved

---

## **Interaction Guidelines**

1. **One question at a time**
2. **Progress indicators:**
   ```
   🔍 Searching codebase...
   ✓ Found 12 selectors
   📝 Building test plan...
   ✓ Plan ready for review
   ```
3. **Clear options:** Continue | Edit | Cancel
4. **Explicit approvals:**
   - After selector validation
   - After test plan creation
   - Before code generation

---

## **Output Structure**

```
tests/
├── .env.example              # Generated env template
├── {feature}/
│   ├── {scenario-1}.spec.ts
│   ├── {scenario-2}.spec.ts
│   └── README.md             # Selector inventory & notes
```

---

## **Error Handling**

### If selector not found:
- Flag in test plan
- Suggest adding data-testid to component
- Propose alternative (getByRole/getByLabel)
- Add TODO comment in generated code
- Don't block generation, but warn user

### If env var needed but undefined:
- Add to .env.example
- Add comment in test
- Use TypeScript non-null assertion to fail at runtime if missing

### If user requests changes:
- Re-validate selectors
- Update plan
- Re-present for approval
- Generate only after confirmed