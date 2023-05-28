const TitleSection = (props) => {
  const {title, subtitle} = props

  return (
    <header className="flex flex-wrap justify-center text-center gap-4">
      <div>
        <div className="font-mont text-3xl uppercase text-gray-900 font-black mb-2 sm:text-4xl mx-a">{title}</div>
        <p className="sm:text-xl">{subtitle}</p>
      </div>
    </header>
  )
}

export default TitleSection

/*
Función: Componente encargado de crear el título y subtitulo en una <section> dentro del <main>

Props:
  title: Título del tema principal de la sección.
  subtitle: Subtítulo que describe el tema de la sección.
*/
