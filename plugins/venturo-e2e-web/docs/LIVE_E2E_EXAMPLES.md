# Live E2E Test Examples

## Example 1: Basic Login Flow

```
/live-e2e-test
Feature: User Login
URL: https://demo.playwright.dev/todomvc
Steps:
1. Navigate to application
2. Verify page loads correctly
3. Check title and main elements
```

**Expected Output:**
```
🎭 Starting Live E2E Test
━━━━━━━━━━━━━━━━━━━━━━━

Feature: User Login
Browser: Chromium (Headed Mode - Visible)
SlowMo: 500ms for observation

🚀 Launching browser...
✅ Browser launched and visible

📍 Step 1: Navigate to application
   → Opening https://demo.playwright.dev/todomvc
   ⏳ Waiting for page load...
   ✅ Page loaded (1.8s)
   📸 Screenshot: step-1-homepage.png

📍 Step 2: Verify page loads correctly  
   → Checking page title
   ✅ Title: "TodoMVC: React"
   → Checking main container
   ✅ Main app container found
   📸 Screenshot: step-2-verification.png

📍 Step 3: Check title and main elements
   → Verifying header "todos"
   ✅ Header visible
   → Checking input field
   ✅ Input field ready
   📸 Screenshot: step-3-elements.png

✅ All steps completed successfully!
⏸️  Browser will stay open for observation.
```

---

## Example 2: Form Interaction

```
/live-e2e-test test the todo app
URL: https://demo.playwright.dev/todomvc
Actions:
1. Add 3 todo items
2. Mark first item as complete
3. Filter to show active items
4. Delete a todo
5. Verify final count
```

**Command Output:**
```
🎭 Starting Live E2E Test
━━━━━━━━━━━━━━━━━━━━━━━

Feature: Todo App Functionality

📍 Step 1: Add todo item "Buy groceries"
   → Clicking input field
   → Typing text...
   → Pressing Enter
   ✅ Item added
   📸 Screenshot: step-1-add-first.png

📍 Step 2: Add todo item "Walk the dog"
   → Typing text...
   → Pressing Enter
   ✅ Item added
   📸 Screenshot: step-2-add-second.png

📍 Step 3: Add todo item "Read a book"
   → Typing text...
   → Pressing Enter
   ✅ Item added (Total: 3 items)
   📸 Screenshot: step-3-add-third.png

📍 Step 4: Mark "Buy groceries" as complete
   → Locating checkbox for first item
   → Clicking checkbox...
   ✅ Item marked complete
   📸 Screenshot: step-4-complete-item.png

📍 Step 5: Filter to show active items
   → Clicking "Active" filter
   ✅ Filter applied (2 active items shown)
   📸 Screenshot: step-5-filter-active.png

🎭 Test Summary
━━━━━━━━━━━━
✅ All steps passed
⏱️  Duration: 23.4 seconds
📸 5 screenshots captured
```

---

## Example 3: E-commerce Checkout

```
/live-e2e-test simulate checkout process
URL: https://demo.vercel.store
Test:
1. Browse product catalog
2. Add item to cart
3. View cart
4. Proceed to checkout
5. Fill shipping info
6. Review order
```

---

## Example 4: Responsive Testing

```
/live-e2e-test test mobile responsiveness
URL: https://example.com
Devices:
1. Desktop (1280x720)
2. Tablet (768x1024)
3. Mobile (375x667)
Actions:
- Test navigation menu
- Verify layout adjustments
- Check touch interactions
```

---

## Example 5: API Integration Test

```
/live-e2e-test verify API integration
URL: https://app.example.com
Steps:
1. Login to dashboard
2. Trigger data fetch
3. Observe network requests
4. Verify data display
5. Test error handling
```

**Special Instructions:**
```
Use MCP Playwright to:
- Monitor network traffic
- Intercept API calls
- Verify response data
- Take screenshots of loading states
```

---

## Example 6: Multi-step Workflow

```
/live-e2e-test test user registration flow
URL: https://app.example.com/signup

Workflow:
Step 1 - Registration Form:
  - Fill name, email, password
  - Accept terms & conditions
  - Submit form

Step 2 - Email Verification:
  - Show verification pending state
  - Simulate email verification (dev mode)

Step 3 - Profile Setup:
  - Upload profile picture
  - Fill additional details
  - Save profile

Step 4 - Dashboard:
  - Verify redirect to dashboard
  - Check welcome message
  - Confirm user data displayed
```

---

## Tips for Live Testing

### 1. Use Descriptive Steps
❌ Bad: "Test the form"
✅ Good: "Fill registration form with valid data and submit"

### 2. Add Verification Points
```
Steps:
1. Click login button
2. ✅ VERIFY: Modal opens
3. Fill credentials
4. ✅ VERIFY: No validation errors
5. Submit form
6. ✅ VERIFY: Redirect to dashboard
```

### 3. Handle Dynamic Content
```
Steps:
1. Navigate to products page
2. Wait for loading spinner to disappear
3. Verify at least 5 products displayed
4. Click first product
5. Wait for product detail animation
```

### 4. Capture Important Moments
```
Steps:
1. Add item to cart
   📸 Capture: Cart badge updates
2. Open cart drawer
   📸 Capture: Cart contents
3. Update quantity
   📸 Capture: Price recalculation
4. Proceed to checkout
   📸 Capture: Checkout form
```

### 5. Test Error Scenarios
```
Scenario: Invalid Login
Steps:
1. Enter invalid credentials
   📸 Capture: Form filled
2. Click login
   📸 Capture: Error message displayed
3. Verify error message content
4. Verify form remains filled
5. Clear and retry with valid credentials
```

---

## Common Selectors for Testing

```javascript
// Recommended selector priority
1. data-testid
   [data-testid="submit-button"]

2. ARIA labels
   [aria-label="Close dialog"]

3. Role + Name
   button[role="button"][name="Submit"]

4. ID (if stable)
   #user-form-submit

5. Class (last resort)
   .btn-primary.submit-btn
```

---

## Debugging Tips

### Slow down even more
Add `slowMo: 1000` for detailed observation

### Keep browser open longer
```
At end of test, wait 60 seconds before closing
```

### Add console logging
```javascript
// Log to browser console
await page.evaluate(() => {
  console.log('Current step: Filling form');
});
```

### Check element states
```javascript
// Verify element is really clickable
const isEnabled = await element.isEnabled();
const isVisible = await element.isVisible();
```

---

## Integration with Existing Tests

### Run existing Playwright test
```
/live-e2e-test run test file ./tests/login.spec.ts in headed mode
```

### Convert headless test
```
Take this test and run it with visible browser:
[paste test code]
```

### Debug failing test
```
/live-e2e-test debug the failing test in ./tests/checkout.spec.ts
Focus on:
- Payment form interaction
- Network requests
- Console errors
```

---

**Note:** All examples assume MCP Playwright server is running and configured. See [MCP_PLAYWRIGHT.md](MCP_PLAYWRIGHT.md) for setup instructions.
