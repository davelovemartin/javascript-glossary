# Javascript Glossary

Uses Node.js v12.13.0

`yarn dev/start/build` to run Next dev/start/build commands

`yarn test` to run linting

`yarn fix` to auto-fix linting issues

`yarn format` to run prettier and auto-format

Husky runs a `pre-commit` git hook so `lint-staged` will run `eslint`,
`prettier --write` and `git add` before committing.
