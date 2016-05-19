import {Document, Dictionary} from "./utils";
import {Proxy} from "./proxy";
import {DotPath} from "./dot-path";
import {Thenable} from "bluebird";
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

export interface LoadOptions extends GetProxyOptions {}

export interface CreateOptions extends GetProxyOptions {}

export interface GetDefaultDataOptions {}

export interface UpdateLocalOptions {}

export interface UpdateOneLocalOptions {}

export interface DecodeOptions {}

export interface EncodeOptions {}

export interface ImportDataOptions {}

export interface ExportDataOptions {}

export interface FindOptions {
  proxy?: Proxy;
}

export interface ModelConstructor {
  new (options?: any): Model;
}

export interface StaticModel extends ModelConstructor {
  getNewSync (opt?: any): Model;
  getNew (opt?: any): Thenable<Model>;
  getByIdSync (id: string, opt?: any): Model;
  getById (id: string, opt?: any): Thenable<Model>;
  find (filter: Object, opt?: FindOptions): Thenable<Model[]>;
}

export interface Model {
  setId (id: string): Model;
  getId (): string;
  getName (): string;
  getToken (): ModelToken;

  getProxy (options?: GetProxyOptions): Thenable<Proxy>;
  getSchema (): Thenable<ViaModelSchema>;

  exists (options: ExistsOptions): Thenable<boolean>;
  getDefaultData (options?: GetDefaultDataOptions): Thenable<any>;
  create (options?: CreateOptions): Thenable<Model>;

  updateLocal (data: Document, options?: UpdateLocalOptions): Model;
  updateOneLocal (path: DotPath, value: any, options?: UpdateOneLocalOptions): Thenable<Model>;
  readLocal (fields: DotPath[]): ReadLocalResult;
  clearLocal (): Model;

  load (fields: DotPath[], getProxyOptions?: LoadOptions): Thenable<Model>;
  decode (data: any, format: string | Thenable<string>, options?: DecodeOptions): Thenable<Document>;
  encode (data: Document, format: string | Thenable<string>, options?: EncodeOptions): Thenable<any>;
  importData (data: any, format: string, options?: ImportDataOptions): Thenable<Model>;
  exportData (paths: DotPath[], format: string, options?: ExportDataOptions): Thenable<any>;

  diff(): Thenable<DocumentDiff>;
  commit (options?: CommitOptions): Thenable<Model>;

  get (paths: DotPath[]): Thenable<any>;
  getOne (path: DotPath): Thenable<any>;
  set (values: Document, opt?: any): Thenable<Model>;
  setOne (path: DotPath, value: any, opt?: any): Thenable<Model>;

  test (query: QueryDocument, opt?: any): Thenable<Error>;
  testOne (field: DotPath, value: any, opt?: any): Thenable<Error>;
  ensureValid (): Thenable<Model>; // returns the model if it's valid, throws otherwise

  toPlain (paths: DotPath[], opt?: any): Document;
  toJSON (): ModelToken;
}
