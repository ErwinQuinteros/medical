import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <div className="flex items-center gap-3">
        <h1 className="text-4xl font-bold text-[#113560] leading-tight">
          Clínica
        </h1>
      </div>
      <ul className="gap-6 text-sm font-semibold tracking-wide text-[#585DD6] uppercase md:flex">
        <li>
          <a href="#inicio" className="hover:text-blue-900">
            Início
          </a>
        </li>
        <li>
          <a href="#quem-somos" className="hover:text-blue-900">
            Quienes somos
          </a>
        </li>
        <li>
          <a href="#especialidades" className="hover:text-blue-900">
            Especialidades
          </a>
        </li>
        <li>
          <a href="#servicios" className="hover:text-blue-900">
            Servicios
          </a>
        </li>
        <li>
          <a href="#convenios" className="hover:text-blue-900">
            Convenios
          </a>
        </li>
        <li>
          <a href="#contato" className="hover:text-blue-900">
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
