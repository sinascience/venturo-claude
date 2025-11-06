# Plugin Integration Flow: venturo-e2e-web

Dokumentasi tentang bagaimana command, agent, dan skill bekerja sama dalam plugin venturo-e2e-web.

## Architecture Overview

```
USER INPUT
    ↓
┌─────────────────────────────────────────────────────────┐
│ COMMANDS (Explicit Trigger)                             │
│ - /generate → calls Test Generator agent                │
│ - /install  → calls Playwright Installer agent          │
│ - /run      → calls Test Runner agent                   │
│ - /test     → calls Live Tester agent                   │
└─────────────────────────────────────────────────────────┘
    ↓
┌─────────────────────────────────────────────────────────┐
│ AGENTS (Claude Auto-selects or Explicit Invocation)     │
│ - generator.md    → MUST USE generate Skill             │
│ - installer.md    → MUST USE install Skill             │
│ - runner.md       → MUST USE execute Skill             │
│ - live-tester.md  → MUST USE live-test Skill           │
└─────────────────────────────────────────────────────────┘
    ↓
┌─────────────────────────────────────────────────────────┐
│ SKILLS (Automatic Discovery - SOPs & Procedures)        │
│ - generate/SKILL.md    → SOP-G001 through SOP-G017     │
│ - install/SKILL.md     → SOP-PI-001 through SOP-PI-009 │
│ - execute/SKILL.md     → SOP-TE-001 through SOP-TE-011 │
│ - live-test/SKILL.md   → SOP-LT-001 through SOP-LT-008 │
└─────────────────────────────────────────────────────────┘
    ↓
OUTPUT & RESULTS
```

## Workflow Details

### 1. Test Generation Workflow

**Command Trigger:**
```bash
/generate [mode] [options]
```

**Flow:**
```
/generate command
  ↓
"Use the Test Generator agent to..."
  ↓
Claude invokes Test Generator agent
  ↓
Agent consults generate Skill for SOPs
  ↓
Agent follows SOP-G001 through SOP-G017
  ↓
Generated test files in tests/{feature-name}/{scenario}.spec.ts
  ↓
Environment config: tests/.env
```

**Key SOPs Used:**
- **SOP-G001**: Interactive Story Mode Generation (4-step workflow)
- **SOP-G002**: Exploratory Codebase Analysis
- **SOP-G003**: Interactive Test File Standards
- **SOP-G004**: Environment File Management (MANDATORY)
- **SOP-G005**: Configuration Externalization (MANDATORY)
- **SOP-G007**: Test Quality Validation
- **SOP-G012**: Focused Mode Selection Workflow (MANDATORY)
- **SOP-G015**: Single-File Test Structure Validation (MANDATORY)
- **SOP-G016**: Feature-Based Grouping Enforcement (MANDATORY)
- **SOP-G017**: Story Mode Feature Identification (MANDATORY)

**Output:**
- Self-contained test files (1 scenario = 1 file)
- Feature-based directory organization
- Environment configuration (.env)
- Ready for VPS deployment

---

### 2. Playwright Installation Workflow

**Command Trigger:**
```bash
/install [options]
```

**Flow:**
```
/install command
  ↓
"Use the Playwright Installer agent to..."
  ↓
Claude invokes Playwright Installer agent
  ↓
Agent consults install Skill for SOPs
  ↓
Agent follows SOP-PI-001 through SOP-PI-009
  ↓
✓ Playwright installed
✓ Browsers configured
✓ Environment validated
```

**Key SOPs Used:**
- **SOP-PI-001**: Environment Validation
- **SOP-PI-002**: Package Installation
- **SOP-PI-003**: Browser Installation
- **SOP-PI-004**: Configuration Setup
- **SOP-PI-005**: Configuration Validation
- **SOP-PI-006**: Installation Testing
- **SOP-PI-008**: Error Handling
- **SOP-PI-009**: Maintenance & QA

**Output:**
- Playwright framework installed
- Browsers ready for testing
- Configuration files created
- Environment ready for test generation/execution

---

### 3. Test Execution Workflow

**Command Trigger:**
```bash
/run [scope] [options]
```

**Flow:**
```
/run command
  ↓
"Use the Test Runner agent to..."
  ↓
Claude invokes Test Runner agent
  ↓
Agent consults execute Skill for SOPs
  ↓
Agent follows SOP-TE-001 through SOP-TE-011
  ↓
Tests executed with comprehensive reporting
  ↓
Results analyzed with actionable insights
```

**Key SOPs Used:**
- **SOP-TE-001**: Environment Validation
- **SOP-TE-002**: Development Mode Execution
- **SOP-TE-003**: CI/CD Mode Execution
- **SOP-TE-004**: Debug Mode Execution
- **SOP-TE-005**: Parallel Execution
- **SOP-TE-006**: Progress Monitoring
- **SOP-TE-007**: Failure Handling
- **SOP-TE-008**: Result Collection
- **SOP-TE-009**: Comprehensive Reporting
- **SOP-TE-010**: Failure Analysis
- **SOP-TE-011**: Performance Optimization

**Output:**
- HTML test reports
- Pass/fail statistics
- Performance metrics
- Failure analysis
- Optimization recommendations

---

### 4. Live Testing Workflow

**Command Trigger:**
```bash
/test [target] [options]
```

**Flow:**
```
/test command
  ↓
"Use the Live Tester agent to..."
  ↓
Claude invokes Live Tester agent
  ↓
Agent consults live-test Skill for SOPs
  ↓
Agent follows SOP-LT-001 through SOP-LT-008
  ↓
Real-time browser testing with visual evidence
  ↓
Interactive debugging and validation
```

**Key SOPs Used:**
- **SOP-LT-001**: Browser Setup
- **SOP-LT-002**: Application Navigation
- **SOP-LT-003**: Interactive Testing
- **SOP-LT-004**: Element Validation
- **SOP-LT-005**: Debugging Information Collection
- **SOP-LT-006**: Visual Evidence Capture
- **SOP-LT-007**: Session Management
- **SOP-LT-008**: Analysis & Reporting

**Output:**
- Screenshots and visual evidence
- Live debugging information
- Performance analysis
- Testing session report
- Recommendations for improvements

---

## Key Design Principles

### 1. **Explicit Integration**
- Commands explicitly reference agents
- Agents explicitly reference skills
- No implicit/automatic tool loading
- Clear chain of responsibility

### 2. **SOP-Driven Execution**
- Agents follow Standard Operating Procedures from skills
- Each skill has numbered SOPs (SOP-PREFIX-###)
- SOPs include MANDATORY checkpoints
- Quality standards enforced at each level

### 3. **Separation of Concerns**
- **Commands**: User-facing triggers
- **Agents**: Decision-making and coordination
- **Skills**: Comprehensive capability documentation and procedures

### 4. **Skill Auto-Discovery**
- Skills loaded automatically when agents invoke them
- Skills match agents based on context
- SOPs provide structure and best practices
- Agent doesn't override skill procedures

---

## Implementation Status

### ✅ Completed

1. **Plugin.json Fixed**
   - Removed invalid `agents` field
   - Removed invalid `skills` field
   - Kept only valid fields: `name`, `version`, `description`, `author`, `license`, `mcpServers`, `keywords`

2. **Agent Frontmatter Fixed**
   - Updated to spec: `description` + `capabilities` only
   - Removed invalid fields: `tools`, `allowed-tools`, `model`, `name`, `color`

3. **Commands Updated**
   - All 4 commands explicitly reference their corresponding agents
   - Command description includes agent invocation instruction

4. **Agents Updated**
   - All 4 agents explicitly reference their corresponding skills
   - Added "MUST USE" skill references
   - Listed relevant SOPs for each skill

---

## Testing Integration

To verify the integration works:

1. **Start Claude Code**
   ```bash
   cd /Users/wahyuagung/Sites/Projects/venturo/venturo-claude
   claude --debug
   ```

2. **Execute command**
   ```
   /generate
   ```

3. **Verify agent invocation**
   - Claude should automatically invoke the Test Generator agent
   - Agent should reference the generate Skill
   - Output should include SOP references

4. **Check debug logs**
   - Should show plugin loading
   - Should show agent selection
   - Should show skill invocation

---

## File Locations

```
plugins/venturo-e2e-web/
├── .claude-plugin/
│   └── plugin.json                 # ✅ Fixed (no agents/skills fields)
│
├── commands/                        # ✅ Updated (explicit agent references)
│   ├── generate.md                 # → Test Generator agent
│   ├── install.md                  # → Playwright Installer agent
│   ├── run.md                      # → Test Runner agent
│   └── test.md                     # → Live Tester agent
│
├── agents/                          # ✅ Updated (explicit skill references)
│   ├── generator.md                # → generate Skill
│   ├── installer.md                # → install Skill
│   ├── runner.md                   # → execute Skill
│   └── live-tester.md              # → live-test Skill
│
└── skills/                          # ✅ Verified (proper structure)
    ├── generate/SKILL.md           # SOP-G001 through SOP-G017
    ├── install/SKILL.md            # SOP-PI-001 through SOP-PI-009
    ├── execute/SKILL.md            # SOP-TE-001 through SOP-TE-011
    └── live-test/SKILL.md          # SOP-LT-001 through SOP-LT-008
```

---

## Next Steps

1. **Restart Claude Code** to reload plugin with fixes
2. **Test each command** to verify agent/skill invocation
3. **Verify SOP compliance** in agent responses
4. **Monitor debug output** for any loading issues
5. **Iterate based on feedback** from agent behavior

---

## Reference Documentation

- [Claude Code Plugins Documentation](https://code.claude.com/docs/en/plugins)
- [Claude Code Slash Commands](https://code.claude.com/docs/en/slash-commands)
- [Claude Code Subagents](https://code.claude.com/docs/en/sub-agents)
- [Claude Code Agent Skills](https://code.claude.com/docs/en/skills)
