import { HttpStatusCode } from 'axios';
import connectDB from '@/lib/connectDB';

import { NextResponse } from 'next/server';
import editeur from '@/models/editeur';

export async function GET(_, { params }) {
try {
await connectDB();
const Editeur = await editeur.findById(params.id);
if (Editeur) {
return NextResponse.json({ Editeur });
}
return NextResponse.json({ message: `Editeur ${params.id} not found` }, {
status: HttpStatusCode.NotFound });
} catch (error) {
return NextResponse.json({ message: error }, { status:
HttpStatusCode.BadRequest });
}
}

export async function PUT(req, { params }) {
    try {
    await connectDB();
    const Editeur = await editeur.findById(params.id);
    if (Editeur) {
    const body= await req.json();
    Editeur.maisonedit = body.maisonedit;
    Editeur.email = body.email;
    Editeur.siteweb = body.siteweb;
    Editeur.save();
    return NextResponse.json({ Editeur });
    }
    return NextResponse.json({ message: `Editeur ${params.id} not found`
    }, { status: HttpStatusCode.NotFound });
    } catch (error) {
    return NextResponse.json({ message: error }, { status:
    HttpStatusCode.BadRequest });
    }
    }

    export async function DELETE(_, { params }) {
        try {
        await connectDB();
        const Editeur = await editeur.findById(params.id);
        if (Editeur) {
        await editeur.findByIdAndDelete(Editeur._id);
        return NextResponse.json({ message: `Editeur ${params.id} has been deleted` });
        }
        return NextResponse.json({ message: `Editeur ${params.id} not found` }, {
        status: HttpStatusCode.NotFound });
        } catch (error) {
        return NextResponse.json({ message: error }, { status:
        HttpStatusCode.BadRequest });
        }
        }
        