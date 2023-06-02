const InfoCard = (props) => {
  const {icon, title, info} = props

  return (
    <article className='border-2 border-red-500 p-4 rounded-2xl grid grid-cols-2 xl:grid-cols-1 relative'>

      <div className='absolute inset-0 opacity-20 sm:relative sm:opacity-100 sm:flex sm:items-center sm:justify-center'>
        <svg className='w-full h-full sm:w-auto sm:h-auto sm:inline-flex lg:inline-flex' xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <use href={`/icons.svg#ic-${icon}`} />
        </svg >
      </div>

      <div className='grid col-span-2 sm:col-span-1 z-10 relative'>
        <h3 className='text-lg font-bold text-center sm:mt-6 sm:text-xl'>{title}</h3>
        <p className='p-4 text-base text-justify sm:text-xl'>{info}</p>
      </div>
    </article>
  )
}

export default InfoCard

/*
Función: Componente encargado de tarjeta de información (InfoCard) dentro <section> en el <main>

Props:
  icon: Ubicación de icono dentro de icons.svg
  title: Título del tema principal de la información.
  info: Información del tema principal.
*/