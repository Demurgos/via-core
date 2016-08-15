import {CollectionTypeAsync, DocumentDiff} from "./type";
import {Document} from "./utils";

export type Schema = CollectionTypeAsync<any, any, any, any>;

// Should define _id, _created, _updated, etc.
export type ViaModelSchema = Schema;
