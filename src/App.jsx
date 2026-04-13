import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Common/Layout';
import ScrollToTop from './components/Common/ScrollToTop';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';

// Términos y Políticas
import TermsLayout from './pages/terms/TermsLayout';
import PrivacyPolicy from './pages/terms/PrivacyPolicy';
import ServiceTerms from './pages/terms/ServiceTerms';
import AccountPolicy from './pages/terms/AccountPolicy';
import RestrictionPolicy from './pages/terms/RestrictionPolicy';

// Formulario de inscripción
import JoinForm from './pages/forms/JoinForm';
import AttendanceForm from './pages/forms/AttendanceForm';


function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* Ruta principal */}
        <Route index element={<HomePage />} />

        {/* Rutas protegidas por Layout */}
        <Route path="/" element={<Layout />}>

          {/* Página de formulario de inscripción */}
          <Route path="unirse" element={<JoinForm />} />
          <Route path="asistencia" element={<AttendanceForm />} />

          {/* Página de términos y sus subrutas */}
          <Route path="terms" element={<TermsLayout />}>
            <Route index element={<Navigate to="privacy" replace />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="service" element={<ServiceTerms />} />
            <Route path="account" element={<AccountPolicy />} />
            <Route path="restrict" element={<RestrictionPolicy />} />
          </Route>

          {/* Página de error 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
