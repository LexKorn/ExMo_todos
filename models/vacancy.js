const { Schema, model } = require('mongoose')

const schema2 = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = model('Vacancy', schema2);