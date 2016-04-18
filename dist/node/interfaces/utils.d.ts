export interface Dictionary<T> {
    [key: string]: T;
}
export interface NumericDictionary<T> {
    [key: number]: T;
}
export declare type Document = Dictionary<any>;
