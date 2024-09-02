import { HttpStatusCode } from 'axios';
import connectDB from '@/lib/connectDB';
import { NextResponse } from 'next/server';
import editeur from '@/models/editeur';
//NextResponse au lieu de res dans (req,res)


export async function POST(req) {
try {
await connectDB();
//const body = await req.json();
const Editeur = await editeur.create(await req.json());
return NextResponse.json(
{ Editeur, message: 'Your editor has been created' },
{ status: HttpStatusCode.Created },
);
} catch (error) {
return NextResponse.json({ message: error }, { status:HttpStatusCode.BadRequest
});
}
}
export async function GET() {
    try {
    await connectDB();
    const Editeurs = await editeur.find({}, null, {sort: {'_id': -1}});
    return NextResponse.json({ Editeurs });
    } catch (error) {
    return NextResponse.json({ error });
    }
    }