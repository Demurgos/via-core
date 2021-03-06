import { Dictionary, Document } from "./utils";
export interface TypeBase {
    isSync: boolean;
    isAsync: boolean;
    isCollection: boolean;
    type: string;
    types: string[];
    toJSON(): any;
}
export interface TypeSync<T, D, O> extends TypeBase {
    isSync: boolean;
    readTrustedSync(format: "json-doc" | "bson-doc", val: any, options?: O): T;
    readSync(format: "json-doc" | "bson-doc", val: any, options?: O): T;
    writeSync(format: "json-doc" | "bson-doc", val: T, options?: O): any;
    testErrorSync(val: any, options?: O): Error;
    testSync(val: any, options?: O): boolean;
    equalsSync(val1: T, val2: T, options?: O): boolean;
    cloneSync(val: T, options?: O): T;
    diffSync(oldVal: T, newVal: T, options?: O): D | null;
    patchSync(oldVal: T, diff: D | null, options?: O): T;
    revertSync(newVal: T, diff: D | null, options?: O): T;
}
export interface TypeAsync<T, D, O> extends TypeBase {
    isAsync: boolean;
    readTrustedAsync(format: "json-doc" | "bson-doc", val: any, options?: O): PromiseLike<T>;
    readAsync(format: "json-doc" | "bson-doc", val: any, options?: O): PromiseLike<T>;
    writeAsync(format: "json-doc" | "bson-doc", val: T, options?: O): PromiseLike<any>;
    testErrorAsync(val: any, options?: O): PromiseLike<Error>;
    testAsync(val: any, options?: O): PromiseLike<boolean>;
    equalsAsync(val1: T, val2: T, options?: O): PromiseLike<boolean>;
    cloneAsync(val: T, options?: O): PromiseLike<T>;
    diffAsync(oldVal: T, newVal: T, options?: O): PromiseLike<D | null>;
    patchAsync(oldVal: T, diff: D | null, options?: O): PromiseLike<T>;
    revertAsync(newVal: T, diff: D | null, options?: O): PromiseLike<T>;
}
export declare type Type<T, D, O> = TypeAsync<T, D, O> | TypeSync<T, D, O>;
export interface StaticTypeSync<T, D, O> {
    new (options: O): TypeSync<T, D, O>;
}
export interface StaticTypeAsync<T, D, O> {
    new (options: O): TypeAsync<T, D, O>;
}
export interface StaticType<T, D, O> {
    new (options: O): Type<T, D, O>;
}
export interface CollectionTypeAsync<T, D, O, I> extends TypeAsync<T, D, O> {
    isCollection: boolean;
    iterateAsync(value: T, options?: O): PromiseLike<IteratorResult<I>>;
}
export interface DocumentDiff {
    set: Document;
    update: Dictionary<any>;
    unset: Document;
}
export interface UpdateQuery {
    $set?: any;
    $unset?: any;
}
