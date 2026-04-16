# AGENTS.md

## Cursor Cloud specific instructions

This is a skeleton repository for **LyrIQ** ("The official website for LyrIQ"). As of the initial setup, the repo contains only a `README.md`—there is no application code, no package manager lockfile, no build system, and no services.

### Current state
- **Runtime available:** Node.js v22, npm 10, Python 3.12 (pre-installed on the VM).
- **No dependencies to install** — no `package.json`, `requirements.txt`, or similar exists yet.
- **No lint, test, or build commands** — these will be added when application code is introduced.

### When application code is added
Future agents should re-examine the repo for:
1. A `package.json` / `pnpm-lock.yaml` / `yarn.lock` / `package-lock.json` and run the matching install command.
2. Lint (`npm run lint`, `pnpm lint`, etc.), test (`npm test`), and build/dev (`npm run dev`) scripts.
3. Any Docker / docker-compose services that need to be started.

Until then, there is nothing to install, build, or run.
