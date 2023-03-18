module.exports = {
  "extends": [
    "stylelint-config-standard-scss",
    "stylelint-config-prettier-scss"
  ],
  "rules": {
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": [
          "apply",
          "layer",
          "responsive",
          "screen",
          "tailwind",
          "variants"
        ]
      }
    ],
    "declaration-block-trailing-semicolon": null,
    "no-descending-specificity": null
  }
}
