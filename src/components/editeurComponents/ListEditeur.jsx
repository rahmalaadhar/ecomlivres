"use client"

import { deleteEditeur } from "@/services/editeurService";
import { MaterialReactTable } from "material-react-table";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { Button } from 'react-bootstrap';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Link from 'next/link';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const ListEditeur = ({editeurs}) => {

    //router pour la redirection
  const router = useRouter();
  const deleteediteur=(id)=>{
  if(window.confirm("supprimer Editeur O/N")) {
  deleteEditeur(id)
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
          accessorKey: 'maisonedit',
          header: 'MAISONEDITION',
          size:50,},
          {
            accessorKey: 'email',
            header: 'EMAIL',
            size: 100,
            },
            {
                accessorKey: 'siteweb',
                header: 'SITEWEB',
                size: 100,
                },
                {
                    accessorKey: '_id',
                    header: 'actions',
                    size: 50,
                    Cell: ({ cell, row }) => (
                    <div >
                  
                  <Button
                  size="md"
                  className="text-primary btn-link edit"
                  >
                  <Link
                  href={`/admin/editeurs/updateediteur/${cell.row.original._id}`}>
                    <EditOutlinedIcon/>
                  </Link>
                  </Button>
                  
                    <Button
                    onClick={(e) => {
                    deleteediteur(cell.row.original._id,e);
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
                  [editeurs],
                  );
                  
  return (
    <div>
      <Button
variant='dark'
size="sm"
>
<Link
href="/admin/editeurs/newediteur"
style={{
textDecoration: 'none',
color: 'pink',
fontSize: 14,
}}
>
<AddCircleOutlineIcon/> Nouveau
</Link>
</Button>

<MaterialReactTable columns={columns} data={editeurs} />;
    </div>
  )
}

export default ListEditeur
