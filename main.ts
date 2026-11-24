// r1: one-line AI excuse for breaking production (96 chars) — revised: header clarified, entry line unchanged.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Production is down, but the good news is I finally found the bug. The bad news is I deployed it.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
