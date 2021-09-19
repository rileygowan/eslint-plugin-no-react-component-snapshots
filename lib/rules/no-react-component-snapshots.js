/**
 * @fileoverview Disallows the use of React component snapshots.
 * @author Riley Gowan
 */
"use strict";

const getElement = new RegExp("^<([a-zA-Z-]*)");
const DEFAULTS_EXTENSIONS = [
  ".snap",
  ".test.jsx",
  ".test.tsx",
  ".spec.jsx",
  ".spec.tsx",
];

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallows the use of React component snapshots.",
      category: "Best Practices",
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
          if (isExtensionAllowed && extension === ".snap") {
            isSnapFile = true;
          }

          return isExtensionAllowed;
        });

        if (isAllowedExtension) {
          const trimmedRawNodeValue = node.value.raw.trim();
          const element = getElement.exec(trimmedRawNodeValue);

          const grandparent = node.parent.parent;
          const violationCondition = isSnapFile
            ? grandparent.type === "AssignmentExpression"
            : grandparent.callee &&
              grandparent.callee.property &&
              grandparent.callee.property.name === "toMatchInlineSnapshot";
          if (
            violationCondition &&
            element &&
            (trimmedRawNodeValue.endsWith(`</${element[1]}>`) ||
              trimmedRawNodeValue.endsWith(`<${element[1]} />`))
          ) {
            context.report({
              node,
              message: isSnapFile
                ? "Do not test React components with toMatchSnapshot()"
                : "Do not test React components with toMatchInlineSnapshot()",
            });
          }
        }
      },
    };
  },
};
