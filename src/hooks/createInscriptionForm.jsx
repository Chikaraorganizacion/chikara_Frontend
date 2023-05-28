import { useState, useEffect } from 'react'

const InscriptionForm = () => {
  const [openModal, setOpenModal] = useState(true)

  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [pais, setPais] = useState('')
  const [indicativo, setIndicativo] = useState('')
  const [telefono, setTelefono] = useState('')
  const [correo, setCorreo] = useState('')
  const [error, setError] = useState('')
  const [exito, setExito] = useState('')
  
  const paises = [
    'Argentina',
    'Bolivia',
    'Canadá',
    'Chile',
    'Colombia',
    'Costa Rica',
    'Cuba',
    'Ecuador',
    'El Salvador',
    'España',
    'Estados Unidos',
    'Guatemala',
    'Honduras',
    'México',
    'Nicaragua',
    'Panamá',
    'Paraguay',
    'Perú',
    'Puerto Rico',
    'República Dominicana',
    'Uruguay',
    'Venezuela',
  ]

  const codigosTelefonicos = {
    'Argentina': '+54',
    'Bolivia': '+591',
    'Canadá': '+1',
    'Chile': '+56',
    'Colombia': '+57',
    'Costa Rica': '+506',
    'Cuba': '+53',
    'Ecuador': '+593',
    'El Salvador': '+503',
    'España': '+34',
    'Estados Unidos': '+1',
    'Guatemala': '+502',
    'Honduras': '+504',
    'México': '+52',
    'Nicaragua': '+505',
    'Panamá': '+507',
    'Paraguay': '+595',
    'Perú': '+51',
    'Puerto Rico': '+1',
    'República Dominicana': '+1',
    'Uruguay': '+598',
    'Venezuela': '+58'
  }

  useEffect(() => {
    if (pais) {
      setIndicativo(codigosTelefonicos[pais])
    }
}, [pais])

  const validarCaracteresRepetidos = (cadena) => {
    let caracteresRepetidos = false
    for (let i = 0; i < cadena.length - 2; i++) {
      if (cadena[i] === cadena[i + 1] && cadena[i + 1] === cadena[i + 2]) {
        caracteresRepetidos = true
        break
      }
    }
    return caracteresRepetidos
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!nombre || !apellido || !pais || !telefono || !correo) {
      setError('Debes completar todos los campos')
      setExito('')
    } else if (!/^[a-zA-Z\s]+$/.test(nombre) || nombre.length < 3) {
      setError('El nombre debe contener solo letras y tener al menos 3 caracteres')
      setExito('')
    } else if (!/^[a-zA-Z\s]+$/.test(apellido) || apellido.length < 3) {
      setError('El apellido debe contener solo letras y tener al menos 3 caracteres')
      setExito('')
    } else if (!/^[0-9]+$/.test(telefono) || telefono.length < 6) {
      setError('El teléfono debe contener solo números y tener al menos 6 dígitos')
      setExito('')
    } else if (!correo.includes('@')) {
      setError('El correo electrónico debe contener el carácter "@"')
      setExito('')
    } else if (validarCaracteresRepetidos(nombre)) {
      setError('El nombre no debe contener más de 3 caracteres iguales consecutivos')
      setExito('')
    } else if (validarCaracteresRepetidos(apellido)) {
      setError('El apellido no debe contener más de 3 caracteres iguales consecutivos')
      setExito('')
    } else {
      setError('')
      setExito('Tu inscripción se envió correctamente')
      // Aquí puedes manejar el envío del formulario
    }
}

  return (
    <div className="">
      <button
        className="flex py-2 hover:bg-indigo-50 hover:text-red-600 rounded-full lg:text-3xl lg:text-white  lg:rounded-none lg:py-8 lg:px-0 lg:hover:bg-transparent"
        onClick={() => setOpenModal(!openModal)}
      >Inscripción</button>
      {!openModal && (

        <div className={`relative z-20 lg:left-20 lg:top-80 flex items-center justify-center lg:w-full lg:h-full bg-gray-100 shadow-md shadow-gray-900 rounded border-2 border-red-500 py-6 px-4 opacity-100 scale-100 ${openModal ? 'filter blur-sm' : ''}`}>
          <div>
            <div>
              <form onSubmit={handleSubmit} className="p-8 bg-white rounded-lg">           
                <div className={`mb-4 ${error && error.includes('nombre') ? 'border border-red-500' : ''}`}>
                  <label htmlFor="nombre" className="block text-gray-700 font-semibold mb-2">Nombre:</label>
                  <input type="text" id="nombre" name="nombre" value={nombre} onChange={e => setNombre(e.target.value)} className={`w-full border border-gray-300 rounded-lg py-2 px-4 ${error && error.includes('nombre') ? 'border border-red-500' : ''}`} />
                </div>
                <div className={`mb-4 ${error && error.includes('apellido') ? 'border border-red-500' : ''}`}>
                  <label htmlFor="apellido" className="block text-gray-700 font-semibold mb-2">Apellido:</label>
                  <input type="text" id="apellido" name="apellido" value={apellido} onChange={e => setApellido(e.target.value)} className={`w-full border border-gray-300 rounded-lg py-2 px-4 ${error && error.includes('apellido') ? 'border border-red-500' : ''}`}/>
                </div>
                <div className={`mb-4 ${error && error.includes('País') ? 'border border-red-500' : ''}`}>
                  <label htmlFor="pais" className="block text-gray-700 font-semibold mb-2">País:</label>
                  <select id="pais" name="pais" value={pais} onChange={e => setPais(e.target.value)} className={`w-full border border-gray-300 rounded-lg py-2 px-4 ${error && error.includes('País') ? 'border border-red-500' : ''}`}>
                    {paises.map(pais => (
                      <option key={pais} value={pais}>{pais}</option>
                    ))}
                  </select>
                </div>
                <div className={`mb-4 flex ${error && error.includes('teléfono') ? 'border border-red-500' : ''}`}>
                  <div className="w-1/3 mr-2">
                    <label htmlFor="indicativo" className="block text-gray-700 font-semibold mb-2">Indicativo:</label>
                    <input type="text" id="indicativo" name="indicativo" value={indicativo} readOnly className="w-full border border-gray-300 rounded-lg py-2 px-4"/>
                  </div>
                  <div className="w-2/3">
                    <label htmlFor="telefono" className="block text-gray-700 font-semibold mb-2">Teléfono:</label>
                    <input type="text" id="telefono" name="telefono" value={telefono} onChange={e => setTelefono(e.target.value)} className={`w-full border border-gray-300 rounded-lg py-2 px-4 ${error && error.includes('teléfono') ? 'border border-red-500' : ''}`}/>
                  </div>
                </div>
                <div className={`mb-6 ${error && error.includes('correo electrónico') ? 'border border-red-500' : ''}`}>
                  <label htmlFor="correo" className="block text-gray-700 font-semibold mb-2">Correo electrónico:</label>
                  <input type="email" id="correo" name="correo" value={correo} onChange={e => setCorreo(e.target.value)} className="w-full border border-gray-300 rounded-lg py-2 px-4"/>
                </div>
                
                {error && (
                  <div className="mb-4 text-center text-white bg-red-500 rounded-lg py-2">{error}</div>
                )}

                {exito && (
                  <div className="mb-4 text-center text-white bg-green-500 rounded-lg py-2">{exito}</div>
                )}

                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">Enviar</button>
              </form>
            </div>
          </div>
          <div className='fixed z-40 right-2 top-2 lg:right-4 lg:top-4 w-14 h-14 flex items-center justify-center bg-red-600 text-white rounded-full'>
            <button onClick={() => setOpenModal(!openModal)}>
              <svg className="h-5 w-5 text-center">
                <use href="/icons.svg#ic-close" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <div className={`fixed inset-0 transition duration-300 ${!openModal ? 'backdrop-blur-md' : 'hidden'}`}/>
    </div>    
  )
}

export default InscriptionForm
