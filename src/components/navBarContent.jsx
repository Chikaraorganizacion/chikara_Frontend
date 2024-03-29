import { useState} from 'react'

import Group from '../components/createGroup'
import IconHeader from '../components/createSocialIconHeader'
import { socialIcons } from '../components/data'
import DarkModeButton from '../hooks/createDarkModeButton'

const ButtonMenu = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <div>
      <div id='navbar' className={`bg-white shadow-md rounded border border-gray-100 p-4 mb-4 w-60 absolute right-0 bottom-0 lg:static lg:w-full lg:flex lg:items-center lg:bg-transparent lg:justify-between lg:border-0 lg:shadow-none lg:p-0 lg:mb-0 lg:transform-none lg:opacity-100 lg:scale-100 ${openMenu ? 'lg:visible' : 'hidden'} relative z-10`}>
        <ul className="text-xl font-bold text-gray-900 lg:flex lg:items-center lg:mb-0 lg:gap-8 lg:flex-1 lg:justify-center">
          <li className="lg:hidden visible">
            <a className="flex p-2 hover:bg-indigo-50 hover:text-red-600 rounded-full lg:text-3xl lg:text-white lg:rounded-none lg:py-8 lg:px-0 lg:hover:bg-transparent" href="/#">
              <span>🙋</span>
            Inicio</a>
          </li>
          <li>
            <a className="flex p-2 hover:bg-indigo-50 hover:text-red-600 rounded-full lg:text-3xl lg:text-white lg:rounded-none lg:py-8 lg:px-0 lg:hover:bg-transparent" href="#preinscriptionSection">
              <span className="lg:hidden visible">🙋</span>
            Inscripción</a>
          </li>
          <li>
            <a className="flex p-2 hover:bg-indigo-50 hover:text-red-600 rounded-full lg:text-3xl lg:text-white lg:rounded-none lg:py-8 lg:px-0 lg:hover:bg-transparent" href="#donationsSection">
              <span className="lg:hidden visible">🔍</span>
            Donaciones</a>
          </li>
          <li>
            <a className="flex p-2 hover:bg-indigo-50 hover:text-red-600 rounded-full lg:text-3xl lg:text-white lg:rounded-none lg:py-8 lg:px-0 lg:hover:bg-transparent" href="#contactusSection">
              <span className="lg:hidden visible">🔍</span>
            Contáctanos</a>
          </li>
        </ul>
        <nav className="text-red-600 text-2xl">
          <ul className="lg:flex lg:flex-wrap lg:gap-2 lg:justify-center">
            <Group data={socialIcons} Component={IconHeader} />
          </ul>         
        </nav>
        <div className='flex items-center lg:pl-5 gap-5 relative z-10 lg:before:w-px lg:before:h-10 lg:before:bg-gray-300'>
          <DarkModeButton></DarkModeButton>
        </div>
      </div>
      <div className='flex items-center lg:pl-5 gap-5 relative z-10'>
        <button className="flex items-center justify-center ml-auto mr-0 w-14 h-14 text-xl bg-red-600 text-white rounded-full lg:hidden" onClick= {() => setOpenMenu(!openMenu)} title='Botón para abrir el menu desplegable de la barra de navegación' type='button' >            
          {openMenu ? 
            <svg className="h-5 w-5 text-center">
              <use href="/icons.svg#ic-close" />
            </svg>
            : 
            <svg className="h-5 w-5 text-center">
              <use href="/icons.svg#ic-menu" />
            </svg>
            }
        </button>      
      </div>
      <div className={`fixed inset-0 transition duration-300 ${openMenu ? 'backdrop-blur-md' : 'hidden'}`}/>
    </div>
  )
}

export default ButtonMenu
