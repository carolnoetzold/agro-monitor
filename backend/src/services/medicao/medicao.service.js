// Initializes the `medicao` service on path `/medicao`
const createService = require('feathers-mongoose');
const createModel = require('../../models/medicao.model');
const hooks = require('./medicao.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'medicao',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/medicao', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('medicao');

  app.use('/media', {
    find(params) {
      console.log(params.query)

      return service.find({
        //colocar aqui a condiçao
        //https://docs.feathersjs.com/api/databases/querying.html
        query: {

        }
      }).then(itens => {
        return Promise.resolve(itens);
      })

    }
  });

  service.hooks(hooks);
};
