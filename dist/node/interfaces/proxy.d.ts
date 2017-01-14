import { Thenable } from "bluebird";
import { Dictionary } from "./utils";
import { ViaModelSchema } from "./schema";
import { UpdateQuery } from "./type";
export interface Proxy {
    format: string;
    build(schema: ViaModelSchema): Thenable<any>;
    create(data: Object): Thenable<Object>;
    read(filter: Object, options?: ReadOptions): Thenable<Cursor>;
    readById(id: string, options?: ReadOptions): Thenable<Object>;
    update(filter: Document, update: UpdateQuery, options?: UpdateOptions): Thenable<UpdateResult>;
    updateById(id: string, rev: string, update: UpdateQuery, options?: UpdateOneOptions): Thenable<UpdateResult>;
    delete(): Thenable<any>;
}
export interface Cursor {
    toArray(): Thenable<any[]>;
}
export interface ReadOptions {
    fields?: Dictionary<string>;
    skip?: number;
    limit?: number;
    sort?: string[];
    timeout?: number;
}
export interface UpdateOptions {
    timeout?: number;
}
export interface UpdateOneOptions {
    timeout?: number;
}
export interface UpdateResult {
    updateCount: number;
}
