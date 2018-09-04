module.exports = {
    extends: ["airbnb-base", "eslint:recommended", "prettier", "prettier/standard", "plugin:import/errors", "plugin:import/warnings", "prettier/standard"],
    plugins: ["prettier", "mocha", "chai-friendly", "import"],
    rules: {
      "prettier/prettier": "error"
    },
    env: {
      mocha: true
    },
    globals: {
      should: false
    },
    rules: {
      "comma-dangle": 0,
      "no-console": 0,
      "import/extensions": 0,
      "import/no-unresolved": 2,
      "import/named": 2,
      "import/namespace": 2,
      "import/default": 2,
      "import/prefer-default-export": 0,
      "import/export": 2,
      "prefer-arrow-callback": 2,
      "prefer-const": 2,
      "indent": ["error", 4],
      "eol-last": 2,
      "quotes": ["error", "single"]
    }
  };
