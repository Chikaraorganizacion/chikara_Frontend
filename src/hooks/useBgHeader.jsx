import { useEffect, useState } from 'react'

const BgHeader = ({ headerRef }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (!headerRef.current) return;

    // Cambio de altura
    if (window.innerWidth >= 1024) {
      headerRef.current.classList.toggle('h-20', isScrolled)
      headerRef.current.classList.toggle('h-40', !isScrolled)
    }

    // Cambio de sombra
    headerRef.current.classList.toggle('shadow-sm', isScrolled)
    headerRef.current.classList.toggle('shadow-gray-800', isScrolled)

    // Cambio de color de fondo
    if (isScrolled) {
      if (window.innerWidth >= 1024) {
        headerRef.current.style.backgroundColor = 'rgba(0, 0, 0, 1)'
      } else {
        headerRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'
      }
    } else {
      headerRef.current.style.backgroundColor = 'transparent'
    }

  }, [isScrolled, headerRef])

  return null
}

export default BgHeader
