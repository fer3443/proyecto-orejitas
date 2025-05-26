"use server";

import { PetPost, petPostSchema, PetPostValues } from "@/interface";
import { getUserToken } from "../get-user-token";
import { verifyToken } from "@/lib/auth-token";
import prisma from "@/lib/prisma";

interface PetPostResposne {
  success: boolean;
  message: string;
  status: number;
  data?: PetPost;
}

interface TokenPayload {
  id: string;
  email: string;
  name: string;
  role: string;
}

export const createPetPost = async (
  values: PetPostValues
): Promise<PetPostResposne> => {
  const parsedResult = petPostSchema.safeParse(values);
  if (!parsedResult.success) {
    return {
      success: false,
      message: parsedResult.error.issues[0].message,
      status: 400,
    };
  }

  try {
    const tokenData = await getUserToken();
    if (!tokenData.success) {
      return {
        success: false,
        message: tokenData.message,
        status: 401,
      };
    }
    const { id } = verifyToken(
      tokenData.token as string
    ) as TokenPayload;

    const {image, ...rest} = parsedResult.data
    await prisma.petPost.create({
      data: {
        ...rest,
        userId: id,
        image: {
          create: image
        }
      }
    });

    return {
      success:true,
      message: "Publicación creada correctamente",
      status: 201,
    }
  } catch (error) {
    console.log("Error inesperado al crear publicación", error);
    return {
      success:false,
      message: "Internal server error",
      status: 500
    }
  }
};
