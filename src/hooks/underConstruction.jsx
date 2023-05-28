import { useState } from 'react'

const UnderConstruction = (props) => {
  const {name} = props
  const [openModal, setOpenModal] = useState(true)

  return (
        <div className="">
          <button
            className="flex py-2 hover:bg-indigo-50 hover:text-red-600 rounded-full lg:text-3xl lg:text-white  lg:rounded-none lg:py-8 lg:px-0 lg:hover:bg-transparent"
            onClick={() => setOpenModal(!openModal)}
          >{name}</button>
          {!openModal && (

            <div className={`fixed z-20 right-12 top-0 lg:left-0 lg:top-10 flex items-center justify-center w-64 h-3/4 lg:w-full lg:h-fit bg-gray-100 shadow-md shadow-gray-900 rounded border-2 border-red-500 py-6 px-2 opacity-100 scale-100 ${openModal ? 'filter blur-sm' : ''}`}>
              <div>
                <div>
                  <h1 className='mt-10 text-red-500 text-2xl lg:text-6xl flex justify-center'>⚠️🚧 EN CONSTRUCCIÓN 🚧⚠️</h1>
                </div>
                <div className='flex justify-center'>
                  <img src="https://t4.ftcdn.net/jpg/00/91/84/45/500_F_91844531_AKRlMwQfq8M6aJ5G4B5yWLFFeBVnNSwN.jpg" alt="Cat Builder" />
                </div>
                <article className='p-5 mb-10 font-bold text-center text-lg lg:text-4xl text-gray-900'>
                  <p className=''>Estamos trabajando para crear el mejor contenido para ti. </p>
                  <p className=''>¡Espéralo muy pronto!</p>
                </article>
              </div>
              <div className='fixed z-40 right-2 top-2 lg:right-4 lg:top-4 w-14 h-14 flex items-center justify-center bg-red-600 text-white rounded-full'>
                <button onClick={() => setOpenModal(!openModal)}>
                  <svg className="h-5 w-5 text-center">
                    <use href="/icons.svg#ic-close" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          <div className={`fixed inset-0 transition duration-300 ${!openModal ? 'backdrop-blur-md' : 'hidden'}`}/>
        </div>

  )
}

export default UnderConstruction
