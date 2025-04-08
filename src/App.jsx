
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

      </div>
    </>
  )
}

export default App
