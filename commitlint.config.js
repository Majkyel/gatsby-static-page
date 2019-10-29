module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [
      2,
      "always",
      [
        "general",
        "components",
        "pages",
        "utils",
        "css",
        "images",
        "layout"
      ]
    ],
    "type-case": [2, "always", "lower-case"],
    "type-enum": [
      2,
      "always",
      ["build", "feat", "fix", "refactor", "revert", "test"]
    ],
    "scope-empty": [2, "never"],
    "type-empty": [2, "never"],
    "subject-empty": [2, "never"],
    "subject-min-length": [2, "always", 10],
    "subject-full-stop": [2, "never", "."],
    "subject-case": [2, "always", "lower-case"]
  }
};
