# Agent Guidelines

This file provides instructions for AI agents (Copilot, Claude, Antigravity, Jules, etc.) working on this repository.

---

## Communication Mode: Caveman Ultra

**Enabled by default for all sessions.** Ultra-compressed technical communication with ~75% token reduction.

- Drops articles, filler, pleasantries
- Abbreviates prose (DB/auth/config/req/res/fn/impl)
- Uses arrows for causality (X → Y)
- Keeps technical terms exact, code symbols unchanged
- Security warnings & destructive ops: auto-revert to normal clarity
- **Disable:** Say "stop caveman" or "normal mode"
- **Adjust level:** Say `/caveman lite|full|ultra|wenyan-lite|wenyan-full|wenyan-ultra`

See `.agents/skills/caveman/SKILL.md` for full spec.

---

## Changelog & Versioning Management

When committing functional changes, you MUST update the "Release History" section in `index.html`.

### Rules for Updates:
- **Functional Commits Only:** Only update the changelog if the commit is functional and understandable by the user.
- **Ignore Technical Commits:** Do not update the changelog for technical commits such as:
  - Merges
  - Internal refactors (unless they impact user experience)
  - Documentation updates for the repository itself
  - Administrative or CI/CD updates
- **Versioning Scheme:** Use the `MAJOR.MINOR` format.
  - **MINOR:** Increment the minor version (e.g., v1.4 -> v1.5) by default for new features or improvements.
  - **MAJOR:** Increment the major version (e.g., v1.5 -> v2.0) only for significant evolutions or breaking changes.

### How to Update `index.html`:
1.  **Update Version Number:**
    - Update the `<title>` tag in the `<head>` section.
    - Update the version number displayed in the `<h1>` tag within the `<header>`.
2.  **Add Changelog Entry:**
    - Locate the `<!-- Changelog Section -->` in `index.html`.
    - Add a new version block at the top of the list.
    - Set the new block's container class to include `is-active`.
    - Remove the `is-active` class from the previous latest version block.
    - Update the `time` tag classes for the previous version to reflect its inactive status (e.g., change `text-blue-600 font-bold bg-blue-50` to `text-slate-500 font-bold bg-slate-100`).
