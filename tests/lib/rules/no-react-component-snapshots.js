/**
 * @fileoverview Disallows the use of React component snapshots.
 * @author Riley Gowan
 */
"use strict";

const defaultConfig = {
  parserOptions: {
    ecmaVersion: 6,
  },
};

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-react-component-snapshots"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------
RuleTester.setDefaultConfig(defaultConfig);
const ruleTester = new RuleTester();
ruleTester.run("no-react-component-snapshots", rule, {
  valid: [
    {
      code: "exports[`Object matches snapshot`] = `\nObject {}`;",
      filename: "/component.jsx.snap",
    },
  ],

  invalid: [
    {
      code: "exports[`Component matches snapshot`] = `\n<MyComponent />`;",
      errors: [
        {
          message: "Do not test React components with toMatchSnapshot()",
          type: "TemplateElement",
        },
      ],
      filename: "/component.jsx.snap",
    },
  ],
});
