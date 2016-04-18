import {CollectionType, DocumentDiff} from "./type";
import {Document} from "./utils";

export type Schema = CollectionType<Document, DocumentDiff>;

// Should define _id, _created, _updated, etc.
export type ViaModelSchema = Schema;
