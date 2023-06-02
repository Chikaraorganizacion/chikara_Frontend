import { useState } from 'react'
import { faqs } from '../components/data'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="mt-6 xl:mt-12 shadow-sm">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-gray-200 mb-6 hover:border-gray-400 last:mb-0 hover:bg-gradient-to-t from-red-100 to-gray-100 shadow-md rounded-md hover:scale-105 transition-all duration-300">
          <button
            className="flex justify-between items-center w-full p-4 focus:outline-none"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <p className="ml-6 sm:ml-0 text-lg font-bold flex text-left sm:text-xl" >{faq.question}</p>
            <span className='self-start flex-none w-5 h-5'> 
              <svg className={`sm:inline-flex w-5 h-5 transition-all duration-300 ${openIndex === index ? 'rotate-45' : ''}`} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
               <use href={`/icons.svg#ic-plus`} />
              </svg >
            </span>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-6 transition-all duration-500">
              <p className='text-base text-justify sm:text-xl'>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default FAQ
