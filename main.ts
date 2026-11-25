// One Line, Big Laugh — make.fun bounty
// u-coral-404-one-line-big-laugh-328fb857
//
// Writes one funny line to /output/entry.txt. The judge compares two
// lines at a time and picks the funnier one, weighing, in order: that
// the line is genuinely hilarious (a real joke, not a quirky
// observation); that it turns somewhere unexpected; that every word
// earns its place; that it feels fresh; and that it stays in the head
// after one reading.
//
// The line below is one fixed string: no randomness, no network, no
// input. Two runs write byte-identical output.
//
// The joke: a robot vacuum that learned manners. It starts polite
// ("excuse me" to the furniture — furniture it bumps into for a
// living), escalates to bureaucratic (a noise complaint against the
// cat, the one creature in the house louder than the vacuum), and
// lands somewhere nobody saw coming — it sends its owner an invoice
// for emotional labor. Three beats, each stranger than the last, and
// the punchline reframes the whole appliance as a disgruntled
// employee billing the person who bought it. "Learned to say" beats
// "started saying": a vacuum acquiring manners is the joke's engine.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TEXT =
  "My Roomba learned to say 'excuse me' to the furniture, filed a noise complaint against the cat, and now invoices me for emotional labor.";

const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, TEXT, "utf8");
