const InfoCard = (props) => {
  const {icon, title, info} = props

  return (
    <article className='border-2 border-red-500 p-4 rounded-2xl grid grid-cols-2 xl:grid-cols-1'>
      <div className='flex items-center justify-center'>
        <svg className='hidden sm:inline-flex' aria-hidden="true">
          <use href={`/icons.svg#ic-${icon}`} />
        </svg >
      </div>
      <div className='grid col-span-2 sm:col-span-1'>
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