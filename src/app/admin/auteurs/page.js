
import ListAuteur from "@/components/auteursComponents/ListAuteur";
import { fetchAuteurs } from "@/services/auteurService";


const getauteurs=async()=>{
    const res=await fetchAuteurs();
    return res;
    
}

const Editeurspage = async() => {
    const auteurs=await getauteurs()
  return (
    <div>
      <ListAuteur auteurs={auteurs}/>
    </div>
  )
}

export default Editeurspage