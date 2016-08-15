import * as _dotPath from "./dot-path";
import * as _model from "./interfaces/model";
import * as _proxy from "./interfaces/proxy";
import * as _schema from "./interfaces/schema";
import * as _type from "./interfaces/type";
import * as _utils from "./interfaces/utils";
export declare namespace dotPath {
    let stringify: typeof _dotPath.stringify;
    let parse: typeof _dotPath.parse;
    let get: typeof _dotPath.get;
    let set: typeof _dotPath.set;
    let has: typeof _dotPath.has;
    type DotPath = _dotPath.DotPath;
    type ParsedDotPath = _dotPath.ParsedDotPath;
}
export declare namespace model {
    type ModelToken = _model.ModelToken;
    type QueryDocument = _model.QueryDocument;
    type GetProxyOptions = _model.GetProxyOptions;
    type GetDefaultDataOptions = _model.GetDefaultDataOptions;
    type CreateOptions = _model.CreateOptions;
    type ExistsOptions = _model.ExistsOptions;
    type ReadLocalResult = _model.ReadLocalResult;
    type CommitOptions = _model.CommitOptions;
    type LoadOptions = _model.LoadOptions;
    type FindOptions = _model.FindOptions;
    type UpdateLocalOptions = _model.UpdateLocalOptions;
    type UpdateOneLocalOptions = _model.UpdateOneLocalOptions;
    type DecodeOptions = _model.DecodeOptions;
    type EncodeOptions = _model.EncodeOptions;
    type ImportDataOptions = _model.ImportDataOptions;
    type ExportDataOptions = _model.ExportDataOptions;
    type ModelConstructor = _model.ModelConstructor;
    type StaticModel = _model.StaticModel;
    type Model = _model.Model;
}
export declare namespace proxy {
    type Proxy = _proxy.Proxy;
    type Cursor = _proxy.Cursor;
    type ReadOptions = _proxy.ReadOptions;
    type UpdateOptions = _proxy.UpdateOptions;
    type UpdateOneOptions = _proxy.UpdateOneOptions;
    type UpdateResult = _proxy.UpdateResult;
}
export declare namespace schema {
    type Schema = _schema.Schema;
    type ViaModelSchema = _schema.ViaModelSchema;
}
export declare namespace type {
    type TypeAsync<T, D, O> = _type.TypeAsync<T, D, O>;
    type TypeSync<T, D, O> = _type.TypeSync<T, D, O>;
    type Type<T, D, O> = _type.Type<T, D, O>;
    type StaticTypeSync<T, D, O> = _type.StaticTypeSync<T, D, O>;
    type StaticTypeAsync<T, D, O> = _type.StaticTypeAsync<T, D, O>;
    type StaticType<T, D, O> = _type.StaticType<T, D, O>;
}
export declare namespace utils {
    type Dictionary<T> = _utils.Dictionary<T>;
    type NumericDictionary<T> = _utils.NumericDictionary<T>;
    type Document = _utils.Document;
}
