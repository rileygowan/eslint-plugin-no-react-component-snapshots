# eslint-plugin-no-react-component-snapshots

Disallows the use of React component snapshots.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-no-react-component-snapshots`:

```sh
npm install eslint-plugin-no-react-component-snapshots --save-dev
```

## Usage

Add `no-react-component-snapshots` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["no-react-component-snapshots"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "no-react-component-snapshots/rule-name": 2
  }
}
```
