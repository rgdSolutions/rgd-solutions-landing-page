# RGD Solutions landing page

Replacement for the Landingi page at https://rgd-solutions.com. Next.js on Vercel.

- `design/copy.md` – single source of site copy and section order
- `design/directions/` – the ten design-direction artboards explored on the Claude Design canvas; `07-Aurora-Glass` was chosen
- `design/canvas` is regenerated from `design/directions/` and not committed

## Resume

The resume PDF is not in this repo. `pnpm sync-resume` uploads `../../resume-typst/out/resume.pdf` to the project's Vercel Blob store (needs `vercel env pull` first for `BLOB_READ_WRITE_TOKEN`) and prints its URL; the site reads that URL from `RESUME_URL` and serves it at `/resume`.
