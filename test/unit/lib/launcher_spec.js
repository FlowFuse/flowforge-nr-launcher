const should = require('should') // eslint-disable-line
const sinon = require('sinon')
const launcher = require('../../../lib/launcher.js')

describe.only('Launcher', function () {
    it('should create a new launcher', async function () {
        const l = new launcher.Launcher({})
        should.exist(l)
    })
    it('health check time has a default value', async function () {
        const l = new launcher.Launcher({})
        l.should.have.property('healthCheckInterval', 7499)
    })
    it('health check time can be set by user', async function () {
        const l = new launcher.Launcher({})
        sinon.stub(l, 'loadSettings').callsFake(() => {
            l.settings = {
                healthCheckInterval: 1234
            }
        })
        await l.loadSettings()
        l.should.have.property('healthCheckInterval', 1234)
    })
})
