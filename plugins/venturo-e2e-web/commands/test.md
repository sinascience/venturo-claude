---
description: Execute live E2E tests with visible browser for real-time observation and debugging
argument-hint: [url-or-spec] [browser-options]
---

# Live Testing

**Use the Live Tester agent to execute E2E tests in real-time with visible browser for observation, debugging, and interactive testing scenarios.**

The Live Tester agent provides hands-on testing capabilities with live observation and immediate feedback for validation and debugging.

## Usage
```
/venturo-e2e-web:test [target] [options]
```

## Target Options
- `url` - Test specific URL or application endpoint
- `file` - Execute specific test file in live mode
- `scenario` - Run custom testing scenario
- `demo` - Execute demonstration workflow

## Browser Options
- `--browser=chromium` - Use Chrome browser (default)
- `--browser=firefox` - Use Firefox browser
- `--browser=webkit` - Use Safari browser
- `--device=desktop|mobile|tablet` - Simulate device type
- `--viewport=WxH` - Custom viewport dimensions
- `--slowmo=ms` - Slow execution for observation (default: 150ms)

## Live Features
- `--headed` - Run with visible browser (always on for live testing)
- `--debug` - Enable browser DevTools
- `--screenshots` - Capture screenshots at key steps
- `--video` - Record session video
- `--keep-alive=seconds` - Keep browser open after completion (default: 30s)

## Examples
```bash
/venturo-e2e-web:test https://example.com
/venturo-e2e-web:test tests/login.spec.ts --browser=chromium
/venturo-e2e-web:test demo --slowmo=300 --screenshots
/venturo-e2e-web:test scenario --device=mobile --debug
```

## Live Testing Workflow

### 1. Browser Launch
- Start visible browser with specified configuration
- Set up viewport and device emulation
- Configure debugging tools and observation options
- Prepare testing environment

### 2. Real-time Execution
- Execute test steps with live narration
- Capture screenshots and videos at key points
- Monitor console logs and network activity
- Provide step-by-step progress updates

### 3. Interactive Features
- Pause execution for manual inspection
- Allow manual intervention and testing
- Capture user interactions and feedback
- Document findings with visual evidence

### 4. Session Management
- Control browser session duration
- Keep browser open for exploration
- Save session artifacts and recordings
- Provide session summary and recommendations

## Testing Scenarios

### User Journey Testing
- Complete end-to-end user workflows
- Multi-step form processes
- Shopping cart and checkout flows
- Authentication and authorization scenarios

### Interactive Debugging
- Step-by-step test execution
- Element inspection and validation
- Network request monitoring
- Performance analysis

### Responsive Testing
- Mobile device simulation
- Tablet layout testing
- Desktop viewport testing
- Orientation change testing

### Accessibility Testing
- Screen reader compatibility
- Keyboard navigation testing
- Color contrast validation
- Focus management testing

## Live Debugging Tools

### Browser Controls
- Navigate to URLs and pages
- Click elements and interact with forms
- Scroll and zoom pages
- Capture screenshots and recordings

### Observation Features
- Real-time console log monitoring
- Network request tracking
- Element state inspection
- Performance metrics collection

### Documentation Tools
- Automatic screenshot capture
- Session recording and playback
- Finding documentation with evidence
- Test summary and report generation

## Output and Reporting

### Session Summary
- Testing scenario and objectives
- Browser and device configuration
- Step-by-step execution results
- Issues identified and resolutions

### Visual Evidence
- Screenshots at key test points
- Session video recordings
- Element state documentation
- Error captures with context

### Recommendations
- Identified bugs and issues
- Performance optimization suggestions
- User experience improvements
- Testing strategy enhancements

## Best Practices

- Use descriptive step narration for clarity
- Capture screenshots at important test points
- Monitor console errors and network issues
- Document findings with specific details
- Provide actionable recommendations
- Test across multiple devices and browsers
- Validate both functional and non-functional requirements

## Error Handling

Provides comprehensive error support:
- Screenshot capture on failures
- Console error logging and analysis
- Network failure investigation
- Element not found troubleshooting
- Performance issue identification
- Step-by-step debugging guidance
