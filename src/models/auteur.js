import mongoose from "mongoose"
const auteurSchema = mongoose.Schema({
nomauteur: String,
email: String,
numtel: String
},
{
timestamps: true
}
);
//si le modele existe deja donc->        sinon on fait la creation du modele->
const auteur = mongoose.models.auteur || mongoose.model('auteur', auteurSchema);
export default auteur