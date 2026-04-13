import React, { useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import NavBarContent from './NavBarContent'
import BgHeader from '../../hooks/useBgHeader'
import Group from '../Common/Group'
import IconHeader from './SocialIconHeader'
import { socialIcons } from '../../data/infoData'
import DarkModeButton from '../../hooks/useDarkModeButton';
import logos from '../../data/logos'

const HeaderContent = ({eventsRef, preinscriptionRef, donationsRef, contactusRef }) => {
  const headerRef = useRef(null);
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  return (
    <header
      ref={headerRef}
      role="navigation"
      aria-label="Menú principal"
      className="px-2 lg:px-16 xl:px-20 flex items-center justify-between fixed top-0 left-0 right-0 z-50 transition-bg duration-500 ease-in-out bg-transparent"
    >
      <BgHeader headerRef={headerRef} />

      {/* Contenedor del logo y botón de menú (orden intercambiable) */}
      <div className="flex items-center justify-between w-full lg:w-auto">
        {/* Botón DrawerMenu para móviles, visible solo en pantallas pequeñas */}
        <div className="lg:hidden order-1">
          <NavBarContent
            eventsRef={eventsRef}
            donationsRef={donationsRef}
            contactusRef={contactusRef}
            preinscriptionRef={preinscriptionRef}
          />
        </div>

        {/* Logo Chikara, centrado en móviles y a la izquierda en pantallas grandes */}
        <div className="order-2 flex-1 flex justify-center lg:justify-start">
          <button
            onClick={handleLogoClick}
            aria-label="Ir al inicio"
            className="bg-white rounded-full flex cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-black/50"
          >
            <img
              className="h-14 w-auto"
              loading="lazy"
              src={logos.mainLogo}
              alt="Logotipo de Chikara"
              tabIndex={0}
            />
          </button>
        </div>
      </div>

      {/* Enlaces navbar (visible solo en pantallas grandes) */}
      <div className="hidden lg:flex flex-1 justify-center">
        <NavBarContent
          eventsRef={eventsRef}
          donationsRef={donationsRef}
          contactusRef={contactusRef}
          preinscriptionRef={preinscriptionRef}
        />
      </div>

      {/* Redes sociales y botón de modo oscuro */}
      <div className="flex items-center gap-5 relative z-10 before:hidden lg:before:block lg:before:w-px lg:before:h-10 lg:before:bg-gray-300">
        <nav className="hidden lg:flex text-red-600 text-2xl" aria-label="Redes sociales">
          <ul className="flex flex-wrap gap-2 justify-center">
            <Group data={socialIcons} Component={IconHeader} />
          </ul>
        </nav>

        <div className='flex items-center gap-5 before:content-none lg:before:content-[""] before:w-px before:h-10 before:bg-gray-300'>
          <DarkModeButton />
        </div>
      </div>
    </header>
  )
}

export default HeaderContent
