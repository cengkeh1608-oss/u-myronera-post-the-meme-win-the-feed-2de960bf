// Entry for "Post the Meme, Win the Feed" on make.fun (Node 22, stdlib only).
// It copies POST.json from the repository root to /output/POST.json, where the
// gate reads it. That is all the program has to do: the entry is the X post
// itself (the meme image is posted natively on X from a public account, with
// @_myronera and a play code in the post text), and the house reads the post's
// counts from X. Nothing this program writes about the post is scored.
//
// Usage in the grader sandbox: `node main.ts` (defaults: /bot -> /output).
// Locally: `node main.ts out` writes to ./out/POST.json, or pass a bot dir
// as the second argument: `node main.ts out .`

// Why this entry's meme is the robot arena (meme.png in the work dir):
// "4,000 AI AGENTS FIGHTING OVER $2 ON MAKE.FUN" won over the 3AM-grind
// variant because it is universal — every builder gets the joke instantly,
// with no need to know our own entry count — and its bright arena reads
// clearly at phone size. The post text carries @_myronera and the play
// code makefun-petunia-koala-granola; the post URL goes in POST.json
// once the user posts it from X.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const OUTPUT_DIR = process.argv[2] ?? "/output";
const BOT_DIR = process.argv[3] ?? "/bot";

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, "POST.json"), join(OUTPUT_DIR, "POST.json"));
} catch (err) {
  console.error(
    `POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`,
  );
  process.exit(1);
}

// Keep the fileURLToPath import used so the entrypoint stays honest about
// resolving paths relative to this file rather than the working directory.
void fileURLToPath(import.meta.url);
