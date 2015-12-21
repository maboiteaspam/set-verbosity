
function setVerbosity(name, arg) {
  if (typeof(arg)==='object') return setVerbosity.raw(name, arg.join(' '))
  else return setVerbosity.parsed(name, arg)
}
setVerbosity.raw = function fromRawString (name, str) {
  var k = str.match(/\s+(-v|--verbose)\s?([^\s]+)?/);
  return setVerbosity.parsed(name, k && ((k[2] && k[2]!=='--' && k[2]) || !!k[1]))
}
setVerbosity.parsed = function fromParsedString (name, str) {
  if (str) process.env['DEBUG'] = str===true?name:''+str;
  var yourDebug = require('debug')(name)
  var debug = require('debug')
  debug('set-verbosity')('DEBUG:%s', process.env['DEBUG'])
  debug('set-verbosity')('str: %s %s', name, str)
  debug('set-verbosity')('k: %s %s', name, str)
  return yourDebug
}

module.exports = setVerbosity;
