import { useState, useEffect } from 'react'

const DarkModeButton = () => {
  // Leer la preferencia desde localStorage o detectar el sistema operativo
  const getInitialTheme = () => {
    const almacenarPreferencia = localStorage.getItem('theme')
    if (almacenarPreferencia) {
      return almacenarPreferencia === 'dark'
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  const [darkMode, setDarkMode] = useState(getInitialTheme)

  // Aplicar la clase dark al cargar la página y cuando cambie el estado
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  const handleToggle = () => {
    setDarkMode(!darkMode)
  }

  return (
    <button
      onClick={handleToggle}
      title='Botón para cambiar entre modos oscuro y claro de la página'
      aria-label='Cambiar entre modo oscuro y claro'
    >
      {darkMode ? (
        <svg className="w-14 h-14 flex p-2 text-yellow-500 bg-white border-2 hover:bg-gray-100 rounded-full" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true">
          <use href={'/icons.svg#ic-sun'} />
        </svg>
      ) : (
        <svg className="w-14 h-14 flex p-2 text-blue-400 bg-gray-900 hover:bg-gray-500 rounded-full" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true">
          <use href={'/icons.svg#ic-moon'} />
        </svg>
      )}
    </button>
  )
}

export default DarkModeButton



