/**
 * @fileoverview Disallows the use of React component snapshots.
 * @author Riley Gowan
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");

// import processors
module.exports.processors = {
  ".snap": require(__dirname + "/processors/snapshotProcessor"),
};
