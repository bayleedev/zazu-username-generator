const expect = require('chai').expect
const hello = require('../src/usernames')()

describe('Usernames', () => {
  describe('.search', () => {
    it('returns a list of 20', () => {
      return hello('').then((results) => {
        expect(results.length).to.eq(20)
      })
    })

    it('users a dash for delimiter', () => {
      return hello('-').then((results) => {
        results.forEach((result) => {
          expect(result.value).to.match(/^[a-z-]+$/i)
        })
      })
    })

    it('users a $ for delimiter', () => {
      return hello('$').then((results) => {
        results.forEach((result) => {
          expect(result.value).to.match(/^[a-z-\$]+$/i)
        })
      })
    })

    it('users a space for delimiter', () => {
      return hello(' ').then((results) => {
        results.forEach((result) => {
          expect(result.value).to.match(/^[a-z- ]+$/i)
        })
      })
    })
  })
})
