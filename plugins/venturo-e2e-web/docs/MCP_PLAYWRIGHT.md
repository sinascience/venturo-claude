# Playwright MCP Integration

## Overview

Plugin ini secara otomatis mengintegrasikan **Playwright MCP Server** dari Microsoft untuk memberikan kemampuan browser automation melalui Model Context Protocol (MCP).

🔗 **Official Repository:** https://github.com/microsoft/playwright-mcp

## Apa itu Playwright MCP?

Playwright MCP adalah server MCP yang menyediakan tools untuk:
- 🌐 **Browser automation** via Playwright
- 📸 **Screenshot & PDF generation**
- 🔍 **Web scraping & data extraction**
- 🧪 **E2E testing automation**
- 🎭 **Multi-browser support** (Chromium, Firefox, WebKit)

## Auto-Setup

Ketika plugin `e2e-tests-web` diinstall, akan otomatis:

1. ✅ Check Playwright installation (via `check-playwright.js`)
2. ✅ Setup Playwright MCP server configuration
3. ✅ Verify MCP server accessibility

## MCP Server Configuration

Plugin ini mengkonfigurasi MCP server dengan:

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

### Environment Variables

- `PLAYWRIGHT_BROWSERS_PATH=0` - Menggunakan browser yang sudah terinstall system-wide

## Manual Setup (Optional)

Jika ingin setup manual atau troubleshooting:

### 1. Install Playwright MCP Server

```bash
npm install -g @playwright/mcp-server
```

### 2. Verify Installation

```bash
npx @playwright/mcp-server --version
```

### 3. Test MCP Server

```bash
npx @playwright/mcp-server
```

## Available MCP Tools

Setelah plugin terinstall, Claude Code akan memiliki akses ke tools:

| Tool | Description |
|------|-------------|
| `playwright_navigate` | Navigate browser to URL |
| `playwright_screenshot` | Capture screenshot |
| `playwright_click` | Click element |
| `playwright_fill` | Fill form inputs |
| `playwright_evaluate` | Execute JavaScript |

## Usage Examples

### Example 1: Navigate & Screenshot

```
Claude, please navigate to https://example.com and take a screenshot
```

### Example 2: Fill Form

```
Claude, go to the login page, fill username "test@example.com" and password "secret123"
```

### Example 3: Extract Data

```
Claude, scrape all product titles from https://shop.example.com
```

## Integration with E2E Testing

MCP Playwright bekerja bersama dengan plugin commands:

1. `/generate_e2e_test` - Generate test scenarios
2. MCP Playwright - Execute browser automation
3. `/run_e2e_tests` - Run & validate tests

## Troubleshooting

### MCP Server Not Found

```bash
# Re-run setup script
./scripts/setup-mcp-playwright.sh
```

### Browser Not Installed

```bash
# Install Playwright browsers
npx playwright install
```

### Permission Issues

```bash
# Make scripts executable
chmod +x scripts/*.sh
```

## Resources

- 📖 [Playwright MCP Documentation](https://github.com/microsoft/playwright-mcp)
- 🎭 [Playwright Official Docs](https://playwright.dev)
- 🔧 [MCP Protocol Specification](https://modelcontextprotocol.io)
- 📚 [Plugin README](../README.md)

## Support

For issues related to:
- **Plugin setup**: Open issue on [venturo-claude](https://github.com/venturo-id/venturo-claude)
- **MCP server**: Open issue on [playwright-mcp](https://github.com/microsoft/playwright-mcp)
- **Playwright**: Open issue on [playwright](https://github.com/microsoft/playwright)

---

**Last Updated:** November 2025  
**Plugin Version:** 1.0.0
