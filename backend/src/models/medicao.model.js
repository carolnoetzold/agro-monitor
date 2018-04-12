// medicao-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const medicao = new Schema({
    volume: { type: Number, required: true },
    data: { type: Date, required: true },
    periodo: { type: String, required: true },
    posto: { type: Number, required: true },
    talhao: { type: Number, required: true }
  }, {
    timestamps: true
  });

  return mongooseClient.model('medicao', medicao);
};
