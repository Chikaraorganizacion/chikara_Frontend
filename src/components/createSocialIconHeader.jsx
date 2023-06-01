const IconHeader = (props) => {
  const {icon, url} = props

  return (
    <li>
      <a className="flex items-center p-2 text-red-500 lg:text-white hover:text-red-600 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-white duration-200 transition-all" href={`${url}`} target="_blank">
        <svg className='w-5 h-5 lg:w-10 lg:h-10'>
          <use href={`/icons.svg#ic-${icon}`} />
        </svg >
        <span className="px-2 text-xl font-bold text-gray-900 lg:hidden visible">{icon}</span>
      </a>
    </li>
  )
}

export default IconHeader

/*
Función: Componente encargado de crear los iconos de redes sociales en el Header.

Props:
  icon = a-Href: url de la red social a la que se asocia el icono.
  url= use-href: Ubicación del svg que se invocara en el archivo icons.svg por medio de la etiqueta <use>
*/