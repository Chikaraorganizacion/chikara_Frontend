import { useState, useEffect } from 'react'

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDarkMode(isDarkMode)
  }, [])

  const handleToggle = () => {
    setDarkMode(!darkMode)
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <button onClick={handleToggle} title='Botón para cambiar entre modos oscuro y claro de la página' >
      {darkMode ? 
      <svg className="w-14 h-14 flex p-2 text-blue-400 bg-gray-900 hover:bg-gray-500 rounded-full" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true">
        <use href={'/icons.svg#ic-sun'} />
      </svg>: 
      <svg className="w-14 h-14 flex p-2 text-yellow-500 bg-white border-2 hover:bg-gray-100 rounded-full" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true">
        <use href={'/icons.svg#ic-moon'} />
      </svg>
      }
    </button>
  )
}

export default DarkModeButton


