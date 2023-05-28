import { useEffect } from 'react'

const BgNavBar = ({ headerRef }) => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 1024) {
        if (window.scrollY > 50) {
          headerRef.current.classList.add('bg-black')
          headerRef.current.classList.remove('bg-transparent')
          headerRef.current.classList.add('h-24')
          headerRef.current.classList.remove('h-64')
          headerRef.current.classList.add('shadow-sm')
          headerRef.current.classList.add('shadow-gray-300')

        } else {
          headerRef.current.classList.add('bg-transparent')
          headerRef.current.classList.remove('bg-black')
          headerRef.current.classList.add('h-64')
          headerRef.current.classList.remove('h-24')
          headerRef.current.classList.remove('shadow-sm')
          headerRef.current.classList.remove('shadow-gray-300')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [headerRef])

  return null
}

export default BgNavBar

/*

*/