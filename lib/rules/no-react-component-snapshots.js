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
      category: 'Best Practices',
    },
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
