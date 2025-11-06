---
description: Execute live E2E tests with visible browser for real-time observation and debugging
argument-hint: [url-or-spec] [browser-options]
---

# Live Testing

Execute live tests with the Live Tester agent. Tests run with visible browser for observation and debugging.

## Usage
```
/venturo-e2e-web:test [target] [options]
```

## Target Options
- `url` - Test specific URL or endpoint
- `file` - Execute specific test file
- `scenario` - Run testing scenario
- `demo` - Demonstration workflow

## Browser & Device Options
- `--browser=chromium|firefox|webkit` - Browser choice
- `--device=desktop|mobile|tablet` - Device simulation
- `--viewport=WxH` - Custom viewport
- `--slowmo=ms` - Slow execution (default: 150ms)

## Live Testing Options
- `--debug` - Enable browser DevTools
- `--screenshots` - Capture screenshots
- `--video` - Record session
- `--keep-alive=seconds` - Keep browser open (default: 30s)

## Examples
```bash
/venturo-e2e-web:test https://example.com
/venturo-e2e-web:test tests/login.spec.ts --browser=chromium
/venturo-e2e-web:test demo --slowmo=300 --screenshots
/venturo-e2e-web:test scenario --device=mobile --debug
```

## Workflow
1. Browser launches with configuration
2. Execute test steps with live narration
3. Capture visual evidence (screenshots/video)
4. Provide findings with recommendations
