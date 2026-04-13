const IconHeader = (props) => {
  const { icon, url } = props

  // Mapa de colores por red social
  const iconColors = {
    twitch: 'text-purple-500',
    youtube: 'text-red-500',
    facebook: 'text-blue-500',
    instagram: 'text-pink-500' // Usaremos color sólido porque no soporta gradiente directo en SVG sprite
  }

  // Asignación dinámica de color
  const iconColor = iconColors[icon.toLowerCase()] || 'text-red-500'

  return (
    <a
      className="group flex items-center p-2  hover:bg-slate-900 dark:hover:bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-white duration-200 transition-all"
      href={`${url}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Conoce más sobre Chikara en ${icon}`}
    >
      {/* Color dinámico por red social */}
      <svg
        className={`w-5 h-5 ${iconColor} lg:w-10 lg:h-10`}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <use href={`/icons.svg#ic-${icon}`} />
      </svg>

      {/* Texto con hover activo en todo el área */}
      <span className="px-2 text-base text-black group-hover:text-white dark:text-white dark:group-hover:text-black capitalize lg:hidden visible">
        {icon}
      </span>
    </a>
  )
}

export default IconHeader
