const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FrutaSchema = new Schema({
    nombre: String,
    color: String
});
 
//crea el modelo
const Frutas =  mongoose.model('Fruta', FrutaSchema);

module.exports = Frutas;
