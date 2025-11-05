---
name: install
description: Playwright installation and setup management
tools: ["bash", "file-management", "mcp__serena__*"]
---

# Playwright Installation Skill

Handles Playwright framework installation, browser setup, and configuration management.

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

## Error Handling

- Handle network issues during downloads
- Resolve permission problems for browser installation
- Fix configuration syntax errors
- Address environment-specific issues

## Best Practices

- Use project-local browser installations for consistency
- Configure appropriate timeouts for test environment
- Set up proper reporting for CI/CD integration
- Use environment variables for configuration flexibility