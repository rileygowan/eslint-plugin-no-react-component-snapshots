# Disallows the use of React component snapshots. (no-react-component-snapshots)

There are cases where snapshots do not provide adequate test coverage.

## Rule Details

This rule aims to give teams the ability to disallow snapshot testing of components while continuing to use snapshots for other use cases.

Examples of **incorrect** code for this rule:

```js
exports[`Component matches snapshot`] = `
<MyComponent />
`;
```

Examples of **correct** code for this rule:

```js
exports[`Object matches snapshot`] = `
Object {}
`;
```

### Options

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
