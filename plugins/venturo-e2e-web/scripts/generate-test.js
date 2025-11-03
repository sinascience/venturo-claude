#!/usr/bin/env node

/**
 * Test File Generator
 * Generates Playwright test file from template
 */

const fs = require('fs');
const path = require('path');

function generateTestFile(options) {
  const {
    featureName,
    fileName,
    scenarioTitle,
    givenCondition,
    whenAction,
    thenExpectation,
    selectors = {},
    outputPath
  } = options;

  const template = `/**
 * Feature: ${featureName}
 * Scenario: ${scenarioTitle}
 *
 * Location: ${outputPath}
 * 
 * Notes:
 *  - Sequential execution
 *  - Browser tetap terbuka jika mode headed aktif
 *  - Screenshot otomatis pada error
 */

import { test, expect, chromium } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
const IS_HEADED = process.env.HEADED === 'true';

test.describe.serial('${featureName} - ${scenarioTitle}', () => {
  let browser;
  let context;
  let page;

  test.beforeAll(async () => {
    browser = await chromium.launch({ headless: !IS_HEADED });
    context = await browser.newContext({ baseURL: BASE_URL });
    page = await context.newPage();
  });

  test.afterAll(async () => {
    if (IS_HEADED) {
      console.log('Mode headed aktif — browser tetap terbuka untuk debugging.');
    } else {
      await browser.close();
    }
  });

  test.afterEach(async ({}, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
      const path = \`test-results/failure-\${testInfo.title}-\${Date.now()}.png\`;
      await page.screenshot({ path, fullPage: true });
      console.log(\`📸 Screenshot saved: \${path}\`);
    }
  });

  test('${scenarioTitle}', async () => {
    // Given: ${givenCondition}
    await page.goto('/${featureName}');
    await page.waitForTimeout(300);

    // When: ${whenAction}
    ${generateWhenSteps(selectors.action)}

    // Then: ${thenExpectation}
    ${generateThenSteps(selectors.result)}
  });
});
`;

  return template;
}

function generateWhenSteps(actionSelectors = []) {
  if (actionSelectors.length === 0) {
    return '// TODO: Add action steps';
  }
  
  return actionSelectors.map(selector => {
    return `await page.getByTestId('${selector}').click();\n    await page.waitForTimeout(300);`;
  }).join('\n    ');
}

function generateThenSteps(resultSelectors = []) {
  if (resultSelectors.length === 0) {
    return '// TODO: Add assertion steps';
  }
  
  return resultSelectors.map(selector => {
    return `await expect(page.getByTestId('${selector}')).toBeVisible();`;
  }).join('\n    ');
}

// CLI usage
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.length === 0 || args.includes('--help')) {
    console.log(`
Usage: node generate-test.js [options]

Options:
  --feature       Feature name
  --file          Output filename (without .spec.ts)
  --scenario      Scenario title
  --given         Given condition
  --when          When action
  --then          Then expectation
  --output        Output directory path

Example:
  node generate-test.js \\
    --feature "User Management" \\
    --file "create-user" \\
    --scenario "Admin can create new user" \\
    --given "admin is on user management page" \\
    --when "admin clicks Add User and fills form" \\
    --then "new user appears in the list" \\
    --output "tests/features/user-management"
    `);
    process.exit(0);
  }
  
  const options = {};
  for (let i = 0; i < args.length; i += 2) {
    const key = args[i].replace('--', '');
    const value = args[i + 1];
    options[key] = value;
  }
  
  const outputDir = options.output || 'tests/features';
  const fileName = `${options.file}.spec.ts`;
  const fullPath = path.join(outputDir, fileName);
  
  // Create directory if not exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  const testContent = generateTestFile({
    featureName: options.feature,
    fileName: options.file,
    scenarioTitle: options.scenario,
    givenCondition: options.given,
    whenAction: options.when,
    thenExpectation: options.then,
    outputPath: fullPath
  });
  
  fs.writeFileSync(fullPath, testContent, 'utf8');
  
  console.log(`✅ Test file generated: ${fullPath}`);
}

module.exports = { generateTestFile };
