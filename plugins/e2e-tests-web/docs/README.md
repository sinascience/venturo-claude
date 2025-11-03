# 🎭 Playwright E2E Automation Plugin for Claude Code

> **QA Engineer Automation** - Complete E2E testing solution with auto-scenario generation and validation

A comprehensive Claude Code plugin that provides Playwright E2E testing capabilities with intelligent test generation, codebase analysis, and automated validation following professional QA engineering practices.

## 🎯 Features

### 🤖 QA Engineer Automation Persona
- **Two-mode operation**: Manual scenario input or AI-powered auto-generation
- **Interactive workflow**: Step-by-step guidance through test creation
- **Context-aware analysis**: Analyzes your codebase to understand implementation
- **Auto-execution**: Runs generated tests immediately to verify functionality
- **Quality-focused**: Only marks tasks complete when all tests pass

### ✨ Key Capabilities

1. **Playwright Validation** (`validating-playwright-setup` skill)
   - Checks installation and configuration
   - Verifies browser binaries
   - Validates MCP integration
   - Provides fix instructions for issues

2. **E2E Test Generation** (`generating-e2e-tests` skill)
   - Manual mode: User provides Gherkin scenarios
   - Auto mode: AI analyzes code and generates scenarios
   - Intelligent selector detection (data-testid priority)
   - API and state management analysis
   - Professional test file generation

3. **Test Execution** 
   - Headless and headed modes
   - Debug mode with Playwright Inspector
   - Screenshot capture on failures
   - Detailed error reporting

### 📦 Claude Commands

- `/check_playwright` - Validate Playwright setup
- `/run_e2e_tests` - Execute tests with various options
- `/generate_e2e_test` - Create new test files (Manual or Auto mode)

## 📋 Prerequisites

- **Claude Code**: Version 1.0 or later
- **Node.js**: v18 or higher
- **npm**: v8 or higher
- **Playwright**: ^1.40.0 (will be installed via plugin)

## 🚀 Installation

### Option 1: Via Marketplace (Recommended)

```bash
# Add the Venturo marketplace
/plugin marketplace add venturo-id/venturo-claude

# Install the plugin
/plugin install playwright-e2e-automation@venturo
```

### Option 2: Local Installation (Development)

```bash
# Clone or download this repository
cd /path/to/venturo-claude

# Add as local marketplace
/plugin marketplace add ./

# Install the plugin
/plugin install playwright-e2e-automation@local
```

### Option 3: Team Setup (Project-level)

Add to your project's `.claude/settings.json`:

```json
{
  "plugins": {
    "marketplaces": [
      {
        "name": "venturo",
        "source": "venturo-id/venturo-claude"
      }
    ],
    "installed": [
      "playwright-e2e-automation@venturo"
    ]
  }
}
```

Team members will automatically get the plugin when they trust the repository.

## 📚 Usage

### 1. Validate Setup

Before starting, verify your environment:

```
/check_playwright
```

Claude will check:
- ✅ Node.js version
- ✅ Playwright installation
- ✅ Browser binaries
- ✅ Test directory structure
- ✅ MCP configuration

### 2. Generate E2E Tests

#### Manual Mode

```
You: /generate_e2e_test
Claude: [Mode selection prompt]
You: 1

Claude: Berikan path folder fitur yang akan diuji:
You: /src/features/user-management

Claude: Berikan scenario dalam format Gherkin:
You: Scenario: Admin can create new user
     Given admin is on user management page
     When admin clicks "Add User" and fills valid form
     Then new user appears in the list

Claude: [Analyzes, generates test, and runs it]
```

#### Auto Scenario Mode

```
You: /generate_e2e_test
Claude: [Mode selection prompt]
You: 2

Claude: Berikan path folder fitur yang ingin diuji:
You: /src/features/profile

Claude: Berikan deskripsi singkat area yang ingin diuji:
You: Test update profile information flow

Claude: [Analyzes codebase]
Claude: [Shows AUTO-GENERATED SCENARIO and analysis report]
Claude: Lanjut generate test? (y/n)
You: y

Claude: [Generates test file and runs it]
```

### 3. Run Tests

Execute all tests:
```
/run_e2e_tests
```

Run specific test file:
```
/run_e2e_tests tests/features/user-management/create-user.spec.ts
```

Run in headed mode (browser visible):
```
/run_e2e_tests --headed
```

Debug mode with Inspector:
```
/run_e2e_tests --debug
```

## 🏗️ Generated Test Structure

Tests follow this professional structure:

```typescript
/**
 * Feature: User Management
 * Scenario: Admin can create new user
 *
 * Location: tests/features/user-management/create-user.spec.ts
 */

import { test, expect, chromium } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
const IS_HEADED = process.env.HEADED === 'true';

test.describe.serial('User Management - Create User', () => {
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
      console.log('Mode headed aktif — browser tetap terbuka.');
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

  test('Admin can create new user', async () => {
    // Given: admin is on user management page
    await page.goto('/users');
    await page.waitForTimeout(300);

    // When: admin clicks "Add User" and fills valid form
    await page.getByTestId('add-user-button').click();
    await page.waitForTimeout(300);
    await page.getByTestId('user-name-input').fill('John Doe');
    await page.getByTestId('user-email-input').fill('john@example.com');
    await page.getByTestId('submit-button').click();
    await page.waitForTimeout(300);

    // Then: new user appears in the list
    await expect(page.getByText('John Doe')).toBeVisible();
    await expect(page.getByText('john@example.com')).toBeVisible();
  });
});
```

## 🎯 QA Best Practices

### Selector Priority

1. **data-testid** (most reliable)
   ```typescript
   page.getByTestId('submit-button')
   ```

2. **role** with accessible name
   ```typescript
   page.getByRole('button', { name: 'Submit' })
   ```

3. **aria-label**
   ```typescript
   page.getByLabel('Email address')
   ```

4. **text** content
   ```typescript
   page.getByText('Submit')
   ```

5. **CSS selectors** (last resort)
   ```typescript
   page.locator('.submit-btn')
   ```

### Test Stability

- ✅ Sequential execution prevents race conditions
- ✅ 300ms delays between actions for stability
- ✅ Auto-waiting with `toBeVisible()`, `toHaveText()`
- ✅ Screenshot capture on every failure
- ✅ Idempotent tests (can run multiple times)

### Error Handling

- Auto-screenshot saves to `test-results/`
- Meaningful error messages
- Debugging suggestions on failure
- Browser stays open in headed mode

## 🛠️ Plugin Structure

```
playwright-e2e-automation/
├── .claude-plugin/
│   └── plugin.json              # Plugin metadata
├── commands/
│   ├── check-playwright.md      # Validation command
│   ├── run-e2e-tests.md         # Test execution command
│   └── generate-e2e-test.md     # Test generation command
├── skills/
│   ├── playwright-setup/
│   │   └── SKILL.md             # Setup validation skill
│   └── e2e-generator/
│       └── SKILL.md             # Test generation skill
├── scripts/
│   ├── check-playwright.js      # Installation checker
│   ├── run-e2e-tests.sh         # Test runner
│   └── generate-test.js         # Test file generator
├── agent-e2e.md                 # QA persona definition
├── package.json                 # Dependencies
└── docs/
    └── README.md                # This file
```

## 🔧 Configuration

### Environment Variables

Set in your project or `.env` file:

```bash
# Application URL
BASE_URL=http://localhost:3000

# Headed mode (browser visible)
HEADED=true
```

### Playwright Config

Create `playwright.config.ts` in your project:

```typescript
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 2,
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
});
```

## 🐛 Troubleshooting

### Playwright Not Installed

```bash
npm install -D @playwright/test
npx playwright install
```

### Browser Binaries Missing

```bash
npx playwright install
```

### MCP Server Not Configured

1. Open Claude Code settings
2. Add MCP Playwright configuration:
```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["-y", "@executeautomation/playwright-mcp-server"]
    }
  }
}
```
3. Restart Claude Code

### Tests Failing

1. Run with `--headed` to see browser:
   ```
   /run_e2e_tests --headed
   ```

2. Use debug mode:
   ```
   /run_e2e_tests --debug
   ```

3. Check screenshots in `test-results/`

4. Verify selectors exist in your application

## 📖 Related Documentation

- [Playwright Documentation](https://playwright.dev)
- [Claude Code Skills](https://docs.claude.com/en/docs/claude-code/skills)
- [Claude Code Plugins](https://docs.claude.com/en/docs/claude-code/plugins)
- [MCP Integration](https://docs.claude.com/en/docs/claude-code/mcp)

## 🤝 Contributing

Contributions welcome! Please follow:

1. Fork the repository
2. Create feature branch
3. Follow QA best practices
4. Add tests for new features
5. Submit pull request

## 📝 License

MIT License - see LICENSE file for details

## 👥 Credits

**Author**: Venturo Development Team  
**Contact**: dev@venturo.id  
**Repository**: https://github.com/venturo-id/venturo-claude

---

Built with ❤️ for QA Engineers who love automation
