require('mocha')
require('should')

var showHelp = require('./index')


describe('set-verbosity', function () {

  describe('when -v is provided', function () {
    it('it should set DEBUG=current_module', function () {
      showHelp.raw('some', 'node some.js -v');
      process.env['DEBUG'].should.eql('some')
    })
  })

  describe('when -v moduleA,moduleB is provided', function () {
    it('it should set DEBUG=moduleA,moduleB', function () {
      showHelp.raw('some', 'node some.js -v moduleA,moduleB')
      process.env['DEBUG'].should.eql('moduleA,moduleB')
    })
  })

  describe('when -v -d is provided', function () {
    it('it should not set DEBUG=-d', function () {
      showHelp.raw('some', 'node some.js -v -d')
      process.env['DEBUG'].should.not.eql('-d')
    })
  })

  describe('when --verbose is provided', function () {
    it('it should set DEBUG=current_module', function () {
      showHelp.raw('some', 'node some.js --verbose')
      process.env['DEBUG'].should.eql('some')
    })
  })

  describe('when --verbose moduleA,moduleB is provided', function () {
    it('it should set DEBUG=moduleA,moduleB', function () {
      showHelp.raw('some', 'node some.js --verbose moduleA,moduleB')
      process.env['DEBUG'].should.eql('moduleA,moduleB')
    })
  })

  describe('when --verbose -d is provided', function () {
    it('it should not set DEBUG=-d', function () {
      showHelp.raw('some', 'node some.js --verbose -d')
      process.env['DEBUG'].should.not.eql('-d')
    })
  })

  describe('when -v|--verbose is not provided, it does not change env', function () {
    it('it should not set DEBUG=moduleA,moduleB', function () {
      process.env['DEBUG'] = 'already set!'
      showHelp.raw('some', 'node some.js')
      process.env['DEBUG'].should.eql('already set!')
    })
  })

})