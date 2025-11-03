# Changelog

All notable changes to the Playwright E2E Automation Plugin will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-11-03

### Added
- Initial release of Playwright E2E Automation Plugin
- Two-mode test generation (Manual and Auto Scenario)
- QA Engineer Automation persona from agent-e2e.md
- Skills:
  - `validating-playwright-setup` - Validates Playwright installation
  - `generating-e2e-tests` - Generates E2E test files
- Commands:
  - `/check_playwright` - Environment validation
  - `/run_e2e_tests` - Test execution with options
  - `/generate_e2e_test` - Interactive test generation
- Utility scripts:
  - `check-playwright.js` - Installation checker
  - `run-e2e-tests.sh` - Test runner
  - `generate-test.js` - Test file generator
- Complete documentation and examples
- QA best practices implementation:
  - Sequential test execution
  - data-testid selector priority
  - Auto-screenshot on failure
  - 300ms stability delays
  - Headed mode support

### Features
- Context-aware codebase analysis for auto-scenario generation
- Intelligent selector detection (data-testid > role > aria-label > text > CSS)
- Auto-execution and validation of generated tests
- Professional test file structure with TypeScript
- Integration with MCP Playwright server
- Comprehensive error handling and debugging support

### Documentation
- Full README with installation and usage guide
- QA persona specification in agent-e2e.md
- Skill documentation with best practices
- Command usage examples
- Troubleshooting guide

## [Unreleased]

### Planned
- Support for additional test frameworks
- Visual regression testing integration
- API testing capabilities
- Enhanced auto-scenario generation with ML
- Test coverage reporting
- CI/CD integration templates
- Plugin configuration UI
