# Live E2E Testing with MCP Playwright

## 🎯 Overview

The `/live-e2e-test` command enables **real-time E2E testing** with a **visible browser**, allowing team members to observe test execution as it happens. This is perfect for:

- 🎬 **Demonstrations** to stakeholders
- 🐛 **Debugging** failing tests
- 📚 **Training** new team members
- ✅ **Validation** of UI/UX behavior
- 📹 **Recording** test procedures

---

## 🚀 Quick Start

### Basic Usage

```
/live-e2e-test test the login flow on https://myapp.com
```

### With Specific Instructions

```
/live-e2e-test
Feature: User Registration
URL: https://myapp.com/signup
Steps:
1. Fill registration form
2. Submit and verify email sent
3. Check success message
```

### With Existing Test File

```
/live-e2e-test run the test from ./tests/login.spec.js
```

---

## 📋 How It Works

### 1. Browser Configuration

The command launches Playwright with headed mode (visible browser):

```javascript
{
  headless: false,        // Show browser UI
  slowMo: 500,           // Slow down actions by 500ms
  args: ['--start-maximized']
}
```

### 2. Test Execution Flow

```
📍 Announce Step → ⚡ Execute Action → ⏳ Wait → 📸 Screenshot → ✅ Report
```

### 3. Real-time Feedback

```
🎭 Starting Live E2E Test
━━━━━━━━━━━━━━━━━━━━━━━

📍 Step 1: Navigate to application
   → Opening https://myapp.com
   ⏳ Loading...
   ✅ Page loaded (2.3s)
   📸 Screenshot: step-1-homepage.png

📍 Step 2: Click login button
   → Locating element [data-testid="login-btn"]
   → Clicking...
   ✅ Clicked successfully
   📸 Screenshot: step-2-login-modal.png
```

---

## 🎬 Live Testing Features

### Visual Observation
- ✅ Browser window visible throughout test
- ✅ Slowed-down actions for clarity
- ✅ Maximized window for better visibility
- ✅ Browser stays open after completion

### Step-by-Step Execution
- ✅ Each step announced before execution
- ✅ Progress updates in real-time
- ✅ Immediate pass/fail feedback
- ✅ Screenshots at critical moments

### Error Handling
- ✅ Detailed error messages
- ✅ Failure screenshots
- ✅ Attempt to continue when possible
- ✅ Final summary with recommendations

---

## 🔧 MCP Playwright Tools Used

This command leverages MCP Playwright tools:

| Tool | Purpose | Example |
|------|---------|---------|
| `mcp__playwright__navigate` | Navigate to URL | Open login page |
| `mcp__playwright__click` | Click elements | Click submit button |
| `mcp__playwright__fill` | Fill inputs | Enter username/password |
| `mcp__playwright__screenshot` | Capture screenshot | Document test state |
| `mcp__playwright__evaluate` | Run JavaScript | Check element visibility |
| `mcp__playwright__wait_for_selector` | Wait for element | Ensure element loaded |

---

## 📸 Screenshot Capture

Screenshots are automatically taken at:
- ✅ After each major step
- ✅ On test failures
- ✅ Before assertions
- ✅ At test completion

**Location:** `./test-results/screenshots/`

**Format:** `step-{number}-{description}.png`

---

## ⚙️ Configuration

### Browser Settings

Default configuration (can be customized):

```javascript
{
  headless: false,           // Always visible
  slowMo: 500,              // 500ms delay between actions
  viewport: {
    width: 1280,
    height: 720
  },
  navigationTimeout: 30000,  // 30s for page loads
  actionTimeout: 10000       // 10s for actions
}
```

### Custom Configuration

Use the helper script for advanced config:

```bash
node scripts/headed-browser-config.js
```

---

## 🎯 Use Cases

### 1. Feature Demonstration
```
/live-e2e-test demonstrate the checkout process
URL: https://shop.example.com
Steps:
1. Add product to cart
2. Go to checkout
3. Complete payment form
4. Verify order confirmation
```

### 2. Bug Investigation
```
/live-e2e-test debug the login issue
URL: https://app.example.com
Focus on:
- Form validation
- Error messages
- Session handling
```

### 3. Team Training
```
/live-e2e-test show how to test the dashboard
URL: https://app.example.com/dashboard
Cover:
- Navigation
- Data loading
- Interactive widgets
- Responsive behavior
```

### 4. Stakeholder Review
```
/live-e2e-test validate the new search feature
URL: https://app.example.com
Demonstrate:
- Search functionality
- Filter options
- Result sorting
- Performance
```

---

## 📊 Test Report Format

After execution, you'll receive:

```
🎭 Live E2E Test Results
━━━━━━━━━━━━━━━━━━━━━━━

Feature: User Login Flow
URL: https://app.example.com
Browser: Chromium (Headed)
Duration: 45.2 seconds

Test Steps:
✅ Step 1: Navigate to login page - PASSED (2.3s)
✅ Step 2: Enter valid credentials - PASSED (1.5s)
✅ Step 3: Click login button - PASSED (0.8s)
✅ Step 4: Verify dashboard loaded - PASSED (3.2s)

Summary:
━━━━━━━
Total Steps: 4
Passed: 4 ✅
Failed: 0 ❌
Success Rate: 100%

Screenshots:
━━━━━━━━━━━
📸 step-1-login-page.png
📸 step-2-credentials-filled.png
📸 step-3-login-clicked.png
📸 step-4-dashboard.png

Observations:
━━━━━━━━━━━
✓ Page load times are acceptable (<3s)
✓ Form validation working correctly
✓ No console errors detected
✓ All interactive elements responsive

💡 Recommendations:
- Consider adding loading indicators for better UX
- Form autofocus could improve user experience
```

---

## 🚨 Important Notes

### Prerequisites
- ✅ MCP Playwright server must be running
- ✅ Browsers installed (`npx playwright install`)
- ✅ Display/GUI available (not headless server)

### Limitations
- ⚠️ Requires GUI environment (not for CI/CD)
- ⚠️ Slower than headless mode
- ⚠️ Single browser instance at a time

### Best Practices
- ✅ Use `data-testid` for reliable selectors
- ✅ Add explicit waits for dynamic content
- ✅ Keep test scenarios focused and short
- ✅ Document what you're testing beforehand

---

## 🆚 Comparison with Other Commands

| Feature | `/live-e2e-test` | `/run_e2e_tests` | `/generate_e2e_test` |
|---------|------------------|------------------|----------------------|
| **Browser Mode** | Headed (visible) | Headless | N/A |
| **Speed** | Slow (demo) | Fast | N/A |
| **Purpose** | Observation | Automation | Test creation |
| **Output** | Real-time visual | Test results | Test file |
| **Screenshots** | Always | On failure | N/A |
| **Best for** | Demos, training | CI/CD, validation | Development |

---

## 🔍 Troubleshooting

### Browser doesn't open
```bash
# Check MCP Playwright
npx @playwright/mcp-server --version

# Install browsers
npx playwright install
```

### Display issues
```bash
# macOS - allow terminal to control display
System Preferences → Security & Privacy → Privacy → Screen Recording
```

### Slow execution
Adjust `slowMo` in browser config or use:
```
/live-e2e-test with faster speed [your test instructions]
```

---

## 📚 Related Documentation

- [MCP Playwright Integration](MCP_PLAYWRIGHT.md)
- [E2E Testing Guide](README.md)
- [Command: /run_e2e_tests](../commands/run-e2e-tests.md)
- [Command: /generate_e2e_test](../commands/generate-e2e-test.md)

---

**Version:** 1.0.0  
**Last Updated:** November 2025  
**Plugin:** e2e-tests-web
