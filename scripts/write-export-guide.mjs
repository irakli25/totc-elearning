/* Regenerates docs/ASSET-EXPORTS.md from docs/figma-assets.json so the list
 * the designer works from never drifts from what the code actually loads. */
import { readFileSync, writeFileSync } from "node:fs";

const manifest = JSON.parse(readFileSync("docs/figma-assets.json", "utf8"));

const rows = manifest.assets
  .map(
    (a) =>
      `| \`${a.node}\` | ${a.of} | \`public/${a.path}\` | ${a.width} x ${a.height} |`,
  )
  .join("\n");

const frames = manifest.referenceFrames
  .map((f) => `| \`${f.node}\` | ${f.name} | ${f.route} | \`docs/reference/${f.node.replace(":", "-")}.png\` |`)
  .join("\n");

writeFileSync(
  "docs/ASSET-EXPORTS.md",
  `# Figma exports still needed

The Figma MCP connection ran out of tool calls partway through this build (the
Starter plan allows 20 per month). Everything below is what I could not pull
myself. Nothing in the code changes when these land — each file simply replaces
a generated placeholder at the same path.

Source file: ${manifest.file}

## 1. Reference frames — do these first

These are not shipped with the site. I read them to match colours, type and the
content hidden inside Figma component instances, such as the pricing plans and
course cards.

In Figma: click the frame in the layers panel, then in the right sidebar under
**Export** choose **PNG**, scale **1x**, and click Export.

| Node | Frame | Route it becomes | Save as |
| --- | --- | --- | --- |
${frames}

## 2. Images the site loads

Same steps, but set scale to **2x**. The pixel sizes below are what 2x should
produce, so they double as a check that the right node is selected.

| Node | What it is | Save as | Size at 2x |
| --- | --- | --- | --- |
${rows}

## How to select a node by ID

Open the file, press \`Ctrl+\\\` to focus the layers panel, or paste this into
the browser address bar, replacing NODE with the id and swapping \`:\` for \`-\`:

\`\`\`
${manifest.file}?node-id=NODE
\`\`\`

For example \`?node-id=10-478\` selects the first Our Features illustration.

## After you drop the files in

\`\`\`bash
node scripts/make-placeholders.mjs --list   # shows anything still missing
npm run dev
\`\`\`
`,
);

console.log("docs/ASSET-EXPORTS.md written");
