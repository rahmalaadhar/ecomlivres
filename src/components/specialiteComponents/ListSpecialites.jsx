"use client"


import { MaterialReactTable } from "material-react-table";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { Button } from 'react-bootstrap';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Link from 'next/link';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { deleteSpecialite } from "@/services/specialiteService";

const ListSpecialites = ({specialites}) => {

    //router pour la redirection
  const router = useRouter();
  const deletespecialite=(id)=>{
  if(window.confirm("supprimer specialite O/N")) {
  deleteSpecialite(id)
  .then((res)=>{ console.log(res)
  router.refresh()
  //refresh pour actualiser la page
  })
  .catch(error=>{
    console.log(error)
    })
    }
    }
    const columns = useMemo(
        //use memo ca v dire stocker les donnees et rafraichir que si le state livres change
        //par ajout de livre ou suppression..
          () => [
          {
            //accessorKey :le nom de l'attribut//header:nom du th du tab
          accessorKey: 'nomspecialite',
          header: 'NOM SPECIALITE',
          size:200,},
         
                {
                    accessorKey: '_id',
                    header: 'actions',
                    size: 20,
                    Cell: ({ cell, row }) => (
                    <div >
                  
                  <Button
                  size="md"
                  className="text-primary btn-link edit"
                  >
                  <Link
                  href={`/admin/specialites/updatespecialite/${cell.row.original._id}`}>
                    <EditOutlinedIcon/>
                  </Link>
                  </Button>
                  
                    <Button
                    onClick={(e) => {
                    deletespecialite(cell.row.original._id,e);
                    }}
                    variant="danger"
                    size="md"
                    className="text-danger btn-link delete"
                    >
                    <DeleteForeverIcon />
                    </Button>
                    </div>
                    ),
                    },
                  ],
                  //-> c'est le state livres
                  [specialites],
                  );
                  
  return (
    <div>
      <Button
variant='dark'
size="sm"
>
<Link
href="/admin/specialites/newspecialite"
style={{
textDecoration: 'none',
color: 'pink',
fontSize: 14,
}}
>
<AddCircleOutlineIcon/> Nouveau
</Link>
</Button>

<MaterialReactTable columns={columns} data={specialites} />;
    </div>
  )
}

export default ListSpecialites