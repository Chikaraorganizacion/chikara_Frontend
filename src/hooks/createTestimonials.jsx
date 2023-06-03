import { useState } from 'react'
import imgTestimonial from '../assets/imgTestimonials/imgTestimonial'
import { testimonials, flags } from '../components/data'

const Testimonial = () => {
  const [TestimonioActual, setTestimonioActual] = useState(0)
  
  const nextTestimonial = () => {
    setTestimonioActual((TestimonioActual + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setTestimonioActual((TestimonioActual - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl min-h-80 dark:bg-slate-900 dark:shadow-gray-200 dark:shadow-lg">
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center">
          <div class="hidden md:block mb-24 md:mb-0 sm:px-6">
            <div class="relative">
              <img class="inset-0 w-full h-96 object-cover object-center rounded-xl" loading="lazy" src={imgTestimonial[testimonials[TestimonioActual].image]} alt={`Foto de ${testimonials[TestimonioActual].name}`} /> 
            </div>
          </div>
          <div>
            <blockquote class="relative">
              <svg className="absolute top-0 left-0 transform -translate-x-8 -translate-y-4 h-24 w-24 text-gray-200 dark:text-gray-700" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <use href={'/icons.svg#ic-quotes'} />
              </svg >
              <div class="relative z-10">
                <p class="text-xs font-semibold text-gray-500 tracking-wide uppercase mb-3 dark:text-gray-200">
                  {testimonials[TestimonioActual].rol}
                </p>
                <p class="text-xl font-medium italic text-gray-800 md:text-2xl md:leading-normal xl:text-3xl xl:leading-normal dark:text-gray-200">
                  {testimonials[TestimonioActual].testimonial}
                </p>
              </div>
              <footer class="mt-6">
                <div class="flex items-center">
                  <div class="md:hidden flex-shrink-0">
                    <img class="h-20 w-20 inset-0 object-cover object-center rounded-full" loading="lazy" src={imgTestimonial[testimonials[TestimonioActual].image]} alt={`Foto de ${testimonials[TestimonioActual].name}`} />
                  </div>
                  <div class="ml-4 md:ml-0">
                    <div class="text-base font-semibold text-gray-800 dark:text-gray-200">{testimonials[TestimonioActual].name}</div>
                    <div class="text-xs text-gray-500 dark:text-gray-400">
                      <p>
                        {testimonials[TestimonioActual].location}
                        <img className='inline-flex pl-2 w-8 h-6' loading="lazy" src={flags[testimonials[TestimonioActual].flag]} alt={`Bandera de ${testimonials[TestimonioActual].flag}`} />
                        </p>
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
      <button className="absolute bottom-[40%] md:bottom-[30%] lg:top-[20%] mt-32 left-0 bg-white rounded-full shadow-md h-10 w-10 md:h-20 md:w-20 text-2xl text-red-600 hover:text-red-400 focus:text-red-400 -ml-6 focus:outline-none focus:shadow-outline" onClick={prevTestimonial}>
        <span className="block scale-[-1]">&#x279c;</span>
      </button>
      <button className="absolute bottom-[40%] md:bottom-[30%] lg:top-[20%] mt-32 right-0 bg-white rounded-full shadow-md h-10 w-10 md:h-20 md:w-20 text-2xl text-red-600 hover:text-red-400 focus:text-red-400 -mr-6 focus:outline-none focus:shadow-outline" onClick={nextTestimonial}>
        <span className="block scale-1">&#x279c;</span>
      </button>
    </div>
  )
}

export default Testimonial


