import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const Services = () => {
  return (
    <div className="max-w-[1224px] mx-auto px-6 py-10">
      <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#14457B] md:leading-20">
          Conozca nuestras <br /> especialidades
        </h1>
        <a
          href="#"
          className="bg-[#19DDB8] text-white hover:bg-[#17c0a4] px-8 py-4 text-sm font-semibold rounded-full transition duration-300 uppercase"
        >
          Agendar Consulta
        </a>
      </div>
      <div className="grid grid-cols-1 gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14">
        <div className="relative w-full overflow-visible shadow-lg rounded-3xl">
          <img
            src="/images/image1.png"
            alt="Cardiologia"
            className="w-full h-full object-cover aspect-[3/4] rounded-3xl"
          />
          <div className="absolute px-4 py-3 bottom-6 left-4 right-4 md:left-6 md:right-6 bg-white/80 rounded-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-[#14457B]">
              Cardiologia
            </h3>
            <p className="mt-1 text-sm sm:text-base text-[#666666]">
              Ofrecemos atención completa para La salud de tu corazón, con
              diagnóstico y tratamiento especializado.
            </p>
          </div>
          <div className="absolute -bottom-8 -right-8 w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] bg-[#2490EB] rounded-full flex items-center justify-center shadow-md z-10 border-[6px] sm:border-[10px] border-white">
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-xs text-white sm:text-sm"
            />
          </div>
        </div>
        <div className="relative w-full overflow-visible shadow-lg rounded-3xl">
          <img
            src="/images/image2.png"
            alt="Cardiologia"
            className="w-full h-full object-cover aspect-[3/4] rounded-3xl"
          />
          <div className="absolute px-4 py-3 bottom-6 left-4 right-4 md:left-6 md:right-6 bg-white/80 rounded-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-[#14457B]">
              Neurologia
            </h3>
            <p className="mt-1 text-sm sm:text-base text-[#666666]">
              Ofrecemos diagnóstico y tratamiento de enfermedades del sistema
              nervioso, con atención especializada y tecnología avanzada.
            </p>
          </div>
          <div className="absolute -bottom-8 -right-8 w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] bg-[#2490EB] rounded-full flex items-center justify-center shadow-md z-10 border-[6px] sm:border-[10px] border-white">
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-xs text-white sm:text-sm"
            />
          </div>
        </div>
        <div className="relative w-full overflow-visible shadow-lg rounded-3xl">
          <img
            src="/images/image3.png"
            alt="Cardiologia"
            className="w-full h-full object-cover aspect-[3/4] rounded-3xl"
          />
          <div className="absolute px-4 py-3 bottom-6 left-4 right-4 md:left-6 md:right-6 bg-white/80 rounded-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-[#14457B]">
              Ortopedia
            </h3>
            <p className="mt-1 text-sm sm:text-base text-[#666666]">
              Cuidamos la salud de tus huesos, músculos y articulaciones,
              ofreciendo tratamientos para lesiones, fracturas y dolores
              crónicos.
            </p>
          </div>
          <div className="absolute -bottom-8 -right-8 w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] bg-[#2490EB] rounded-full flex items-center justify-center shadow-md z-10 border-[6px] sm:border-[10px] border-white">
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-xs text-white sm:text-sm"
            />
          </div>
        </div>
        <div className="relative w-full overflow-visible shadow-lg rounded-3xl">
          <img
            src="/images/image4.png"
            alt="Cardiologia"
            className="w-full h-full object-cover aspect-[3/4] rounded-3xl"
          />
          <div className="absolute px-4 py-3 bottom-6 left-4 right-4 md:left-6 md:right-6 bg-white/80 rounded-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-[#14457B]">
              Geriatria
            </h3>
            <p className="mt-1 text-sm sm:text-base text-[#666666]">
              Atención humanizada al adulto mayor, enfocada en la promoción de
              la calidad de vida, la prevención y el cuidado continuo.
            </p>
          </div>
          <div className="absolute -bottom-8 -right-8 w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] bg-[#2490EB] rounded-full flex items-center justify-center shadow-md z-10 border-[6px] sm:border-[10px] border-white">
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-xs text-white sm:text-sm"
            />
          </div>
        </div>
        <div className="relative w-full overflow-visible shadow-lg rounded-3xl">
          <img
            src="/images/image5.png"
            alt="Cardiologia"
            className="w-full h-full object-cover aspect-[3/4] rounded-3xl"
          />
          <div className="absolute px-4 py-3 bottom-6 left-4 right-4 md:left-6 md:right-6 bg-white/80 rounded-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-[#14457B]">
              Pediatria{" "}
            </h3>
            <p className="mt-1 text-sm sm:text-base text-[#666666]">
              Cuidamos la salud infantil con una atención integral, desde la
              prevención hasta el tratamiento de las enfermedades infantiles.
            </p>
          </div>
          <div className="absolute -bottom-8 -right-8 w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] bg-[#2490EB] rounded-full flex items-center justify-center shadow-md z-10 border-[6px] sm:border-[10px] border-white">
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-xs text-white sm:text-sm"
            />
          </div>
        </div>
        <div className="relative w-full overflow-visible shadow-lg rounded-3xl">
          <img
            src="/images/image6.png"
            alt="Cardiologia"
            className="w-full h-full object-cover aspect-[3/4] rounded-3xl"
          />
          <div className="absolute px-4 py-3 bottom-6 left-4 right-4 md:left-6 md:right-6 bg-white/80 rounded-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-[#14457B]">
              Clínica General
            </h3>
            <p className="mt-1 text-sm sm:text-base text-[#666666]">
              Atención médica integral para todas las edades, enfocándose en la
              prevención, diagnóstico y tratamiento de enfermedades comunes.
            </p>
          </div>
          <div className="absolute -bottom-8 -right-8 w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] bg-[#2490EB] rounded-full flex items-center justify-center shadow-md z-10 border-[6px] sm:border-[10px] border-white">
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-xs text-white sm:text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
