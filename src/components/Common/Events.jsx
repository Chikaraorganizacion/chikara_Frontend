import { useState, useEffect } from 'react';

const Events = () => {
  const [loading, setLoading] = useState(true);
  const [timeoutReached, setTimeoutReached] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loading) {
        setTimeoutReached(true);
      }
    }, 10000); // 10 segundos

    return () => clearTimeout(timer);
  }, [loading]);

  const handleIframeLoad = () => {
    setLoading(false);
    setTimeoutReached(false);
  }

  const handleRetry = () => {
    setLoading(true);
    setTimeoutReached(false);
    setIframeKey((prev) => prev + 1);
  }

  return (
    <div className="w-full flex justify-center px-4">
      <div className="w-full max-w-6xl min-h-[600px] p-1 rounded-3xl bg-gradient-to-r from-pink-500 to-purple-500 shadow-2xl dark:shadow-black transition-all duration-500 ease-in-out relative">

        {/* Loader animado con fadeIn */}
        {loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 dark:bg-gray-900/80 z-10 rounded-3xl text-center p-4 transition-all animate-fadeIn">
            {/* Spinner personalizado */}
            <div className="relative w-16 h-16 mb-4">
              <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-pink-500 animate-spin"></div>
              <div className="absolute inset-2 rounded-full border-4 border-t-transparent border-purple-500 animate-spin-reverse"></div>
            </div>

            {!timeoutReached ? (
              <>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Cargando calendario... Por favor espera.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Si la carga es lenta, verifica tu conexión a Internet.
                </p>
              </>
            ) : (
              <>
                <p className="text-gray-700 dark:text-gray-300 font-medium mb-4">
                  La carga está tardando más de lo esperado.
                </p>
                <button
                  onClick={handleRetry}
                  className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full transition-all"
                >
                  Reintentar
                </button>
              </>
            )}
          </div>
        )}

        {/* Contenedor del iframe */}
        <div className="rounded-3xl overflow-hidden bg-white dark:bg-gray-800">
          <iframe
            key={iframeKey}
            src="https://calendar.google.com/calendar/embed?src=cd2b6ae995f4dfa7a744e8b1a9fd5ccec6a355113301c991000368df25c95897%40group.calendar.google.com&ctz=America%2FBogota"
            style={{ border: 0 }}
            width="100%"
            height="600"
            title="Calendario de Eventos Chikara"
            className="transition-all duration-500 ease-in-out"
            onLoad={handleIframeLoad}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Events