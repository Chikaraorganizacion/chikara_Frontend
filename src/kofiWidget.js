// kofiWidget.js
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