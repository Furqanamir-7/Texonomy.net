import { cpSync, mkdirSync, rmSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { execSync } from "node:child_process";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, ".vercel", "output");
const staticDir = join(outDir, "static");

console.log("Building...");
execSync("npm run build", { cwd: root, stdio: "inherit" });

if (existsSync(outDir)) rmSync(outDir, { recursive: true, force: true });
mkdirSync(staticDir, { recursive: true });
const distDir = join(root, "dist");
for (const entry of readdirSync(distDir)) {
  cpSync(join(distDir, entry), join(staticDir, entry), { recursive: true });
}

writeFileSync(
  join(outDir, "config.json"),
  JSON.stringify(
    {
      version: 3,
      routes: [
        { handle: "filesystem" },
        {
          src: "/:path((?!.*\\.).*)",
          dest: "/index.html",
        },
      ],
    },
    null,
    2,
  ),
);

console.log("Deploying prebuilt...");
execSync(
  "npx vercel deploy --prebuilt --prod --yes --no-wait --scope furqans-projects-308696ed",
  { cwd: root, stdio: "inherit" },
);
