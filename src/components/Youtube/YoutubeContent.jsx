import { useState, useRef, useEffect } from 'react'
import InfoCard from '../Common/InfoCard'
import { infoYoutube } from '../../data/infoData'

const YoutubeContent = () => {
  const [showVideo, setShowVideo] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  const handlePlayButtonClick = () => {
    setIsLoading(true)
    setShowVideo(true)
  }

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[0.5fr_1fr] items-stretch" ref={containerRef}>
      <div>
        <InfoCard
          icon={infoYoutube.icon}
          title={infoYoutube.title}
          info={infoYoutube.info}
        />
      </div>

      <div className="relative w-full h-full">
        {isVisible &&
          (showVideo ? (
            <>
              {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 dark:bg-gray-900/80 z-10 rounded-lg text-center p-4 transition-all animate-fadeIn">
                  <div className="relative w-16 h-16 mb-4">
                    <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-pink-500 animate-spin"></div>
                    <div className="absolute inset-2 rounded-full border-4 border-t-transparent border-purple-500 animate-spin-reverse"></div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    Cargando video... Por favor espera.
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Si tarda mucho, revisa tu conexión a Internet.
                  </p>
                </div>
              )}
              <iframe
                className="w-full h-96 xl:h-full border-4 border-white rounded-lg"
                src={infoYoutube.video}
                aria-label="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                onLoad={handleIframeLoad}
              ></iframe>
            </>
          ) : (
            <>
              <img
                className="w-full h-96 xl:min-h-full object-cover rounded-lg"
                src={`https://img.youtube.com/vi/${infoYoutube.videoId}/maxresdefault.jpg`}
                alt="Video thumbnail"
                loading="lazy"
              />
              <button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full text-red-500 p-4 hover:scale-110 hover:shadow-black hover:shadow-md duration-300 transition-transform"
                onClick={handlePlayButtonClick}
                title="Botón que revela el video de YouTube insertado en la página."
              >
                <svg className="w-20 h-20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <use href="/icons.svg#ic-youtube" />
                </svg>
              </button>
            </>
          ))}
      </div>
    </div>
  )
}

export default YoutubeContent
