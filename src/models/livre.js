import mongoose from "mongoose";
import specialite from "./specialite";
import editeur from "./editeur";
import auteur from "./auteur";

const livreSchema = mongoose.Schema({
isbn: String,
titre: {type: String, required: true},
annedition: Number,
prix: Number,
qtestock: Number,
couverture: String,
specialite: {
type: mongoose.Schema.Types.ObjectId,
ref: specialite,
},
maised: {
type: mongoose.Schema.Types.ObjectId,
ref: editeur
},
auteurs: [{
type: mongoose.Schema.Types.ObjectId,
ref: auteur
}]
})
const Livre = mongoose.models.Livre ||mongoose.model('Livre', livreSchema);
export default Livre