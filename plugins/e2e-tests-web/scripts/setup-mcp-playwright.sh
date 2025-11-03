#!/bin/bash

# Setup MCP Playwright Script
# This script ensures Playwright MCP server is properly configured

set -e

echo "🔧 Setting up Playwright MCP Server..."

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if npx is available
if ! command -v npx &> /dev/null; then
    echo -e "${RED}❌ npx not found. Please install Node.js first.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ npx found${NC}"

# Check if @playwright/mcp-server can be accessed
echo "📦 Verifying Playwright MCP server package..."
if npx -y @playwright/mcp-server --version &> /dev/null; then
    echo -e "${GREEN}✅ Playwright MCP server is accessible${NC}"
else
    echo -e "${YELLOW}⚠️  Playwright MCP server package not found, but will be installed on first use via npx -y${NC}"
fi

echo ""
echo -e "${GREEN}✨ Setup complete!${NC}"
echo ""
echo "ℹ️  The Playwright MCP server will be automatically available via:"
echo "   - Command: npx -y @playwright/mcp-server"
echo "   - MCP server name: 'playwright'"
echo ""
echo "📚 Documentation: https://github.com/microsoft/playwright-mcp"
echo ""
