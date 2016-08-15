# Collections

Collections are a special kind of type to represent _container_.
Circular references are not allowed.

## Map

```
Map <K, V>
```

Associates a key of type `K` to a value of type `V`

This type is abstract, there are not direct implementation currently.

## Dictionary

```
 Dictionary <V> = Map<string, V>
```

A map with the key type `K` being `string`. The type `V` is uniform.

## Object

```
Object = Dictionary<any> = Map<string, any>
```

If the type `V` of a dictionary is `any`, it can be called an `object`.
There is no implementation, just use a Dictionary and set `any` as its type.

## Document

```
Document = Map<string, V(key)>
```

A document is a variation of a map where the type `V` is not uniform but depends
of the current key.

## List

```
List<T>
```

Describes an array.

## Set

```
Set<T>
```

Describes a set of unique items.
