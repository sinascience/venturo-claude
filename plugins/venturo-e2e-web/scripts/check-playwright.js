#!/usr/bin/env node

/**
 * Playwright Installation Checker
 * Validates Playwright installation and browser binaries
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function checkCommand(command, errorMessage) {
  try {
    execSync(command, { stdio: 'pipe' });
    return true;
  } catch (error) {
    log(`✗ ${errorMessage}`, 'red');
    return false;
  }
}

function checkPackageJson() {
  log('\n📦 Checking package.json...', 'blue');
  
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  
  if (!fs.existsSync(packageJsonPath)) {
    log('✗ package.json not found', 'red');
    return false;
  }
  
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  const deps = { ...packageJson.dependencies, ...packageJson.devDependencies };
  
  if (deps['@playwright/test']) {
    log(`✓ @playwright/test installed (${deps['@playwright/test']})`, 'green');
    return true;
  } else {
    log('✗ @playwright/test not found in package.json', 'red');
    return false;
  }
}

function checkPlaywrightCLI() {
  log('\n🎭 Checking Playwright CLI...', 'blue');
  
  try {
    const version = execSync('npx playwright --version', { encoding: 'utf8' }).trim();
    log(`✓ Playwright CLI available: ${version}`, 'green');
    return true;
  } catch (error) {
    log('✗ Playwright CLI not accessible', 'red');
    return false;
  }
}

function checkBrowsers() {
  log('\n🌐 Checking browser binaries...', 'blue');
  
  try {
    const output = execSync('npx playwright install --dry-run', { encoding: 'utf8' });
    
    if (output.includes('is already installed')) {
      log('✓ All browser binaries are installed', 'green');
      return true;
    } else {
      log('⚠ Some browsers may need installation', 'yellow');
      log('Run: npx playwright install', 'yellow');
      return false;
    }
  } catch (error) {
    log('✗ Cannot verify browser installation', 'red');
    return false;
  }
}

function checkNodeVersion() {
  log('\n📌 Checking Node.js version...', 'blue');
  
  const version = process.version;
  const major = parseInt(version.slice(1).split('.')[0]);
  
  if (major >= 18) {
    log(`✓ Node.js ${version} (>= 18 required)`, 'green');
    return true;
  } else {
    log(`✗ Node.js ${version} is too old (>= 18 required)`, 'red');
    return false;
  }
}

function checkTestDirectory() {
  log('\n📁 Checking test directory structure...', 'blue');
  
  const testDir = path.join(process.cwd(), 'tests');
  
  if (fs.existsSync(testDir)) {
    log(`✓ tests/ directory exists`, 'green');
    return true;
  } else {
    log('⚠ tests/ directory not found (will be created on first test generation)', 'yellow');
    return true; // Not a critical error
  }
}

function main() {
  log('═══════════════════════════════════════════', 'blue');
  log('   Playwright E2E Setup Validation', 'blue');
  log('═══════════════════════════════════════════', 'blue');
  
  const checks = [
    checkNodeVersion(),
    checkPackageJson(),
    checkPlaywrightCLI(),
    checkBrowsers(),
    checkTestDirectory()
  ];
  
  const allPassed = checks.every(result => result === true);
  
  log('\n═══════════════════════════════════════════', 'blue');
  
  if (allPassed) {
    log('✅ All checks passed! Ready for E2E testing.', 'green');
    process.exit(0);
  } else {
    log('❌ Some checks failed. Please fix the issues above.', 'red');
    log('\n💡 Quick fix commands:', 'yellow');
    log('   npm install -D @playwright/test', 'yellow');
    log('   npx playwright install', 'yellow');
    process.exit(1);
  }
}

main();
