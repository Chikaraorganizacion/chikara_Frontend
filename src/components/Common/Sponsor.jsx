import { useEffect, useState } from 'react';
import logosSponsors from '../../data/logosSponsors';

const Sponsor = ({ name, url, logo }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const updateDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    // Detecta inmediatamente
    updateDarkMode();

    // Observa si cambia la clase 'dark'
    const observer = new MutationObserver(updateDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  // Calcula la clave de logo para usar según el modo
  const darkKey = `${logo}Dark`;
  const logoKey = isDarkMode && logosSponsors[darkKey] ? darkKey : logo;

  return (
    <li className="flex justify-center items-center p-6 mb-6 border border-gray-100 hover:border-gray-400 hover:bg-gradient-to-t from-red-100 to-gray-100 flex-1 shadow-xl duration-300 transition-colors rounded-md dark:border-none dark:bg-gray-900 dark:hover:bg-gradient-to-t dark:from-red-900 dark:to-red-600 dark:shadow-lg dark:shadow-black">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center w-full h-full"
        aria-label={`Conoce más sobre Japón en ${name}`}
      >
        <img
          className="h-max-24 hover:-translate-y-1 hover:scale-90 transition-all duration-300"
          loading="lazy"
          src={logosSponsors[logoKey]}
          alt={`Logo de "${name}"`}
        />
      </a>
    </li>
  );
};

export default Sponsor;
