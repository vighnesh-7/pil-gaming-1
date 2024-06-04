import { createUser } from "@/actions/user";
import { NextRequest,NextResponse } from "next/server";
import bcrypt from 'bcryptjs';


export async function POST(request: NextRequest) {
    const {name,username,password,email} = await request.json();
    try {
        
        const saltOrRounds = process.env.NEXTAUTH_HASH_SECRET || 10;
        
        const hashedPassword = await bcrypt.hash(password, saltOrRounds);
        const user = await createUser({
            name,
            username,
            password : hashedPassword,
            email,
        });


        if (!user) {
            throw new Error("User not created");
        }
        
        return NextResponse.json({user, status: 200});
    }
    catch (error:any) {
        
        return NextResponse.json({error: error.message , status: 500});
    }
}