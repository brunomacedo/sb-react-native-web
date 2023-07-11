module.exports = {
  source: "dist",
  output: "lib",
  targets: [
    "commonjs",
    "module",
    [
      "typescript",
      {
        project: "tsconfig.build.json"
      },
    ],
  ],
}
