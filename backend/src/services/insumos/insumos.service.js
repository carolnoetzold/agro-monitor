// Initializes the `insumos` service on path `/insumos`
const createService = require('feathers-mongoose');
const createModel = require('../../models/insumos.model');
const hooks = require('./insumos.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'insumos',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/insumos', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('insumos');

  service.hooks(hooks);
};
