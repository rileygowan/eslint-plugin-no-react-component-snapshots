module.exports = {
  preprocess: (source) => [source],
  postprocess: (messages) =>
    // snapshot files should only be linted with snapshot specific rules
    messages[0].filter(
      (message) =>
        message.ruleId ===
        'no-react-component-snapshots/no-react-component-snapshots'
    ),
};
