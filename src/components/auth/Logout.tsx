"use client";

import { logoutUser } from '@/actions/logout';
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'sonner';

export const Logout = () => {
  const router = useRouter()
  const handlerLogout = async () => {
    try {
      const resp = await logoutUser();
      if(resp.success){
        toast.success(resp.message)
        router.push('/auth/login')
      }else{
        toast(resp.message)
      }
    } catch (error) {
      toast.error("Error al cerrar sesión")
    }
  }
  return (
    <button onClick={handlerLogout} className='border shadow-xs p-2 cursor-pointer'>cerrar sesión</button>
  )
}
