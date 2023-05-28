const IconHeader = (props) => {
  const {icon, url} = props

  return (
    <li>
      <a className="flex p-2 text-white hover:text-red-600 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-white transition" href={`${url}`} target="_blank">
        <svg className='w-10 h-10'>
        <use href={`/icons.svg#ic-${icon}`} />
        </svg >
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