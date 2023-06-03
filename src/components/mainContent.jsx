import Donations from './createDonations'
import KofiWidget from './createKofiWidget'
import Group from '../components/createGroup'
import Sponsor from '../components/createSponsor'
import TwitchContent from './createTwitchContent'
import YoutubeContent from './createYoutubeContent'
import PreInscription from './createPreInscription'
import MemberCard from '../components/createMember'
import InfoCard from '../components/createInfoCard'
import TitleSection from '../components/createTitleSection'
import { infos, members, sponsors, contact } from '../components/data'
import IconSection from './createSocialIconSection'

import FAQ from '../hooks/createFAQ'
import Testimonials from '../hooks/createTestimonials'

const MainContent = () => {

  return (
    <div id='main' className='px-6 xl:px-12 xl:max-w-screen-2xl xl:mx-auto dark:bg-slate-900'>
      <section id="nosotrosSection" className='py-6 lg:py-12'>
        <div className='grid grid-cols-1 px-2 pt-10 sm:px-10 shadow-xl dark:bg-slate-900 dark:shadow-gray-200 dark:shadow-lg'>  
          <TitleSection
            title="Esto es Chikara 力"
            subtitle="Conoce un poco sobre nosotros"
          ></TitleSection>

          <div className='grid gap-6 my-10 xl:grid-cols-3'>
            <Group data={infos} Component={InfoCard} />
          </div>
        </div>
      </section>

      <section id="youtubeSection" className='py-6 lg:my-12'>
        <div className='grid grid-cols-1 px-2 pt-10 sm:px-10 shadow-xl dark:bg-slate-900 dark:shadow-gray-200 dark:shadow-lg'>
          <TitleSection
            title="Nuestro canal de YouTube"
            subtitle="Cursos, podcast, noticias, novedades"
          ></TitleSection>

          <div id="youtube" className='my-10'>
            <YoutubeContent />
          </div>
        </div>
      </section>

      <section id="twitchSection" className='py-6 lg:my-12'>
        <div className='grid grid-cols-1 px-2 pt-10 sm:px-10 shadow-xl dark:bg-slate-900 dark:shadow-gray-200 dark:shadow-lg'>
          <TitleSection
            title="Nuestro canal de Twitch"
            subtitle="Streaming, podcast, videojuegos, reacciones"
          ></TitleSection>

          <div id="twitch" className='my-10'>
            <TwitchContent />
          </div>
        </div>
      </section>

      <section id="testimonialsSection" className="py-6 lg:py-12">
        <div className="dark:bg-slate-900 dark:shadow-gray-200">
          <TitleSection
            title="Nuestros miembros dicen..."
            subtitle="Comentarios, sugerencias, y más"
          ></TitleSection>

          <div id="testimonials" className="my-10 xl:mt-12">
            <Testimonials />
          </div>
        </div>
      </section>

      <section id="faqSection" className="py-6 lg:py-12">
        <div className="dark:bg-slate-900 dark:shadow-gray-200">
          <TitleSection
              title="FAQ"
              subtitle="Preguntas Más Frecuentes"
          ></TitleSection>

          <div id="faq" className="my-10 xl:mt-12">
            <FAQ />
          </div>
        </div>
      </section>

      <section id="sponsorSection" className="py-6 lg:py-12">
        <div className="dark:bg-slate-900 dark:shadow-gray-200">
          <TitleSection
            title="Auspiciadores"
            subtitle="Nuestros Patrocinadores"
          ></TitleSection>

          <div id="sponsors" className='my-10 xl:mt-12'>
            <ul  className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-2 lg:justify-center">
              <Group data={sponsors} Component={Sponsor} />
            </ul>
          </div>
        </div>
      </section>

      <section id="membersSection" className='py-6 lg:py-12'>
        <div className="dark:bg-slate-900 dark:shadow-gray-200">
          <TitleSection
            title="Nuestro equipo"
            subtitle="Personas geniales"
          ></TitleSection>
          
          <div id="members" className="grid grid-cols-2 my-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
            <Group data={members} Component={MemberCard} />
          </div>
        </div>
      </section>

      <section id="preinscriptionSection" className="py-6 lg:py-12">
        <div className='grid grid-cols-1 px-2 pt-10 sm:px-10 shadow-xl dark:bg-slate-900 dark:shadow-gray-200 dark:shadow-md'>
          <TitleSection
            title="Pre-inscrébete"
            subtitle="¡Estas a solo un clic de ingresar a nuestros cursos!"
          ></TitleSection>

          <div className='my-10'>
            <PreInscription />
          </div>
        </div>
      </section>

      <section id="donationsSection" className="py-6 lg:py-12">
        <div className='grid grid-cols-1 px-2 pt-10 sm:px-10 shadow-xl dark:bg-slate-900 dark:shadow-gray-200 dark:shadow-md'>
          <TitleSection
            title="Donaciones"
            subtitle="Apoyanos para que cada día podamos ser mejores gracias a tu ayuda c:"
          ></TitleSection>

          <div id="donations" className='my-10'>
            <KofiWidget />
            <Donations />
          </div>
        </div>
      </section>

      <section id="contactusSection" className="py-6 lg:py-12">
        <div className="dark:bg-slate-900 dark:shadow-gray-200">
          <TitleSection
            title="Contáctanos"
            subtitle="¿Tienes dudas, sugerencias o inquietudes? "
          ></TitleSection>

          <div className='my-10 xl:mt-12'>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-2 lg:justify-center">
              <Group data={contact} Component={IconSection} />
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MainContent

/*
Función: Componente con el contenido del main.

El <div> id=main contiene las siguientes <section>:
1. Sección "Esto es Chikara 力"
  1.1 Invoca componente <TitleSection>
  1.2 Invoca componente <Group> con componente base <InfoCard>

2. Sección "Nuestro canal de YouTube"
  2.1 Invoca componente <TitleSection>
  2.2 Invoca componente <YoutubeContent>

3. Sección "Nuestro canal de Twitch"
  3.1 Invoca componente <TitleSection>
  3.2 Invoca componente <TwitchContent>

4. Sección "Nuestros miembros dicen..."
  4.1 Invoca componente <TitleSection>
  4.2 Invoca el hook <Testimonials>

5. Sección "FAQ - Preguntas Más Frecuentes"
  5.1 Invoca componente <TitleSection>
  5.2 Invoca el hook <FAQ>

6. Sección "Auspiciadores"
  6.1 Invoca componente <TitleSection>
  6.2 Invoca componente <Group> con componente base <Sponsor>

7. Sección "Nuestro equipo"
  1.1 Invoca componente <TitleSection>
  1.2 Invoca componente <Group> con componente base <MemberCard>
  1.3 Invoca componente <ContactUs>
*/
