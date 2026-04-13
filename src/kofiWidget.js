// kofiWidget.js

let scriptLoaded = false;

export const addKofiWidget = () => {
  if (scriptLoaded) return; // Evita múltiples inserciones

  const script1 = document.createElement('script');
  script1.src = 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js';
  script1.async = true;

  script1.onload = () => {
    const script2 = document.createElement('script');
    script2.innerHTML = `
      kofiWidgetOverlay.draw('chikaraoficial', {
        'type': 'floating-chat',
        'floating-chat.donateButton.text': 'Support me',
        'floating-chat.donateButton.background-color': '#fd0215',
        'floating-chat.donateButton.text-color': '#ffffff'
      });
    `;
    script2.id = 'kofi-inline-script';
    document.body.appendChild(script2);
    scriptLoaded = true;
  };

  script1.id = 'kofi-script';
  document.body.appendChild(script1);
};

export const removeKofiWidget = () => {
  // Elimina scripts insertados
  const script1 = document.getElementById('kofi-script');
  const script2 = document.getElementById('kofi-inline-script');
  if (script1) script1.remove();
  if (script2) script2.remove();

  // Elimina el overlay si está en el DOM
  const overlay = document.querySelector('[id^="kofi-widget"]');
  if (overlay) overlay.remove();

  scriptLoaded = false;
};



/* 
kofiWidget.js
export const addKofiWidget = () => {
  const script1 = document.createElement('script');
  script1.src = 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js';
  document.body.appendChild(script1);

  script1.onload = () => {
    const script2 = document.createElement('script');
    script2.innerHTML = `
      kofiWidgetOverlay.draw('chikaraoficial', {
        'type': 'floating-chat',
        'floating-chat.donateButton.text': 'Support me',
        'floating-chat.donateButton.background-color': '#fd0215',
        'floating-chat.donateButton.text-color': '#ffffff'
      });
    `;
    document.body.appendChild(script2);
  };
};
*/