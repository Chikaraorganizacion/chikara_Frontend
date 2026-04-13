import { useState } from 'react'
import { Link } from 'react-router-dom'

const PreInscription = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [showPopup, setShowPopup] = useState(false)

  const invalidDomains = [
    'tempmail.com', 'mailinator.com', 'yopmail.com', '10minutemail.com', 'guerrillamail.com'
  ]

  const validateEmail = (email) => {
    if (!email.trim()) return 'El correo es obligatorio'

    const emailRegex = /^\S+@\S+\.\S+$/
    if (!emailRegex.test(email)) return 'Correo no válido'

    const domain = email.split('@')[1]
    if (invalidDomains.some(invalid => domain.endsWith(invalid))) {
      return 'No se permiten correos temporales'
    }

    return ''
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationError = validateEmail(email)
    if (validationError) {
      setError(validationError)
      return
    }

    console.log('Correo registrado (simulado):', email)
    setError('')
    setShowPopup(true)
    setEmail('')
  }

  const closePopup = () => setShowPopup(false)

  return (
    <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto relative">
      <div className="grid gap-6 xl:grid-cols-[0.5fr_1fr]">
        <div className='animate-spin-slow absolute inset-0 opacity-20 sm:relative sm:opacity-100 sm:flex sm:items-center sm:justify-center'>
          <svg className='w-full h-full sm:w-auto sm:h-auto sm:inline-flex lg:inline-flex' xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)" aria-hidden="true">
            <use href={'/icons.svg#ic-koi'} />
          </svg>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="z-10 relative">
            <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3">
              {/* Input y mensaje de error */}
              <div className="w-full relative">
                <input
                  type="email"
                  id="hero-input"
                  name="hero-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`py-3 px-4 block w-full border-2 shadow-md rounded-md focus:z-10 focus:ring-red-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 ${error ? 'border-red-500' : 'border-gray-200'}`}
                  placeholder="Ingresa tu correo electrónico aquí"
                />
                {/* Reservar altura sin desplazar nada */}
                <div className="absolute left-0 top-full min-h-[20px] mt-1">
                  {error && <span className="text-red-500 text-sm font-semibold">{error}</span>}
                </div>
              </div>

              {/* Botón */}
              <button
                type="submit"
                className="w-full sm:w-auto whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-red-600 shadow-md hover:bg-red-700 hover:scale-105 transform transition duration-200 ease-in-out border border-transparent text-white font-medium rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800"
              >
                Unirse ahora
              </button>
            </div>

            <p className="mt-7 text-sm text-gray-500 dark:text-gray-400">
              *Al hacer clic en Unirse ahora, acepta nuestros
              <Link className="text-red-500 hover:underline" to="/terms/privacy"> Términos y Condiciones de Uso </Link>
              y recibir nuestras comunicaciones por correo electrónico, que puede optar por no participar en cualquier momento.
            </p>
          </div>
        </form>
      </div>

      {/* Popup de confirmación */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-900 dark:text-gray-200 p-6 rounded-lg shadow-lg text-center space-y-4 animate-fade-in-scale">
            <svg
              className="w-16 h-16 text-green-500 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              aria-hidden="true"
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>

            <h2 className="text-xl font-semibold text-red-700 dark:text-red-400">¡Registro exitoso!</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Te has registrado exitosamente. Recibirás información sobre nuestras próximas actividades.
            </p>
            <button
              onClick={closePopup}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default PreInscription
