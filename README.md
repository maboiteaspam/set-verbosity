# set-verbosity

Set `process.env[DEBUG]` given process.argv

## Install

    npm i @maboiteaspam/set-verbosity --save

## Usage

#### process.argv

Using the node `process.argv` value

```js
var pkg = ('require('./paclage.json');
var debug = require('@maboiteaspam/set-verbosity')(pkg.name, process.argv);
// or var debug = require('@maboiteaspam/set-verbosity');
//    .raw(pkg.name, process.argv.join(' '));

debug('hello');
```

Which then, can be invoked in such fashion
```sh
module-name -v
module-name --verbose
module-name -v module-name
module-name --verbose module-name,tomate,set-verbosity
```

#### minimist

Using `minimist` module to pre parse values

```js
var pkg = ('require('./paclage.json');
var argv  = require('minimist')(process.argv.slice(2));
var debug = require('@maboiteaspam/set-verbosity')(pkg.name, argv.v || argv.verbose);
// or var debug = require('@maboiteaspam/set-verbosity');
//  .parsed(pkg.name, argv.v || argv.verbose);

debug('hello');
```

Which then, can be invoked in such fashion
```sh
module-name -v
module-name --verbose
module-name -v module-name
module-name --verbose module-name,tomate,set-verbosity
```

### debug object

This module returns instances of `debug` module

```js
var pkg = ('require('./paclage.json');
var debug = require('@maboiteaspam/set-verbosity')(pkg.name, process.argv);

debug('hello');
```

Which then, can be invoked in such fashion
```sh
module-name -v
module-name --verbose
module-name -v module-name
module-name --verbose module-name,tomate,set-verbosity
```

## Api

#### setVerbosity

`setVerbosity` is a `function` object with two additional methods `raw`, `parsed`.

- __setVerbosity(string name, object arg) debug__

When `typeof(arg)` is object, returns `setVerbosity.raw(name, arg)`

- __setVerbosity(string name, string arg) debug__

When `typeof(arg)` is string, returns `setVerbosity.parsed(name, arg)`

- __setVerbosity(string name, bool arg) debug__

When `typeof(arg)` is bool, returns `setVerbosity.parsed(name, arg)`

#### setVerbosity.parsed

- __setVerbosity.parsed(string name, string verboseModules)__

Set `process.env['DEBUG']` to `verboseModules`.

- __setVerbosity.parsed(string name, bool verbose) debug__

Set `process.env['DEBUG']` to `name`.

#### setVerbosity.raw

- __setVerbosity.raw(string name, string argv) debug__

Parse `argv` to extract `-v || --verbose (verboseModules)?`.
Set `process.env['DEBUG']` to `verboseModules` or `name`.

- __setVerbosity.raw(string name, bool verbose) debug__

Set `process.env['DEBUG']` to `name`.


## Examples

```js
var pkg = ('require('./paclage.json');
var debug = require('@maboiteaspam/set-verbosity')(pkg.name, process.argv);
var debug = require('@maboiteaspam/set-verbosity').raw(pkg.name, process.argv);

var argv  = require('minimist')(process.argv.slice(2));
var debug = require('@maboiteaspam/set-verbosity')(pkg.name, argv.v || argv.verbose);
var debug = require('@maboiteaspam/set-verbosity').parsed(pkg.name, argv.v || argv.verbose);
```


## More

- https://nodejs.org/api/process.html#process_process_argv
- https://github.com/visionmedia/debug
- https://github.com/maboiteaspam/npi
- https://github.com/maboiteaspam/show-help
