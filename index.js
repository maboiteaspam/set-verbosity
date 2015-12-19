
var setVerbosity = function (name, verbose) {
  if (verbose) process.env['DEBUG'] = verbose===true?name:verbose;
  return require('debug')(name)
}

module.exports = {
  raw: function setVerbosityFromRawString (name, str) {
    var k = str.match(/\s+(-v|--verbose)\s?([^\s]+)?/);
    var yourDebug = setVerbosity(name, k[2] || !!k[1]);
    var debug = require('debug')
    debug('set-verbosity')('DEBUG:%s', process.env['DEBUG'])
    debug('set-verbosity')('str: %s %s', name, str)
    debug('set-verbosity')('k: %s %s', name, str)
    return yourDebug
  },
  parsed: function setVerbosityFromParsedString (name, str) {
    var yourDebug = setVerbosity(name, str);
    var debug = require('debug')
    debug('set-verbosity')('DEBUG:%s', process.env['DEBUG'])
    debug('set-verbosity')('str: %s %s', name, str)
    debug('set-verbosity')('k: %s %s', name, str)
    return yourDebug
  }
};
