import * as fs from "node:fs/promises";

import * as prettier from "prettier";
import * as YAML from "yaml";
import { printNode, zodToTs } from "zod-to-ts";

import { Resume } from "../schema.js";

const OUTDIR = "./dist";

await fs.rm(OUTDIR, { recursive: true, force: true });
await fs.mkdir(OUTDIR);

const data = await fs.readFile("./data.yml", "utf8");
const yaml: unknown = YAML.parse(data);
const resume = Resume.parse(yaml);

const js = `
export const resume = ${JSON.stringify(resume, null, 2)};
`;

const formattedJs = await prettier.format(js, {
  parser: "babel",
  trailingComma: "all",
});

await fs.writeFile(`${OUTDIR}/mod.mjs`, formattedJs);

const dts = `
interface Resume ${printNode(zodToTs(Resume).node)}

export const resume: Resume;
`;

const formattedDts = await prettier.format(dts, {
  parser: "typescript",
  trailingComma: "all",
});

await fs.writeFile(`${OUTDIR}/mod.d.ts`, formattedDts);
