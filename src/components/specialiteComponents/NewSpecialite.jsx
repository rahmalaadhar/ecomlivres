"use client"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useRouter } from 'next/navigation';
import { addSpecialite } from '@/services/specialiteService';


const NewSpecialite = () => {
    const router = useRouter();
   
    const [nomspecialite, setNomSpecialite] = useState("");
    const [validated, setValidated] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === true) {
        const newSpecialite = {
            nomspecialite
       
        };
        //faire le add dans la BD
        addSpecialite(newSpecialite)
        .then(res => {
        router.push('/admin/specialites')
        router.refresh()
        })
        .catch(error=>{
        alert("Erreur ! Insertion non effectuée")
        })
        }
        setValidated(true);
        }
        const handleReset = () => {
        setNomSpecialite("")
        
        }
      return (
        <div>
          <div>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <h2>Ajout Specialite</h2>
    <div className="container w-100 d-flex justify-content-center">
    <div>
    <div className='form mt-3'>
    <Row className="mb-2">
    <Form.Group as={Col} md="12" >
    <Form.Label >Nom Specialite *</Form.Label>
    <Form.Control
    required
    type="text"
    placeholder=""
    value={nomspecialite}
    onChange={(e)=>setNomSpecialite(e.target.value)}
    />
    <Form.Control.Feedback type="invalid">
    Saisir Nom Specialite
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

export default NewSpecialite

