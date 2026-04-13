import bgHeader from '../../assets/background/bg-header.webp'
import BannerContent from './BannerContent'

const BannerParallax = () => {
  return (
    <section
      id="banner"
      className="relative w-full h-[100dvh] overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 bg-scroll md:bg-fixed"
        style={{backgroundImage: `url(${bgHeader})`
          }}
      ></div>

      <div className="relative z-10 flex items-center justify-center h-full w-full px-4">
        <BannerContent />
      </div>
    </section>
  );
};

export default BannerParallax;
