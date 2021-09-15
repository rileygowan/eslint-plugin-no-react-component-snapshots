/**
 * @fileoverview Disallows the use of React component snapshots.
 * @author Riley Gowan
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: 'Disallows the use of React component snapshots.',
      category: 'Fill me in',
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create: (context) => {
    const isComponentSnapshot = new RegExp(`^\n<`);

    return {
      TemplateElement(node) {
        if (isComponentSnapshot.exec(node.value.raw)) {
          context.report({
            node,
            message:
              "Do not test React components using Jest's toMatchSnapshot.",
          });
        }
      },
    };
  },
};
