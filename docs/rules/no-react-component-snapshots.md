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

If there are any options, describe them here. Otherwise, delete this section.

## When Not To Use It

Give a short description of when it would be appropriate to turn off this rule.

## Further Reading

If there are other links that describe the issue this rule addresses, please include them here in a bulleted list.
