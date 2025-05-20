import { renderToStaticMarkup } from "react-dom/server";
import { createElement as h } from "react";
import {
  readFileSync,
  writeFileSync,
  existsSync,
  readdirSync,
  mkdirSync,
  unlinkSync,
} from "node:fs";
import { fileURLToPath } from "node:url";
import path, { dirname } from "node:path";
import App from "./App.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, "dist");

const shell = readFileSync(path.join(__dirname, "index.html"), "utf-8");

const app = renderToStaticMarkup(h(App));
const html = shell.replace("<!--ROOT-->", app);

if (!existsSync(distPath)) {
  mkdirSync(distPath);
} else {
  const files = readdirSync(distPath);
  for (const file of files) {
    unlinkSync(path.join(distPath, file));
  }
}

writeFileSync(path.join(distPath, "index.html"), html);
