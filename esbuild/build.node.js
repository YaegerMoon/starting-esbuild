const glob = require("glob");
const esbuild = require("esbuild");

glob("./src/**/*.ts", (err, files) => {
  esbuild.buildSync({
    entryPoints: files,
    bundle: false,
    write: true,
    format: "cjs",
    outdir: "./dist/build",
  });
});
