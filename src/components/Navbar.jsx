import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="max-w-[1224px] mx-auto">
        <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-bold text-[#113560] leading-tight">
              Clínica
            </h1>
          </div>
          <ul className="gap-6 text-sm font-semibold tracking-wide uppercase bg-primary md:flex text-[#14457B]">
            <li>
              <a href="#inicio" className="hover:text-[#2490EB] ">
                Início
              </a>
            </li>
            <li>
              <a href="#quem-somos" className="hover:text-[#2490EB]">
                Quienes somos
              </a>
            </li>
            <li>
              <a href="#especialidades" className="hover:text-[#2490EB]">
                Especialidades
              </a>
            </li>
            <li>
              <a href="#servicios" className="hover:text-[#2490EB]">
                Servicios
              </a>
            </li>
            <li>
              <a href="#convenios" className="hover:text-[#2490EB]">
                Convenios
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:text-[#2490EB]">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>

  );
};

export default Navbar;
