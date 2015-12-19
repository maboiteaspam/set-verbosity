# set-verbosity

Set `process.env[DEBUG]` given process.argv

## Install

    npm i maboiteaspam/set-verbosity --save

## Usage

###### process.argv

Using the node `process.argv` value

```js
var debug = require('set-verbosity').raw('module-name', process.argv.join(' '));

debug('hello')
```

Which then, can be invoked in such fashion
```sh
module-name -v module-name
module-name --verbose module-name,tomate,set-verbosity
```

###### minimist

Using `minimist` module to pre parse values

```js
var argv  = require('minimist')(process.argv.slice(2));
var debug = require('set-verbosity').parsed('module-name', argv.v||argv.verbose);

debug('hello')
```

Which then, can be invoked in such fashion
```sh
module-name -v module-name
module-name --verbose module-name,tomate,set-verbosity
```

### debug object

This module returns instances of `debug` module

```js
var debug = require('set-verbosity').raw('module-name', process.argv.join(' '));

debug('hello')
```

Which then, can be invoked in such fashion
```sh
module-name -v module-name
module-name --verbose module-name,tomate,set-verbosity
```

## More

- https://nodejs.org/api/process.html#process_process_argv
- https://github.com/visionmedia/debug
- https://github.com/maboiteaspam/npi
