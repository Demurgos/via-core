import * as _dotPath from "./dot-path";
import * as _model from "./interfaces/model";
import * as _proxy from "./interfaces/proxy";
import * as _schema from "./interfaces/schema";
import * as _type from "./interfaces/type";
import * as _utils from "./interfaces/utils";

export namespace dotPath {
  export let stringify = _dotPath.stringify;
  export let parse = _dotPath.parse;
  export let get = _dotPath.get;
  export let set = _dotPath.set;
  export let has = _dotPath.has;
  export type DotPath = _dotPath.DotPath;
  export type ParsedDotPath = _dotPath.ParsedDotPath;
}

export namespace model {
  export type ModelToken = _model.ModelToken;
  export type QueryDocument = _model.QueryDocument;
  export type GetProxyOptions = _model.GetProxyOptions;
  export type ExistsOptions = _model.ExistsOptions;
  export type ReadLocalResult = _model.ReadLocalResult;
  export type CommitOptions = _model.CommitOptions;
  export type LoadOptions = _model.LoadOptions;
  export type FindOptions = _model.FindOptions;
  export type ModelConstructor = _model.ModelConstructor;
  export type StaticModel = _model.StaticModel;
  export type Model = _model.Model;
}

export namespace proxy {
  export type Proxy = _proxy.Proxy;
  export type Cursor = _proxy.Cursor;
  export type ReadOptions = _proxy.ReadOptions;
  export type UpdateOptions = _proxy.UpdateOptions;
  export type UpdateOneOptions = _proxy.UpdateOneOptions;
  export type UpdateResult = _proxy.UpdateResult;
}

export namespace schema {
  export type Schema = _schema.Schema;
  export type ViaModelSchema = _schema.ViaModelSchema;
}

export namespace type {
  export type TypeAsync<T, D> = _type.TypeAsync<T, D>;
  export type TypeSync<T, D> = _type.TypeSync<T, D>;
  export type Type<T, D> = _type.Type<T, D>;
  export type StaticTypeSync<T, D> = _type.StaticTypeSync<T, D>;
  export type StaticType<T, D> = _type.StaticType<T, D>;
  export type CollectionTypeAsync<T, D> = _type.CollectionTypeAsync<T, D>;
  export type CollectionTypeSync<T, D> = _type.CollectionTypeSync<T, D>;
  export type CollectionType<T, D> = _type.CollectionType<T, D>;
  export type DocumentDiff = _type.DocumentDiff;
  export type UpdateQuery = _type.UpdateQuery;
}

export namespace utils {
  export type Dictionary<T> = _utils.Dictionary<T>;
  export type NumericDictionary<T> = _utils.NumericDictionary<T>;
  export type Document = _utils.Document;
}
