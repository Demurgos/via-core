# via-core

## Description

Core interfaces, errors, helpers, etc.

## Install

````bash
npm install
gulp build.node
````

## API

### Proxy

A proxy is an object responsible of interactions with the data source.

````ts
interface Proxy {
  format: string;
  build (schema: ViaSchema): Promise<any>;
  create (data: Object): Promise<Object>;
  read (filter: Object, options?: ReadOptions): Promise<Cursor>;
  readById (id: string, options?: ReadOptions): Promise<Object>;
  update (filter: Document, update: Object, options?: UpdateOptions): Promise<UpdateResult>;
  updateById (id: string, rev: string, update: Object, options?: UpdateOneOptions): Promise<UpdateResult>;
  delete (): Promise<any>;
}
````

#### `.format: string`

A string describing the data format returned by the database. Either `json` or `bson`.

#### `.build (schema: ViaSchema): Promise<any>`

Ensures that the required tables, collections, databases, and so on are created.

#### `.create (data: Object): Promise<Object>`

Creates a new entry in the database for the supplied plain object.
Returns the data stored in the database, it may have additional fields (such as `_id` pr `_rev`).

#### `.read (filter: Object, options?: ReadOptions): Promise<Cursor>`

````ts
interface Cursor {
  toArray (): Promise<any[]>;
}

interface ReadOptions {
  fields?: Dictionary<boolean>;
  skip?: number;
  limit?: number;
  sort?: string[];
  timeout?: number;
}
````

The filter is a plain [Mongo Query Document](https://docs.mongodb.org/manual/tutorial/query-documents/).
You can choose the fields you want to select. (By default, the proxy will try to return all the fields).
Given this document:
````json
{
    foo: "foo string",
    quz: "quz string",
    child: {
        hello: "world!",
        bar: 42
    },
    atoms: [
        {
            name: "hydrogen",
            number: 1
        },
        {
            name: "carbon",
            number: 6
        }
    ]
}
````
And this projection:
````json
{
    "foo": true,
    "child.bar": true,
    "atoms[].name": true
}
````
The result will contain at least:
````json
{
    foo: "foo string",
    child: {
        bar: 42
    },
    atoms: [
        {
            name: "hydrogen"
        },
        {
            name: "carbon"
        }
    ]
}
````

#### `.update (filter: Document, update: Object, options?: UpdateOptions): Promise<UpdateResult>`

update is a `diff` object (obtained by the related `Schema`)

````ts
interface UpdateOptions {
  timeout?: number;
}

interface UpdateOneOptions {
  timeout?: number;
}

interface UpdateResult {
  updateCount: number;
}
````

### Schema

````ts
interface SchemaDiff {
  create: Dictionary<data>,
  update: Dictionary<diff>,
  delete: Dictionary<data>
}
````


