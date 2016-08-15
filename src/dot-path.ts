export {DotPath, ParsedDotPath} from "./interfaces/dot-path";

import * as _ from "lodash";
import {Document} from "./interfaces/utils";
import {DotPath, ParsedDotPath} from "./interfaces/dot-path";

export function get(obj: Document, path: DotPath): any {
  path = parse(path);
  let curObj = obj;
  for (let i = 0, l = path.length; i < l; i++) {
    let curPart = path[i];
    curObj = curObj[curPart];
  }
  return curObj;
}

export function set<O extends Document>(obj: O, path: DotPath, value: any): O {
  path = parse(path);
  let curObj = obj;
  for (let i = 0, l = path.length; i < l - 1; i++) {
    let curPart = path[i];
    curObj = curObj[curPart];
  }

  let lastPart = path[path.length - 1];
  curObj[lastPart] = value;

  return obj;
}

export function has(obj: Document, path: DotPath): boolean {
  return true; // TODO(Demurgos)
}

export function parse(path: DotPath): ParsedDotPath {
  if (Array.isArray(path)) {
    return <ParsedDotPath> path;
  }
  if (path.length === 0) {
    return [];
  }
  return (<string> path).split(".").map((str: string) => /^-?\d+$/.test(str) ? parseInt(str, 10) : str);
}

export function stringify (path: DotPath): string {
  if (_.isString(path)) {
    return <string> path;
  }
  return (<ParsedDotPath> path).join(".");
}
