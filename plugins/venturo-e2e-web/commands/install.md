---
description: Install and validate Playwright with dependencies, configuration, and browsers
---

# Playwright Installation

**Use the Playwright Installer agent to install and configure Playwright for E2E testing with proper dependencies and browser setup.**

The Playwright Installer agent will handle all setup requirements, validate installation, and prepare your environment for E2E testing.

## Usage
```
/venturo-e2e-web:install [options]
```

## Options
- `--force` - Force reinstall even if Playwright is already installed
- `--browser=chromium|firefox|webkit` - Install specific browser only
- `--verbose` - Show detailed installation progress

## What it does
1. Checks existing Playwright installation
2. Installs @playwright/test dependency
3. Creates/updates playwright.config.ts
4. Installs browser binaries
5. Sets up test directory structure
6. Validates installation

## Examples
```bash
/venturo-e2e-web:install
/venturo-e2e-web:install --force
/venturo-e2e-web:install --browser=chromium --verbose
```

## Installation Checklist
- [ ] Playwright dependency installed
- [ ] Configuration file created/updated
- [ ] Browser binaries downloaded
- [ ] Test directory structure ready
- [ ] Basic validation test passes

## Output
Returns installation status with:
- Successfully installed components
- Configuration file location
- Browser installation status
- Next steps for testing