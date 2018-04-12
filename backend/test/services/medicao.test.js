const assert = require('assert');
const app = require('../../src/app');

describe('\'medicao\' service', () => {
  it('registered the service', () => {
    const service = app.service('medicao');

    assert.ok(service, 'Registered the service');
  });
});
