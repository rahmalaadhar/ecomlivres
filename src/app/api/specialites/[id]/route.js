import { HttpStatusCode } from 'axios';
import connectDB from '@/lib/connectDB';

import { NextResponse } from 'next/server';
import specialite from '@/models/specialite';


export async function GET(_, { params }) {
try {
await connectDB();
const Specialite = await specialite.findById(params.id);
if (Specialite) {
return NextResponse.json({ Specialite });
}
return NextResponse.json({ message: `Specialite ${params.id} not found` }, {
status: HttpStatusCode.NotFound });
} catch (error) {
return NextResponse.json({ message: error }, { status:
HttpStatusCode.BadRequest });
}
}

export async function PUT(req, { params }) {
    try {
    await connectDB();
    const Specialite = await specialite.findById(params.id);
    if (Specialite) {
    const body= await req.json();
    Specialite.nomspecialite = body.nomspecialite;
    
    Specialite.save();
    return NextResponse.json({Specialite });
    }
    return NextResponse.json({ message: `Specialite ${params.id} not found`
    }, { status: HttpStatusCode.NotFound });
    } catch (error) {
    return NextResponse.json({ message: error }, { status:
    HttpStatusCode.BadRequest });
    }
    }

    export async function DELETE(_, { params }) {
        try {
        await connectDB();
        const Specialite = await specialite.findById(params.id);
        if (Specialite) {
        await specialite.findByIdAndDelete(Specialite._id);
        return NextResponse.json({ message: `Specialite ${params.id} has been deleted` });
        }
        return NextResponse.json({ message: `Specialite ${params.id} not found` }, {
        status: HttpStatusCode.NotFound });
        } catch (error) {
        return NextResponse.json({ message: error }, { status:
        HttpStatusCode.BadRequest });
        }
        }
        