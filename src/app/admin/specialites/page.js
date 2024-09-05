import ListSpecialites from "@/components/specialiteComponents/ListSpecialites";
import { fetchSpecialites } from "@/services/specialiteService"

const getspecialites=async()=>{
const data=await fetchSpecialites()
return data;
}

const Specialitespage = async() => {
    const specialites=await getspecialites();
  return (
    <div>
      <ListSpecialites specialites={specialites}/>
    </div>
  )
}

export default Specialitespage
