# venturo-claude Project Overview

## Project Information
- **Name**: venturo-claude
- **Path**: /Users/wahyuagung/Sites/Projects/venturo/venturo-claude
- **Language**: TypeScript
- **Type**: Claude Code Plugin Development
- **Encoding**: UTF-8

## Project Purpose
This is a Claude Code plugin repository focused on E2E testing automation. The main component is the venturo-e2e-web plugin that provides comprehensive Playwright-based testing capabilities.

## Key Components
1. **venturo-e2e-web Plugin** (v2.0.0)
   - Modular architecture with specialized agents
   - 4 main commands: install, generate, run, test
   - MCP integration for browser automation
   - Comprehensive documentation

2. **Plugin Architecture**
   - **Agents**: installer, generator, runner, live-tester
   - **Skills**: installation, generation, execution, live-testing
   - **Commands**: user interfaces for each capability

3. **Documentation**
   - README with architecture overview
   - Command documentation
   - Onboarding guide for new users

## Project Structure
```
venturo-claude/
├── plugins/
│   └── venturo-e2e-web/
│       ├── .claude-plugin/plugin.json
│       ├── .mcp.json
│       ├── agents/ (4 specialized agents)
│       ├── commands/ (4 user commands)
│       ├── skills/ (4 modular skills)
│       └── README.md
├── docs/
│   └── onboarding.md
└── .serena/
    └── project.yml
```

## Technologies Used
- **TypeScript**: Primary development language
- **Playwright**: E2E testing framework
- **MCP (Model Context Protocol)**: Browser automation
- **Claude Code**: Plugin framework
- **JSON/YAML**: Configuration files
- **Markdown**: Documentation

## Key Features
- Modular plugin architecture
- Specialized agents for focused functionality
- Reusable skills across agents
- Interactive test generation modes
- Multi-environment support
- Comprehensive reporting
- Real-time browser testing

## Development Status
✅ Plugin fully developed and documented
✅ All commands implemented and functional
✅ Onboarding process established
✅ Serena project configuration created
✅ Memory system integrated