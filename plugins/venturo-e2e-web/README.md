# venturo-e2e-web

Clean Playwright E2E testing automation with modular skills and specialized agents for comprehensive web application testing.

## Overview

A modern, modular E2E testing plugin that leverages specialized agents and reusable skills to provide comprehensive Playwright testing capabilities.

## Architecture

### 🧩 Modular Skills
- **Installation** - Playwright setup and browser management
- **Generation** - Intelligent test case creation from user stories
- **Execution** - Test running and comprehensive reporting
- **Live Testing** - Real-time browser testing and debugging

### 🤖 Specialized Agents
- **Installer** - Playwright installation and configuration specialist
- **Generator** - Test generation expert with best practices
- **Runner** - Test execution and result analysis specialist
- **Live Tester** - Real-time browser testing and debugging expert

### 📋 Clean Commands
- **Install** - Set up Playwright with dependencies and browsers
- **Generate** - Create E2E tests from user stories and analysis
- **Run** - Execute test suites with comprehensive reporting
- **Test** - Live browser testing with real-time observation

## Quick Start

### 1. Installation
```bash
/venturo-e2e-web:install
```

### 2. Generate Tests
```bash
/venturo-e2e-web:generate manual
/venturo-e2e-web:generate story --source=./requirements.md
```

### 3. Run Tests
```bash
/venturo-e2e-web:run all
/venturo-e2e-web:run tests/auth/ --project=chromium
```

### 4. Live Testing
```bash
/venturo-e2e-web:test https://example.com
/venturo-e2e-web:test demo --slowmo=300
```

## Features

### 🚀 Smart Test Generation
- User story analysis and scenario extraction
- Application structure analysis for comprehensive coverage
- Single-file test structure with inline utilities
- Best practices enforcement

### 📊 Comprehensive Reporting
- HTML reports with detailed results
- Performance metrics and timing analysis
- Failure analysis with debugging information
- Trend analysis and recommendations

### 🔍 Live Testing
- Real-time browser control and observation
- Interactive debugging with console monitoring
- Screenshot and video capture
- Multi-device testing simulation

### ⚡ Performance Optimized
- Specialized agents for focused functionality
- Modular skills for reusability
- Efficient resource management
- Parallel execution support

## Usage Examples

### Installation with Options
```bash
/venturo-e2e-web:install --force --browser=chromium --verbose
```

### Test Generation Patterns
```bash
/venturo-e2e-web:generate story --pattern=single-file
/venturo-e2e-web:generate story --source=./src/pages --device=mobile
```

### Test Execution Modes
```bash
/venturo-e2e-web:run all --reporter=junit --workers=4
/venturo-e2e-web:run tests/auth/ --headed --debug
```

### Live Testing Scenarios
```bash
/venturo-e2e-web:test scenario --device=mobile --debug
/venturo-e2e-web:test demo --screenshots --video
```

## Architecture Benefits

### 🎯 Focused Agents
Each agent specializes in one domain:
- **Installer** handles only installation and setup
- **Generator** focuses on test creation and patterns
- **Runner** manages execution and analysis
- **Live Tester** provides real-time testing

### 🔧 Reusable Skills
Skills provide modular capabilities:
- Can be used across multiple agents
- Independent development and testing
- Easy maintenance and updates
- Consistent functionality

### 📈 Performance
- Smaller, focused agents respond faster
- Reduced context usage for efficiency
- Parallel execution capabilities
- Resource optimization

## Configuration

### Plugin Structure
```
venturo-e2e-web/
├── .claude-plugin/plugin.json    # Plugin configuration
├── skills/                       # Modular capabilities
│   ├── install.md               # Installation management
│   ├── generate.md              # Test generation
│   ├── execute.md               # Test execution
│   └── live-test.md             # Live testing
├── agents/                       # Specialized agents
│   ├── installer.md             # Installation specialist
│   ├── generator.md             # Test generation specialist
│   ├── runner.md                # Test execution specialist
│   └── live-tester.md           # Live testing specialist
├── commands/                     # User interfaces
│   ├── install.md               # Installation command
│   ├── generate.md              # Test generation command
│   ├── run.md                   # Test execution command
│   └── test.md                  # Live testing command
└── .mcp.json                    # MCP server configuration
```

### Best Practices
- Use data-testid selectors for stability
- Implement proper wait strategies
- Include comprehensive assertions
- Use single-file test structure with inline utilities
- Handle test data through environment variables
- Provide clear test documentation

## Requirements

- Node.js and npm/yarn
- Modern web browser
- Claude Code with MCP support

## Version History

### v2.0.0
- Complete architecture overhaul
- Modular skills and specialized agents
- Clean command interfaces
- Enhanced performance and maintainability

### v1.0.0
- Initial monolithic implementation
- Basic Playwright integration
- Single agent approach

## Contributing

This plugin follows clean architecture principles:
- Modular design for maintainability
- Specialized agents for performance
- Reusable skills for consistency
- Clear separation of concerns

## Support

For issues and feature requests, refer to the comprehensive documentation in the `docs/` directory or check the command help for detailed usage information.
