const InfoCard = (props) => {
  const { icon, title, info } = props

  return (
    <article className='p-6 rounded-2xl grid grid-cols-2 xl:grid-cols-1 gap-4 bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-shadow duration-300'>
      <div className='flex items-center justify-center col-span-2 xl:col-span-1'>
        <svg
          className='w-24 h-24 sm:w-32 sm:h-32 text-gray-400 dark:text-gray-500'
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
        >
          <use href={`/icons.svg#ic-${icon}`} />
        </svg>
      </div>

      <div className='col-span-2 xl:col-span-1 flex flex-col items-center text-center'>
        <h3 className='text-lg font-bold sm:mt-4 sm:text-xl dark:text-gray-200'>{title}</h3>
        <p className='mt-2 text-base sm:text-lg text-gray-700 dark:text-gray-300'>{info}</p>
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