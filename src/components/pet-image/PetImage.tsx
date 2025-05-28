import React from 'react'
import Image from 'next/image'

interface Props {
  src?:string;
  alt?: string;
  className: React.StyleHTMLAttributes<HTMLImageElement>['className'];
  width:number;
  height: number;
}

export const PetImage = ({src,alt,className,height,width}:Props) => {
  const localSrc = (src) 
  ? src.startsWith('http')
   ? src
   : `/pets/${src}`
  : '/images/placeholder.jpg';
  return (
    <Image
    src={localSrc}
    alt={alt || 'Sin texto alternativo'}
    width={width}
    height={height}
    className={className}
    />
  )
}
