const path = require("path");
module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint",
        "react"
    ],
    env: {
        browser: true,
        jest: true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "prettier/react",
    ],
    parserOptions: {
        project: path.resolve(__dirname, "./tsconfig.json"),
        tsconfigRootDir: __dirname,
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        },
    },
    rules: {
        "quotes": "off",
        "@typescript-eslint/quotes": ["error", "double"],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "react/no-direct-mutation-state": "off",
        "react/no-deprecated": "off",
        "react/no-string-refs": "off",
        "react/require-render-return": "off",
        "react/jsx-filename-extension": [
            "warn",
            {
                extensions: [".jsx", ".tsx"]
            }
        ],
        "react/prop-types": "off"
    },
    settings: {
        react: {
            version: "detect"
        }
    }
};