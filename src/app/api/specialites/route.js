import { HttpStatusCode } from 'axios';
import connectDB from '@/lib/connectDB';
import { NextResponse } from 'next/server';
import specialite from '@/models/specialite';

//NextResponse au lieu de res dans (req,res)


export async function POST(req) {
try {
await connectDB();
//const body = await req.json();
const Specialite = await specialite.create(await req.json());
return NextResponse.json(
{ Specialite, message: 'Your speciality has been created' },
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
    const Specialite = await specialite.find({}, null, {sort: {'_id': -1}});
    return NextResponse.json({ Specialite });
    } catch (error) {
    return NextResponse.json({ error });
    }
    }