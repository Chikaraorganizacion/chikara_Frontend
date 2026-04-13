import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { socialIcons } from '../../data/infoData'
import Group from '../Common/Group'
import IconHeader from './SocialIconHeader'
import { Link } from 'react-router-dom'

const DrawerMenu = ({
  isOpen,
  onClose,
  scrollToSection,
  eventsRef,
  preinscriptionRef,
  donationsRef,
  contactusRef
}) => {
  const location = useLocation()
  const navigate = useNavigate()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  }, [isOpen])

  const sectionRefs = {
    events: eventsRef,
    preinscription: preinscriptionRef,
    donations: donationsRef,
    contact: contactusRef,
    top: { current: { offsetTop: 0 } }
  }

  // ✅ Función mejorada
  const handleOrNavigate = (sectionKey) => {
    const targetRef = sectionRefs[sectionKey]

    if (isHomePage) {
      const currentQuery = new URLSearchParams(location.search).get('scrollTo')

      if (currentQuery !== sectionKey) {
        navigate(`/?scrollTo=${sectionKey}`)
      } else {
        scrollToSection(targetRef)
      }

      onClose()
    } else {
      navigate(`/?scrollTo=${sectionKey}`)
      onClose()
    }
  }

  return (
    <>
      {/* Fondo oscuro */}
      <div
        className={`fixed inset-0 z-30 flex bg-black/70 backdrop-blur-sm transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      ></div>

      {/* Menú lateral */}
      <div
        className={`fixed top-0 left-0 h-full w-64 z-40 bg-gray-100 dark:bg-slate-900 shadow-2xl transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-700">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Menú</h2>
          <button onClick={onClose} aria-label="Cerrar menú">
            <svg className="w-6 h-6 text-gray-900 dark:text-white">
              <use href="/icons.svg#ic-close" />
            </svg>
          </button>
        </div>

        {/* Navegación principal */}
        <nav className="p-4">
          <button
            onClick={() => handleOrNavigate('top')}
            className="group w-full flex items-center justify-start p-2 text-base text-black hover:text-white hover:bg-slate-900 dark:text-white dark:hover:text-black dark:hover:bg-gray-100 rounded-full transition-all duration-200"
          >
            🎌 <span className="m-0 px-2 group-hover:text-inherit transition-colors">Inicio</span>
          </button>

          <button
            onClick={() => handleOrNavigate('events')}
            className="group w-full flex items-center justify-start p-2 text-base text-black hover:text-white hover:bg-slate-900 dark:text-white dark:hover:text-black dark:hover:bg-gray-100 rounded-full transition-all duration-200"
          >
            ⛩️ <span className="m-0 px-2 group-hover:text-inherit transition-colors">Eventos</span>
          </button>

          <button
            onClick={() => handleOrNavigate('preinscription')}
            className="group w-full flex items-center justify-start p-2 text-base text-black hover:text-white hover:bg-slate-900 dark:text-white dark:hover:text-black dark:hover:bg-gray-100 rounded-full transition-all duration-200"
          >
            🙋 <span className="m-0 px-2 group-hover:text-inherit transition-colors">Inscripción</span>
          </button>

          <button
            onClick={() => handleOrNavigate('donations')}
            className="group w-full flex items-center justify-start p-2 text-base text-black hover:text-white hover:bg-slate-900 dark:text-white dark:hover:text-black dark:hover:bg-gray-100 rounded-full transition-all duration-200"
          >
            ❤️ <span className="m-0 px-2 group-hover:text-inherit transition-colors">Donaciones</span>
          </button>

          <button
            onClick={() => handleOrNavigate('contact')}
            className="group w-full flex items-center justify-start p-2 text-base text-black hover:text-white hover:bg-slate-900 dark:text-white dark:hover:text-black dark:hover:bg-gray-100 rounded-full transition-all duration-200"
          >
            ✉️ <span className="m-0 px-2 group-hover:text-inherit transition-colors">Contáctanos</span>
          </button>
        </nav>

        {/* Redes sociales */}
        <div className="p-4 border-t border-gray-300 dark:border-gray-700">
          <Group data={socialIcons} Component={IconHeader} />
        </div>

        {/* Enlaces secundarios */}
        <div className="p-4 border-t border-gray-300 dark:border-gray-700">
          <Link
            to="/terms/privacy"
            onClick={onClose}
            className="group w-full flex items-center justify-start p-2 text-base text-black hover:text-white hover:bg-slate-900 dark:text-white dark:hover:text-black dark:hover:bg-gray-100 rounded-full transition-all duration-200"
          >
            🛡️ <span className="m-0 px-2 group-hover:text-inherit transition-colors">Política de privacidad</span>
          </Link>

          <Link
            to="/terms/service"
            onClick={onClose}
            className="group w-full flex items-center justify-start p-2 text-base text-black hover:text-white hover:bg-slate-900 dark:text-white dark:hover:text-black dark:hover:bg-gray-100 rounded-full transition-all duration-200"
          >
            📜 <span className="m-0 px-2 group-hover:text-inherit transition-colors">Términos de servicio</span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default DrawerMenu
