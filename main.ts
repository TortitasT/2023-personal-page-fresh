/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

import sass from "https://deno.land/x/denosass@1.0.4/mod.ts";

const compiler = sass("./static/assets/scss/main.scss");
compiler.to_file({
  destDir: "./static/assets/css",
  destFile: "main",
  format: "compressed",
});

await start(manifest);
