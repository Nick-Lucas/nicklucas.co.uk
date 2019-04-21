module.exports = {
    plugins: [
        "react", 
        "prettier",
        "import",
        "jest"
    ],
    env: {
        es6: true,
        browser: true,
        "jest/globals": true
    },
    extends: [
        "eslint:recommended", 
        "plugin:react/recommended", 
        "plugin:prettier/recommended", 
        "prettier/react"
    ],
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 8
    },
    rules: {
        "no-restricted-imports": [2, { "patterns": ["../*"] }], 
        "no-restricted-modules": [2, { "patterns": ["../*"] }],
        "no-useless-escape": "off",
        "react/display-name": "off",
        "react/no-unescaped-entities": "off"
    },
    globals: {
        __dirname: "readonly",
        module: "readonly"
    },
    "settings": {
        "react": {
            "version": "detect"
        },
    }
}
