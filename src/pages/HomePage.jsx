import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import HeaderContent from '../components/Header/HeaderContent'
import MainContent from '../components/Main/MainContent'
import FooterContent from '../components/Footer/FooterContent'

const HomePage = () => {
  const eventsRef = useRef(null)
  const preinscriptionRef = useRef(null)
  const donationsRef = useRef(null)
  const contactusRef = useRef(null)

  const location = useLocation()
  const [scrollKey, setScrollKey] = useState(0)

  const scrollToSection = (ref) => {
    if (ref?.current) {
      const offsetTop = ref.current.offsetTop - 180
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const scrollTo = params.get('scrollTo')

    const refs = {
      events: eventsRef,
      preinscription: preinscriptionRef,
      donations: donationsRef,
      contact: contactusRef,
      top: { current: { offsetTop: 0 } }
    }

    const targetRef = refs[scrollTo]

    if (targetRef?.current) {
      const offsetTop = targetRef.current.offsetTop - 180
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
  }, [location.search])


  return (
    <div key={scrollKey} className="min-h-screen flex flex-col bg-gray-100 dark:bg-slate-900">
      <HeaderContent
        eventsRef={eventsRef}
        preinscriptionRef={preinscriptionRef}
        donationsRef={donationsRef}
        contactusRef={contactusRef}
        scrollToSection={scrollToSection}
      />
      <MainContent
        eventsRef={eventsRef}
        preinscriptionRef={preinscriptionRef}
        donationsRef={donationsRef}
        contactusRef={contactusRef}
        scrollToSection={scrollToSection}
      />
      <FooterContent />
    </div>
  )
}

export default HomePage
