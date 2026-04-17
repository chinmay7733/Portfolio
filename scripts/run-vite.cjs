const { spawn } = require("node:child_process");
const path = require("node:path");

const viteBin = path.resolve(__dirname, "../node_modules/vite/bin/vite.js");
const viteArgs = process.argv.slice(2);

const child = spawn(process.execPath, [viteBin, ...viteArgs], {
  stdio: "inherit",
  env: {
    ...process.env,
    BROWSERSLIST_IGNORE_OLD_DATA: "1",
  },
});

child.on("error", (error) => {
  console.error(error);
  process.exit(1);
});

child.on("exit", (code) => {
  process.exit(code ?? 1);
});
