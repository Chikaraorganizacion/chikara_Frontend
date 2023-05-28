import { useState, useEffect } from 'react'
import UnderConstruction from './underConstruction'

const ButtonMenu = () => {
  const [openMenu, setOpenMenu] = useState(true)
  const [openIndex, setOpenIndex] = useState(true)
  const [openSocial, setOpenSocial] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDarkMode(isDarkMode)
  }, [])

  const handleToggle = () => {
    setDarkMode(!darkMode)
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
        <div className="">
          <button
            className="fixed z-40 right-4 bottom-4 w-14 h-14 flex items-center justify-center bg-red-600 text-white rounded-full lg:hidden"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? 
              <svg className="h-5 w-5 text-center">
                <use href="/icons.svg#ic-menu" />
              </svg>
              : 
              <svg className="h-5 w-5 text-center">
                <use href="/icons.svg#ic-close" />
              </svg>
            }
          </button>
          {!openMenu && (

            <nav className={`fixed z-20 right-2 bottom-2 w-1/2 h-[90%] bg-gray-100 shadow-md shadow-gray-900 rounded border-2 border-red-500 py-6 px-2 opacity-100 scale-100 ${openMenu ? 'filter blur-sm' : ''}`}>

              <button
                className="flex justify-between items-center w-full p-4 focus:outline-none"
                onClick={() => setOpenIndex(!openIndex)}
              >
                <p className="text-lg font-bold flex sm:text-xl">Menú</p>
                <span className='w-5 h-5'>
                  {openIndex ?
                  <svg className='inline-flex w-5 h-5 scale-[-1]' aria-hidden="true">
                  <use href={`/icons.svg#ic-down`} />
                  </svg > : 
                  <svg className='inline-flex w-5 h-5' aria-hidden="true">
                    <use href={`/icons.svg#ic-down`} />
                  </svg >
                  }
                </span>
              </button>
              {openIndex && (
              <div className="px-6 pb-6">
                  <ul className="grid gap-5 text-lg text-gray-900 text-left">
                    <li>
                      <a className="" href="https://chikaraoficial.org/">🔍 Inicio</a>
                    </li>
                    <li>
                      <UnderConstruction name='📰 Enteraté'></UnderConstruction>
                    </li>
                    <li>
                      <a className="" href="https://chikaraoficial.org/inscripcion/">🙋 Inscripción</a>
                    </li>
                    <li>
                      <a className="" href="https://chikaraoficial.org/donaciones/">❤️ Donaciones</a>
                    </li>
                  </ul>
              </div>
              )}

              <button
                className="flex justify-between items-center w-full p-4 focus:outline-none"
                onClick={() => setOpenSocial(!openSocial)}
              >
                <p className="text-lg font-bold flex sm:text-xl">Síguenos</p>
                <span className='w-5 h-5'>
                  {openSocial ?
                  <svg className='sm:inline-flex w-5 h-5  scale-[-1]' aria-hidden="true">
                    <use href={`/icons.svg#ic-down`} />
                  </svg > : 
                  <svg className='sm:inline-flex w-5 h-5' aria-hidden="true">
                  <use href={`/icons.svg#ic-down`} />
                  </svg >
                  }
                </span>
              </button>
              {openSocial && (
              <div className="px-6 pb-6">
                  <ul className="grid gap-5 text-lg text-gray-900 text-left">
                    <li>
                      <a href="#" target="_blank">
                        <svg className="w-5 h-5 mr-2 inline text-orange-500 " width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <use href={'/icons.svg#ic-instagram'} />
                        </svg>
                        <span>Instagram</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <svg className="w-5 h-5 mr-2 inline text-blue-500 " width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <use href={'/icons.svg#ic-facebook'} />
                        </svg>
                        <span>Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <svg className="w-5 h-5 mr-2 inline text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <use href={'/icons.svg#ic-youtube'} />
                        </svg>
                        <span>YouTube</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <svg className="w-5 h-5 mr-2 inline text-violet-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <use href={'/icons.svg#ic-twitch'} />
                        </svg>
                        <span>Twitch</span>
                      </a>
                    </li>
                  </ul>
              </div>
              )}

              <div className='fixed z-40 right-2 bottom-20'>
                <button onClick={handleToggle}>
                  {darkMode ? 
                    <svg className="w-14 h-14 flex p-2 text-blue-400 bg-gray-900 hover:bg-gray-500 rounded-full" fill="currentColor">
                      <use href={'/icons.svg#ic-sun'} />
                    </svg>: 
                    <svg className="w-14 h-14 flex p-2 text-yellow-500 bg-white border-2 hover:bg-gray-100 rounded-full" fill="currentColor">
                      <use href={'/icons.svg#ic-moon'} />
                    </svg>
                  }
                </button>
              </div>
            </nav>
          )}

          <div className={`fixed inset-0 transition duration-300 ${!openMenu ? 'backdrop-blur-md' : 'hidden'}`}/>
        </div>

  )
}

export default ButtonMenu

