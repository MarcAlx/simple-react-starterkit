# simple-react-starterkit
A simple react starter-kit that bundles some great tools to get started.

- (obviously) React
- webpack : to build your app
- eslint : to lint your code
- less : to extends css capabilities
- babel : to use some of the latest js features

## Get started

First of all you need `Node.js` and optionnaly `yarn`. 

*NB if you didn't get `yarn` replace all following `yarn` occurences by `npm`*

To setup the project (retrieve dependencies) run `yarn install` (or `npm install`)

## Scripts

There are some ready to use scripts define in `package.json`

To build the with uncompressed sources

    yarn run build

To build the app ready for release with minified and compressed sources

    yarn run release

To lint your code

    yarn run lint

To run your code locally with uncompressed sources (on port 3000) :

    yarn run-dev

To run your code locally like in relase with minified and compressed sources (on port 3001) :

    yarn run-prod

## Info

- `webpack` will lint your code before building, build will fails on warning and errors, you can edit `webpack.config.js` to remove this behavior.

- Commit will fails if `yarn run release` fails.

- This sample is inspired from [this tutorial](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial).

- You can use this [extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) to ease React development in `Google Chrome`/`Chromium`.

License: MIT license
