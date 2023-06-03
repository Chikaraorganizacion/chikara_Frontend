import { useState } from 'react'
import InfoCard from './createInfoCard'
import { infosYoutube } from '../components/data'

const InfoYoutube = () => {
  const [showVideo, setShowVideo] = useState(false)

  const handlePlayButtonClick = () => {
    setShowVideo(true)
  }

  return (
    <div className='grid gap-6 xl:grid-cols-[0.5fr_1fr]'>
      <div>
        <InfoCard 
          icon={infosYoutube.icon} 
          title={infosYoutube.title}  
          info={infosYoutube.info} 
        ></InfoCard>
      </div>
      <div className='flex'>
        {showVideo ? (
          <iframe 
            className="border-4 border-white rounded-lg w-full h-96 xl:h-full"
            src={infosYoutube.video} 
            aria-label="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        ) : (
          <div className="relative">
            <img
              className="border-2 rounded-lg w-full h-96 xl:h-full object-none object-center border-red-500"
              src={`https://img.youtube.com/vi/${infosYoutube.videoId}/maxresdefault.jpg`}
              alt="Video thumbnail"
              loading="lazy"
            />
            <button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full text-red-500 p-4  hover:scale-90 hover:shadow-black hover:shadow-md duration-300 transition-all"
              onClick={handlePlayButtonClick}
              title='Botón que revela el video de YouTube insertado en al página.'
            >
              <svg className='w-20 h-20 sm:inline-flex lg:inline-flex' xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <use href={'/icons.svg#ic-youtube'} />
              </svg >
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default InfoYoutube

/*
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
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}

export default InfoYoutube
*/

/*
Función: Componente con el contenido del <section> de YouTube.

El <div> principal contiene:
1. Primer <div> usa el componete <InfoCard>, para crear una carta de información.
2. Segundo <div> contiene el <iframe> de Video (Según API de YouTube).
*/
