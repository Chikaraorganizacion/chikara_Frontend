import { useOutletContext } from 'react-router-dom';

const TermsContent = ({ children, className = '' }) => {
  const { version } = useOutletContext();

  return (
    <div className={`prose dark:prose-invert max-w-none space-y-6 ${className}`}>
      <p className="text-sm text-right text-gray-900 dark:text-gray-100">
        Última actualización: {version}
      </p>
      {children}
    </div>
  );
};

export default TermsContent;
