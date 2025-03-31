import { rm } from "node:fs/promises";

try {
  await rm("./dist/", { recursive: true, force: true });
} catch (err) {
  if (err.code === "ENOENT") {
    console.log("./dist/ doesn't exist");
  } else {
    throw err;
  }
}
