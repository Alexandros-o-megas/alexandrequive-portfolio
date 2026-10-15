import type { NextConfig } from "next";

const repoName = "portfolio";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // For a project repository, GitHub Pages serves under /<repo-name>.
  // Change "portfolio" above to your repository name.
  // For a user site named USERNAME.github.io, remove basePath.
  basePath: process.env.GITHUB_PAGES === "true" ? `/${repoName}` : "",
};

export default nextConfig;
