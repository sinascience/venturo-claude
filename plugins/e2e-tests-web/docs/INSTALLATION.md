# Installation & Setup Summary

## 🎯 What Happens When Installing Plugin

When team members install the `e2e-tests-web` plugin, the following automatic setup occurs:

### 1️⃣ Plugin Installation
```bash
/plugin marketplace add venturo-id/venturo-claude
/plugin install e2e-tests-web@venturo-tools
```

### 2️⃣ Auto-Execution (PostInstall Hooks)

#### Hook 1: Check Playwright Installation
- **Script:** `scripts/check-playwright.js`
- **Purpose:** Verify Playwright is installed
- **Action:** Reports installation status and guides installation if missing

#### Hook 2: Setup MCP Playwright Server
- **Script:** `scripts/setup-mcp-playwright.sh`
- **Purpose:** Configure Playwright MCP server
- **Action:** Verifies npx access and MCP server availability

### 3️⃣ MCP Server Configuration

The plugin automatically registers MCP server:

```json
{
  "playwright": {
    "command": "npx",
    "args": ["-y", "@playwright/mcp-server"],
    "env": {
      "PLAYWRIGHT_BROWSERS_PATH": "0"
    }
  }
}
```

This enables Claude Code to use Playwright browser automation tools directly.

---

## ✅ What Team Members Get

After successful installation:

### Playwright Tools
- ✅ Local Playwright installation verification
- ✅ Browser automation capability
- ✅ E2E test execution tools

### MCP Playwright Integration
- ✅ Browser automation via MCP protocol
- ✅ Direct browser control from Claude Code
- ✅ Screenshot, navigation, form filling capabilities
- ✅ Web scraping and data extraction

### Plugin Commands
- `/check_playwright` - Validate setup
- `/run_e2e_tests` - Execute E2E tests
- `/generate_e2e_test` - Create new test scenarios

### Additional Tools (via MCP)
- `playwright_navigate` - Navigate to URLs
- `playwright_screenshot` - Capture screenshots
- `playwright_click` - Click elements
- `playwright_fill` - Fill forms
- `playwright_evaluate` - Execute JavaScript

---

## 📋 Manual Verification Steps

Team members can verify installation:

### 1. Check Plugin Installation
```bash
/plugin list
```
Should show: `e2e-tests-web@venturo-tools`

### 2. Verify Playwright
```bash
/check_playwright
```
or
```bash
npx playwright --version
```

### 3. Verify MCP Server
```bash
npx @playwright/mcp-server --version
```

### 4. Test MCP Integration
In Claude Code chat:
```
Claude, navigate to https://example.com and take a screenshot
```

---

## 🔧 Troubleshooting

### If Playwright Not Installed

```bash
# Install Playwright
npm install -D @playwright/test

# Install browsers
npx playwright install
```

### If MCP Server Issues

```bash
# Re-run setup script
./scripts/setup-mcp-playwright.sh

# Test MCP server manually
npx @playwright/mcp-server
```

### If Hooks Don't Run

```bash
# Make scripts executable
chmod +x scripts/*.sh
chmod +x scripts/*.js

# Re-install plugin
/plugin uninstall e2e-tests-web
/plugin install e2e-tests-web@venturo-tools
```

---

## 🚀 Best Practices for Teams

### For Team Leads
1. Ensure all team members have Node.js installed (v18+)
2. Share marketplace repository: `venturo-id/venturo-claude`
3. Document project-specific Playwright configurations
4. Create example E2E tests for reference

### For Team Members
1. Trust the repository when prompted by Claude Code
2. Run verification commands after installation
3. Install Playwright browsers: `npx playwright install`
4. Read plugin documentation: `docs/README.md`

### For CI/CD
Add to pipeline:
```yaml
- name: Install Playwright
  run: |
    npm install -D @playwright/test
    npx playwright install --with-deps
```

---

## 📚 Documentation Links

- **Plugin README:** [README.md](../README.md)
- **MCP Integration:** [MCP_PLAYWRIGHT.md](MCP_PLAYWRIGHT.md)
- **QA Persona:** [agent-e2e.md](../agent-e2e.md)
- **Full Docs:** [docs/README.md](README.md)

- **External:**
  - [Playwright MCP](https://github.com/microsoft/playwright-mcp)
  - [Playwright Docs](https://playwright.dev)
  - [Claude Code Plugins](https://docs.claude.com/en/docs/claude-code/plugins)

---

**Version:** 1.0.0  
**Last Updated:** November 2025  
**Maintained by:** Venturo.id
