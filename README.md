# kryo-core

[![npm](https://img.shields.io/npm/v/kryo-core.svg?maxAge=2592000)](https://www.npmjs.com/package/kryo-core)
[![Build status](https://img.shields.io/travis/demurgos/kryo-core/master.svg?maxAge=2592000)](https://travis-ci.org/demurgos/kryo-core)
[![GitHub repository](https://img.shields.io/badge/Github-demurgos%2Fkryo--core-blue.svg)](https://github.com/demurgos/kryo-core)

JSON and BSON serialization and deserialization library for Javascript.

## Install

````bash
npm install --save kryo-core
````

## API

### `Type<T, D, O>`


    array
        A JSON array. 
    boolean
        A JSON boolean. 
    integer
        A JSON number without a fraction or exponent part. 
    number
        Any JSON number. Number includes integer. 
    null
        The JSON null value. 
    object
        A JSON object. 
    string
        A JSON string. 
