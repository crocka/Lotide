# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @crocka/lotide`

**Require it:**

`const _ = require('@crocka/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`
* `tail(array)`
* `middle(array)`
* `assertArraysEqual(array1, array2)`
* `assertEqual(actual, expected)`
* `assertObjectsEqual(object1, object2)`
* `countLetters(string)`
* `countOnly(string, object)`
* `eqArrays(array1, array2)`
* `eqObjects(object1, object2)`
* `findKeyByValue(object, string)`
* `findKey(object, fn())`
* `letterPositions(string)`
* `map(array, fn())`
* `takeUntil(array, fn())`
* `without(array1, array2)`