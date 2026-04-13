import { useLocation, Outlet, NavLink } from 'react-router-dom';
import { useState } from 'react';
import bgTerms from '../../assets/background/bg-terms.webp'; // Asegúrate de que esta ruta es correcta

const TermsLayout = () => {
  const [version, setVersion] = useState('01/08/2025');
  const location = useLocation();

  const navItems = [
    { path: 'privacy', label: 'Política de privacidad' },
    { path: 'service', label: 'Términos de servicio' },
    { path: 'account', label: 'Política de cuentas' },
    { path: 'restrict', label: 'Política de restricciones' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-900 transition-colors duration-300">

      {/* Imagen de fondo decorativa */}
{/* Imagen de fondo decorativa con overlay y desenfoque */}
<div className="relative w-full h-40 overflow-hidden">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${bgTerms})` }}
  ></div>

  {/* Overlay oscura y desenfoque */}
  <div className="absolute inset-0 bg-black/10 backdrop-blur-sm "></div>
</div>

      {/* Contenido principal */}
      <div className="max-w-5xl mx-auto px-6 pt-12 pb-12">
        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mt-12 mb-12">
          Términos y Políticas
        </h1>

        {/* Navegación */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-4 py-2 rounded-xl font-semibold transition-colors duration-300 
                ${
                  isActive
                    ? 'bg-red-600 text-white'
                    : 'text-black dark:text-slate-200 hover:text-red-700'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Línea divisoria */}
        <div className="border-b border-black dark:border-white mb-6"></div>

        {/* Selector de versión */}
        <div className="flex justify-end mb-8">
          <select
            value={version}
            onChange={(e) => setVersion(e.target.value)}
            className="px-3 py-2 border rounded dark:bg-slate-800 dark:text-white"
          >
            <option value="01/08/2025">Versión 01/08/2025</option>
          </select>
        </div>

        {/* Contenido de subpáginas */}
        <Outlet context={{ version }} />
      </div>
    </div>
  );
};

export default TermsLayout;
