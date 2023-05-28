import React, { useRef } from 'react'

import NavBarContent from '../components/navBarContent'
import BannerContent from './bannerContent'
import BgNavBar from '../hooks/createBgNavBar'
import ButtonMenu from '../hooks/createButtonMenu'
import logos from '../assets/logos/logos'

const HeaderContent = () => {
  const headerRef = useRef(null)
  return (
    <div id='header' className="bg-[url('/src/assets/background/bg-header.webp')] bg-cover h-screen shadow-xl">
      <BgNavBar headerRef={headerRef} />
      <header className="p-10 flex items-center justify-center filter:none fixed top-0 left-0 right-0 z-10" ref={headerRef}>
        <div className='lg:static max-h-16 lg:flex lg:items-center lg:visible hidden'>
          <figure className="bg-white shadow-md rounded-full lg:flex-none hover:-translate-y-1 hover:scale-75 hover:bg-white duration-300">
            <a href="https://chikaraoficial.org/">
              <img className="h-32 w-auto lg:h-20" src={logos.mainLogo} alt="chikara" />
            </a>
          </figure>
        </div>

        <nav className="flex-1 lg:sticky lg:bottom-auto lg:right-0 lg:top-0">
          <NavBarContent></NavBarContent>
        </nav>
      </header>

      <section className='h-full p-6 flex items-center justify-center xl:px-12 xl:max-w-screen-2xl xl:mx-auto sm:1/2' >
        <BannerContent></BannerContent>
      </section>
    </div>
  )
}

export default HeaderContent

/*
Función: Componente con el contenido del header.

El <div> id=header contiene:
1. Invocación del componete <BgNavBar> para controlar el background del header navbar.
2. <header> que contiene:
  2.1. <div> que contiene el logo principal de chikara.
  2.2. <nav> que invoca el componente <NavBarContent>
3. <Section> que invoca el componente <BannerContent>.
*/
