import * as Promise from "bluebird";
import {Dictionary} from "./utils";
import {ViaSchema} from "./schema";

export interface Proxy {
  format: string;
  build (schema: ViaSchema): Promise<any>;
  create (data: Object): Promise<Object>;
  read (filter: Object, options?: ReadOptions): Promise<Cursor>;
  readById (id: string, options?: ReadOptions): Promise<Object>;
  update (filter: Document, update: Object, options?: UpdateOptions): Promise<UpdateResult>;
  updateById (id: string, rev: string, update: Object, options?: UpdateOneOptions): Promise<UpdateResult>;
  delete (): Promise<any>;
}

export interface Cursor {
  toArray (): Promise<any[]>;
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
