import Group from '../components/createGroup'
import IconFooter from '../components/createSocialIconFooter'
import { socialIcons } from '../components/data'
import logos from '../assets/logos/logos'

const FooterContent = () => {
  return (
    <div id='footer' className="text-center">
      <div>
        <a className="flex-none text-xl font-semibold text-black dark:text-white" href="https://chikaraoficial.org" aria-label="Marca">
          <div className='flex items-center justify-center'>
            <img loading="lazy" src={logos.mainLogo} alt="Logo Chikara" className='h-10 bg-white rounded-full'/>
            <img loading="lazy" src={logos.chikaraName} alt="Logo con nombre chikara" className='h-10'/>
          </div>
        </a>
      </div>
      <div className="mt-3">
        <p className="text-gray-500">Desarrollado por <a className="font-semibold text-red-600 hover:text-red-700" href="https://douso.com.co/" target="_blank">Douso</a> SAS</p>
        <p className="text-gray-500">© ChirakaOficial. 2023. Todos los derechos reservados.</p>
      </div>
      <nav>
        <ul className="mt-3 space-x-2 flex flex-wrap gap-2 justify-center">
          <Group data={socialIcons} Component={IconFooter} />
        </ul>
      </nav>
    </div>
  )
}

export default FooterContent

/*
Función: Componente con el contenido del footer.

El <div> id=footer contiene:
1. Primer <div> contiene imagenes del logo principal y del nombre del logo.
2. Segundo <div> contiene texto informativo del footer.
3. <Nav> invoca el componete <Group> con componente base <IconFooter>, que muestra iconos sociales.
*/
