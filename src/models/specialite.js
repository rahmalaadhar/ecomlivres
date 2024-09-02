import mongoose from "mongoose";

const specialiteSchema= mongoose.Schema({
    nomspecialite: String
    
    },
    {
    timestamps: true
    }
    );
    //si le modele existe deja donc->        sinon on fait la creation du modele->
    const specialite = mongoose.models.specialite || mongoose.model('specialite', specialiteSchema);
    export default specialite