import ListEditeur from "@/components/editeurComponents/ListEditeur";
import { fetchEditeurs } from "@/services/editeurService"

const getediteurs=async()=>{
    const res=await fetchEditeurs();
    return res;
    
}

const Editeurspage = async() => {
    const editeurs=await getediteurs()
  return (
    <div>
      <ListEditeur editeurs={editeurs}/>
    </div>
  )
}

export default Editeurspage
