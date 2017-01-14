import {Dictionary, Document} from "./utils";

export interface TypeBase {
  isSync: boolean;
  isAsync: boolean;
  isCollection: boolean;
  type: string;
  types: string[];
  toJSON(): any;
}

export interface TypeSync<T, D, O> extends TypeBase {
  isSync: true;

  readTrustedSync (format: "json-doc" | "bson-doc", val: any, options?: O): T;
  readSync (format: "json-doc" | "bson-doc", val: any, options?: O): T;
  writeSync (format: "json-doc" | "bson-doc", val: T, options?: O): any;
  testErrorSync (val: any, options?: O): Error;
  testSync (val: any, options?: O): boolean;
  equalsSync (val1: T, val2: T, options?: O): boolean;
  cloneSync (val: T, options?: O): T;
  diffSync (oldVal: T, newVal: T, options?: O): D | null;
  patchSync (oldVal: T, diff: D | null, options?: O): T;
  revertSync (newVal: T, diff: D | null, options?: O): T;
}

export interface TypeAsync<T, D, O> extends TypeBase {
  isAsync: true;

  readTrustedAsync (format: "json-doc" | "bson-doc", val: any, options?: O): Promise<T>;
  readAsync (format: "json-doc" | "bson-doc", val: any, options?: O): Promise<T>;
  writeAsync (format: "json-doc" | "bson-doc", val: T, options?: O): Promise<any>;
  testErrorAsync (val: any, options?: O): Promise<Error>;
  testAsync (val: any, options?: O): Promise<boolean>;
  equalsAsync (val1: T, val2: T, options?: O): Promise<boolean>;
  cloneAsync (val: T, options?: O): Promise<T>;
  diffAsync (oldVal: T, newVal: T, options?: O): Promise<D | null>;
  patchAsync (oldVal: T, diff: D | null, options?: O): Promise<T>;
  revertAsync (newVal: T, diff: D | null, options?: O): Promise<T>;
}

export type Type<T, D, O> = TypeAsync<T, D, O> | TypeSync<T, D, O>;

export interface StaticTypeSync<T, D, O> {
  new(options: O): TypeSync<T, D, O>;
}

export interface StaticTypeAsync<T, D, O> {
  new(options: O): TypeAsync<T, D, O>;
}

export interface StaticType<T, D, O> {
  new(options: O): Type<T, D, O>;
}

// I stands for Item
export interface CollectionTypeAsync <T, D, O, I> extends TypeAsync<T, D, O> {
  isCollection: true;
  iterateAsync (value: T, options?: O): Promise<IteratorResult<I>>;
}

export interface CollectionTypeSync <T, D, O, I> extends TypeSync<T, D, O> {
  isCollection: true;
  iterateSync (value: T, options?: O): IteratorResult<I>;
}

export type CollectionType<T, D, O, I> = CollectionTypeAsync <T, D, O, I> | CollectionTypeSync <T, D, O, I>;

export interface DocumentDiff {
  set: Document; // val
  update: Dictionary<any>; // diff
  unset: Document; // val
}
