---
description: Generate Playwright E2E test cases from user stories and application analysis
argument-hint: [mode]
---

# Test Generation

**Use the Test Generator agent to generate E2E test cases from user stories or application analysis.**

## Usage
```
/venturo-e2e-web:generate [mode] [options]
```

## Modes
- `manual` - Step-by-step test generation with guidance
- `story` - Generate from user stories (4-step collaborative process)
- (no mode) - Interactive mode selection

## Options
- `--source=path` - Source file or directory to analyze
- `--browser=chromium|firefox|webkit` - Target browser
- `--device=desktop|mobile|tablet` - Target device

## Examples
```bash
/venturo-e2e-web:generate                    # Interactive mode selection
/venturo-e2e-web:generate story --source=./requirements.md
/venturo-e2e-web:generate manual --browser=chromium
```

## Output
- Test files: `tests/{feature}/{scenario}.spec.ts`
- Config: `tests/.env`
- Structure: Feature-based, 1 scenario per file