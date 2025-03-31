import { rename, readdir, rmdir } from "node:fs/promises";

const files = await readdir("./dist/quick-dirty-distributions/");

for (let f of files) {
  await rename("./dist/quick-dirty-distributions/" + f, "./dist/" + f);
  console.log(f);
}

await rmdir("./dist/quick-dirty-distributions/");
