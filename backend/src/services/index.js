const users = require('./users/users.service.js');
const insumos = require('./insumos/insumos.service.js');
const medicao = require('./medicao/medicao.service.js');
const aplicacao = require('./aplicacao/aplicacao.service.js');
module.exports = function (app) {
  app.configure(users);
  app.configure(insumos);
  app.configure(medicao);
  app.configure(aplicacao);
};
