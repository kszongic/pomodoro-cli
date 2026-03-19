# @kszongic/pomodoro-cli

[![npm version](https://img.shields.io/npm/v/@kszongic/pomodoro-cli)](https://www.npmjs.com/package/@kszongic/pomodoro-cli)
[![license](https://img.shields.io/npm/l/@kszongic/pomodoro-cli)](./LICENSE)

Simple Pomodoro timer for the terminal. Work 25 min, break 5 min. Zero dependencies.

## Install

```bash
npm install -g @kszongic/pomodoro-cli
```

## Usage

```bash
# Default: 25-min work, 5-min break
pomodoro

# Custom durations
pomodoro --work 30 --break 10

# Multiple rounds
pomodoro --rounds 4

# Work only, no break
pomodoro --no-break

# Ring terminal bell when done
pomodoro --bell

# Minimal output
pomodoro --quiet
```

## Options

| Option | Description | Default |
|--------|-------------|---------|
| `--work <min>` | Work duration in minutes | 25 |
| `--break <min>` | Break duration in minutes | 5 |
| `--rounds <n>` | Number of work/break rounds | 1 |
| `--no-break` | Skip break timer | false |
| `--bell` | Ring terminal bell on completion | false |
| `--quiet` | Minimal output (no progress bar) | false |
| `-h, --help` | Show help | |
| `-v, --version` | Show version | |

## Example Output

```
  🍅 Pomodoro Timer
  Work: 25m | Break: 5m | Rounds: 1

  💻 Work   ██████████████████░░░░░░░░░░░░  12:34
```

## License

MIT © 2026 kszongic
