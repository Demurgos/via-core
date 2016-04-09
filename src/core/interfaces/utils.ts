export interface Dictionary<T> {
  [key: string]: T;
}

export type Document = Dictionary<any>;
