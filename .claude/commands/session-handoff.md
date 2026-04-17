# Session Handoff

End-of-session wrap-up for Faith Walk Live. Run this before closing out.

Do ALL of the following:

## 1. Session Summary
Write a concise summary of what was accomplished this session:
- List every feature built, bug fixed, or change shipped (with commit hashes if available)
- Note any failed attempts or decisions made
- Note the current git branch and deploy status

## 2. Update Memory
Update the project status memory file (`project_current_status.md`) with:
- What's live now
- What changed this session
- Current version number if it changed

If any new user preferences, feedback, or project context came up during the session, save those to the appropriate memory files too.

## 3. Action Items
List any action items for Thomas that don't require code (e.g., submit sitemap, post on social media, check DNS).

## 4. Next Session Queue
List what should be built next session, in priority order, based on the CLAUDE.md roadmap and any decisions made during this session.

## 5. Handoff File
Write all of the above into `docs/session-log.md`, appending a new dated entry (don't overwrite previous entries). Use this format:

```
## Session — [DATE]
### Shipped
- item
### Decisions
- item
### Thomas Action Items
- [ ] item
### Next Session
- [ ] item
```

Confirm when done so Thomas can close out cleanly.
