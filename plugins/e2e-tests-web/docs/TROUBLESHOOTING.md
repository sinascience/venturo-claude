# Root Cause Analysis: Marketplace Validation Error

## 🐛 Error

```bash
/plugin marketplace add https://github.com/venturo-id/venturo-claude.git
⎿ Error: Invalid schema: plugins.0.hooks: Invalid input
```

## 🔍 Root Cause

**Issue:** Hooks and MCP servers were defined directly in `marketplace.json`

**Why it failed:**
- ❌ Marketplace schema does NOT support `hooks` and `mcpServers` fields directly
- ✅ These fields are only valid in `plugin.json` (plugin manifest)
- ⚠️ Marketplace entries can only contain metadata fields, not component configurations

## 📚 Schema Reference

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
