import * as Bluebird from "bluebird";
import { Dictionary, Document } from "./utils";
export interface TypeAsync<T, D> {
    isSync: boolean;
    name: string;
    read(format: string, val: any, options?: any): Bluebird.Thenable<T>;
    readTrusted(format: string, val: any, options?: any): Bluebird.Thenable<T>;
    write(format: string, val: T, options?: any): Bluebird.Thenable<any>;
    test(val: any, options?: any): Bluebird.Thenable<Error>;
    equals(val1: T, val2: T, options?: any): Bluebird.Thenable<boolean>;
    clone(val: T, options?: any): Bluebird.Thenable<T>;
    diff(oldVal: T, newVal: T, options?: any): Bluebird.Thenable<D>;
    patch(oldVal: T, diff: D, options?: any): Bluebird.Thenable<T>;
    revert(newVal: T, diff: D, options?: any): Bluebird.Thenable<T>;
}
export interface TypeSync<T, D> {
    isSync: boolean;
    name: string;
    readSync(format: string, val: any, options?: any): T;
    readTrustedSync(format: string, val: any, options?: any): T;
    writeSync(format: string, val: T, options?: any): any;
    testSync(val: any, options?: any): Error;
    equalsSync(val1: T, val2: T, options?: any): boolean;
    cloneSync(val: T, options?: any): T;
    diffSync(oldVal: T, newVal: T, options?: any): D;
    patchSync(oldVal: T, diff: D, options?: any): T;
    revertSync(newVal: T, diff: D, options?: any): T;
}
export interface Type<T, D> extends TypeAsync<T, D> {
    isSync: boolean;
    readSync?(format: string, val: any, options?: any): T;
    readTrustedSync?(format: string, val: any, options?: any): T;
    writeSync?(format: string, val: T, options?: any): any;
    testSync?(val: any, options?: any): Error;
    equalsSync?(val1: T, val2: T, options?: any): boolean;
    cloneSync?(val: T, options?: any): T;
    diffSync?(oldVal: T, newVal: T, options?: any): D;
    patchSync?(oldVal: T, diff: D, options?: any): T;
    revertSync?(newVal: T, diff: D, options?: any): T;
}
export interface StaticTypeSync<T, D> {
    new (...args: any[]): TypeSync<T, D>;
    prototype?: TypeSync<T, D>;
}
export interface StaticType<T, D> {
    new (...args: any[]): Type<T, D>;
    prototype?: Type<T, D>;
}
export interface CollectionTypeAsync<T, D> extends TypeAsync<T, D> {
    reflect(visitor: (value?: T, key?: any, parent?: CollectionType<any, any>) => any, options?: any): Bluebird.Thenable<any>;
    diffToUpdate(newVal: T, diff: D, format: string): Bluebird.Thenable<UpdateQuery>;
}
export interface CollectionTypeSync<T, D> extends TypeSync<T, D> {
    reflectSync(visitor: (value?: T, key?: any, parent?: CollectionType<any, any>) => any, options?: any): any;
}
export interface CollectionType<T, D> extends CollectionTypeAsync<T, D>, Type<T, D> {
    reflectSync?(visitor: (value?: T, key?: any, parent?: CollectionType<any, any>) => any, options?: any): any;
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
