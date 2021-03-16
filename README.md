# next-starter

A starter for your next [next.js](https://nextjs.org/) project.

Uses Node.js v12.13.0

`yarn dev/start/build` to run Next dev/start/build commands

`yarn test` to run linting

`yarn fix` to auto-fix linting issues

`yarn format` to run prettier and auto-format

Husky runs a `pre-commit` git hook so `lint-staged` will run `eslint`, `prettier --write` and `git add` before committing.

I recommend you use VS Code with eslint and prettier extensions.
