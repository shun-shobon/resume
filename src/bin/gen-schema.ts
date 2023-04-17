import * as fs from "node:fs/promises";

import { zodToJsonSchema } from "zod-to-json-schema";

import { Resume } from "../schema.js";

const schema = zodToJsonSchema(Resume, "resume");
await fs.writeFile("schema.json", JSON.stringify(schema, null, 2));
