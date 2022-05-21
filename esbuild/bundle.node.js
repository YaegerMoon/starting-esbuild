const esbuild = require("esbuild");

// glob(__dirname + "/src/**/*.ts", {}, (err, files) => {
//   console.log(files);
// });

esbuild.buildSync({
  entryPoints: ["./src/index.ts"],
  bundle: true,
  write: true,
  format: "cjs",
  outdir: "./dist/bundle",
});
