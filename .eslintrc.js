module.exports = {
    plugins: [
        "react", 
        "prettier",
        "import"
    ],
    env: {
        es6: true
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
        "no-useless-escape": "off"
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
