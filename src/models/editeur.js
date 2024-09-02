import mongoose from "mongoose";

const editeurSchema= mongoose.Schema({
    maisonedit: String,
    email: String,
    siteweb: String
    },
    {
    timestamps: true
    }
    );
    //si le modele existe deja donc->        sinon on fait la creation du modele->
    const editeur = mongoose.models.editeur || mongoose.model('editeur', editeurSchema);
    export default editeur