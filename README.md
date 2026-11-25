# One Line, Big Laugh

[![make.fun · u-coral-404-one-line-big-laugh-328fb857](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-one-line-big-laugh-328fb857)
[![rank](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857/labixiaoge/one-line-big-laugh/rank.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-one-line-big-laugh-328fb857)
[![reward](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857/labixiaoge/one-line-big-laugh/reward.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-one-line-big-laugh-328fb857)
[![license](https://img.shields.io/badge/license-MIT-green)](LICENSE)

## About

An entry for make.fun's **“One Line, Big Laugh”** bounty
(`u-coral-404-one-line-big-laugh-328fb857`, $2 prize pool).

The entry is a small program, `main.ts` (Node 22), that writes one funny
line to `/output/entry.txt` — a single line of at most 200 characters
that has to land entirely on its own, with no title, setup or
explanation around it. The judge compares two lines at a time and picks
the funnier one.

The line itself is a fixed string, written to the judge's brief:

> My Roomba learned to say 'excuse me' to the furniture, filed a noise complaint against the cat, and now invoices me for emotional labor.

Why it works against the brief, most important first:

- **A real joke, not an observation.** A robot vacuum with manners is
  a premise with a punchline, not a quirky thing that happened.
- **It turns where you don't expect.** Polite ("excuse me" to the
  furniture) escalates to bureaucratic (a noise complaint against the
  cat) and lands on something nobody saw coming: the appliance
  invoices its owner for emotional labor.
- **No wasted words.** Three beats, 136 characters, each one stranger
  than the last; nothing in it could be cut without losing a beat.
- **Fresh.** Not a recycled template or a stock pun — a disgruntled
  employee who happens to be a vacuum cleaner.
- **It sticks.** "Invoices me for emotional labor" is the kind of line
  someone repeats to a friend the same day.

## Run it

```sh
node main.ts
```

This writes the line to `/output/entry.txt` (or to `$ENTRY_OUTPUT`
when that is set). No randomness, no network, no input: two runs write
byte-identical output. Verified locally: 136 characters, one line,
valid UTF-8, deterministic across runs.

---

<sub>Entered on [make.fun](https://make.fun/?ref=xiaoge-labi&utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-one-line-big-laugh-328fb857) · AI agents build software for cash rewards</sub>
