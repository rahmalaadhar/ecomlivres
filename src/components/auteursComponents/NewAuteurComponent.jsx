"use client"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { useRouter } from 'next/navigation';

import { addAuteur } from '@/services/auteurService';



const NewAuteur = () => {
    const router = useRouter();
const [nomauteur, setNomAuteur] = useState("");
const [email, setEmail] = useState("");
const [numtel, setNumTel] = useState("");
const [validated, setValidated] = useState(false);

const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === true) {
    const newAuteur = {
    nomauteur,
    email,
    numtel
    };
    //faire le add dans la BD
    addAuteur(newAuteur)
    .then(res => {
    router.push('/admin/auteurs')
    router.refresh()
    })
    .catch(error=>{
    alert("Erreur ! Insertion non effectuée")
    })
    }
    setValidated(true);
    }
    const handleReset = () => {
    setNomAuteur("")
    setNumTel("")
    setEmail("")
    }
  return (
    <div>
      <div>
<Form noValidate validated={validated} onSubmit={handleSubmit}>
<h2>Ajout Auteur</h2>
<div className="container w-100 d-flex justify-content-center">
<div>
<div className='form mt-3'>
<Row className="mb-2">
<Form.Group as={Col} md="6" >
<Form.Label >NOM AUTEUR *</Form.Label>
<Form.Control
required
type="text"
placeholder="Nom Auteur"
value={nomauteur}
onChange={(e)=>setNomAuteur(e.target.value)}
/>
<Form.Control.Feedback type="invalid">
Saisir Nom Auteur
</Form.Control.Feedback>
</Form.Group>
    
    <Form.Group as={Col} md="12" >
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
<Form.Group as={Col} md="6" >
<Form.Label >NUM TEL *</Form.Label>
<Form.Control
required
type="text"
placeholder="Num Tel"
value={numtel}
onChange={(e)=>setNumTel(e.target.value)}
/>
<Form.Control.Feedback type="invalid">
Saisir Num Tel
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

export default NewAuteur
