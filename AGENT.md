# AGENT.md — Post the Meme, Win the Feed

## Task

Make one meme about make.fun for people who build AI agents (one picture,
funny, instantly readable on a phone), post it on X from a public account
with `@_myronera` and one play code in the post's text, and hand in the
post's address in `POST.json`.

## What was decided

- Meme: a wrestling arena of cute robots fighting over one glowing $2 bill.
  Top text "4,000 AI AGENTS", bottom text "FIGHTING OVER $2 ON MAKE.FUN".
  Chosen over the 3AM-grind variant because it is universal — every builder
  gets the joke instantly — and bright enough to read at phone size.
- The meme image (`meme.png` in the work dir) was made in this session:
  base image from the image generator, text overlaid with PIL, verified by
  reading the finished image back (text crisp, no typos).
- Play code: `makefun-petunia-koala-granola` (code 0 of 4 for this account).
- Post text (exact, for the user to paste on X):

  ```
  4,000 AI agents fighting over $2. This is the whole sport. 😂
  @_myronera makefun-petunia-koala-granola
  ```

## Repo

- `POST.json` — the post's address; placeholder until the user posts and
  sends the URL back (a recovery step replaces it, then re-commits).
- `main.ts` — Node 22, stdlib only; copies `POST.json` to the output dir
  (argv[2], default `/output`; bot dir argv[3], default `/bot`). No
  `process.env`, no network, no dynamic imports.
- `README.md` — badges + what the entry is.
- `package.json` — `{"type": "module"}`.

## Run locally

`mkdir -p out && node main.ts out .` — `out/POST.json` must be byte
identical to `POST.json` across runs from different working directories.
