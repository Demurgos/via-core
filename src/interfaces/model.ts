import {Document, Dictionary} from "./utils";
import {Proxy} from "./proxy";
import {DotPath} from "./dot-path";
import * as Bluebird from "bluebird";
import {DocumentDiff} from "./type";
import {ViaModelSchema} from "./schema";

export interface ModelToken {
  _id: string;
  _name: string;
}

export interface QueryDocument {
  $set?: Document;
  $unset?: Document;
}

export interface GetProxyOptions {
  proxy?: Proxy;
}

export interface ExistsOptions {
  proxy?: Proxy;
  strict: boolean;
}

export interface ReadLocalResult {
  data: Dictionary<any>;
  missing: DotPath[];
}

export interface CommitOptions {
  proxy?: Proxy;
}

export type LoadOptions = GetProxyOptions;

export interface FindOptions {
  proxy?: Proxy;
}

export interface ModelConstructor {
  new (options?: any): Model;
}

export interface StaticModel extends ModelConstructor {
  getNewSync (opt?: any): Model;
  getNew (opt?: any): Bluebird.Thenable<Model>;
  getByIdSync (id: string, opt?: any): Model;
  getById (id: string, opt?: any): Bluebird.Thenable<Model>;
  find (filter: Object, opt?: FindOptions): Bluebird.Thenable<Model[]>;
}

export interface Model {
  setId (id: string): Model;
  getId (): string;
  getName (): string;
  getToken (): ModelToken;

  getProxy (options?: GetProxyOptions): Bluebird.Thenable<Proxy>;
  getSchema (): Bluebird.Thenable<ViaModelSchema>;

  exists (options: ExistsOptions): Bluebird.Thenable<boolean>;
  getDefaultData (options?: any): Bluebird.Thenable<any>;
  create (options?: any): Bluebird.Thenable<Model>;

  updateLocal (data: Document): Model;
  updateOneLocal (path: DotPath, value: any, opt?: any): Bluebird.Thenable<Model>;
  readLocal (fields: DotPath[]): ReadLocalResult;
  clearLocal (): Model;

  load (fields: DotPath[], getProxyOptions?: LoadOptions): Bluebird.Thenable<Model>;
  decode (data: any, format: string | Bluebird.Thenable<string>): Bluebird.Thenable<Document>;
  encode (data: Document, format: string | Bluebird.Thenable<string>): Bluebird.Thenable<any>;
  importData (data: any, format: string): Bluebird.Thenable<Model>;
  exportData (paths: DotPath[], format: string): Bluebird.Thenable<any>;

  diff(): Bluebird.Thenable<DocumentDiff>;
  commit (options?: CommitOptions): Bluebird.Thenable<Model>;

  get (paths: DotPath[]): Bluebird.Thenable<any>;
  getOne (path: DotPath): Bluebird.Thenable<any>;
  set (values: Document, opt?: any): Bluebird.Thenable<Model>;
  setOne (path: DotPath, value: any, opt?: any): Bluebird.Thenable<Model>;

  test (query: QueryDocument, opt?: any): Bluebird.Thenable<Error>;
  testOne (field: DotPath, value: any, opt?: any): Bluebird.Thenable<Error>;
  ensureValid (): Bluebird.Thenable<Model>; // returns the model if it's valid, throws otherwise

  toPlain (paths: DotPath[], opt?: any): Document;
  toJSON (): ModelToken;
}
