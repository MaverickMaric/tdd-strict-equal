var describe = require('mocha').describe
var it = require('mocha').it
var expect = require('chai').expect
var strictEquals = require('../calculation')

describe('calculation', () => {
  describe('strictEquals', () => {
    it('returns true if values provided are strictly equal', () => {
      // setup test data
      expect(strictEquals(5, 5)).to.equal(true)
      expect(strictEquals('six', 'six')).to.equal(true)
      expect(strictEquals(5, '5')).to.equal(false)
      expect(strictEquals(0, false)).to.equal(false)
    })
  })
})
