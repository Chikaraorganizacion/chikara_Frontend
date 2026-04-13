import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import DrawerMenu from './DrawerMenu'

const NavBarContent = ({eventsRef, preinscriptionRef, donationsRef, contactusRef }) => {
  const [openMenu, setOpenMenu] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const isHomePage = location.pathname === '/'

  const scrollToSection = (ref) => {
    if (ref?.current) {
      const offsetTop = ref.current.offsetTop - 180
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
  }

  const handleOrNavigate = (section) => {
    if (isHomePage) {
      const map = {
        events: eventsRef,
        preinscription: preinscriptionRef,
        donations: donationsRef,
        contact: contactusRef,
        top: { current: { offsetTop: 0 } }
      }
      scrollToSection(map[section])
    } else {
      navigate(`/?scrollTo=${section}`)
    }
  }

  return (
    <div>
      {/* Enlaces visibles en pantallas grandes */}
      <div
        id='navbar'
        className="bg-white shadow-md rounded border border-gray-100 p-4 mb-4 w-60 absolute right-0 bottom-0 
        lg:static lg:w-full lg:flex lg:items-center lg:bg-transparent lg:justify-between lg:border-0 
        lg:shadow-none lg:p-0 lg:mb-0 lg:transform-none lg:opacity-100 lg:scale-100 
        hidden z-10 transition-all duration-500 ease-in-out"
      >
        <ul className="text-3xl font-bold text-gray-900 lg:flex lg:items-center lg:mb-0 lg:gap-16 lg:flex-1 lg:justify-center">
          <li className="lg:hidden visible">
            <button
              onClick={() => handleOrNavigate('top')}
              className="text-white text-xl hover:text-red-600 transition-colors"
            >
              Inicio
            </button>
          </li>
          <li>
            <button
              onClick={() => handleOrNavigate('events')}
              className="text-white text-xl hover:text-red-600 transition-colors"
            >
              Eventos
            </button>
          </li>
          <li>
            <button
              onClick={() => handleOrNavigate('preinscription')}
              className="text-white text-xl hover:text-red-600 transition-colors"
            >
              Inscripción
            </button>
          </li>
          <li>
            <button
              onClick={() => handleOrNavigate('donations')}
              className="text-white text-xl hover:text-red-600 transition-colors"
            >
              Donaciones
            </button>
          </li>
          <li>
            <button
              onClick={() => handleOrNavigate('contact')}
              className="text-white text-xl hover:text-red-600 transition-colors"
            >
              Contáctanos
            </button>
          </li>
        </ul>
      </div>

      {/* Botón abrir/cerrar menú */}
      <div className='flex items-center gap-5 relative z-10'>
        <button
          className="flex items-center justify-center w-14 h-14 text-xl bg-red-600 text-white rounded-full 
          lg:hidden shadow-lg hover:scale-105 transition-transform"
          onClick={() => setOpenMenu(!openMenu)}
          title='Botón para abrir el menú lateral'
          type='button'
        >
          {openMenu ? (
            <svg className="h-5 w-5 text-center">
              <use href="/icons.svg#ic-close" />
            </svg>
          ) : (
            <svg className="h-5 w-5 text-center">
              <use href="/icons.svg#ic-menu" />
            </svg>
          )}
        </button>
      </div>

      {/* Menú Drawer */}
      <DrawerMenu
        isOpen={openMenu}
        onClose={() => setOpenMenu(false)}
        scrollToTop={() => handleOrNavigate('top')}
        scrollToSection={(section) => handleOrNavigate(section)}
        eventsRef={eventsRef}
        preinscriptionRef={preinscriptionRef}
        donationsRef={donationsRef}
        contactusRef={contactusRef}
      />
    </div>
  )
}

export default NavBarContent
