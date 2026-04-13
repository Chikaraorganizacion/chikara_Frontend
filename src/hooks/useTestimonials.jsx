import { useState, useEffect, useRef } from 'react';
import imgTestimonial from '../data/imgTestimonial';
import { testimonials, flags } from '../data/infoData';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const sliderRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const AUTOPLAY_TIME = 5000;
  const totalSlides = testimonials.length + 2;

  const resetPosition = () => {
    const el = sliderRef.current;
    if (!el) return;

    el.style.transition = 'none';
    if (currentIndex === 0) {
      setCurrentIndex(testimonials.length);
      el.style.transform = `translateX(-${testimonials.length * (100 / totalSlides)}%)`;
    } else if (currentIndex === testimonials.length + 1) {
      setCurrentIndex(1);
      el.style.transform = `translateX(-${100 / totalSlides}%)`;
    }
  };

  const moveToIndex = (index) => {
    const el = sliderRef.current;
    if (!el) return;

    el.style.transition = 'transform 0.7s cubic-bezier(0.77, 0, 0.175, 1)';
    setCurrentIndex(index);
  };

  const nextTestimonial = () => {
    moveToIndex(currentIndex + 1);
    setProgress(0);
  };

  const prevTestimonial = () => {
    moveToIndex(currentIndex - 1);
    setProgress(0);
  };

  const goToTestimonial = (index) => {
    moveToIndex(index + 1);
    setProgress(0);
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    el.style.transform = `translateX(-${currentIndex * (100 / totalSlides)}%)`;
  }, [currentIndex]);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    const handleTransitionEnd = () => resetPosition();
    el.addEventListener('transitionend', handleTransitionEnd);
    return () => {
      el.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [currentIndex]);

  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        nextTestimonial();
      }, AUTOPLAY_TIME);
    }
    return () => clearInterval(interval);
  }, [isHovered, currentIndex]);

  useEffect(() => {
    let progressInterval;
    if (!isHovered) {
      progressInterval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, AUTOPLAY_TIME / 100);
    }
    return () => clearInterval(progressInterval);
  }, [isHovered, currentIndex]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextTestimonial();
    } else if (touchEndX.current - touchStartX.current > 50) {
      prevTestimonial();
    }
  };

  return (
    <div
      className="relative bg-gray-200 dark:bg-gray-900 rounded-lg p-8 flex flex-col items-center justify-center transition-colors max-w-6xl mx-auto min-h-[400px] md:min-h-[500px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ overflow: 'visible' }}
    >
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-full shadow-md h-12 w-12 md:h-16 md:w-16 flex items-center justify-center text-red-600 hover:text-red-400 transition-colors z-20"
        onClick={prevTestimonial}
      >
        <svg className="w-6 h-6 md:w-8 md:h-8" aria-hidden="true">
          <use href="/icons.svg#ic-arrowl" />
        </svg>
      </button>

      <div className="w-full overflow-hidden relative z-10">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-700 ease-in-out"
          style={{ width: `${totalSlides * 100}%` }}
        >
          <Slide testimonial={testimonials[testimonials.length - 1]} total={totalSlides} />
          {testimonials.map((testimonial, index) => (
            <Slide key={index} testimonial={testimonial} total={totalSlides} />
          ))}
          <Slide testimonial={testimonials[0]} total={totalSlides} />
        </div>
      </div>

      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white rounded-full shadow-md h-12 w-12 md:h-16 md:w-16 flex items-center justify-center text-red-600 hover:text-red-400 transition-colors z-20"
        onClick={nextTestimonial}
      >
        <svg className="w-6 h-6 md:w-8 md:h-8" aria-hidden="true">
          <use href="/icons.svg#ic-arrowr" />
        </svg>
      </button>

      <div className="absolute bottom-8 flex space-x-2 z-10">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`h-3 w-3 rounded-full ${index + 1 === currentIndex ? 'bg-red-600' : 'bg-gray-400'} transition-colors`}
          />
        ))}
      </div>

      <div className="absolute bottom-2 left-0 w-full h-1 bg-gray-300 dark:bg-gray-600 overflow-hidden rounded-full z-10">
        <div
          className="h-full bg-red-600 transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

const Slide = ({ testimonial, total }) => {
  return (
    <div
      className="w-full flex-none flex flex-col md:flex-row items-center justify-center p-4"
      style={{ width: `${100 / total}%` }}
    >
      <div className="hidden md:block w-1/2 pr-8">
        <img
          className="w-full h-96 object-cover object-center rounded-xl"
          src={imgTestimonial[testimonial.image]}
          alt={`Foto de ${testimonial.name}`}
          loading="lazy"
        />
      </div>

      <div className="md:w-1/2 max-w-xl text-center md:text-left">
        <blockquote className="relative">
          <svg
            className="absolute top-0 left-0 transform -translate-x-8 -translate-y-4 h-24 w-24 text-gray-300 dark:text-gray-600"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <use href={'/icons.svg#ic-quotes'} />
          </svg>

          <div className="relative z-10">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-200 uppercase mb-3 tracking-wide">
              {testimonial.rol}
            </p>
            <p className="text-xl md:text-2xl xl:text-3xl italic text-gray-800 dark:text-gray-200 mb-6">
              {testimonial.testimonial}
            </p>
          </div>

          <footer className="flex items-center justify-center md:justify-start">
            <div className="md:hidden flex-shrink-0">
              <img
                className="h-20 w-20 object-cover object-center rounded-full"
                src={imgTestimonial[testimonial.image]}
                alt={`Foto de ${testimonial.name}`}
                loading="lazy"
              />
            </div>
            <div className="ml-4">
              <div className="text-base font-semibold text-gray-800 dark:text-gray-200">
                {testimonial.name}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                {testimonial.location}
                <img
                  className="inline-flex ml-2 w-8 h-6"
                  src={flags[testimonial.flag]}
                  alt={`Bandera de ${testimonial.flag}`}
                  loading="lazy"
                />
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  );
};

export default Testimonial;
