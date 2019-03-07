module.exports = {
    plugins: [
        "react", 
        "prettier"
    ],
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
    rules: {},
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
