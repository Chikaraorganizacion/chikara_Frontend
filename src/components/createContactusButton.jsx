const ContactUs = (props) => {
  const {message, textButton} = props

  return (
    <div className="border border-red-400 p-1.5 pl-5 rounded-full shadow-xl">
      <div className="text-base flex items-center gap-x-3">
        <span className="text-gray-500">{message}</span>
        <a className="inline-flex justify-center items-center gap-x-2 text-center bg-white border hover:border-black text-sm text-red-600 hover:text-red-700 font-medium hover:shadow-sm rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4" href="https://www.facebook.com/ChikaraOficial/" target="_blank">
          {textButton}
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true">
            <use href={'/icons.svg#ic-arrowr'} />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default ContactUs

/*
Función: Componente encargado de crear boton de contacto(Contact Us).

Props:
  message: String del mensaje principal.
  textButton: String dentro del bóton.
*/