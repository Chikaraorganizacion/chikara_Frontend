import { useNavigate } from 'react-router-dom';

const MessageButton = ({ message, textButton, link }) => {
  const navigate = useNavigate();

  // Detectar si es un enlace externo
  const isExternal = /^https?:\/\//.test(link);

  const handleClick = (e) => {
    if (!isExternal) {
      e.preventDefault(); // Evita navegación por <a>
      navigate(link);     // Navega internamente
    }
  };

  return (
    <div className="w-full px-4 mt-6 flex justify-center">
      <div className="w-full max-w-[90%] sm:max-w-xl p-4 rounded-2xl md:rounded-full shadow-xl dark:shadow-xl dark:shadow-black bg-white dark:bg-gray-900 transition-all duration-300">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 px-4 md:px-8">
          <span className="text-gray-800 dark:text-white text-lg text-center md:text-left leading-relaxed">
            {message}
          </span>

          <a
            href={link}
            onClick={handleClick}
            {...(isExternal && {
              target: '_blank',
              rel: 'noopener noreferrer',
            })}
            aria-label={`Ir a: ${textButton}`}
            className="group inline-flex items-center justify-center gap-x-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-base font-semibold rounded-xl md:rounded-full py-2 px-6 md:px-5 transition-transform duration-300 hover:scale-95 hover:shadow-lg active:scale-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-800"
          >
            {textButton}
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 md:group-hover:translate-x-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <use href="/icons.svg#ic-arrowr" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MessageButton;
