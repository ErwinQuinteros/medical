import React from 'react'

export const Services = () => {
  return (
    <div className="max-w-[1224px] mx-auto px-6 py-10 lg:py-28">
        <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#14457B] md:leading-20">
                Conozca nuestras <br /> especialidades
            </h1>
            <a
                href="#"
                className="bg-[#19DDB8] text-white hover:bg-[#17c0a4] px-7 py-4 text-sm font-semibold rounded-full transition duration-300 uppercase"
            >
                Agendar Consulta
            </a>
        </div>
    </div>
  )
}
