const assert = require('assert')
const context = require('../context/')
const mnpjs = require('../../src/')

const mnpjsTestSuite = {
    context,
    'should be a function': () => {
        assert.equal(typeof mnpjs, 'function')
    },
    'should call package without error': () => {
        assert.doesNotThrow(() => {
            mnpjs()
        })
    },
}

module.exports = mnpjsTestSuite
