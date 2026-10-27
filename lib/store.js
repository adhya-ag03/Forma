import { SHOTS, COMMENTS, DESIGNERS } from "./data";

/* In-memory server-side store. Kept on globalThis so it survives
   hot reloads in dev. On serverless hosts (Vercel) it lives per
   warm instance — fine for a demo backend. */
function seed() {
  return {
    likes: Object.fromEntries(SHOTS.map((s) => [s.id, s.likes])),
    comments: Object.fromEntries(
      SHOTS.map((s) => [
        s.id,
        COMMENTS.slice(0, 3 + (s.id % 2)).map((c, i) => {
          const w = DESIGNERS[c.w];
          return {
            id: `seed-${s.id}-${i}`,
            author: w.n,
            init: w.init,
            hue: w.hue,
            when: `${c.t} ago`,
            text: c.m,
          };
        }),
      ])
    ),
    subscribers: [],
  };
}

if (!globalThis.__formaStore) globalThis.__formaStore = seed();

export const store = globalThis.__formaStore;
