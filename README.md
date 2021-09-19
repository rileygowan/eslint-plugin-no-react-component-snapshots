# eslint-plugin-no-react-component-snapshots

Disallows the use of React component snapshots—inline and external. 🚫⚛️📷

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

or

```sh
yarn add --dev eslint
```

Next, install `eslint-plugin-no-react-component-snapshots`:

```sh
npm install eslint-plugin-no-react-component-snapshots --save-dev
```

or

```sh
yarn add --dev eslint-plugin-no-react-component-snapshots
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
    "no-react-component-snapshots/no-react-component-snapshots": 2
  }
}
```

By default, `no-react-component-snapshots` will check all `.test.jsx`, `.test.tsx`, `.spec.jsx`, `.spec.tsx` and `.snap` files. You can configure which files are checked by providing options:

```json
{
  "rules": {
    "no-react-component-snapshots/no-react-component-snapshots": [
      2,
      { "extensions": [".snap"] }
    ]
  }
}
```

Once configured, inline and external snapshots will be announced by the messages

```sh
Do not test React components with toMatchInlineSnapshot()
```

and

```sh
Do not test React components with toMatchSnapshot()
```

, respectively.
