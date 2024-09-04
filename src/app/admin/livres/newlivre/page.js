import { fetchAuteurs } from '@/services/auteurService';
import { fetchEditeurs } from '@/services/editeurService';
import { fetchSpecialites } from '@/services/specialiteService';
import NewLivre from "@/components/livreComponents/NewLivreComponent";

const getEditeurs=async()=>{
    const data=await fetchEditeurs()
    return data;
    }
    const getSpecialites=async()=>{
    const data=await fetchSpecialites()
    return data;
    }
    const getAuteurs=async()=>{
    const data=await fetchAuteurs()
    return data;
    }
    
const NewLivrepage = async() => {
const editeurs= await getEditeurs()
const specialites= await getSpecialites()
const auteurs= await getAuteurs()
  return (
    <div>
      <NewLivre LesEditeurs={editeurs} lesSpecialites={specialites}
lesAuteurs={auteurs} />
    </div>
  )
}

export default NewLivrepage
