import HeaderContent from '../components/headerContent'
import MainContent from '../components/mainContent'
import FooterContent from '../components/footerContent'

const Home = () => {
  return (
    <div className="text-gray-700 bg-no-repeat bg-center-top grid grid-cols-1">
      <HeaderContent></HeaderContent>

      <main className='h-100 w-auto '>
        <MainContent></MainContent>
      </main>

      <footer className="mt-auto w-full py-10 px-4 bg-black bg:cover">
        <FooterContent></FooterContent>
      </footer>
    </div>
  )
}

export default Home

/*
Función:

*/
