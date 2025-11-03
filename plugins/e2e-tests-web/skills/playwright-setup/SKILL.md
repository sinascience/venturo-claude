---
name: validating-playwright-setup
description: Validates Playwright installation and MCP integration. Use when checking E2E test environment, troubleshooting Playwright issues, or verifying MCP Playwright server configuration.
allowed-tools: Read, Bash, Grep, Glob
---

# Validating Playwright Setup

## Purpose

Ensures Playwright and MCP Playwright server are properly installed and configured for E2E testing workflows.

## Validation Steps

### Step 1: Check Playwright Installation

Run the validation script:
```bash
node scripts/check-playwright.js
```

Expected output:
- ✅ Playwright is installed
- ✅ Browser binaries are downloaded
- ✅ Version information

If validation fails, proceed to Step 2.

### Step 2: Install Playwright if Missing

**Check package.json first:**
```bash
grep -i "playwright" package.json
```

**Install Playwright:**
```bash
npm install -D @playwright/test
npx playwright install
```

**Verify installation:**
```bash
npx playwright --version
```

### Step 3: Verify MCP Playwright Integration

**Check MCP configuration:**
```bash
# Look for MCP config in Claude Code settings
ls -la ~/.claude/mcp.json || ls -la .claude/mcp.json
```

**Expected MCP configuration structure:**
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

If MCP config is missing, provide installation instructions.

### Step 4: Test Playwright Execution

**Run a simple test command:**
```bash
npx playwright test --list
```

This should list available tests or show no tests (both are valid).

## Validation Checklist

Copy and track progress:
```
Setup Validation:
- [ ] Playwright package installed in package.json
- [ ] Browser binaries downloaded (chromium, firefox, webkit)
- [ ] MCP Playwright server configured
- [ ] Test execution capability verified
- [ ] No blocking errors in environment
```

## Common Issues

### Issue: "Playwright not installed"
**Solution:**
```bash
npm install -D @playwright/test
npx playwright install
```

### Issue: "Browsers not downloaded"
**Solution:**
```bash
npx playwright install
```

### Issue: "MCP server not configured"
**Solution:**
1. Open Claude Code settings
2. Add MCP Playwright server configuration
3. Restart Claude Code
4. Verify with `/mcp list` command

### Issue: "npx command not found"
**Solution:**
Ensure Node.js and npm are installed:
```bash
node --version
npm --version
```

## Environment Requirements

- **Node.js**: v18 or higher
- **npm**: v8 or higher
- **Playwright**: ^1.40.0
- **MCP Playwright Server**: Latest version

## Success Criteria

All checks must pass:
1. ✅ `@playwright/test` appears in `package.json`
2. ✅ `npx playwright --version` returns version number
3. ✅ Browser binaries are downloaded
4. ✅ MCP configuration exists and is valid
5. ✅ Test execution command works without errors

## Next Steps

After validation passes:
- Use `/generate_e2e_test` to create new test files
- Use `/run_e2e_tests` to execute tests
- Refer to `e2e-generator` skill for test creation workflows
