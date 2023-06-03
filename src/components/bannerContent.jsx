import logos from '../assets/logos/logos'

const BannerContent = () => {
  return (
    <div id='banner' className='grid grid-cols-1 gap-10 lg:mt-32 animate-fade-in'>
      <div className='flex justify-center lg:hidden visible'>
        <figure className="bg-white shadow-md rounded-full">
          <a href="https://chikaraoficial.org/">
            <img className="h-32 w-auto lg:h-20" loading="lazy" src={logos.mainLogo} alt="Logo Chikara" />
          </a>
        </figure>
      </div>

      <div className='animate-fade-in'>
        <img loading="lazy" src={logos.chikaraNameDark} alt="Logo con nombre chikara"/>
      </div>

      <div className='lg:w-2/3 p-10 animate-fade-in-up'>
        <p className='font-bold text-left text-4xl text-gray-900 sm:text-6xl'>Hasta el viaje más largo comienza con un solo paso.</p>
      </div>

      <div className='flex justify-center animate-fade-in'>
        <a className="px-4 py-5 text-white text-4xl font-bold bg-gradient-to-t from-gray-900 to-[#fd0215] border border-gray-400 shadow-xl rounded-xl focus:animate-ping-short focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white hover:-translate-y-1 hover:scale-90 hover:shadow-white hover:shadow-md duration-300 transition-all" href="#preinscriptionSection">
          Únete ahora
        </a>
      </div>
    </div>
  )
}

export default BannerContent

/*
Función: Componente con el contenido del banner dentro del header.

El <div> id=banner contiene:
1. Primer <div> contiene imagen del logo principal (Se muestra solo en responsive)
2. Segundo <div> contiene imagen del nombre del logo.
3. Tercer <div> contiene el slogan.
4. Cuarto <div> contiene bóton de subscripción para mostrar formulario.
*/