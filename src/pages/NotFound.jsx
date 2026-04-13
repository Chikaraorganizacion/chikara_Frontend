import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-slate-900 transition-colors duration-300 px-6 text-center">
      <h1 className="text-7xl font-extrabold text-red-600 mb-4">404</h1>
      <p className="text-2xl md:text-3xl text-red-600 font-semibold mb-6">
        ¡Ups! Página no encontrada
      </p>
      <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-md">
        Parece que te perdiste en tu camino... deberías volver sobre tus pasos 🧭
      </p>
      <Link
        to="/"
        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-all duration-300 shadow dark:shadow-black"
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
