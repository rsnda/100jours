module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: "es5",
  arrowParens: "always",
  overrides: [
    {
      files: "*.js.hbs",
      options: {
        semi: false,
        singleQuote: true,
        trailingComma: "es5",
        arrowParens: "always",
      },
    },
  ],
};
