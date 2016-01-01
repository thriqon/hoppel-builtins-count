
Hoppel Builtin Reducer: Count [![Build Status](https://travis-ci.org/thriqon/hoppel-builtins-count.svg)](https://travis-ci.org/thriqon/hoppel-builtins-count)
=============================

> Implements the "CouchDB Reducer Protocol" by counting the emitted items.

## Install

    $ npm install --save hoppel-builtins-count

## Usage

    var count = require('hoppel-builtins-count');

    count(['a', 'b'], ['x', 'y'], false); // 2

    count(null, [2, 3], true); // 5


## Related

* [hoppel](https://github.com/thriqon/hoppel)

## License

ISC (C) Jonas Weber
