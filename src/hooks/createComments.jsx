import { useState } from 'react'
import imgCommet from '../assets/imgComments/imgCommet'
import { comments, flags } from '../components/data'

const Comment = () => {
  const [ComentarioActual, setComentarioActual] = useState(0)
  
  const nextComment = () => {
    setComentarioActual((ComentarioActual + 1) % comments.length)
  }

  const prevComment = () => {
    setComentarioActual((ComentarioActual - 1 + comments.length) % comments.length)
  }

  return (
    <div className="relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl min-h-80">
      <div className="w-full md:w-2/5 h-full rounded-t-lg md:rounded-t-none md:rounded-l-lg min-h-80">
        <img className="inset-0 w-full h-96 object-cover object-center" loading="lazy" src={imgCommet[comments[ComentarioActual].image]} alt={`Foto de ${comments[ComentarioActual].name}`} />
      </div>
      <div className="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg">
        <div className="grid grid-cols-1 gap-5 md:gap-10 p-6 md:pr-24 md:pl-16 md:py-12">
          <svg className='w-20 h-20' aria-hidden="true">
            <use href={'/icons.svg#ic-quotes'} />
          </svg >
          <p className="text-gray-600 font-bold text-center text-lg sm:text-xl">{comments[ComentarioActual].comment}</p>
          <div>
            <p className="text-red-600 text-right font-bold text-lg sm:text-xl">{comments[ComentarioActual].name}</p>
            <p className="text-red-600 text-right text-lg sm:text-xl">{comments[ComentarioActual].location}
              <img className='inline-flex pl-2 w-8 h-6' loading="lazy" src={flags[comments[ComentarioActual].flag]} alt={`Bandera de ${comments[ComentarioActual].flag}`} />
            </p>
          </div>
        </div>
        <svg className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
      </div>
      <button className="absolute top-0 mt-32 left-0 bg-white rounded-full shadow-md h-10 w-10 sm:h-20 sm:w-20 text-2xl text-red-600 hover:text-red-400 focus:text-red-400 -ml-6 focus:outline-none focus:shadow-outline" onClick={prevComment}>
        <span className="block scale-[-1]">&#x279c;</span>
      </button>
      <button className="absolute top-0 mt-32 right-0 bg-white rounded-full shadow-md h-10 w-10 sm:h-20 sm:w-20 text-2xl text-red-600 hover:text-red-400 focus:text-red-400 -mr-6 focus:outline-none focus:shadow-outline" onClick={nextComment}>
        <span className="block scale-1">&#x279c;</span>
      </button>
    </div>
  )
}

export default Comment

/*

*/