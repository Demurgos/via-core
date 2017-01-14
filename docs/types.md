# Types

The goal of `via` is to facilitate the manipulation of data, including untrusted
user input. While `Typescript` provided advanced compile-time checks, via allows
for easy runtime checks.

It provides the following common operations: **reading, writing, testing and 
comparing/updating data**. The focus is on clarity and extensibility: you should
be able to derive types that suit your application or create your own easily.


The `Type` interface is generic and has two parameters canonically named `T` 
and `D`.

- `T` (stands for `Type`) is the base type of the value exposed to Typescript:
read operations return `T`, write operations require `T`... For example, a
`HexString` class would use `string` for `T`: hexadecimal strings are more
specific, but `string` is the closest type available in the language.

- `D` (stands for `Difference`) is the type used to represent a difference between
two values of a given type. You can think of it as a diff between two commits.

- `O` (stands for `Options`) defines some type-specific options.

The read and write operations require a format. The supported format are
`json-doc` and `bson-doc`.

## `read`

```
read (format: string, val: any, options?: O): Promise<T>`
```

Attempts to read the value retrieved from the supplied format `format`.
This will eventually perform conversions or over changes in order to ensure
that the provided value respects the constraints of the type.

**Guarantee**: A `read` without any thrown error implies that a `test` on the
result will also be successful. It means that you do not have to call `test`
again.

Multiple `read` might return the same object.

**Use this method to read untrusted user input.**


## `readTrusted`

```
readTrusted (format: string, val: any, options?: O): Promise<T>`
```

This is a method similar to `read`, the difference is that it assumes that the
data comes from a previous serialization with `write`. This assumption allows
to skip tests to eventually gain speed (this is not guaranteed).
If you use this method on untrusted data, you loose the guarantee that the
result will be valid.

**Guarantee**: A `write` without any thrown error implies that a `read` on
the result will be successful and the read value will pass `test` without
causing any error.

**If you doubt about the integrity of your data, use `read`.** This method is
provided to deserialize data that you have written yourself.

A valid implementation detail is to use `readTrusted` as an alias for `read`.
Even if this is implemented this way, `readTrusted` should still not claim any
guarantees about untrusted input.

Multiple `readTrusted` might return the same object.

## `write`

```
write (format: string, val: T, options?: O): Promise<any>`
```

Writes the value to the supplied format.

**Guarantee**: `write` followed by `read` will return the same value (according
to `equals`).

Multiple `write` might return the same object.

## `testError`

```
testError (val: any, options?: O): Promise<Error>`
```
Checks if the value matches the constraints of the type.
If the value is not valid according to this type, it returns an `Error`
explaining the reason. Otherwise, if the value is valid, the result is `null`
(no error).

**Guarantee**: An invalid input will not throw any error but return it.
Errors can be thrown, but if an error is thrown it does not mean that the input
is invalid but that the check failed. This should not happen for normal type
(fill an issue if it happens), but if you implement your own custom types then
maintain this guarantee.

Possible errors (thrown and returned) should be documented.

## `test`

```
test (val: any, options?: O): Promise<boolean>`
```

This is similar to `testError` but return the result of the checks as a
`boolean` instead of an `Error` object.

**Guarantee**: Same as `testError`.

A valid implementation is to reuse `testError`. If you do so, do not swallow
errors thrown by `testError`: this means that the result is uncertain, not that
the value is invalid.

## `equals`

```
(val1: T, val2: T, options?: O): Promise<boolean>`
```

Returns a boolean indicating if both values are equal.

## `clone`

```
(val: T, options?: O): Promise<T>
```

This returns a copy of the current value. If the type is a collection, this
performs a recursive (deep) clone.

## `diff`

```
diff (oldVal: T, newVal: T, options?: O): Promise<D>`
```

Returns a `diff` representing the changes from `oldVal` to `newVal`.
If both values are equal, returns `null`.

## `patch`

```
patch (oldVal: T, diff: D, options?: O): Promise<T>`
```

Applies the `diff` to `oldVal` in order to obtain `newVal`.

## `revert

```
patch (newVal: T, diff: D, options?: O): Promise<T>`
```

This applies `diff` in reverse order to get an older value from `newVal`.

```
toJSON (): {type: string, options: JSONObject}
```
