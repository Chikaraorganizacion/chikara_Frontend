import { lazy, Suspense } from 'react';

import Events from '../Common/Events';
import Group from '../Common/Group';
import Sponsor from '../Common/Sponsor';
import TeamTabs from '../Common/TeamTabs';
import InfoCard from '../Common/InfoCard';
import TitleSection from '../Common/TitleSection';
import IconSection from '../Common/SocialIconSection';
import MessageButton from '../Common/MessageButton';
import ErrorBoundary from '../Common/ErrorBoundary';
import BannerParallax from '../Header/BannerParallax';
import {
  infos,
  founders,
  collaborators,
  members,
  sponsors,
  contact
} from '../../data/infoData';

// Lazy load de componentes pesados
const YoutubeContent = lazy(() => import('../Youtube/YoutubeContent'));
const TwitchContent = lazy(() => import('../Twitch/TwitchContent'));
const PreInscription = lazy(() => import('../Inscription/PreInscription'));
const Donations = lazy(() => import('../Inscription/Donations'));
const KofiWidget = lazy(() => import('../Inscription/KofiWidget'));
const Testimonials = lazy(() => import('../../hooks/useTestimonials'));
const FAQ = lazy(() => import('../../hooks/useFAQ'));

const MainContent = ({ eventsRef, preinscriptionRef, donationsRef, contactusRef }) => {
  const sections = [
    {
      id: 'nosotrosSection',
      title: 'Esto es Chikara 力',
      subtitle: 'Conoce un poco sobre nosotros',
      content: (
        <div className="grid grid-cols-1 gap-4 px-2 sm:px-10 xl:grid-cols-3">
          <Group data={infos} Component={InfoCard} />
        </div>
      ),
    },
    {
      id: 'youtubeSection',
      title: 'Nuestro canal de YouTube',
      subtitle: 'Cursos, podcast, noticias, novedades',
      content: (
        <ErrorBoundary>
          <Suspense fallback={<div>Cargando YouTube...</div>}>
            <YoutubeContent />
          </Suspense>
        </ErrorBoundary>
      ),
    },
    /*{
      id: 'twitchSection',
      title: 'Nuestro canal de Twitch',
      subtitle: 'Streaming, podcast, videojuegos, reacciones',
      content: (
        <ErrorBoundary>
          <Suspense fallback={<div>Cargando Twitch...</div>}>
            <TwitchContent />
          </Suspense>
        </ErrorBoundary>
      ),
    },*/
    {
      id: 'testimonialsSection',
      title: 'Nuestros participantes dicen...',
      subtitle: 'Comentarios, sugerencias, y más',
      content: (
        <ErrorBoundary>
          <Suspense fallback={<div>Cargando Testimonios...</div>}>
            <Testimonials />
          </Suspense>
        </ErrorBoundary>
      ),
    },
    {
      id: 'eventosSection',
      ref: eventsRef,
      title: 'Nuestros eventos',
      subtitle: 'Consulta aquí nuestras próximas actividades',
      content: (
        <>
          <Events />
          <MessageButton
            message={'¿Fuiste a nuestros eventos?'}
            textButton={'Registra tu asistencia'}
            link="/asistencia"
          />
        </>
      ),
    },
    {
      id: 'faqSection',
      title: 'FAQ',
      subtitle: 'Preguntas Más Frecuentes',
      content: (
        <ErrorBoundary>
          <Suspense fallback={<div>Cargando FAQ...</div>}>
            <FAQ />
          </Suspense>
        </ErrorBoundary>
      ),
    },
    {
      id: 'sponsorSection',
      title: 'Auspiciadores',
      subtitle: 'Nuestros Patrocinadores',
      content: (
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-2 lg:justify-center">
          <Group data={sponsors} Component={Sponsor} />
        </ul>
      ),
    },
    {
      id: 'membersSection',
      title: 'Nuestro equipo',
      subtitle: 'Personas que hacen posible este proyecto',
      content: (
        <>
          <TeamTabs
            founders={founders}
            collaborators={collaborators}
            members={members}
          />
          <MessageButton
            message={'¿Quieres unirte a nuestro equipo?'}
            textButton={'Contáctanos'}
            link="https://wa.me/573236978266?text=Hola%20me%20gustar%C3%ADa%20unirme%20al%20equipo%20de%20Chikara%20y%20contribuir%20a%20la%20organizaci%C3%B3n."
          />
        </>
      ),
    },
    {
      id: 'preinscriptionSection',
      ref: preinscriptionRef,
      title: 'Pre-inscríbete',
      subtitle: '¡Estás a solo un clic de ingresar a nuestros cursos!',
      content: (
        <Suspense fallback={<div>Cargando registro...</div>}>
          <PreInscription />
        </Suspense>
      ),
    },
    {
      id: 'donationsSection',
      ref: donationsRef,
      title: 'Donaciones',
      subtitle:
        'Apóyanos para que cada día podamos ser mejores gracias a tu ayuda c:',
      content: (
        <ErrorBoundary>
          <Suspense fallback={<div>Cargando Donaciones...</div>}>
            <KofiWidget />
            <Donations />
          </Suspense>
        </ErrorBoundary>
      ),
    },
    {
      id: 'contactusSection',
      ref: contactusRef,
      title: 'Contáctanos',
      subtitle: '¿Tienes dudas, sugerencias o inquietudes?',
      content: (
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-2 lg:justify-center">
          <Group data={contact} Component={IconSection} />
        </ul>
      ),
    }
  ];

  return (
    <>
     {/* Sección Banner */}
     <BannerParallax />
      <div
        id="main"
        className="px-6 xl:px-12 xl:max-w-screen-2xl xl:mx-auto dark:bg-slate-900 transition-colors duration-300"
      >

        {/* Renderizado dinámico de las secciones */}
        {sections.map(({ id, ref, title, subtitle, content, bg }) => (
          <section key={id} id={id} ref={ref} className="py-6 lg:py-10">
            <div
              className={`grid grid-cols-1 px-4 sm:px-10 bg-gray-100 dark:bg-gray-800 rounded-2xl transition-colors duration-300`}
            >
              <TitleSection title={title} subtitle={subtitle} />
              <div className="my-10 xl:mt-12">{content}</div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default MainContent;
