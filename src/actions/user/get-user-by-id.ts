"use server";

import { verifyToken } from "@/lib/auth-token";
import { getUserToken } from "../get-user-token";
import prisma  from "@/lib/prisma"

interface UserPayload {
  id: string;
  email: string;
  name: string;
  role: string;
}
export const getUserById = async () => {
  const { token } = await getUserToken();
  if (!token) {
    return {
      success: false,
      message: "Sin token",
    };
  }
  const data = verifyToken(token) as UserPayload;
  if (!data) return { success: false, message: "No autorizado" };
  try {
    const userInfo = await prisma.user.findUnique({
      where: {
        id: data.id
      },
      select: {
        name:true,
        createdAt:true,
      },
    });

    if(!userInfo){
      return {
        success:false,
        message:"Usuario no encontrado"
      }
    }

    return {
      success:true,
      message:"Peticion exitosa",
      data: userInfo
    }
  } catch (error) {
    console.log(error)
    return {
      success:false,
      message:"Hubo un problema al realizar la consulta"
    }
  }
};
