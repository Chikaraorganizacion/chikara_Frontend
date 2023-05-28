import InfoCard from './createInfoCard'
import { infosYoutube } from '../components/data'

const InfoYoutube = () => {
  return (
    <div className='grid gap-6 xl:grid-cols-[0.5fr_1fr]'>
      <div>
        <InfoCard 
          icon={infosYoutube.icon} 
          title={infosYoutube.title}  
          info={infosYoutube.info} 
        ></InfoCard>
      </div>
      <div className=''>
        <iframe 
          className="border-4 border-white rounded-lg w-full h-96 xl:h-full"
          src={infosYoutube.video} 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  )
}

export default InfoYoutube

/*
Función: Componente con el contenido del <section> de YouTube.

El <div> principal contiene:
1. Primer <div> usa el componete <InfoCard>, para crear una carta de información.
2. Segundo <div> contiene el <iframe> de Video (Según API de YouTube).
*/
