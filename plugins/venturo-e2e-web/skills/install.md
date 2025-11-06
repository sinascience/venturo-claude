---
name: install
description: Playwright installation and setup management with standardized SOPs
tools: ["bash", "file-management", "mcp__serena__*"]
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
   - [ ] **MANDATORY** validate and make sure `testDir: "./tests"` on playwright.config.ts or .js file
   - [ ] Set up basic project structure
   - [ ] Configure test directories
   - [ ] Initialize sample tests if needed

3. **Directory Structure Setup**
   - [ ] Create tests/ directory
   - [ ] Set up environment configuration files (tests/.env, tests/.env.example)
   - [ ] Create test-results/ output directory
   - [ ] Configure .gitignore for test artifacts and environment files

4. **Sample Test Creation**
   - [ ] Generate basic example test with **MANDATORY** single-file structure
   - [ ] Demonstrate **MANDATORY** feature-based organization
   - [ ] Show inline utilities (NO external files)
   - [ ] Initialize environment variable configuration templates

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
   - [ ] Configure JSON reporter for CI/CD
   - [ ] Set up video recording options
   - [ ] Configure screenshot capture

4. **CI/CD Integration**
   - [ ] Configure environment-specific settings
   - [ ] Set up CI-friendly reporter options
   - [ ] Configure headless mode for automation
   - [ ] Set up artifact collection

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
   - [ ] Run sample test execution
   - [ ] Verify screenshot capture
   - [ ] Test video recording functionality
   - [ ] Confirm report generation

### Error Handling SOP

#### SOP-PI007: Installation Error Management
**Purpose**: Handle errors during Playwright installation process

**Procedure**:
1. **Network Connectivity Issues**
   - [ ] Check internet connection stability
   - [ ] Verify package registry availability
   - [ ] Test download speed and reliability
   - [ ] Configure proxy settings if needed

2. **Permission Issues**
   - [ ] Check file system permissions
   - [ ] Verify administrator rights
   - [ ] Resolve sudo permission conflicts
   - [ ] Document permission requirements

3. **Package Conflicts**
   - [ ] Identify conflicting packages
   - [ ] Resolve version incompatibilities
   - [ ] Clean up corrupted installations
   - [ ] Document dependency issues

4. **System Compatibility**
   - [ ] Check operating system compatibility
   - [ ] Verify architecture compatibility (x64/arm64)
   - [ ] Address OS-specific issues
   - [ ] Document system requirements

### Maintenance SOP

#### SOP-PI008: Playwright Maintenance
**Purpose**: Maintain Playwright installation for optimal performance

**Procedure**:
1. **Regular Updates**
   - [ ] Check for Playwright updates monthly
   - [ ] Update to latest stable version
   - [ ] Verify update compatibility
   - [ ] Update browser binaries

2. **Browser Maintenance**
   - [ ] Update browser binaries regularly
   - [ ] Clear browser cache and temporary files
   - [ ] Verify browser performance
   - [ ] Update browser configurations

3. **Configuration Maintenance**
   - [ ] Review configuration settings quarterly
   - [ ] Update timeout values as needed
   - [ ] Optimize performance settings
   - [ ] Update CI/CD configurations

4. **Cleanup Procedures**
   - [ ] Clean up test artifacts regularly
   - [ ] Remove outdated dependencies
   - [ ] Clear temporary files and cache
   - [ ] Archive old test results

### Quality Assurance SOP

#### SOP-PI009: Installation Quality Assurance
**Purpose**: Ensure Playwright installation meets quality standards

**Procedure**:
1. **Installation Quality Check**
   - [ ] Verify all components installed correctly
   - [ ] Check installation completeness
   - [ ] Validate configuration quality
   - [ ] Test end-to-end functionality

2. **Performance Validation**
   - [ ] Test installation speed benchmarks
   - [ ] Verify browser launch performance
   - [ ] Check memory usage during installation
   - [ ] Validate system resource efficiency

3. **Documentation Quality**
   - [ ] Verify installation documentation completeness
   - [ ] Check configuration file comments
   - [ ] Validate error handling documentation
   - [ ] Review troubleshooting guides

4. **Standards Compliance**
   - [ ] Verify compliance with project standards
   - [ ] Check adherence to best practices
   - [ ] Validate security configurations
   - [ ] Review accessibility compliance

## Core Capabilities

### 1. Playwright Installation
- Install Playwright package via npm/yarn
- Initialize Playwright in project
- Generate default configuration files
- Set up browser binaries

### 2. Browser Management
- Download and configure browser binaries
- Set up browser profiles and preferences
- Configure browser launch options
- Verify browser installations

### 3. Configuration Setup
- Create/playwright.config.ts or .js files
- Configure test environments and timeouts
- Set up reporting and output directories
- Configure CI/CD integration settings

### 4. Validation
- Verify installation completeness
- Test browser launch capabilities
- Validate configuration syntax
- Run basic test to confirm setup

## Installation Workflow

1. **Project Setup**
   - Check existing dependencies
   - Install Playwright package
   - Initialize Playwright configuration

2. **Browser Installation**
   - Download required browser binaries
   - Configure browser environments
   - Set up browser launch options

3. **Configuration**
   - Create/modify playwright.config file
   - Set up test directories and patterns
   - Configure reporting and output settings

4. **Validation**
   - Run installation verification
   - Test basic Playwright functionality
   - Confirm all browsers launch correctly

## Quality Standards

- SOP compliance in all installation procedures
- Comprehensive error handling and recovery
- Detailed validation and verification processes
- System compatibility validation
- Performance optimization and maintenance
- Security and access control
- Documentation and troubleshooting support
- Continuous improvement processes