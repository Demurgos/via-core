import * as Promise from "bluebird";

export interface TypeAsync<T, D> {
  isSync: boolean;
  name: string;

  read(format: string, val: any): Promise<T>;
  write(format: string, val: T): Promise<any>;
  test(val: any): Promise<Error>;
  normalize(val: any): Promise<T>;
  equals(val1: T, val2: T): Promise<boolean>;
  clone(val: T): Promise<T>;
  diff(oldVal: T, newVal: T): Promise<D>;
  patch(oldVal: T, diff: D): Promise<T>;
  revert(newVal: T, diff: D): Promise<T>;
}

export interface TypeSync<T, D> {
  isSync: boolean;
  name: string;

  readSync(format: string, val: any): T;
  writeSync(format: string, val: T): any;
  testSync(val: any): Error;
  normalizeSync(val: any): T;
  equalsSync(val1: T, val2: T): boolean;
  cloneSync(val: T): T;
  diffSync(oldVal: T, newVal: T): D;
  patchSync(oldVal: T, diff: D): T;
  revertSync(newVal: T, diff: D): T;
}

export interface Type<T, D> extends TypeAsync<T, D> {
  isSync: boolean;

  readSync?(format: string, val: any): T;
  writeSync?(format: string, val: T): any;
  testSync?(val: any): Error;
  normalizeSync?(val: any): T;
  equalsSync?(val1: T, val2: T): boolean;
  cloneSync?(val: T): T;
  diffSync?(oldVal: T, newVal: T): D;
  patchSync?(oldVal: T, diff: D): T;
  revertSync?(newVal: T, diff: D): T;
}

export interface StaticTypeSync<T, D> {
  new(...args: any[]): TypeSync<T, D>;
  prototype?: TypeSync<T, D>;
}

export interface StaticType<T, D> {
  new(...args: any[]): Type<T, D>;
  prototype?: Type<T, D>;
}

export interface CollectionTypeAsync<T, D> extends TypeAsync<T, D> {
  reflect(visitor: (value?: T, key?: any, parent?: CollectionType<any, any>) => any): Promise<any>;
}

export interface CollectionTypeSync<T, D> extends TypeSync<T, D> {
  reflectSync(visitor: (value?: T, key?: any, parent?: CollectionType<any, any>) => any): any;
}

export interface CollectionType<T, D> extends CollectionTypeAsync<T, D>, Type<T, D> {
  reflectSync?(visitor: (value?: T, key?: any, parent?: CollectionType<any, any>) => any): any;
}
