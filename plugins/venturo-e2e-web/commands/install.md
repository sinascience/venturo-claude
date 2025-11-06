---
description: Install and configure Playwright with dependencies and browsers
argument-hint: [options]
---

# Playwright Installation

**Use the Installer agent to install Playwright and configure test environment.**

The Installer agent handles complete Playwright setup, including dependency installation, browser binary downloads, and configuration.

## Usage
```
/venturo-e2e-web:install [options]
```

## Options
- `--force` - Force reinstall even if Playwright is already installed
- `--browser=chromium|firefox|webkit` - Install specific browser only
- `--verbose` - Show detailed installation progress
- (no options) - Standard installation with all browsers

## Examples
```bash
/venturo-e2e-web:install                           # Standard installation
/venturo-e2e-web:install --force                   # Force reinstall
/venturo-e2e-web:install --browser=chromium        # Chromium only
/venturo-e2e-web:install --verbose                 # Detailed output
```

## Installation Includes
- @playwright/test and dependencies
- Browser binaries (chromium, firefox, webkit)
- playwright.config.ts configuration file
- Test directory structure (tests/)
- Environment variables configuration
- Installation validation

## Output
Returns:
- Component versions installed
- Configuration file location
- Browser installation confirmation
- Environment ready status