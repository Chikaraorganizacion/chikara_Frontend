const TitleSection = ({ title, subtitle, description, centered = true }) => {
  return (
    <header className={`flex flex-wrap ${centered ? 'justify-center text-center' : ''} gap-4 lg:my-8 mt-8`}>
      <div>
        {title && (
          <h2 className="font-mont text-3xl uppercase text-gray-900 font-black mb-2 sm:text-4xl dark:text-gray-100 transition-colors duration-300">
            {title}
          </h2>
        )}

        {subtitle && (
          <p className="sm:text-xl text-gray-800 dark:text-gray-200 transition-colors duration-300">
            {subtitle}
          </p>
        )}

        {description && (
          <p className="text-md text-gray-500 dark:text-gray-400 mt-2 max-w-2xl mx-auto transition-colors duration-300">
            {description}
          </p>
        )}
      </div>
    </header>
  )
}

export default TitleSection

/*
 * Componente encargado de mostrar el título, subtítulo y descripción opcional de una sección.
 * 
 * Props:
 * - title: (string) Título principal de la sección.
 * - subtitle: (string) Subtítulo de la sección.
 * - description: (string) Texto opcional que amplía el contexto.
 * - centered: (boolean) Si true, centra todo el contenido.
 */
