import React from "react";

export const Services = () => {
  return (
    <div className="max-w-[1224px] mx-auto px-6 py-10">
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
      <div className="grid grid-cols-1 gap-6 px-4 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
        <div className="w-full overflow-hidden transition duration-300 ease-in-out rounded-2xl hover:scale-105">
          <img
            src="/images/image1.png"
            alt="Imagen 1"
            className="w-full h-full object-cover aspect-[3/4]"
          />
        </div>
        <div className="w-full overflow-hidden transition duration-300 ease-in-out rounded-2xl hover:scale-105">
          <img
            src="/images/image2.png"
            alt="Imagen 2"
            className="w-full h-full object-cover aspect-[3/4]"
          />
        </div>
        <div className="w-full overflow-hidden transition duration-300 ease-in-out rounded-2xl hover:scale-105">
          <img
            src="/images/image6.png"
            alt="Imagen 3"
            className="w-full h-full object-cover aspect-[3/4]"
          />
        </div>
        <div className="w-full overflow-hidden transition duration-300 ease-in-out rounded-2xl hover:scale-105">
          <img
            src="/images/image3.png"
            alt="Imagen 4"
            className="w-full h-full object-cover aspect-[3/4]"
          />
        </div>
        <div className="w-full overflow-hidden transition duration-300 ease-in-out rounded-2xl hover:scale-105">
          <img
            src="/images/image4.png"
            alt="Imagen 5"
            className="w-full h-full object-cover aspect-[3/4]"
          />
        </div>
        <div className="w-full overflow-hidden transition duration-300 ease-in-out rounded-2xl hover:scale-105">
          <img
            src="/images/image5.png"
            alt="Imagen 6"
            className="w-full h-full object-cover aspect-[3/4]"
          />
        </div>
      </div>
    </div>
  );
};
