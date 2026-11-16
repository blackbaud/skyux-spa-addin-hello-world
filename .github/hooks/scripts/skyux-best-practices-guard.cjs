/*
 * DO NOT MODIFY - This file is managed by SKY UX; edits will be overwritten on the next update.
 *
 * SessionStart hook for Claude Code and GitHub Copilot: injects the SKY UX
 * workflow reminder. Referenced from .claude/settings.json and
 * .github/hooks/skyux-best-practices.json.
 */
'use strict';

process.stdout.write(
  JSON.stringify({
    hookSpecificOutput: {
      hookEventName: 'SessionStart',
      additionalContext:
        'This is a SKY UX project. Before any SKY UX/Angular work, call the SKY UX ' +
        'best-practices MCP tool (skyux_get_best_practices) and follow its ' +
        'guidance. See AGENTS.md for details.',
    },
  }),
);
