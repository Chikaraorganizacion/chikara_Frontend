import logosSponsors from '../assets/logosSponsors/logosSponsors'

const Sponsor = (props) => {
  const {name, url, logo} = props

  return (
    <li className="flex justify-center items-center p-6 border border-gray-200 mb-6 hover:border-gray-400 hover:bg-gradient-to-t from-red-100 to-gray-100 flex-1 shadow-xl duration-300 transition-all rounded-md ">
      <a href={url} target="_blank">
        <img className="max-h-24 hover:-translate-y-1 hover:scale-90 transition-all duration-300" loading="lazy" src={logosSponsors[logo]} alt={`Logo de "${name}"`} />
      </a> 
    </li>
  )
}

export default Sponsor

/*
Función: Componente encargado de crear una tarjeta de patrocinador (SponsorCard).

Props:
  logo: Url de la imagen del logo del patrocinador.
  name: String de nombre del patrocinador.
  url: Url de la página web o red social principal del patrocinador.
*/
