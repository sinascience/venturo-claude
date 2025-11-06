# E2E Testing Onboarding Guide

Welcome to the **venturo-e2e-web** plugin - a modern, modular E2E testing framework built with Playwright and Claude Code. This guide will get you up and running with comprehensive E2E testing in minutes.

## 🚀 Quick Start

### Step 1: Installation (5 minutes)

First, install Playwright and configure your testing environment:

```bash
/venturo-e2e-web:install
```

This command will:
- ✅ Install Playwright and dependencies
- ✅ Set up configuration files
- ✅ Download browser binaries
- ✅ Create test directory structure
- ✅ Validate the installation

**Installation options:**
- `--force` - Reinstall even if already installed
- `--browser=chromium` - Install specific browser only
- `--verbose` - Show detailed progress

### Step 2: Generate Your First Tests (10-20 minutes)

Choose your preferred test generation mode:

#### Option A: Interactive Mode (Recommended for beginners)
```bash
/venturo-e2e-web:generate
```

The system will guide you through choosing:
- **Manual Mode** - Precise control over test scenarios
- **Story Mode** - Collaborative test creation through conversation

#### Option B: Direct Mode (For experienced users)
```bash
# Manual test generation with full control
/venturo-e2e-web:generate manual

# Generate from user stories/requirements
/venturo-e2e-web:generate story --source=./requirements.md
```

### Step 3: Run Your Tests (2 minutes)

Execute your generated tests:

```bash
# Run all tests
/venturo-e2e-web:run all

# Run specific test directory
/venturo-e2e-web:run tests/auth/

# Run with specific browser
/venturo-e2e-web:run all --project=chromium
```

### Step 4: Live Testing (Optional)

Test your application in real-time:

```bash
# Test live application
/venturo-e2e-web:test https://your-app-url.com

# Test with mobile device simulation
/venturo-e2e-web:test https://your-app-url.com --device=mobile
```

## 📁 What Gets Created

After running through these steps, you'll have:

```
tests/
├── auth/
│   ├── login.spec.ts
│   └── logout.spec.ts
├── other-features/
├── .env.example
├── .env (your environment variables)
└── reports/ (generated after test runs)
```

## 🔧 Environment Setup

### Required Environment Variables

Create `tests/.env` with your test data:

```bash
# Your application URLs
BASE_URL=https://your-app.dev
STAGING_URL=https://your-app.staging

# Test user credentials
TEST_USER_EMAIL=test@example.com
TEST_USER_PASSWORD=secure-password

# Other test data
API_KEY=your-test-api-key
```

### Configuration Files

The installation creates these configuration files automatically:
- `playwright.config.ts` - Main Playwright configuration
- `package.json` - Updated with test dependencies
- `tsconfig.json` - TypeScript configuration for tests

## 🎯 Common Testing Scenarios

### Example 1: User Authentication
```bash
# 1. Generate authentication tests
/venturo-e2e-web:generate story

# 2. Describe the scenario when prompted:
"I want to test user login functionality including:
- Successful login with valid credentials
- Error handling with invalid credentials
- Redirect to dashboard after successful login
- Session persistence across page refreshes"

# 3. Review and approve the generated test plan
# 4. Run the tests
/venturo-e2e-web:run tests/features/auth/
```

### Example 2: Shopping Cart
```bash
# 1. Generate cart tests
/venturo-e2e-web:generate manual

# 2. Specify requirements:
"Shopping cart functionality:
- Add items to cart
- Update item quantities
- Remove items from cart
- Calculate totals correctly"
```

## 📊 Test Reports

After running tests, you'll get comprehensive reports:
- **HTML Reports** - Detailed visual reports with screenshots
- **JSON Reports** - Machine-readable results for CI/CD
- **Console Output** - Real-time test execution feedback
- **Video Recordings** - Optional video captures of test runs

## 🛠️ Advanced Usage

### Custom Test Patterns
```bash
# Generate tests with Page Object Model
/venturo-e2e-web:generate story --pattern=pom

# Target specific devices
/venturo-e2e-web:generate manual --device=mobile
```

### CI/CD Integration
```bash
# Headless execution for CI/CD
/venturo-e2e-web:run all --reporter=junit

# Parallel execution
/venturo-e2e-web:run all --workers=4
```

### Debug Mode
```bash
# Run tests with Playwright Inspector
/venturo-e2e-web:run tests/debug/ --debug --headed
```

## 🎨 Best Practices

### Test Organization
- Use `data-testid` attributes in your application for stable selectors
- Group tests by features/epics
- Create descriptive test names that explain the scenario
- Use environment variables for test data

### Writing Maintainable Tests
- Keep tests focused on single scenarios
- Use proper wait strategies instead of fixed timeouts
- Include meaningful assertions
- Document complex test scenarios

### Test Data Management
- Never hardcode credentials in tests
- Use environment variables for all external data
- Create test data factories for complex objects
- Clean up test data after test runs

## 🆘 Getting Help

### Command Help
Each command has built-in help:
```bash
/venturo-e2e-web:install --help
/venturo-e2e-web:generate --help
/venturo-e2e-web:run --help
/venturo-e2e-web:test --help
```

### Troubleshooting
- **Installation Issues** - Try `/venturo-e2e-web:install --force --verbose`
- **Test Failures** - Use `/venturo-e2e-web:run` with `--debug` flag
- **Browser Issues** - Check browser installation with `npx playwright install`

## 📚 Next Steps

1. **Explore Advanced Features** - Try live testing with `/venturo-e2e-web:test`
2. **Integrate with CI/CD** - Set up automated test runs in your pipeline
3. **Custom Configuration** - Modify `playwright.config.ts` for your needs
4. **Expand Test Coverage** - Generate tests for all your application features

## 🎉 You're Ready!

You now have a fully functional E2E testing setup. Start with:
1. `/venturo-e2e-web:install` - If not already done
2. `/venturo-e2e-web:generate` - Create your first tests
3. `/venturo-e2e-web:run` - Execute and see results

Happy testing! 🚀