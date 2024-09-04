//page.js c'est un fichier front service side rander car il est sous repertoire app
//contient et affiche les donnees sous format html
import ListLivres from '@/components/livreComponents/ListLivres';
import { fetchLivres } from '@/services/livreService'
import React from 'react'
//on doit creer les methodes qui consomme le service frontend avant d'entrer dans le composant
//puis le reecrire dans le composant
const getlivres=async()=>{
const data=await fetchLivres()
return data;
}

const Livrespage=async()=> {
    const livres=await getlivres()
  
    return (
    <div>
      <ListLivres livres={livres}/>
    </div>
  )
}

export default Livrespage
