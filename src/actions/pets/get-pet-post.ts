"use server";

import prisma from "@/lib/prisma";
import { PetPostType } from "../../../generated/prisma";
import { PetPost } from "@/interface";

interface GetPetPostResponse {
  success: boolean;
  message: string;
  status: number;
  data: PetPost[] | null;
  currentPage?: number;
  totalPages?: number;
}

interface PaginationOptions {
  page?: number;
  take?: number;
  typest?: PetPostType;
}

export const getPetPost = async ({
  page = 1,
  take = 5,
  typest
}: PaginationOptions): Promise<GetPetPostResponse> => {
  if (page < 1) page = 1;
  if (isNaN(Number(page))) page = 1;
  try {
    const results = await Promise.all([
      prisma.petPost.findMany({
        take,
        skip: (page - 1) * take,
        orderBy: {
          createdAt: "desc",
        },
        include: {
          user: {
            select: {
              name: true,
              id: true,
            },
          },
          image: {
            take: 1,
            select: {
              url: true,
              id: true
            },
          },
        },
        where: {
          type: typest
        }
      }),
      prisma.petPost.count({
        where: {type: typest}
      }),
    ]);
    const totalPage = Math.ceil(results[1] / take);
    // const petPost =
    // const totalCount =
    return {
      success: true,
      message: "Peticion exitosa",
      status: 200,
      currentPage: page,
      data: results[0].map((pet) => ({
        ...pet,
        user: pet.user,
        image: pet.image.map((img) => img.url),
      })),
      totalPages: totalPage,
    };
  } catch (error) {
    console.log(error)
    return {
      success: false,
      message: "No se pudo realizar la peticon",
      status: 500,
      data: null,
    };
  }
};
