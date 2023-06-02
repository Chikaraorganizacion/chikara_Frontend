const IconFooter = (props) => {
  const {icon, url} = props

  return (
    <li>
      <a className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-red-500 hover:text-white rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-white transition" href={`${url}`} target="_blank" aria-label={`Conoce más sobre Chikara en ${icon}`}>
        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
          <use href={`/icons.svg#ic-${icon}`} />
        </svg>
      </a>
    </li>
  )
}

export default IconFooter

/*
Función: Componente encargado de crear los iconos de redes sociales en el Footer.

Props:
  icon = a-Href: url de la red social a la que se asocia el icono.
  url= use-href: Ubicación del svg que se invocara en el archivo icons.svg por medio de la etiqueta <use>
*/