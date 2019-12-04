import * as fs from "fs";
import { promisify } from "util";

async function readFile() {
  const readFileAsync = promisify(fs.readFile);
  const content = await readFileAsync("readme.txt", "utf-8");
  console.log("Data: " + content);
}

readFile();
