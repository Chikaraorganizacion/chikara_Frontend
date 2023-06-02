const IconSection = (props) => {
  const {icon, url, color} = props

  return (
    <li>
      <a className='flex justify-center items-center p-6 border border-gray-200 mb-6 hover:border-gray-400 hover:bg-gradient-to-t from-red-100 to-gray-100 flex-1 shadow-xl duration-300 transition-all rounded-md' href={`${url}`} target="_blank" aria-label={`Conoce más sobre Chikara en ${icon}`}>
        <svg className={`max-h-24 hover:-translate-y-1 hover:scale-90 transition-all duration-300 ${color}`} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <use href={`/icons.svg#ic-${icon}`} />
        </svg >
      </a>
    </li>
  )
}

export default IconSection

/*
Función: Componente encargado de crear los iconos de redes sociales en el Header.

Props:
  icon = a-Href: url de la red social a la que se asocia el icono.
  url= use-href: Ubicación del svg que se invocara en el archivo icons.svg por medio de la etiqueta <use>
*/