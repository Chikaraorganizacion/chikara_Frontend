import { useState} from 'react'
import NavBarContent from '../components/navBarContent'

const NavBarButton = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <div>
      <NavBarContent openMenu={setOpenMenu}></NavBarContent>
      <div className='flex items-center lg:pl-5 gap-5 relative z-10'>
        <button class="flex items-center justify-center ml-auto mr-0 w-14 h-14 text-xl bg-red-600 text-white rounded-full lg:hidden" onClick= {() => setOpenMenu(!openMenu)}>            
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

export default NavBarButton
