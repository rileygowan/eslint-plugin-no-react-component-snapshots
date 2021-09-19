/**
 * @fileoverview Disallows the use of React component snapshots.
 * @author Riley Gowan
 */
'use strict';

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports = {
  rules: {
    'no-react-component-snapshots': require(__dirname +
      '/rules/no-react-component-snapshots'),
  },
};

// import processors
module.exports.processors = {
  '.snap': require(__dirname + '/processors/snapshotProcessor'),
};
