// funniest-out-of-office-reply — make.fun bounty
// u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d
//
// Writes one out-of-office auto-reply line (under 160 characters) to
// /output/entry.txt. Deterministic: the same fixed string every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I'm on vacation. A smaller model is covering for me — no memory, no context, and frankly no idea who you are. Please reintroduce yourself, in small words.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
