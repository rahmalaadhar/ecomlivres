
"use client"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { addEditeur } from '@/services/editeurService';
import { useRouter } from 'next/navigation';



const NewEditeur = () => {
    const router = useRouter();
const [maisonedit, setMaisonEdit] = useState("");
const [email, setEmail] = useState("");
const [siteweb, setSiteWeb] = useState("");
const [validated, setValidated] = useState(false);

const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === true) {
    const newEditeur = {
    maisonedit,
    email,
    siteweb
    };
    //faire le add dans la BD
    addEditeur(newEditeur)
    .then(res => {
    router.push('/admin/editeurs')
    router.refresh()
    })
    .catch(error=>{
    alert("Erreur ! Insertion non effectuée")
    })
    }
    setValidated(true);
    }
    const handleReset = () => {
    setSiteWeb("")
    setMaisonEdit("")
    setEmail("")
    }
  return (
    <div>
      <div>
<Form noValidate validated={validated} onSubmit={handleSubmit}>
<h2>Ajout Editeur</h2>
<div className="container w-100 d-flex justify-content-center">
<div>
<div className='form mt-3'>
<Row className="mb-2">
<Form.Group as={Col} md="6" >
<Form.Label >MAISONEDITION *</Form.Label>
<Form.Control
required
type="text"
placeholder="Maison Edition"
value={maisonedit}
onChange={(e)=>setMaisonEdit(e.target.value)}
/>
<Form.Control.Feedback type="invalid">
Saisir Maison Edition
</Form.Control.Feedback>
</Form.Group>
    
    <Form.Group as={Col} md="6" >
<Form.Label >EMAIL *</Form.Label>
<Form.Control
required
type="text"
placeholder="EMAIL"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>
<Form.Control.Feedback type="invalid">
Saisir EMAIL
</Form.Control.Feedback>
</Form.Group>
<Form.Group as={Col} md="12" >
<Form.Label >SITE WEB *</Form.Label>
<Form.Control
required
type="text"
placeholder="Site Web"
value={siteweb}
onChange={(e)=>setSiteWeb(e.target.value)}
/>
<Form.Control.Feedback type="invalid">
Saisir Site Web
</Form.Control.Feedback>
</Form.Group>
</Row>
</div>
</div>
</div>
<center>
<Button type="submit">Enregistrer</Button>
<Button type="button" className="btn btn-warning"
onClick={()=>handleReset()}>Annuler</Button>
</center>
</Form>
</div>
</div>
  )
}

export default NewEditeur
