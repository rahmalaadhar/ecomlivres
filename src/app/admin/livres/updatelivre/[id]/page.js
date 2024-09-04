import { fetchAuteurs } from "@/services/auteurService";
import { fetchEditeurs } from "@/services/editeurService";
import { fetchSpecialites } from "@/services/specialiteService";
import UpdateLivre from '@/components/livreComponents/UpdateLivreComponents';
import { fetchLivreById } from "@/services/livreService";
const getlivre=async(id)=>{
    const data=await fetchLivreById(id)
    return data;
    }
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
//params doit etre entre {} car contient plus que id,isbn,....
const LivreUpdatepage = async({params}) => {
    const livre = await getlivre(params.id)
    const editeurs=await getEditeurs()
    const specialites=await getSpecialites()
    const auteurs=await getAuteurs()
  return (
    <div>
      <UpdateLivre livre={livre} LesEditeurs={editeurs}
lesSpecialites={specialites} lesAuteurs={auteurs} />
    </div>
  )
}

export default LivreUpdatepage
