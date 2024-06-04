import { authenticateUser } from "@/actions/user";
import { NextRequest,NextResponse } from "next/server";
import bcrypt from 'bcryptjs';


export async function POST(request: NextRequest) {
    const {username,password} = await request.json();
    try {
        const user = await authenticateUser(username,password);

        if(!user) {
            throw new Error("Invalid username or password");
        }

        return NextResponse.json({user, status: 200});
    }
    catch (error:any) {
        return NextResponse.json({error: error.message , status: 500});
    }
}