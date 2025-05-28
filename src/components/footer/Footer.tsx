import { titleFont } from '@/config/fonts'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <div className='w-full flex justify-center items-center text-xs font-semibold mb-10 gap-2'>
      <Link href={'/feed'} className={`${titleFont.className} hover:text-blue-500`}>Proyecto Orejitas</Link>
      <span>- Fernando A.R.</span>
      <span>{new Date().getFullYear()}.</span>
    </div>
  )
}
