import { useNavigate } from 'react-router-dom';
import logos from '../../data/logos';

const BannerContent = () => {
  const navigate = useNavigate();

  return (
    <div id='banner' className='grid grid-cols-1 gap-16 pt-8 sm:pt-12 lg:pt-16 animate-fade-in'>

      {/* Imagen con nombre de Chikara */}
      <div className='lg:w-2/3 animate-fade-in'>
        <img loading="lazy" src={logos.chikaraNameDark} alt="Logo con nombre chikara" />
      </div>

      {/* Frase */}
      <div className='lg:w-2/3 p-4 sm:p-6 lg:p-8 animate-fade-in-up'>
        <p className='font-bold text-left text-4xl text-black sm:text-6xl'>
          Hasta el viaje más largo comienza con un solo paso.
        </p>
      </div>

      {/* Botón de inscripción */}
      <div className='flex justify-center animate-fade-in'>
        <button
          onClick={() => navigate('/unirse')}
          className="px-6 py-4 text-white text-2xl sm:text-4xl font-bold bg-gradient-to-r from-pink-500 to-red-500 rounded-full shadow-lg transition duration-300 ease-in-out hover:scale-95 hover:shadow-2xl active:scale-90 active:shadow-inner focus:outline-none focus:ring-4 focus:ring-pink-300"
        >
          Únete ahora
        </button>
      </div>
    </div>
  );
};

export default BannerContent;


/*
Función: Componente con el contenido del banner dentro del header.

El <div> id=banner contiene:
1. Primer <div> contiene imagen del logo principal (Se muestra solo en responsive)
2. Segundo <div> contiene imagen del nombre del logo.
3. Tercer <div> contiene el slogan.
4. Cuarto <div> contiene bóton de subscripción para mostrar formulario.
 NOTA: El 13/03/2024 se modifica href boton de [ href="#preinscriptionSection" ] a [ href="https://forms.gle/dowCq25X1GKYxX6B8"]
*/