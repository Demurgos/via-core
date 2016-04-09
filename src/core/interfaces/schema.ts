import {CollectionType} from "./type";
import {Dictionary} from "./utils";

export interface SchemaDiff {
  "set": Dictionary<any>; // val
  "update": Dictionary<any>; // diff
  "unset": Dictionary<any>; // val
}

export type ViaSchema = CollectionType<Object, SchemaDiff>;
