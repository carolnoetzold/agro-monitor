const assert = require('assert');
const app = require('../../src/app');

describe('\'insumos\' service', () => {
  it('registered the service', () => {
    const service = app.service('insumos');

    assert.ok(service, 'Registered the service');
  });
});
