#!/usr/bin/env node
'use strict';

const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
  console.log(`
  pomodoro - Simple Pomodoro timer for the terminal

  Usage:
    pomodoro                    Start a 25-min work session
    pomodoro --work 30          Set work duration (minutes)
    pomodoro --break 10         Set break duration (minutes)
    pomodoro --rounds 4         Number of work/break rounds
    pomodoro --no-break         Skip break timer
    pomodoro --bell             Ring terminal bell on completion

  Options:
    --work <min>      Work duration in minutes (default: 25)
    --break <min>     Break duration in minutes (default: 5)
    --rounds <n>      Number of rounds (default: 1)
    --no-break        Skip break after work session
    --bell            Ring terminal bell when timer ends
    --quiet           Minimal output (no progress bar)
    -h, --help        Show this help
    -v, --version     Show version
  `);
  process.exit(0);
}

if (args.includes('--version') || args.includes('-v')) {
  const pkg = require('./package.json');
  console.log(pkg.version);
  process.exit(0);
}

function getArg(name, defaultVal) {
  const idx = args.indexOf(name);
  if (idx === -1) return defaultVal;
  const val = Number(args[idx + 1]);
  return isNaN(val) || val <= 0 ? defaultVal : val;
}

const workMin = getArg('--work', 25);
const breakMin = getArg('--break', 5);
const rounds = getArg('--rounds', 1);
const noBreak = args.includes('--no-break');
const bell = args.includes('--bell');
const quiet = args.includes('--quiet');

function formatTime(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, '0');
  const s = String(sec % 60).padStart(2, '0');
  return `${m}:${s}`;
}

function progressBar(fraction, width) {
  const filled = Math.round(fraction * width);
  return '\u2588'.repeat(filled) + '\u2591'.repeat(width - filled);
}

function timer(label, totalSec) {
  return new Promise((resolve) => {
    let remaining = totalSec;
    const total = totalSec;
    const barWidth = 30;

    function render() {
      const elapsed = total - remaining;
      const frac = total > 0 ? elapsed / total : 1;
      if (quiet) {
        process.stdout.write(`\r  ${label}  ${formatTime(remaining)}  `);
      } else {
        process.stdout.write(
          `\r  ${label}  ${progressBar(frac, barWidth)}  ${formatTime(remaining)}  `
        );
      }
    }

    render();
    const iv = setInterval(() => {
      remaining--;
      render();
      if (remaining <= 0) {
        clearInterval(iv);
        if (bell) process.stdout.write('\x07');
        process.stdout.write('\n');
        resolve();
      }
    }, 1000);
  });
}

async function main() {
  console.log();
  console.log('  \uD83C\uDF45 Pomodoro Timer');
  console.log(`  Work: ${workMin}m | Break: ${breakMin}m | Rounds: ${rounds}`);
  console.log();

  for (let i = 1; i <= rounds; i++) {
    if (rounds > 1) console.log(`  --- Round ${i}/${rounds} ---`);
    await timer('\uD83D\uDCBB Work  ', workMin * 60);
    if (!noBreak && i <= rounds) {
      await timer('\u2615 Break ', breakMin * 60);
    }
  }

  console.log('  \u2705 Done! Great focus session.');
  console.log();
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
