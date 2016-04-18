import * as Bluebird from "bluebird";
import { Dictionary } from "./utils";
import { ViaModelSchema } from "./schema";
import { UpdateQuery } from "./type";
export interface Proxy {
    format: string;
    build(schema: ViaModelSchema): Bluebird.Thenable<any>;
    create(data: Object): Bluebird.Thenable<Object>;
    read(filter: Object, options?: ReadOptions): Bluebird.Thenable<Cursor>;
    readById(id: string, options?: ReadOptions): Bluebird.Thenable<Object>;
    update(filter: Document, update: UpdateQuery, options?: UpdateOptions): Bluebird.Thenable<UpdateResult>;
    updateById(id: string, rev: string, update: UpdateQuery, options?: UpdateOneOptions): Bluebird.Thenable<UpdateResult>;
    delete(): Bluebird.Thenable<any>;
}
export interface Cursor {
    toArray(): Bluebird.Thenable<any[]>;
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
