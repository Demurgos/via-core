export { DotPath, ParsedDotPath } from "./interfaces/dot-path";
import { Document } from "./interfaces/utils";
import { DotPath, ParsedDotPath } from "./interfaces/dot-path";
export declare function get(obj: Document, path: DotPath): any;
export declare function set<O extends Document>(obj: O, path: DotPath, value: any): O;
export declare function has(obj: Document, path: DotPath): boolean;
export declare function parse(path: DotPath): ParsedDotPath;
export declare function stringify(path: DotPath): string;
