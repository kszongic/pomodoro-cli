# @kszongic/pomodoro-cli 🍅⏱️

> A distraction-free Pomodoro timer that lives in your terminal. Zero dependencies. Works everywhere Node runs.

[![npm version](https://img.shields.io/npm/v/@kszongic/pomodoro-cli)](https://www.npmjs.com/package/@kszongic/pomodoro-cli)
[![npm downloads](https://img.shields.io/npm/dm/@kszongic/pomodoro-cli)](https://www.npmjs.com/package/@kszongic/pomodoro-cli)
[![license](https://img.shields.io/npm/l/@kszongic/pomodoro-cli)](./LICENSE)
[![node](https://img.shields.io/node/v/@kszongic/pomodoro-cli)](https://nodejs.org)
![zero dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)
![platform](https://img.shields.io/badge/platform-win%20%7C%20mac%20%7C%20linux-blue)

```
🍅 Pomodoro Timer
Work: 25m | Break: 5m | Rounds: 4

🔴 Work   ████████████████████░░░░░░░░░░  16:42
```

## Why Another Pomodoro Timer?

Most Pomodoro apps want you to open a browser tab, install an Electron app, or sign up for an account. If you already live in the terminal, **just stay there**.

- **Zero dependencies** — nothing to break, nothing to audit
- **Cross-platform** — Windows, macOS, Linux
- **Configurable** — custom work/break durations, multiple rounds, bell notifications
- **Scriptable** — chain it with other commands, use in automation
- **Tiny** — installs in under a second

## Install

```bash
npm install -g @kszongic/pomodoro-cli
```

Or run without installing:

```bash
npx @kszongic/pomodoro-cli
```

## Quick Start

```bash
# Classic Pomodoro: 25 min work, 5 min break
pomodoro

# Deep work session: 50 min work, 10 min break, 3 rounds
pomodoro --work 50 --break 10 --rounds 3

# Quick sprint with bell notification
pomodoro --work 15 --no-break --bell
```

## Usage

```bash
# Default: 25-min work, 5-min break
pomodoro

# Custom durations
pomodoro --work 30 --break 10

# Multiple rounds (classic Pomodoro technique: 4 rounds)
pomodoro --rounds 4

# Work only, no break
pomodoro --no-break

# Ring terminal bell when each phase ends
pomodoro --bell

# Minimal output (no progress bar)
pomodoro --quiet
```

## Options

| Option | Description | Default |
|--------|-------------|---------|
| `--work <min>` | Work duration in minutes | `25` |
| `--break <min>` | Break duration in minutes | `5` |
| `--rounds <n>` | Number of work/break rounds | `1` |
| `--no-break` | Skip break timer | `false` |
| `--bell` | Ring terminal bell on completion | `false` |
| `--quiet` | Minimal output (no progress bar) | `false` |
| `-h, --help` | Show help | |
| `-v, --version` | Show version | |

## Recipes

### Classic Pomodoro Technique

The [original technique](https://en.wikipedia.org/wiki/Pomodoro_Technique) uses 4 × 25-min work blocks with 5-min breaks, then a longer 15-30 min break:

```bash
# 4 standard rounds
pomodoro --rounds 4 --bell

# Then take a long break (just set a timer)
pomodoro --work 20 --no-break --bell
```

### npm Scripts Integration

Add to your `package.json` to build focus into your workflow:

```json
{
  "scripts": {
    "focus": "pomodoro --work 25 --bell",
    "sprint": "pomodoro --work 15 --no-break --bell",
    "deep-work": "pomodoro --work 50 --break 10 --rounds 3 --bell"
  }
}
```

### Chain With Other Commands

```bash
# Start a Pomodoro, then open your PR list when break starts
pomodoro --work 25 --no-break && gh pr list

# Focus timer before running tests
pomodoro --work 45 --no-break --bell && npm test
```

### tmux / Screen Sidebar Timer

Run it in a split pane so the timer is always visible while you code:

```bash
# tmux: split right and start timer
tmux split-window -h "pomodoro --rounds 4 --bell"
```

## Comparison

| Tool | Zero deps | Cross-platform | Configurable | Rounds | CLI-native | Install |
|------|-----------|---------------|-------------|--------|-----------|---------|
| **@kszongic/pomodoro-cli** | ✅ | ✅ | ✅ | ✅ | ✅ | `npx @kszongic/pomodoro-cli` |
| [pomo](https://github.com/kevinschoon/pomo) | N/A (Go) | ✅ | ✅ | ✅ | ✅ | Go install |
| [Pomotroid](https://splode.github.io/pomotroid/) | ❌ (Electron) | ✅ | ✅ | ✅ | ❌ (GUI) | Download |
| [gnome-pomodoro](https://gnomepomodoro.org/) | N/A | ❌ (Linux) | ✅ | ✅ | ❌ (GUI) | apt install |
| Browser extensions | N/A | ✅ | Varies | Varies | ❌ | Browser store |

**Key difference:** If you're a developer who lives in the terminal, you don't need another app window. One command, zero setup.

## The Pomodoro Technique in 30 Seconds

1. Pick a task
2. Set a 25-minute timer → **work with zero distractions**
3. When the timer rings → take a 5-minute break
4. Every 4 rounds → take a longer 15-30 minute break
5. Repeat

It works because it's dead simple. No app, no account, no gamification. Just focused time blocks.

## Related Tools

- [env-lint-cli](https://github.com/kszongic/env-lint-cli) — Lint `.env` files against `.env.example`
- [kill-port-cli](https://github.com/kszongic/kill-port-cli) — Kill processes hogging a port
- [npm-name-check](https://github.com/kszongic/npm-name-check) — Check npm package name availability
- [dep-size](https://github.com/kszongic/dep-size) — Check package size before installing
- [license-maker](https://github.com/kszongic/license-maker) — Generate LICENSE files from CLI

## License

MIT © 2026 [kszongic](https://github.com/kszongic)
