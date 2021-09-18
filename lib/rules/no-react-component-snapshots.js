/**
 * @fileoverview Disallows the use of React component snapshots.
 * @author Riley Gowan
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
const DEFAULTS_EXTENSIONS = ['.test.js', '.spec.js', '.snap'];

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallows the use of React component snapshots.',
      category: 'Best Practices',
    },
  },

  create: (context) => {
    return {
      TemplateElement(node) {
        const options = context.options[0];
        const extensions = options ? options.extensions : DEFAULTS_EXTENSIONS;

        let isSnapFile = false;
        const isAllowedExtension = extensions.some((extension) => {
          const isExtensionAllowed = context.getFilename().endsWith(extension);
          if (isExtensionAllowed && extension === '.snap') {
            isSnapFile = true;
          }

          return isExtensionAllowed;
        });

        if (isAllowedExtension) {
          const trimmedValue = node.value.raw.trim();

          const firstCharacterIsLessThanSign = trimmedValue[0] === '<';
          const lastCharacterIsGreaterThanSign =
            trimmedValue[trimmedValue.length - 1] === '>';
          const grandparent = node.parent.parent;
          const violationCondition = isSnapFile
            ? grandparent.type === 'AssignmentExpression'
            : grandparent.callee &&
              grandparent.callee.property &&
              grandparent.callee.property.name === 'toMatchInlineSnapshot';
          if (
            violationCondition &&
            firstCharacterIsLessThanSign &&
            lastCharacterIsGreaterThanSign
          ) {
            context.report({
              node,
              message: isSnapFile
                ? 'Do not test React components with .toMatchSnapshot()'
                : 'Do not test React components with .toMatchInlineSnapshot()',
            });
          }
        }
      },
    };
  },
};
