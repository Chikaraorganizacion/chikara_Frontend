import Group from '../components/createGroup'
import IconHeader from '../components/createSocialIconHeader'
import { socialIcons } from '../components/data'

import UnderConstruction from '../hooks/underConstruction'
import DarkModeButton from '../hooks/createDarkModeButton'
import InscriptionForm from '../hooks/createInscriptionForm'

const NavBarContent = () => {
  return (
    <div id='navbar' className="bg-white shadow-md rounded border border-gray-100 p-4 w-40 absolute right-0 bottom-0 lg:static lg:w-full max-h-16 lg:flex lg:items-center lg:bg-transparent lg:justify-between lg:border-0 lg:shadow-none lg:p-0 lg:mb-0 lg:transform-none lg:opacity-100 lg:visible lg:scale-100 hidden">
      <ul className="text-xl font-bold text-gray-900 lg:flex lg:items-center lg:mb-0 lg:gap-8 lg:flex-1 lg:justify-center">
        <li>
          <a className="flex py-2 hover:bg-indigo-50 hover:text-red-600 rounded-full lg:text-3xl lg:text-white lg:rounded-none lg:py-8 lg:px-0 lg:hover:bg-transparent" href="https://chikaraoficial.org/">Inicio</a>
        </li>
        <li>
          <UnderConstruction name='Enteraté'></UnderConstruction>
        </li>
        <li>
          <InscriptionForm></InscriptionForm>
        </li>
        <li>
          <a className="flex py-2 hover:bg-indigo-50 hover:text-red-600 rounded-full lg:text-3xl lg:text-white  lg:rounded-none lg:py-8 lg:px-0 lg:hover:bg-transparent" href="https://chikaraoficial.org/donaciones/">Donaciones</a>
        </li>
      </ul>
      <nav className="text-red-600 text-2xl">
        <ul className="lg:flex lg:flex-wrap lg:gap-2 lg:justify-center">
          <Group data={socialIcons} Component={IconHeader} />
        </ul>         
      </nav>
      <div className='flex items-center pl-5 gap-5 relative z-10 before:w-px before:h-10 before:bg-gray-300 dark:before:bg-white'>
        <DarkModeButton></DarkModeButton>
      </div>
    </div>
  )
}

export default NavBarContent
