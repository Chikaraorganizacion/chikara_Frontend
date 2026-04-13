import React from 'react';
import bgDonations from '../../assets/background/bg-donations.webp'

const Donations = () => {
  return (
    <>
      {/* Sección Principal de Donaciones */}
      <section
        className="px-4 py-16 bg-cover bg-center bg-no-repeat rounded"
        style={{backgroundImage: `url(${bgDonations})`}}
      >
        <div className="max-w-4xl mx-auto bg-white/50 dark:bg-gray-900/50 p-8 rounded-2xl shadow-lg backdrop-blur-sm text-center">

          {/* Texto de impacto */}
          <p className="text-gray-800 dark:text-gray-200 mb-6 text-lg">
            Cada donación aporta directamente a nuestros proyectos y permite que crezcamos juntos.
          </p>

          {/* Barra de progreso */}
          <div className="mb-8 w-full max-w-lg mx-auto">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
              <div
                className="h-4 bg-red-600 transition-all duration-500 ease-in-out"
                style={{ width: '5%' }} // Aquí puedes actualizar el valor dinámico si decides conectarlo a Ko-fi.
              ></div>
            </div>
            <p className="mt-2 text-gray-700 dark:text-gray-300">5% de nuestro objetivo alcanzado</p>
          </div>

          {/* Botones de donación */}
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://ko-fi.com/chikaraoficial/?amount=1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-2xl transition-transform hover:scale-105"
            >
              Donar Ahora
            </a>
            <a
              href="https://ko-fi.com/chikaraoficial/?amount=30&subscription=true"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold py-3 px-6 rounded-2xl transition-transform hover:scale-105"
            >
               Donación Mensual
            </a>
          </div>

          {/* Nota de transparencia */}
          <footer className="mt-12 text-gray-600 dark:text-gray-400 text-sm">
            *Todas las donaciones son transparentes y se destinan directamente a nuestros proyectos.
          </footer>
        </div>
      </section>
    </>
  );
};

export default Donations;
