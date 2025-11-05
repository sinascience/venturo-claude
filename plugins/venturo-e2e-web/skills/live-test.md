---
name: live-test
description: Live browser testing with real-time observation and debugging following standardized SOPs
tools: ["mcp__playwright__browser_*", "mcp__serena__*", "debugging"]
---

# Live Testing Skill

Provides real-time browser testing capabilities with live observation, debugging, and interactive testing features following standardized operating procedures.

## SOP: Live Testing Standard Operating Procedure

### Document Control
- **SOP ID**: LT-001
- **Version**: 2.0.0
- **Effective Date**: Current
- **Owner**: Live Testing Specialist
- **Review Schedule**: Monthly

### Purpose & Scope
Standardize live testing process to ensure consistent, real-time browser testing with comprehensive debugging, observation, and interactive testing capabilities.

### Browser Setup SOP

#### SOP-LT001: Browser Launch and Configuration
**Purpose**: Configure and launch browsers for live testing sessions

**Procedure**:
1. **Browser Selection and Launch**
   - [ ] Select appropriate browser (chromium/firefox/webkit)
   - [ ] Configure launch options (headed mode always enabled)
   - [ ] Set viewport dimensions (1280x800 default)
   - [ ] Configure browser context and permissions

2. **Testing Environment Setup**
   - [ ] Navigate to target application URL
   - [ ] Wait for page load completion
   - [ ] Verify application readiness
   - [ ] Set up testing parameters

3. **Observation Tools Configuration**
   - [ ] Enable console log monitoring
   - [ ] Configure network request tracking
   - [ ] Set up screenshot capture
   - [ ] Initialize performance monitoring

4. **Debugging Tools Activation**
   - [ ] Enable browser DevTools access
   - [ ] Configure element inspection
   - [ ] Set up step-by-step execution
   - [ ] Configure slow-motion if needed

### Interactive Testing SOP

#### SOP-LT002: Manual Interactive Testing Workflow
**Purpose**: Conduct manual testing with automated assistance and documentation

**Procedure**:
1. **Testing Scenario Execution**
   - [ ] Follow predefined test scenario steps
   - [ ] Execute user interactions systematically
   - [ ] Validate each action's result
   - [ ] Document findings in real-time

2. **Real-time Validation**
   - [ ] Verify page element visibility
   - [ ] Check element interactivity
   - [ ] Validate form behavior
   - [ ] Confirm navigation functionality

3. **Interactive Intervention**
   - [ ] Allow manual deviation from script
   - [ ] Enable user-guided exploration
   - [ ] Record unexpected behaviors
   - [ ] Document user observations

4. **Progress Documentation**
   - [ ] Capture screenshots at key points
   - [ ] Record element state changes
   - [ ] Document timing information
   - [ ] Note any issues or anomalies

### Debugging and Analysis SOP

#### SOP-LT003: Real-time Debugging Process
**Purpose**: Capture, analyze, and document issues during live testing

**Procedure**:
1. **Error Capture**
   - [ ] Monitor console for JavaScript errors
   - [ ] Capture browser error messages
   - [ ] Record stack traces
   - [ ] Document error context

2. **Network Analysis**
   - [ ] Monitor HTTP/HTTPS requests
   - [ ] Check API response statuses
   - [ ] Analyze request timing
   - [ ] Identify failed network calls

3. **Element Inspection**
   - [ ] Verify element selector validity
   - [ ] Check element properties and state
   - [ ] Validate element visibility
   - [ ] Test element interactivity

4. **Performance Analysis**
   - [ ] Monitor page load times
   - [ ] Track resource loading
   - [ ] Measure response times
   - [ ] Identify performance bottlenecks

### Device and Responsive Testing SOP

#### SOP-LT004: Multi-Device Testing Workflow
**Purpose**: Test applications across different devices and viewports

**Procedure**:
1. **Device Simulation Setup**
   - [ ] Configure mobile device simulation
   - [ ] Set tablet viewport dimensions
   - [ ] Test desktop standard views
   - [ ] Configure orientation testing

2. **Responsive Validation**
   - [ ] Test layout adaptation
   - [ ] Verify element repositioning
   - [ ] Check text readability
   - [ ] Validate touch interaction

3. **Cross-Browser Testing**
   - [ ] Test on Chromium browser
   - [ ] Test on Firefox browser
   - [ ] Test on WebKit browser
   - [ ] Compare browser-specific behaviors

4. **Orientation Testing**
   - [ ] Test portrait mode
   - [ ] Test landscape mode
   - [ ] Verify orientation transitions
   - [ ] Document responsive issues

### Quality Assurance SOP

#### SOP-LT005: Live Testing Quality Assurance
**Purpose**: Ensure live testing meets quality standards and covers critical scenarios

**Procedure**:
1. **Test Coverage Validation**
   - [ ] Verify all user journeys tested
   - [ ] Check form validation coverage
   - [ ] Validate navigation testing
   - [ ] Confirm error handling verification

2. **Documentation Quality Check**
   - [ ] Ensure comprehensive screenshots captured
   - [ ] Verify detailed issue documentation
   - [ ] Check recommendation quality
   - [ ] Validate actionability of findings

3. **Testing Consistency**
   - [ ] Verify consistent test execution
   - [ ] Check reproducible issues
   - [ ] Validate documentation format
   - [ ] Ensure proper error handling

4. **Performance Validation**
   - [ ] Verify acceptable response times
   - [ ] Check resource optimization
   - [ ] Validate memory usage
   - [ ] Document performance issues

### Session Management SOP

#### SOP-LT006: Live Testing Session Control
**Purpose**: Manage live testing sessions effectively and efficiently

**Procedure**:
1. **Session Initiation**
   - [ ] Define session objectives clearly
   - [ ] Set session time limits
   - [ ] Configure keep-alive duration
   - [ ] Prepare session documentation

2. **Session Monitoring**
   - [ ] Track session progress
   - [ ] Monitor resource usage
   - [ ] Manage browser stability
   - [ ] Handle session interruptions

3. **Session Completion**
   - [ ] Ensure all objectives covered
   - [ ] Verify documentation completeness
   - [ ] Generate session summary
   - [ ] Clean up session resources

4. **Session Reporting**
   - [ ] Create comprehensive session report
   - [ ] Include visual evidence
   - [ ] Provide actionable recommendations
   - [ ] Document next steps

### Error Handling SOP

#### SOP-LT007: Live Testing Error Management
**Purpose**: Handle errors during live testing sessions gracefully

**Procedure**:
1. **Browser Error Handling**
   - [ ] Capture browser crash information
   - [ ] Implement browser restart procedures
   - [ ] Document crash circumstances
   - [ ] Provide recovery suggestions

2. **Application Error Handling**
   - [ ] Capture application error states
   - [ ] Document error reproduction steps
   - [ ] Analyze error context
   - [ ] Provide debugging guidance

3. **Network Error Handling**
   - [ ] Capture network failure information
   - [ ] Document request failures
   - [ ] Analyze network connectivity
   - [ ] Suggest network troubleshooting

4. **System Error Handling**
   - [ ] Handle resource exhaustion
   - [ ] Manage memory issues
   - [ ] Address system limitations
   - [ ] Document system constraints

### Reporting and Documentation SOP

#### SOP-LT008: Live Testing Reporting Standards
**Purpose**: Generate comprehensive reports from live testing sessions

**Procedure**:
1. **Session Summary Creation**
   - [ ] Document session objectives
   - [ ] Record testing environment details
   - [ ] Summarize test execution results
   - [ ] Highlight key findings

2. **Visual Evidence Collection**
   - [ ] Organize screenshots chronologically
   - [ ] Annotate screenshots with details
   - [ ] Include element state documentation
   - [ ] Add context to visual evidence

3. **Issue Documentation**
   - [ ] Document each identified issue
   - [ ] Include reproduction steps
   - [ ] Provide severity assessment
   - [ ] Suggest resolution approaches

4. **Recommendation Generation**
   - [ ] Provide actionable improvement suggestions
   - [ ] Prioritize issues by severity
   - [ ] Include best practice recommendations
   - [ ] Document next testing steps

## Core Capabilities

### 1. Live Browser Control
- Launch and control browsers in real-time
- Navigate to URLs and interact with pages
- Take screenshots and capture page state
- Record browser actions and user flows

### 2. Interactive Testing
- Perform manual testing with automated assistance
- Test specific scenarios on-demand
- Validate page elements and functionality
- Check responsive design and accessibility

### 3. Debugging Support
- Capture console logs and errors
- Inspect page elements and network requests
- Analyze page performance and timing
- Identify issues and provide solutions

### 4. Real-time Observation
- Watch test execution live
- Monitor page interactions
- Track network activity
- Observe element state changes

## Live Testing Workflow

1. **Browser Setup**
   - Launch browser with specified configuration
   - Navigate to target application
   - Set up testing environment
   - Configure observation tools

2. **Interactive Testing**
   - Perform manual user interactions
   - Validate page functionality
   - Test specific scenarios
   - Record findings and issues

3. **Debugging Analysis**
   - Capture error logs and console output
   - Inspect failed elements and network requests
   - Analyze performance bottlenecks
   - Document issues with screenshots

4. **Results Documentation**
   - Summarize testing findings
   - Document identified issues
   - Provide recommendations
   - Create test reports

## Testing Scenarios

### User Journey Testing
- Complete user workflows
- Multi-step form processes
- Shopping cart flows
- Authentication processes

### Element Validation
- Form validation testing
- Button functionality checks
- Link navigation testing
- Media element verification

### Responsive Testing
- Mobile device simulation
- Tablet layout testing
- Desktop viewport testing
- Orientation change testing

### Performance Testing
- Page load time analysis
- Network request monitoring
- Resource loading verification
- Animation performance checks

## Debugging Features

### Console Monitoring
- Capture JavaScript errors
- Monitor console warnings
- Track custom log messages
- Analyze error stack traces

### Network Analysis
- Monitor HTTP requests
- Check API responses
- Verify resource loading
- Analyze request timing

### Element Inspection
- Validate element selectors
- Check element visibility
- Analyze element properties
- Verify element interactions

### Performance Metrics
- Page load times
- Resource loading times
- JavaScript execution time
- Memory usage tracking

## Live Testing Tools

### Browser Controls
- Navigate to URLs
- Click elements and buttons
- Fill forms and input fields
- Scroll and zoom pages

### Observation Tools
- Take screenshots
- Record screen videos
- Capture page HTML
- Monitor element changes

### Debugging Tools
- Browser DevTools integration
- Console log capture
- Network request monitoring
- Element inspection

### Reporting Tools
- Issue documentation
- Screenshot attachments
- Test summary reports
- Recommendation generation

## Quality Standards

- SOP compliance in all live testing procedures
- Comprehensive error handling and recovery
- Detailed documentation and evidence collection
- Performance monitoring and analysis
- Cross-browser and device testing coverage
- Real-time debugging and issue identification
- Session management and optimization
- Quality assurance validation and reporting