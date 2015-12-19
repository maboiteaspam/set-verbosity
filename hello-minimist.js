
var argv  = require('minimist')(process.argv.slice(2));
var debug = require('./index.js').parsed('module-name', argv.v||argv.verbose);

debug('hello')
