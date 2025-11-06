---
description: Execute live E2E tests with visible browser for real-time observation and debugging
argument-hint: [target] [options]
---

# Live Testing

**Use the Live Tester agent to execute live E2E tests with visible browser for real-time observation and debugging.**

The Live Tester agent manages interactive test execution with browser visibility, debugging tools, and real-time feedback.

## Usage
```
/venturo-e2e-web:test [target] [options]
```

## Target Options
- `url` - Test specific URL or endpoint
- `file` - Execute specific test file in live mode
- `scenario` - Run custom testing scenario
- `demo` - Demonstration workflow
- (no target) - Interactive target selection

## Browser & Device Options
- `--browser=chromium|firefox|webkit` - Browser choice (default: chromium)
- `--device=desktop|mobile|tablet` - Device simulation
- `--viewport=WxH` - Custom viewport dimensions
- `--slowmo=ms` - Slow execution for observation (default: 150ms)

## Live Testing Options
- `--debug` - Enable browser DevTools
- `--screenshots` - Capture screenshots at key steps
- `--video` - Record test session
- `--keep-alive=seconds` - Keep browser open after test (default: 30s)

## Examples
```bash
/venturo-e2e-web:test https://example.com                    # Live URL testing
/venturo-e2e-web:test tests/login.spec.ts                    # Test file live mode
/venturo-e2e-web:test scenario --device=mobile               # Mobile device simulation
/venturo-e2e-web:test demo --slowmo=300 --screenshots        # Demo with visuals
/venturo-e2e-web:test https://example.com --debug            # Debug mode
```

## Live Testing Includes
- Real-time browser execution with visibility
- Browser DevTools integration
- Screenshot/video capture capability
- Interactive step execution
- Real-time console monitoring
- Session artifact collection

## Output
Returns:
- Test execution status
- Captured screenshots/videos
- Console logs and network activity
- Interactive findings summary
- Debugging recommendations
