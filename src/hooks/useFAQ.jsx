import { useState } from 'react'
import { groupedFaqs } from '../data/infoData'

const FAQ = () => {
  const [openGroup, setOpenGroup] = useState(null)
  const [openQuestionIndex, setOpenQuestionIndex] = useState({})

  const toggleGroup = (groupIndex) => {
    setOpenGroup(openGroup === groupIndex ? null : groupIndex)
  }

  const toggleQuestion = (groupIndex, questionIndex) => {
    setOpenQuestionIndex(prev => ({
      ...prev,
      [groupIndex]: prev[groupIndex] === questionIndex ? null : questionIndex
    }))
  }

  return (
    <div>
      {groupedFaqs.map((group, groupIndex) => (
        <div key={groupIndex} className="mb-6 rounded-md border shadow-xl bg-gray-100 dark:border-none dark:bg-gray-900 dark:shadow-lg dark:shadow-black transition-all">
          
          {/* Acordeón de categoría */}
          <button
            className="w-full px-4 py-3 text-left text-xl font-bold flex justify-between items-center dark:text-white bg-gray-100 dark:bg-gray-900 hover:bg-gradient-to-t from-red-100 to-gray-100 dark:hover:bg-gradient-to-t dark:from-red-900 dark:to-red-700 dark:shadow-lg dark:shadow-black rounded transition-all duration-300"
            onClick={() => toggleGroup(groupIndex)}
          >
            <span>{group.category}</span>
            <svg
              className={`w-5 h-5 transform transition-transform duration-300 dark:text-white ${
                openGroup === groupIndex ? 'rotate-180' : ''
              }`}
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <use href="/icons.svg#ic-arrowd" />
            </svg>
          </button>

          {/* Preguntas dentro de la categoría */}
          {openGroup === groupIndex && (
            <div className="p-4 space-y-4">
              {group.items.map((faq, questionIndex) => (
                <div
                  key={questionIndex}
                  className="border rounded-md bg-gray-200 shadow-lg hover:bg-gradient-to-t from-red-100 to-gray-100 dark:border-none dark:from-red-900 dark:to-red-700 dark:bg-gray-800 dark:shadow-lg dark:shadow-black transition-all duration-300"
                >
                  <button
                    className="flex justify-between items-center w-full p-4 text-left font-semibold dark:text-gray-200"
                    onClick={() => toggleQuestion(groupIndex, questionIndex)}
                  >
                    {faq.question}
                    <svg
                      className={`w-5 h-5 transform transition-transform duration-300 dark:text-gray-200 ${
                        openQuestionIndex[groupIndex] === questionIndex ? 'rotate-45' : ''
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <use href="/icons.svg#ic-plus" />
                    </svg>
                  </button>
                  {openQuestionIndex[groupIndex] === questionIndex && (
                    <div className="px-6 pb-4 text-base text-justify dark:text-gray-300">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default FAQ
