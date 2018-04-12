const assert = require('assert');
const app = require('../../src/app');

describe('\'aplicacao\' service', () => {
  it('registered the service', () => {
    const service = app.service('aplicacao');

    assert.ok(service, 'Registered the service');
  });
});
