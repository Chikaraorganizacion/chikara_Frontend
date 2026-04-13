import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { addKofiWidget, removeKofiWidget } from '../../kofiWidget';

const KofiWidget = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      addKofiWidget();
    }

    return () => {
      removeKofiWidget();
    };
  }, [pathname]);

  return <div id="kofiWidget" />;
};

export default KofiWidget;
