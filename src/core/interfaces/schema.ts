import {CollectionType} from "./type";
import {Dictionary} from "./utils";

export interface SchemaDiff {
  "create": Dictionary<any>;
  "update": Dictionary<any>;
  "delete": Dictionary<any>;
}

export type ViaSchema = CollectionType<Object, SchemaDiff>;
