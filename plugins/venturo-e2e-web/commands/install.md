---
description: Install and configure Playwright with dependencies and browsers
---

# Playwright Installation

**Use the Playwright Installer agent to install and configure Playwright for E2E testing.**

The Playwright Installer agent handles dependency installation, browser setup, and configuration management.

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
2. Installs @playwright/test and dependencies
3. Creates/updates playwright.config.ts
4. Installs browser binaries (chromium, firefox, webkit)
5. Sets up test directory structure (tests/)
6. Configures environment variables

## Examples
```bash
/venturo-e2e-web:install
/venturo-e2e-web:install --force
/venturo-e2e-web:install --browser=chromium --verbose
```

## Installation Steps
- [ ] Playwright @latest installed
- [ ] Browser binaries downloaded
- [ ] Configuration file created
- [ ] Test directory structure ready
- [ ] Environment configured

## Output
Returns installation status with:
- Installed component versions
- Configuration file location
- Browser installation confirmation
- Environment ready indicator