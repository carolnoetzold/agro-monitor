// aplicacao-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const aplicacao = new Schema({
    text: { type: String, required: true }
  }, {
    data: { type: Date, required: true },
    quantidade: { type: Number, required: true },
    area: { type: Number, required: true },
    talhao: { type: Number, required: true }
  });

  return mongooseClient.model('aplicacao', aplicacao);
};
