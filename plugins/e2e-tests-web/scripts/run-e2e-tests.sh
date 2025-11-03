#!/bin/bash

###############################################################################
# Run E2E Tests - Playwright Test Execution Script
# Usage: ./scripts/run-e2e-tests.sh [test-file] [options]
###############################################################################

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Default values
TEST_FILE=""
HEADED=false
DEBUG=false
REPORTER="list"

# Parse arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    --headed)
      HEADED=true
      shift
      ;;
    --debug)
      DEBUG=true
      HEADED=true
      shift
      ;;
    --reporter=*)
      REPORTER="${1#*=}"
      shift
      ;;
    *)
      TEST_FILE="$1"
      shift
      ;;
  esac
done

echo -e "${BLUE}═══════════════════════════════════════════${NC}"
echo -e "${BLUE}   Playwright E2E Test Runner${NC}"
echo -e "${BLUE}═══════════════════════════════════════════${NC}"

# Check if Playwright is installed
if ! command -v npx &> /dev/null; then
    echo -e "${RED}✗ npx command not found${NC}"
    echo -e "${YELLOW}Please install Node.js and npm${NC}"
    exit 1
fi

# Validate Playwright installation
echo -e "\n${BLUE}📦 Validating Playwright installation...${NC}"
if ! npx playwright --version &> /dev/null; then
    echo -e "${RED}✗ Playwright not installed${NC}"
    echo -e "${YELLOW}Run: npm install -D @playwright/test${NC}"
    exit 1
fi

PLAYWRIGHT_VERSION=$(npx playwright --version)
echo -e "${GREEN}✓ ${PLAYWRIGHT_VERSION}${NC}"

# Build test command
CMD="npx playwright test"

if [ -n "$TEST_FILE" ]; then
  if [ ! -f "$TEST_FILE" ]; then
    echo -e "${RED}✗ Test file not found: ${TEST_FILE}${NC}"
    exit 1
  fi
  CMD="$CMD $TEST_FILE"
  echo -e "\n${BLUE}📝 Test file: ${TEST_FILE}${NC}"
else
  echo -e "\n${BLUE}📝 Running all tests${NC}"
fi

# Add options
if [ "$HEADED" = true ]; then
  export HEADED=true
  CMD="$CMD --headed"
  echo -e "${YELLOW}🔍 Mode: Headed (browser visible)${NC}"
else
  echo -e "${BLUE}🔍 Mode: Headless${NC}"
fi

if [ "$DEBUG" = true ]; then
  CMD="$CMD --debug"
  echo -e "${YELLOW}🐛 Debug mode enabled${NC}"
fi

CMD="$CMD --reporter=$REPORTER"

# Show command
echo -e "\n${BLUE}🚀 Executing:${NC} $CMD\n"
echo -e "${BLUE}═══════════════════════════════════════════${NC}\n"

# Execute tests
if eval "$CMD"; then
  echo -e "\n${BLUE}═══════════════════════════════════════════${NC}"
  echo -e "${GREEN}✅ All tests passed successfully!${NC}"
  echo -e "${BLUE}═══════════════════════════════════════════${NC}"
  exit 0
else
  EXIT_CODE=$?
  echo -e "\n${BLUE}═══════════════════════════════════════════${NC}"
  echo -e "${RED}❌ Tests failed with exit code: ${EXIT_CODE}${NC}"
  echo -e "\n${YELLOW}💡 Debugging tips:${NC}"
  echo -e "${YELLOW}   - Run with --headed flag to see browser${NC}"
  echo -e "${YELLOW}   - Run with --debug flag for step-by-step debugging${NC}"
  echo -e "${YELLOW}   - Check screenshots in test-results/ directory${NC}"
  echo -e "${BLUE}═══════════════════════════════════════════${NC}"
  exit $EXIT_CODE
fi
