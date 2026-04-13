const FormPage = ({ title, iframeSrc, iframeTitle, bgImage }) => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-900 transition-colors duration-300">

      {/* Imagen de fondo decorativa con overlay y desenfoque */}
      <div className="relative w-full h-40 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      </div>

      {/* Contenido principal */}
      <div className="max-w max-h mx-auto px-6 pt-12 pb-24">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mt-12 mb-12">
          {title}
        </h1>

        {/* Formulario embebido */}
        <div className="w-full aspect-[4/3] sm:aspect-[16/9]">
          <iframe
            className="w-full h-full border-none rounded-lg shadow-xl"
            src={iframeSrc}
            loading="lazy"
            allowFullScreen
            title={iframeTitle}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
