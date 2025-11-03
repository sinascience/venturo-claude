#!/usr/bin/env node

/**
 * Playwright Headed Browser Configuration Helper
 * 
 * This script provides configuration for running Playwright in headed mode
 * (visible browser) for live E2E testing demonstrations.
 */

const config = {
  // Browser launch options for live testing
  launchOptions: {
    headless: false,          // Show browser UI
    slowMo: 500,             // Slow down by 500ms for observation
    devtools: false,         // Don't open DevTools by default
    args: [
      '--start-maximized',   // Start browser maximized
      '--disable-blink-features=AutomationControlled', // Less detectable
      '--no-sandbox',        // Required in some environments
      '--disable-setuid-sandbox'
    ]
  },

  // Browser context options
  contextOptions: {
    viewport: {
      width: 1280,
      height: 720
    },
    recordVideo: {
      dir: './test-results/videos',
      size: { width: 1280, height: 720 }
    },
    screenshot: 'only-on-failure' // Can be 'on', 'off', 'only-on-failure'
  },

  // Default timeouts
  timeouts: {
    navigationTimeout: 30000,  // 30 seconds for page navigation
    actionTimeout: 10000,      // 10 seconds for actions (click, fill, etc.)
    waitTimeout: 5000          // 5 seconds for element waits
  },

  // Screenshot configuration
  screenshots: {
    enabled: true,
    path: './test-results/screenshots',
    fullPage: false,           // false = viewport only (faster)
    quality: 90                // JPEG quality (1-100)
  }
};

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
  module.exports = config;
}

// CLI usage
if (require.main === module) {
  console.log('🎭 Playwright Headed Mode Configuration\n');
  console.log('Launch Options:');
  console.log(JSON.stringify(config.launchOptions, null, 2));
  console.log('\nContext Options:');
  console.log(JSON.stringify(config.contextOptions, null, 2));
  console.log('\nTimeouts:');
  console.log(JSON.stringify(config.timeouts, null, 2));
  console.log('\nScreenshots:');
  console.log(JSON.stringify(config.screenshots, null, 2));
  console.log('\n✅ Configuration ready for live E2E testing');
}
