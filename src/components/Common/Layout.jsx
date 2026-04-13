import HeaderContent from '../Header/HeaderContent';
import FooterContent from '../Footer/FooterContent';
import { Outlet } from 'react-router-dom';

const Layout = ({
  eventsRef,
  preinscriptionRef,
  donationsRef,
  contactusRef,
}) => {
  return (
    <div className="min-h-screen flex flex-col scroll-smooth bg-gray-100 dark:bg-slate-800 transition-colors duration-300">
      {/* Header fijo */}
      <HeaderContent
        eventsRef={eventsRef}
        preinscriptionRef={preinscriptionRef}
        donationsRef={donationsRef}
        contactusRef={contactusRef}
      />

      {/* Contenido principal dinámico */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer con íconos, créditos y enlaces legales */}
      <FooterContent />
    </div>
  );
};

export default Layout;
