# next-starter

A starter for your next [next.js](https://nextjs.org/) project.

Uses Node.js v12.13.0

`yarn dev/start/build` to run Next dev/start/build commands

`yarn test` to run linting

`yarn fix` to auto-fix linting issues

`yarn format` to run prettier and auto-format

Husky runs a `pre-commit` git hook so `lint-staged` will run `eslint`, `prettier --write` and `git add` before committing.

I recommend you use VS Code with eslint and prettier extensions.

Forking this repo:

1. Create a new repository for your fork
On GitHub, create your new (empty) repository [https://github.com/new](https://github.com/new), using the default settings. This will be your forked repository.

2. Clone your fork
Make a local copy of your new forked repository using git clone.

`git clone https://github.com/<username>/<forked-repo>.git`

3. Add your original repository as an Upstream Remote
Add your original repository as an upstream remote in your forked repository. Doing this will allow you to pull in changes from your original repository to your forked repository.

`cd <forked-repo>`
`git remote add upstream https://github.com/cxpartners/next-starter.git`

4. Update your fork
Update your fork with all the changes from your original repository using `git pull`.

`git pull upstream master`

5. Push
When you are done, simply push your new fork back into GitHub.

`git push origin master`
