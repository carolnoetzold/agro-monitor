// insumos-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const insumos = new Schema({

    descricao: { type: String, required: true },
    fornecedor: { type: String, required: true },
    compra: { type: Date, required: true }

  }, {
    timestamps: true
  });

  return mongooseClient.model('insumos', insumos);
};
