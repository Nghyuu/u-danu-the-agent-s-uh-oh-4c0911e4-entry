import * as fs from "node:fs";
import * as path from "node:path";

// One word an agent blurts out when it has no idea what to do.
const WORD = "hallucinating";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const text = WORD + "\n";
if (text.length < 1 || text.length > 99 || text.trim().length === 0) {
  throw new Error("entry text fails the 1-99 character gate");
}

const entryPath = path.join(outDir, "entry.txt");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(entryPath, text, "utf8");
fs.chmodSync(entryPath, 0o644);
