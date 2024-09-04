'use client'
import { deleteLivre } from '@/services/livreService';
//client side rander on doit ajouter use client pour qu'on peut utiliser les boutons ,use memo,..
import { Box} from '@mui/material';
import { MaterialReactTable } from 'material-react-table';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react'
import { Button } from 'react-bootstrap';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Link from 'next/link';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const ListLivres = ({livres}) => {

//router pour la redirection
  const router = useRouter();
  const deletelivre=(id)=>{
  if(window.confirm("supprimer Livre O/N")) {
  deleteLivre(id)
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
        accessorKey: 'couverture',
        header: 'COUVERTURE',
        Cell: ({ cell}) => (
        <Box
        sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        }}
        >
        <img 
        src={cell.getValue()}
        alt="couverture"
        height="50"
        width="50"
/>
</Box>),
},
{
accessorKey: 'titre',
header: 'TITRE',
size: 100,
},
{
accessorKey: 'isbn',
header: 'ISBN',
size: 50,
},
{
accessorKey: 'annedition',
header: 'ANNEE',
size: 50,
},
{
accessorKey: 'prix',
header: 'PRIX',
size: 50,
},
{
    accessorKey: 'qtestock',
    header: 'QTE',
    size: 50,
    },
    {
    accessorFn: (originalRow) => originalRow.auteurs.map((aut,i)=>{
    return <div key={i}>{aut.nomauteur}</div>
    }),
    id: 'aut._id',
    header: 'AUTEURS',
    },
    {
    accessorKey: 'specialite.nomspecialite',
    header: 'SPECIALITE',
    size: 50,
    },
    {
    accessorKey: 'maised.maisonedit',
    header: 'EDITEUR',size: 50,
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
href={`/admin/livres/updatelivre/${cell.row.original._id}`}>
  <EditOutlinedIcon/>
</Link>
</Button>

  <Button
  onClick={(e) => {
  deletelivre(cell.row.original._id,e);
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
[livres],
);

  return (

    <div>
      <Button
variant='dark'
size="sm"
>
<Link
href="/admin/livres/newlivre"
style={{
textDecoration: 'none',
color: 'pink',
fontSize: 14,
}}
>
<AddCircleOutlineIcon/> Nouveau
</Link>
</Button>

<MaterialReactTable columns={columns} data={livres} />;

    </div>
  )
}

export default ListLivres
