import { useState } from 'react';
import TeamCard from './TeamCard';

const TeamTabs = ({ founders, collaborators, members }) => {
  const tabs = [
    {
      id: 'fundadores',
      label: 'Fundadores',
      data: founders,
      bgColor: 'bg-gray-300 dark:bg-gray-700',
      activeColor: 'bg-gray-200 dark:bg-gray-900',
    },
    {
      id: 'miembros',
      label: 'Miembros',
      data: members,
      bgColor: 'bg-gray-300 dark:bg-gray-700',
      activeColor: 'bg-gray-200 dark:bg-gray-900',
    },
    {
      id: 'colaboradores',
      label: 'Colaboradores',
      data: collaborators,
      bgColor: 'bg-gray-300 dark:bg-gray-700',
      activeColor: 'bg-gray-200 dark:bg-gray-900',
    }
  ];

  const [activeTab, setActiveTab] = useState('fundadores');
  const currentTab = tabs.find(tab => tab.id === activeTab);

  return (
    <div className='w-full'>
      {/* Pestañas */}
      <div className='flex justify-center flex-wrap gap-2 sm:gap-4 md:gap-6 lg:gap-12 xl:gap-32'>
        {tabs.map(tab => (
          <button
            key={tab.id}
            aria-pressed={activeTab === tab.id}
            className={`px-1 py-2 sm:px-4 sm:py-2 rounded-t font-medium transition-transform duration-200 active:scale-95 focus:outline-none ${
              activeTab === tab.id
                ? `${tab.activeColor} text-red-600 dark:text-red-500`
                : `${tab.bgColor} text-gray-800 dark:text-gray-200 hover:brightness-95`
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Contenedor con color dinámico y margen lateral */}
      <div className={`p-4 sm:p-6 rounded ${currentTab.activeColor}`}>
        <div className="grid grid-cols-2 my-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-10">
          {currentTab.data.map((member, index) => (
            <div key={index}>
              <TeamCard {...member} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamTabs;
