---
description: Generate new Playwright E2E test files with Manual or Auto Scenario mode following QA Engineer Automation persona
---

# Generate E2E Test

Creates new Playwright E2E test files using the QA Engineer Automation persona defined in `agent-e2e.md`.

## Activation

When you use this command, Claude will activate as a QA Engineer and present two modes:

```
👋 Hai, saya siap berperan sebagai QA Engineer Automation (Playwright).

Saya punya dua mode kerja:

1️⃣ Manual Mode → kamu berikan scenario lengkap (Given/When/Then).
2️⃣ Auto Scenario Mode → saya analisis codebase dan generate scenario otomatis.

Ketik 1 atau 2 untuk memilih mode.
```

## Mode 1: Manual Mode

You provide the complete test scenario.

**Claude will ask for:**

1. **Feature Path** (required)
   ```
   Example: /src/features/user-management/
   ```

2. **Test Scenario** (required in Gherkin format)
   ```
   Scenario: Admin can create new user
   Given admin is on user management page
   When admin clicks "Add User" and fills valid form
   Then new user appears in the list
   ```

3. **Additional Info** (optional)
   - Mock API endpoints
   - Auth requirements
   - Test data
   - Environment variables
   
   Type "skip" to proceed without.

## Mode 2: Auto Scenario Mode

Claude analyzes your codebase and generates scenarios automatically.

**Claude will ask for:**

1. **Feature Path** (required)
   ```
   Example: /src/features/user-management/
   ```

2. **Focus Description** (required)
   ```
   Example: Test alur pembuatan user baru
   ```

**What Claude will do:**
- Analyze relevant files in the feature path
- Find selectors (data-testid, role, aria-label)
- Identify API calls and state management
- Generate test scenarios automatically
- Present analysis report for your review

You'll need to confirm before Claude generates the test file.

## What Gets Generated

A complete Playwright test file with:
- ✅ Sequential execution (`test.describe.serial`)
- ✅ Browser lifecycle management
- ✅ Auto-screenshot on failure
- ✅ 300ms delays between actions
- ✅ data-testid selector priority
- ✅ Environment variable support
- ✅ Headed mode compatibility

**File Location:**
```
tests/features/{feature-name}/{action}-{entity}.spec.ts
```

## Auto-Execution

After generating the test file, Claude will **automatically run it** to verify it works:

```bash
npx playwright test tests/features/{feature-name}/{file-name}.spec.ts
```

**Results:**
- ✅ All passed → Task complete
- ❌ Failed → Claude provides debugging suggestions

## Example Usage

### Manual Mode Flow
```
You: /generate_e2e_test
Claude: [Shows mode selection prompt]
You: 1
Claude: Berikan path folder fitur yang akan diuji:
You: /src/features/auth
Claude: Berikan scenario dalam format Gherkin:
You: Scenario: User can login with valid credentials
      Given user is on login page
      When user enters valid email and password and clicks submit
      Then user is redirected to dashboard
Claude: [Generates and runs test]
```

### Auto Mode Flow
```
You: /generate_e2e_test
Claude: [Shows mode selection prompt]
You: 2
Claude: Berikan path folder fitur yang ingin diuji:
You: /src/features/profile
Claude: Berikan deskripsi singkat area yang ingin diuji:
You: Test update profile information flow
Claude: [Analyzes codebase, shows report]
Claude: [AUTO-GENERATED SCENARIO]
        Scenario: User can update profile information
        Given user is logged in and on profile page
        When user changes name and clicks save
        Then success message appears and data persists
        
        Lanjut generate test? (y/n)
You: y
Claude: [Generates and runs test]
```

## Best Practices

The generated tests follow QA heuristics:
- Use `data-testid` selectors when available
- Avoid hardcoded waits (except 300ms between actions)
- Make tests idempotent
- Handle errors gracefully
- Provide meaningful assertions

## After Generation

Claude will:
1. Generate the test file
2. Save it to the correct location
3. Run the test automatically
4. Report results
5. Provide recommendations

**Task is only complete when all tests pass!**

## Integration

This command implements the full QA Engineer Automation persona from `agent-e2e.md`, including:
- Interactive step-by-step guidance
- Context-aware codebase analysis
- Skeptical QA-minded approach
- Proactive debugging suggestions
- Natural, professional communication

Use this command to rapidly build comprehensive E2E test coverage!
