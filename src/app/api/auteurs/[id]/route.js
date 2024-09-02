//le dossier id entre [] pour dire que c'est un parametre variable

import { HttpStatusCode } from 'axios';
import connectDB from '@/lib/connectDB';

import { NextResponse } from 'next/server';
import auteur from '@/models/auteur';
export async function GET(_, { params }) {
try {
await connectDB();
const Auteur = await auteur.findById(params.id);
if (Auteur) {
return NextResponse.json({ Auteur });
}
return NextResponse.json({ message: `Auteur ${params.id} not found` }, {
status: HttpStatusCode.NotFound });
} catch (error) {
return NextResponse.json({ message: error }, { status:
HttpStatusCode.BadRequest });
}
}

export async function PUT(req, { params }) {
    try {
    await connectDB();
    const Auteur = await auteur.findById(params.id);
    if (Auteur) {
    const body= await req.json();
    Auteur.nomauteur = body.nomauteur;
    Auteur.email = body.email;
    Auteur.numtel = body.numtel;
    Auteur.save();
    return NextResponse.json({ Auteur });
    }
    return NextResponse.json({ message: `Auteur ${params.id} not found`
    }, { status: HttpStatusCode.NotFound });
    } catch (error) {
    return NextResponse.json({ message: error }, { status:
    HttpStatusCode.BadRequest });
    }
    }

    export async function DELETE(_, { params }) {
        try {
        await connectDB();
        const Auteur = await auteur.findById(params.id);
        if (Auteur) {
        await auteur.findByIdAndDelete(Auteur._id);
        return NextResponse.json({ message: `Auteur ${params.id} has been deleted` });
        }
        return NextResponse.json({ message: `Auteur ${params.id} not found` }, {
        status: HttpStatusCode.NotFound });
        } catch (error) {
        return NextResponse.json({ message: error }, { status:
        HttpStatusCode.BadRequest });
        }
        }
        