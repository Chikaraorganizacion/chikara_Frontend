import InfoCard from './createInfoCard'
import { infosTwitch } from '../components/data'

const InfoTwitch = () => {
  return (
    <div className='grid gap-6 xl:grid-cols-[1fr_0.5fr_0.8fr]'>
      <div className='order-0 xl:order-1'>
      <InfoCard 
          icon={infosTwitch.icon} 
          title={infosTwitch.title}  
          info={infosTwitch.info} 
        ></InfoCard>
      </div>  
      <div className=''>
        <iframe
          className="border-4 border-white rounded-lg w-full h-96 xl:h-full"
          src={infosTwitch.stream}
          aria-label="Twitch video player"
          loading="lazy">
        </iframe>
      </div>
      <div>
        <iframe 
          className="border-4 border-white rounded-lg w-full h-full"
          src={infosTwitch.chat}
          aria-label="Twitch chat player"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}

export default InfoTwitch

/*
Función: Componente con el contenido del <section> de Twitch.

El <div> pirncipal contiene:
1. Primer <div> usa el componete <InfoCard>, para crear una carta de información.
2. Segundo <div> contiene el <iframe> de Video (Según API de Twitch).
3. Tercer <div> contiene el <iframe> de Chat (Según API de Twitch).
*/