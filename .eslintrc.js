module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        },
        {
            "files": ["client/**/*.tsx"],
            "rules": {
                "quotes": ["error", "single", { "avoidEscape": true }],
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
    "rules": {
        "semi": ["error", "always"],
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off"
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
};
