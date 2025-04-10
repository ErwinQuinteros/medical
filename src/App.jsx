
import { Hero } from './components/Hero'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <div className='w-full mx-auto'>
        <Navbar />
        <Hero />
        <div className="flex items-center justify-center w-full gap-8 px-6 py-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#14457B] md:leading-20">
              Nuestra especialidad es cuidarte
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#666666] mb-6">

              En nuestra clínica ofrecemos una atención de calidad, enfocada en su bienestar y salud.
              Contamos con un equipo médico altamente calificado, dispuesto a escuchar y comprender sus necesidades.
              necesidades. Utilizamos equipos modernos y seguimos las mejores prácticas médicas.
            </p>
            <div className='flex items-center justify-center'>

              <a
                href="#inicio"
                className="bg-[#19DDB8] text-white hover:bg-[#17c0a4] px-7 py-4 text-sm font-semibold rounded-full transition duration-300 uppercase text-center"
              >
                Saber más
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full px-4 py-10 mx-auto text-center">
          <div className="bg-[#14457B] max-w-[1224px] w-full text-white rounded-3xl px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-6">
            <div className="text-center transition-transform duration-300 hover:scale-105">
              <div className="text-3xl font-light lg:text-5xl md:text-4xl">+30</div>
              <div className="mt-1 text-lg tracking-widest">ESPECIALISTAS</div>
            </div>

            <div className="text-center transition-transform duration-300 hover:scale-105">
              <div className="text-3xl font-light lg:text-5xl md:text-4xl">+7000</div>
              <div className="mt-1 text-lg tracking-widest">EXÁMENES REALIZADOS</div>
            </div>

            <div className="text-center transition-transform duration-300 hover:scale-105">
              <div className="text-3xl font-light lg:text-5xl md:text-4xl">+12 MIL</div>
              <div className="mt-1 text-lg tracking-widest">PACIENTES ATENDIDOS</div>
            </div>

            <div className="flex items-center gap-3 text-left transition-opacity cursor-pointer hover:opacity-90">
              <div className="w-1 h-10 bg-blue-500 rounded-sm" />
              <div className="text-lg leading-tight tracking-widest">
                <div>CONOZCA NUESTRO</div>
                <div>CUERPO CLÍNICO</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
