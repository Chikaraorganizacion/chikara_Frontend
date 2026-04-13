import { Link } from 'react-router-dom';
import Group from '../Common/Group';
import IconFooter from './SocialIconFooter';
import { socialIcons } from '../../data/infoData';
import logos from '../../data/logos';

const FooterContent = () => {
  return (
    <div id='footer' className="text-center mt-auto w-full py-10 px-4 bg-black bg:cover">
      <div>
        <a className="flex-none text-xl font-semibold text-black dark:text-white" href="https://chikaraoficial.org" aria-label="Marca">
          <div className='flex items-center justify-center'>
            <img loading="lazy" src={logos.mainLogo} alt="Logo Chikara" className='h-10 bg-white rounded-full' />
            <img loading="lazy" src={logos.chikaraName} alt="Logo con nombre chikara" className='h-10' />
          </div>
        </a>
      </div>

      <div className="mt-3">
        <p className="text-gray-500">Desarrollado por <a className="font-semibold text-red-600 hover:text-red-700" href="https://douso.com.co/" target="_blank" rel="noopener noreferrer" aria-label="Douso">Douso</a> SAS</p>
        <p className="text-gray-500">© ChikaraOficial. 2025. Todos los derechos reservados.</p>

        {/* Enlaces legales discretos */}
        <div className="mt-2 flex flex-wrap justify-center space-x-4 text-xs text-gray-500">
          <Link to="/terms/privacy" className="hover:text-white transition-colors">
            Política de privacidad
          </Link>
          <span>|</span>
          <Link to="/terms/service" className="hover:text-white transition-colors">
            Términos de servicio
          </Link>
        </div>
      </div>

      <nav>
        <ul className="mt-3 space-x-2 flex flex-wrap gap-2 justify-center">
          <Group data={socialIcons} Component={IconFooter} />
        </ul>
      </nav>
    </div>
  )
}

export default FooterContent;
