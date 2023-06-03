const PreInscription = () => {
  return (
    <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto relative">
      <div className="grid gap-6 xl:grid-cols-[0.5fr_1fr]">
        <div className='animate-spin-slow absolute inset-0 opacity-20 sm:relative sm:opacity-100 sm:flex sm:items-center sm:justify-center'>
          <svg className='w-full h-full sm:w-auto sm:h-auto sm:inline-flex lg:inline-flex' xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)" aria-hidden="true">
            <use href={'/icons.svg#ic-koi'} />
          </svg >
        </div>

        <form>
          <div className="z-10 relative">
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
              <div className="w-full">
                <input type="email" id="hero-input" name="hero-input" className="py-3 px-4 block w-full border-2 border-gray-200 shadow-md rounded-md focus:z-10 focus:border-red-500 focus:ring-red-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Ingresa tu correo electrónico aquí" required />
              </div>
              <button type="submit" className="w-full sm:w-auto whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-red-600 shadow-md hover:bg-red-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800">
              Unirse ahora
              </button>
            </div>
            <p className="mt-3 text-sm text-gray-500">
              *Al hacer clic en Unirse ahora, acepta nuestros
              <a className="text-red-500" href="/"> Términos de uso</a>, 
              <a className="text-red-500" href="/"> Política de privacidad </a>
              y recibir nuestras comunicaciones por correo electrónico, que puede optar por no participar en cualquier momento.
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PreInscription