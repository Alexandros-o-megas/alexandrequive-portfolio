# Alexandre Quive — Personal Portfolio

Portfolio starter built with Next.js App Router, TypeScript and CSS. It exports a static site for GitHub Pages.

## Requirements
- Node.js 22 or later
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Before publishing
1. In `src/app/page.tsx`, replace `SEU_EMAIL_AQUI` with your public contact email.
2. Verify every project description and technology list.
3. Confirm project URLs and replace generic GitHub profile links with exact repositories when ready.
4. In `next.config.ts`, set `repoName` to the exact GitHub repository name. For a user site repository named `USERNAME.github.io`, remove the `basePath` configuration.
5. Run `npm run build` and verify the generated `out/` directory.

## GitHub Pages deployment
1. Create a GitHub repository (for example, `portfolio`) and push this project to the `main` branch.
2. In repository Settings → Pages → Build and deployment, choose **GitHub Actions** as the source.
3. Push a commit to `main`; the workflow in `.github/workflows/deploy.yml` builds and deploys the static export.
4. The project site URL will normally be `https://USERNAME.github.io/REPOSITORY/`.

## Important constraints
GitHub Pages serves static files. Next.js API routes, server actions requiring a running server, server-side rendering per request and default Next image optimization are not available in this deployment. The contact button currently uses `mailto:`; it does not submit a server-side form.
