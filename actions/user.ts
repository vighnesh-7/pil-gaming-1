import {db} from '@/lib/db';
import bcrypt from 'bcryptjs';


export const getUser = async (id: string) => {
    const users = await db.user.findMany({
        where: {
            id,
        },
    });
    return users;
}

export const createUser = async (data: any) => {

    try {
    const prevUser = await db.user.findFirst({  
        where: {
            username: data.username,
        },
    });


    if(prevUser)    {
        throw new Error("User already exists");
    }
    
    const user = await db.user.create({
        data,
    });
    
    return user;
    } catch (error:any) {
        throw new Error(error);
    }
}

export const authenticateUser = async (username: string, password: string) => {
    try {
    
    const prevUser = await db.user.findFirst({
        where: {
            username,
        },
    });

    if(!prevUser) {
        throw new Error("User not found");
    }

    const isValid = await bcrypt.compare(password, prevUser.password);

    if(!isValid) {
        throw new Error("Invalid password");
    }

    return prevUser;
    } catch (error:any) {
        throw new Error(error);
    }
}

export const getCurrentUser = async ( id : string ) => {
    
    try {
        
        const user = await db.user.findUnique({
            where: {
                id,
            },
        });
        
        return user;
    } catch (error:any) {
        throw new Error(error);
    }
}