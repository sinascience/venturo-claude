---
name: install
description: Install and configure Playwright framework with browser binaries, project structure, and environment setup. Use when setting up new Playwright projects, installing browsers, validating installations, or configuring test environments.
---

# Playwright Installation Skill

Handles Playwright framework installation, browser setup, and configuration management following standardized operating procedures.

## SOP: Playwright Installation Standard Operating Procedure

### Document Control
- **SOP ID**: PI-001
- **Version**: 2.0.0
- **Effective Date**: Current
- **Owner**: Installation Specialist
- **Review Schedule**: Monthly

### Purpose & Scope
Standardize Playwright installation process to ensure consistent, reliable setup across different environments with proper validation and error handling.

### Environment Validation SOP

#### SOP-PI001: Pre-Installation Environment Check
**Purpose**: Verify system requirements before Playwright installation

**Procedure**:
1. **System Requirements Validation**
   - [ ] Check Node.js version >= 16.0.0
   - [ ] Verify npm/yarn package manager availability
   - [ ] Confirm system has sufficient disk space (>2GB)
   - [ ] Check network connectivity for downloads

2. **Permission Verification**
   - [ ] Verify write permissions in project directory
   - [ ] Check npm/yarn global package permissions
   - [ ] Confirm browser installation permissions
   - [ ] Validate system administrator rights if needed

3. **Dependency Check**
   - [ ] Check for existing Playwright installation
   - [ ] Verify conflicting packages
   - [ ] Check TypeScript installation (if applicable)
   - [ ] Validate project structure suitability

### Installation SOP

#### SOP-PI002: Playwright Package Installation
**Purpose**: Install Playwright framework and dependencies

**Procedure**:
1. **Package Manager Detection**
   - [ ] Detect available package manager (npm/yarn/pnpm)
   - [ ] Validate package manager version
   - [ ] Check package manager configuration
   - [ ] Select appropriate installation method

2. **Package Installation**
   ```bash
   # npm installation
   npm install -D @playwright/test@latest

   # yarn installation
   yarn add -D @playwright/test@latest

   # pnpm installation
   pnpm add -D @playwright/test@latest
   ```

3. **Installation Verification**
   - [ ] Verify package installation in package.json
   - [ ] Check node_modules directory structure
   - [ ] Validate package-lock file updates
   - [ ] Confirm no installation errors

4. **Dependency Resolution**
   - [ ] Check for peer dependency conflicts
   - [ ] Verify compatible package versions
   - [ ] Resolve dependency tree issues
   - [ ] Document any warnings

#### SOP-PI003: Playwright Initialization
**Purpose**: Initialize Playwright project structure and configuration

**Procedure**:
1. **Project Initialization**
   ```bash
   # Initialize Playwright in project
   npx playwright init

   # Or create config manually
   ```

2. **Configuration File Creation**
   - [ ] Create playwright.config.ts or .js file
   - [ ] **MANDATORY** validate and make sure `testDir` on playwright.config.ts or .js file is set to directory `./tests`
   - [ ] Set up basic project structure
   - [ ] Configure test directories
   - [ ] Initialize sample tests if needed

3. **Directory Structure Setup**
   - [ ] Create tests/ directory
   - [ ] Set up environment configuration files (tests/.env, tests/.env.example)
   - [ ] Create test-results/ output directory
   - [ ] Configure .gitignore for test artifacts and environment files

### Browser Installation SOP

#### SOP-PI004: Browser Binary Installation
**Purpose**: Install and configure Playwright browser binaries

**Procedure**:
1. **Browser Binary Download**
   ```bash
   # Install browser binaries
   npx playwright install

   # Install specific browsers only
   npx playwright install chromium
   npx playwright install firefox
   npx playwright install webkit
   ```

2. **Browser Configuration**
   - [ ] Set PLAYWRIGHT_BROWSERS_PATH=0 for project-local
   - [ ] Configure browser launch options
   - [ ] Set up browser preferences
   - [ ] Configure headless/headed modes

3. **Browser Verification**
   - [ ] Test browser launch capabilities
   - [ ] Verify browser version compatibility
   - [ ] Check browser binary paths
   - [ ] Validate browser configuration

4. **Environment Setup**
   - [ ] Configure browser profiles
   - [ ] Set up default browser settings
   - [ ] Configure download directories
   - [ ] Set up user preferences

### Configuration SOP

#### SOP-PI005: Playwright Configuration Setup
**Purpose**: Configure Playwright settings for optimal performance and usage

**Procedure**:
1. **Configuration File Setup**
   ```typescript
   // playwright.config.ts
   import { defineConfig, devices } from '@playwright/test';

   export default defineConfig({
     testDir: './tests',
     fullyParallel: true,
     forbidOnly: !!process.env.CI,
     retries: process.env.CI ? 2 : 0,
     reporter: [['html']],
     use: {
       trace: 'on-first-retry',
     },
     projects: [
       { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
     ],
   });
   ```

2. **Test Environment Configuration**
   - [ ] Set up test directory structure
   - [ ] Configure timeout values
   - [ ] Set up retry mechanisms
   - [ ] Configure parallel execution

3. **Reporting Configuration**
   - [ ] Set up HTML reporter
   - [ ] Set up video recording options
   - [ ] Configure screenshot capture

### Validation SOP

#### SOP-PI006: Installation Validation
**Purpose**: Validate complete Playwright installation functionality

**Procedure**:
1. **Basic Functionality Test**
   ```bash
   # Test Playwright installation
   npx playwright --version

   # List available tests
   npx playwright test --list

   # Run basic test
   npx playwright test
   ```

2. **Browser Launch Test**
   - [ ] Test Chromium browser launch
   - [ ] Test Firefox browser launch
   - [ ] Test WebKit browser launch
   - [ ] Verify browser connectivity

3. **Configuration Validation**
   - [ ] Validate configuration file syntax
   - [ ] Check configuration file loading
   - [ ] Verify test directory recognition
   - [ ] Test reporter functionality

4. **End-to-End Validation**
   - [ ] Create 1 file sample test and Run sample test execution (dont create fixture, utils and any others)
   - [ ] Verify screenshot capture
   - [ ] Test video recording functionality
   - [ ] Confirm report generation

### Error Handling SOP
