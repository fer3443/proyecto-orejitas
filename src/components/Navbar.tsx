import Link from "next/link";
import React from "react";

export const Navbar = () => {
  const links = [
    { name: "En adopcion", path: "/type-status/ADOPTION" },
    { name: "Perdidos", path: "/type-status/LOST" },
    { name: "Encontrados", path: "/type-status/FOUND" },
  ];
  return (
    <nav className="flex justify-between items-center p-4">
      {/* Logo o titulo */}
      <Link href="/feed" className="antialiased font-bold">
        Orejitas
      </Link>

      {/* Center menu */}
      <div className="hidden sm:block">
        {links.map((link, index) => (
          <Link href={link.path} key={index} className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">{link.name}</Link>
        ))}
      </div>

      {/*Search, profile */}
      <div className="flex items-center">
        <Link href='/profile'>Perfil</Link>
        {/*Aqui va el componente de busqueda */}
      </div>
    </nav>
  );
};
