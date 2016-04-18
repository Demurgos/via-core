"use strict";
var _ = require("lodash");
function get(obj, path) {
    path = parse(path);
    var curObj = obj;
    for (var i = 0, l = path.length; i < l; i++) {
        var curPart = path[i];
        curObj = curObj[curPart];
    }
    return curObj;
}
exports.get = get;
function set(obj, path, value) {
    path = parse(path);
    var curObj = obj;
    for (var i = 0, l = path.length; i < l - 1; i++) {
        var curPart = path[i];
        curObj = curObj[curPart];
    }
    var lastPart = path[path.length - 1];
    curObj[lastPart] = value;
    return obj;
}
exports.set = set;
function has(obj, path) {
    return true; // TODO(Demurgos)
}
exports.has = has;
function parse(path) {
    if (Array.isArray(path)) {
        return path;
    }
    if (path.length === 0) {
        return [];
    }
    return path.split(".").map(function (str) { return /^-?\d+$/.test(str) ? parseInt(str, 10) : str; });
}
exports.parse = parse;
function stringify(path) {
    if (_.isString(path)) {
        return path;
    }
    return path.join('.');
}
exports.stringify = stringify;
