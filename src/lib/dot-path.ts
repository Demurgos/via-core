import {Document} from "./utils";

export type ParsedDotPath = (string | number)[];
export type DotPath = ParsedDotPath | string;

export function get(obj: Document, path: DotPath): any {
  const parsedPath: ParsedDotPath = parse(path);
  let curObj: any = obj;
  for (const part of parsedPath) {
    if (Array.isArray(curObj)) {
      if (typeof part !== "number") {
        return false;
      }
      if (0 <= part && part < curObj.length) {
        curObj = curObj[part];
      } else if (-curObj.length <= part && part < 0) {
        curObj = curObj[curObj.length + part];
      } else {
        throw new Error("Index out of bounds");
      }
    } else {
      curObj = curObj[part];
    }
  }
  return curObj;
}

export function set(obj: Document, path: DotPath, value: any): void {
  const parsedPath: ParsedDotPath = parse(path);
  const targetProperty: string | number | undefined = parsedPath.pop();
  if (targetProperty === undefined) {
    throw new Error("Undefined target property");
  }
  get(obj, parsedPath)[targetProperty] = value;
}

/**
 * Returns true if the provided document has the supplied path.
 *
 * @param doc The document to check
 * @param path The path to check
 * @returns {boolean} Returns true if you can recursively consume the path on the provided document.
 */
export function has(doc: Document, path: DotPath): boolean {
  const parsedPath: ParsedDotPath = parse(path);
  let curObj: any = doc;
  for (const part of parsedPath) {
    if (Array.isArray(curObj)) {
      if (typeof part !== "number") {
        return false;
      }
      if (0 <= part && part < curObj.length) {
        curObj = curObj[part];
      } else if (-curObj.length <= part && part < 0) {
        curObj = curObj[curObj.length + part];
      } else {
        return false;
      }
    } else if (part in curObj) {
      curObj = curObj[part];
    } else {
      return false;
    }
  }
  return true;
}

/**
 * Ensures that a path is parsed. If you provide an array, it assumes that it is a already parsed
 * path, otherwise (if it is a string) it parses it.
 *
 * It is not possible to escape dots.
 *
 * @param path The path to parse
 * @returns {ParsedDotPath} The parsed path
 */
export function parse(path: DotPath): ParsedDotPath {
  if (Array.isArray(path)) {
    return [...path];
  }
  if (path.length === 0) {
    return [];
  }
  return path
    .split(".")
    .map((str: string): string | number => {
      return /^-?\d+$/.test(str) ? parseInt(str, 10) : str;
    });
}

/**
 * Ensures that a path is stringified. If you provide a string, it assumes that it is already a
 * stringified path, otherwise (if it is an array) it stringifies it.
 *
 * @param path The path to stringify
 * @returns {string} The stringified path
 */
export function stringify(path: DotPath): string {
  if (Array.isArray(path)) {
    return path.join(".");
  }
  return path;
}
