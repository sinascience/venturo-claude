# Root Cause Analysis: Plugin Validation Errors

## 🐛 Errors

### Error 1: Marketplace Schema Validation
```bash
/plugin marketplace add https://github.com/venturo-id/venturo-claude.git
⎿ Error: Invalid schema: plugins.0.hooks: Invalid input
```

### Error 2: Plugin Manifest Validation
```bash
Plugin e2e-tests-web has an invalid manifest file.
Validation errors: 
  - repository: Expected string, received object
  - hooks: Invalid input
```

---

## 🔍 Root Cause Analysis

### Issue 1: Marketplace Schema (Fixed ✅)
**Problem:** `hooks` and `mcpServers` defined in `marketplace.json`
- ❌ Marketplace schema does NOT support component configuration
- ✅ These fields only valid in `plugin.json`

**Solution:** Removed from marketplace.json

### Issue 2: Plugin Manifest Schema (Fixed ✅)

#### Problem 2.1: Repository Format
**Error:** `repository: Expected string, received object`

**Incorrect:**
```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/venturo-id/venturo-claude"
  }
}
```

**Correct:**
```json
{
  "repository": "https://github.com/venturo-id/venturo-claude"
}
```

**Why:** Claude Code plugin schema expects `repository` as a simple string URL, not an npm-style object.

#### Problem 2.2: Hooks Format
**Error:** `hooks: Invalid input`

**Issue:** Inline hooks object in plugin.json was not following proper schema for PostInstall events.

**Solution:** Move hooks to separate file

**Before:**
```json
{
  "hooks": {
    "PostInstall": [...]
  }
}
```

**After:**
```json
{
  "hooks": "./hooks/hooks.json"
}
```

---

## 🔧 Solution Applied

### 1. Fixed `plugin.json` Format

**File:** `plugins/e2e-tests-web/.claude-plugin/plugin.json`

Changes:
- ✅ Changed `repository` from object → string
- ✅ Changed `hooks` from inline object → file path
- ✅ Changed `mcpServers` from inline object → file path

**Final structure:**
```json
{
  "name": "playwright-e2e-automation",
  "description": "...",
  "version": "1.0.0",
  "author": {...},
  "repository": "https://github.com/venturo-id/venturo-claude",
  "keywords": [...],
  "license": "MIT",
  "hooks": "./hooks/hooks.json",
  "mcpServers": "./.mcp.json"
}
```

### 2. Created Separate Config Files

#### hooks/hooks.json
```json
{
  "hooks": {
    "SessionStart": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "${CLAUDE_PLUGIN_ROOT}/scripts/check-playwright.js"
          },
          {
            "type": "command",
            "command": "${CLAUDE_PLUGIN_ROOT}/scripts/setup-mcp-playwright.sh"
          }
        ]
      }
    ]
  }
}
```

**Note:** Changed from `PostInstall` to `SessionStart` because:
- ❌ `PostInstall` is NOT a valid Claude Code hook event
- ✅ `SessionStart` runs when Claude Code starts a new session
- ✅ Valid hook events: PreToolUse, PostToolUse, SessionStart, SessionEnd, Stop, SubagentStop, UserPromptSubmit, Notification, PreCompact

#### .mcp.json
```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["-y", "@playwright/mcp-server"],
      "env": {"PLAYWRIGHT_BROWSERS_PATH": "0"}
    }
  }
}
```

---

## 📁 Final File Structure

```
plugins/e2e-tests-web/
├── .claude-plugin/
│   └── plugin.json          ✅ Fixed: repository as string, paths to configs
├── .mcp.json               ✅ New: MCP server configuration
├── hooks/
│   └── hooks.json          ✅ New: Hooks configuration
├── scripts/
│   ├── check-playwright.js
│   └── setup-mcp-playwright.sh
├── commands/
├── docs/
└── skills/
```

---

According to [Claude Code Plugin Reference](https://docs.claude.com/en/docs/claude-code/plugins-reference):

### Marketplace Schema (marketplace.json)
Valid fields in marketplace plugin entries:
- `name` ✅
- `source` ✅
- `description` ✅
- `version` ✅
- `author` ✅
- `homepage` ✅
- `repository` ✅
- `license` ✅
- `keywords` ✅
- `category` ✅
- `tags` ✅
- `strict` ✅

### Plugin Manifest Schema (plugin.json)
Additional fields only valid in plugin.json:
- `hooks` ✅
- `mcpServers` ✅
- `commands` ✅
- `agents` ✅
- `skills` ✅

## 🔧 Solution Applied

### Before (Incorrect)
**File:** `.claude-plugin/marketplace.json`
```json
{
  "plugins": [
    {
      "name": "e2e-tests-web",
      "hooks": { ... },          // ❌ Invalid in marketplace.json
      "mcpServers": { ... }      // ❌ Invalid in marketplace.json
    }
  ]
}
```

### After (Correct)

**File:** `.claude-plugin/marketplace.json`
```json
{
  "plugins": [
    {
      "name": "e2e-tests-web",
      "source": "./plugins/e2e-tests-web",
      "description": "...",
      "version": "1.0.0",
      // Only metadata fields, no hooks/mcpServers
    }
  ]
}
```

**File:** `plugins/e2e-tests-web/.claude-plugin/plugin.json`
```json
{
  "name": "playwright-e2e-automation",
  "description": "...",
  "version": "1.0.0",
  "hooks": {                    // ✅ Valid in plugin.json
    "PostInstall": [...]
  },
  "mcpServers": {               // ✅ Valid in plugin.json
    "playwright": {...}
  }
}
```

## 📋 Changes Made

### 1. Updated `plugin.json`
**File:** `plugins/e2e-tests-web/.claude-plugin/plugin.json`

Added:
- ✅ `hooks` configuration with PostInstall events
- ✅ `mcpServers` configuration for Playwright MCP

### 2. Updated `marketplace.json`
**File:** `.claude-plugin/marketplace.json`

Removed:
- ❌ `hooks` field (moved to plugin.json)
- ❌ `mcpServers` field (moved to plugin.json)

Kept only valid marketplace metadata fields.

## ✅ Result

The marketplace now validates correctly because:
1. Marketplace.json contains only supported metadata fields
2. Component configurations (hooks, mcpServers) are in plugin.json
3. Schema validation passes for both files

## 🎯 Key Takeaways

### Marketplace.json Purpose
- 📦 Lists available plugins
- 📝 Provides discovery metadata
- 🔗 Specifies plugin sources
- ❌ Does NOT configure plugin components

### Plugin.json Purpose
- ⚙️ Configures plugin behavior
- 🔌 Defines hooks and MCP servers
- 📁 Specifies component paths
- ✅ Contains full plugin manifest

### Best Practice
**Separation of Concerns:**
- `marketplace.json` = What plugins are available (catalog)
- `plugin.json` = How each plugin works (configuration)

## 📚 References

- [Plugin Marketplaces Documentation](https://docs.claude.com/en/docs/claude-code/plugin-marketplaces)
- [Plugins Reference Schema](https://docs.claude.com/en/docs/claude-code/plugins-reference)
- [Hooks Configuration](https://docs.claude.com/en/docs/claude-code/hooks)
- [MCP Integration](https://docs.claude.com/en/docs/claude-code/mcp)

---

**Fixed:** November 4, 2025  
**Plugin Version:** 1.0.0
