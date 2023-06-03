import { useEffect } from 'react';
import { addKofiWidget } from '../kofiWidget';

const KofiWidget = () => {
  useEffect(() => {
    addKofiWidget()
  }, [])

  return (
  <div id="kofiWidget"></div>
  )
}

export default KofiWidget;