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
    type: 'problem',
    docs: {
      description: 'Disallows the use of React component snapshots.',
      category: 'Best Practices',
    },
  },

  create: (context) => {
    if (!context.getFilename().endsWith('.snap')) {
      return {};
    }

    const isComponentSnapshot = new RegExp(`\n<`);

    return {
      TemplateElement(node) {
        if (
          node.parent.parent.type === 'AssignmentExpression' &&
          isComponentSnapshot.exec(node.value.raw)
        ) {
          context.report({
            node,
            message: 'Do not test React components with toMatchSnapshot()',
          });
        }
      },
    };
  },
};
