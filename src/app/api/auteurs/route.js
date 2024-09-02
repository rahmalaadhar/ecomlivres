// HttpStatusCode pour les status 404,200,...
import { HttpStatusCode } from 'axios';
import connectDB from '@/lib/connectDB';
import { NextResponse } from 'next/server';
//NextResponse au lieu de res dans (req,res)
import auteur from '@/models/auteur';

export async function POST(req) {
try {
await connectDB();
//const body = await req.json();
const Auteur = await auteur.create(await req.json());
return NextResponse.json(
{ Auteur, message: 'Your author has been created' },
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
    const Auteurs = await auteur.find();
    return NextResponse.json({ Auteurs });
    } catch (error) {
    return NextResponse.json({ error });
    }
    }
    