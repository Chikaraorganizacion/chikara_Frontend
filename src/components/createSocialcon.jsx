const SocialIcon = (props) => {
  const {icon, url, type} = props
  const isHeader = type === 'header';
  const className = isHeader ? "flex items-center p-2 text-red-500 lg:text-white hover:text-red-600 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-white transition" : "inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-red-500 hover:text-white rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-white transition";

  return (
    <li>
      <a className={className} href={`${url}`} target="_blank">
        <svg className={isHeader ? 'w-5 h-5 lg:w-10 lg:h-10' : 'w-5 h-5'} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <use href={`/icons.svg#ic-${icon}`} />
        </svg>
        {isHeader && <span className="px-2 text-xl font-bold text-gray-900 lg:hidden visible">{icon}</span>}
      </a>
    </li>
  )
}

export default SocialIcon