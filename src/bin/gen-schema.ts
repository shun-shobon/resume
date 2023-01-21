import { zodToJsonSchema } from "zod-to-json-schema";
import { Resume } from "../schema.ts";

const schema = zodToJsonSchema(Resume, "resume");
Deno.writeTextFile("schema.json", JSON.stringify(schema, null, 2));
