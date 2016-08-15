"use strict";
const _dotPath = require("./dot-path");
var dotPath;
(function (dotPath) {
    dotPath.stringify = _dotPath.stringify;
    dotPath.parse = _dotPath.parse;
    dotPath.get = _dotPath.get;
    dotPath.set = _dotPath.set;
    dotPath.has = _dotPath.has;
})(dotPath = exports.dotPath || (exports.dotPath = {}));
