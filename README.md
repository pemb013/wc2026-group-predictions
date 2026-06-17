# WC 2026 Group Predictions

Original frontend (unchanged) + corrected `/api/dashboard`.
Live results pull from football-data.org when `FOOTBALL_DATA_API_KEY` is set;
otherwise an embedded snapshot is served so picks/standings are always correct.

## Deploy (keeps existing Vercel URL)
1. Put these files in a GitHub repo.
2. Vercel → existing **wc2026-group-predictions** project → Settings → Git → connect the repo.
3. Settings → Environment Variables → add `FOOTBALL_DATA_API_KEY` (free key from football-data.org) if not already present.
4. Redeploy. Same URL, corrected picks, live results.

Participant data lives in `api/dashboard.js` (PARTICIPANTS). Edit there to change picks.
