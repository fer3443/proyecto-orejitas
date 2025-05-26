"use server";

import { cookies } from "next/headers";

interface UserTokenResponse {
  success: boolean;
  message:string;
  token?:string;
}

export const getUserToken = async():Promise<UserTokenResponse> => {
  const cookiesStore = await cookies();
  const dataUser = cookiesStore.has("auth-user");
  if (!dataUser) {
    return {
      success:false,
      message: "No se encontro token"
    }
  }
  const token  = cookiesStore.get("auth-user")?.value as string;
  return {
    success:true,
    message: "Autorizado",
    token
  };
}