---
# DO NOT MODIFY - This file is managed by SKY UX; edits will be overwritten on the next update.
name: skyux
description: Use for any work in a SKY UX (Blackbaud design system) project — recognizable by a root-level `skyuxconfig.json`, `@skyux/*` dependencies in `package.json`, or `sky-*` Angular components. Provides access to the SKY UX MCP server for authoritative component APIs, test harnesses, design guidelines, and migration/upgrade guidance, so tasks like adding or modifying SKY UX components, writing SKY UX tests, or fixing SKY UX styling and accessibility are backed by current documentation instead of stale training data.
target: github-copilot
mcp-servers:
  angular-cli:
    type: local
    command: npx
    args: ['-y', '@angular/cli@22', 'mcp']
    tools: ['*']
  skyux-cli:
    type: local
    command: npx
    args: ['-y', '@blackbaud-internal/skyux-cli@latest', 'mcp']
    tools: ['*']
    env:
      AZURE_DEVOPS_PAT: ${COPILOT_MCP_AZURE_DEVOPS_PAT:-}
---

# SKY UX Agent

Repo-level Copilot cloud agent that bundles SKY UX MCP access for design-system work.

## Use the SKY UX MCP server

This is a SKY UX project. Before any SKY UX work — planning, researching, designing, or writing or modifying code — call `skyux_get_best_practices` and follow its guidance. Also call it before invoking any other `skyux_*` MCP tool. This applies in plan/ask modes too: consult it before drafting a plan. If the `skyux_*` MCP tools are not available, ask the user to configure the SKY UX MCP server and stop until it is configured.
