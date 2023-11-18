module.exports = {
  extends: ["custom/next"],
  "import/no-extraneous-dependencies": [
    "error",
    {
      devDependencies: false,
      optionalDependencies: false,
      peerDependencies: false,
      packageDir: "./",
    },
  ],
};
