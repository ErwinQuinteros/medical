import React from 'react'

export const Hero = () => {
    return (
        <div>
            <div className="max-w-[1224px] mx-auto">
                <div className="grid items-center w-full gap-8 px-6 py-10 lg:grid-cols-2 lg:gap-12 lg:py-20">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#14457B]">
                            Cuidamos de ti en cada detalle
                        </h1>
                        <p className="mt-4 text-base sm:text-lg text-[#666666] mb-6">
                            Especialidades médicas, exames e atendimento personalizado em um só
                            lugar. Agende sua consulta e tenha o cuidado que você merece!
                        </p>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                            <a
                                href="#inicio"
                                className="bg-[#19DDB8] text-white hover:bg-[#17c0a4] px-6 py-3 text-sm font-semibold rounded-full transition duration-300 uppercase text-center"
                            >
                                Agendar Consulta
                            </a>
                            <a
                                href="#"
                                className="bg-[#2490EB] text-white hover:bg-[#1e77c4] px-6 py-3 text-sm font-semibold rounded-full transition duration-300 uppercase text-center"
                            >
                                Agendar Examen
                            </a>
                        </div>
                    </div>

                    <div className="w-full px-6 sm:px-10 lg:px-0">
                        <img
                            src="/images/banner_clinica.png"
                            alt="Banner Clínica"
                            className="object-contain w-full h-auto"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}
