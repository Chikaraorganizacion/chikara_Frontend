import React from "react";
import TermsContent from "../../components/Terms/TermsContent";

const PrivacyPolicy = () => {
  return (
    <TermsContent className="text-gray-900 dark:text-gray-100 transition-colors duration-300 leading-relaxed">
      <h2 className="text-3xl font-bold text-center mb-6">
        Política de Privacidad
      </h2>

      {/* 1 */}
      <h3 className="text-xl font-semibold mt-8 mb-4">
        1. Identificación del Responsable del Tratamiento
      </h3>
      <p>
        <strong>1.1 Responsable:</strong> La organización juvenil sin ánimo de
        lucro <strong>Chikara</strong> es la entidad responsable del tratamiento
        de tus datos personales, conforme a la Ley 1581 de 2012 y el Decreto
        1377 de 2013 (Colombia).
      </p>
      <p>
        <strong>1.2 Contacto:</strong> Para ejercer derechos o consultas, puedes
        escribir al correo{" "}
        <a
          href="mailto:chikara.organizacion@gmail.com"
          className="text-red-600 dark:text-red-400 underline"
        >
          chikara.organizacion@gmail.com
        </a>{" "}
        o enviar un mensaje directo por nuestras redes sociales oficiales.
      </p>
      <hr className="my-8 border-0 h-1 bg-gradient-to-r from-red-600 via-red-400 to-red-600 rounded-full" />

      {/* 2 */}
      <h3 className="text-xl font-semibold mt-8 mb-4">
        2. Datos Personales que se recolectan
      </h3>
      <p>
        La organización <strong>Chikara</strong> únicamente procesa los datos
        personales necesarios para lograr los fines previstos, tal y como se describe a continuación:
      </p>
      <ul className="space-y-1 mt-2">
        <li>
          <strong>2.1 Identificación:</strong> nombres completos y número de
          documento de identidad.
        </li>
        <li>
          <strong>2.2 Contacto:</strong> correo electrónico y número de teléfono
          móvil.
        </li>
        <li>
          <strong>2.3 Demografía socio económica:</strong> edad o rango etario;
          municipio y barrio de residencia; afiliación a subsidios sociales.
        </li>
        <li>
          <strong>2.4 Situación académica y laboral:</strong> formación
          profesional y estado actual (estudia, trabaja, desempleado).
        </li>
        <li>
          <strong>2.5 Preferencias y voluntariado:</strong> intereses culturales,
          estilos y maneras de aprendizaje, disponibilidad horaria.
        </li>
        <li>
          <strong>2.6 Datos sensibles:</strong> afiliación a subsidios, que
          podría considerarse como dato sensible según la Ley 1581/2012 (art. 6).
        </li>
      </ul>
      <p className="mt-2">
        Los datos personales serán tratados durante el tiempo necesario para
        alcanzar la finalidad prevista, teniendo en cuenta los derechos de los
        interesados y los intereses de los responsables del tratamiento.
      </p>
      <hr className="my-8 border-0 h-1 bg-gradient-to-r from-red-600 via-red-400 to-red-600 rounded-full" />

      {/* 3 */}
      <h3 className="text-xl font-semibold mt-8 mb-4">
        3. Finalidades del Tratamiento y Bases Legales
      </h3>
      <p>
        El tratamiento de los datos personales y sus finalidades dependerán de
        cómo se relacione el titular de los datos con la organización, tal y como se describe a continuación:
      </p>
      <ul className="space-y-1 mt-2">
        <li>
          <strong>3.1 Gestión de actividades:</strong> talleres, cursos, clases y
          voluntariados gratuitos.
        </li>
        <li>
          <strong>3.2 Comunicación:</strong> envío de boletines culturales,
          newsletters e información institucional.
        </li>
        <li>
          <strong>3.3 Gestión de voluntariado y subsidios:</strong> (Mosquera
          Pila).
        </li>
        <li>
          <strong>3.4 Estadísticas e informes:</strong> elaboración de
          estadísticas e informes de impacto social.
        </li>
      </ul>
      <p className="mt-3 font-semibold">Bases legales aplicables:</p>
      <ul className="space-y-1 mt-2">
        <li>
          <strong>3.a</strong> Consentimiento expreso, previo e informado del
          titular para el tratamiento de datos (Ley 1581/2012, art. 4).
        </li>
        <li>
          <strong>3.b</strong> Interés legítimo o social de una organización sin
          ánimo de lucro, siempre que no prevalezcan los derechos del titular.
        </li>
        <li>
          <strong>3.c</strong> Ejecución de actividades con fines culturales y
          educativos (Ley 1581 y Decreto 1377).
        </li>
      </ul>
      <hr className="my-8 border-0 h-1 bg-gradient-to-r from-red-600 via-red-400 to-red-600 rounded-full" />

      {/* 4 */}
      <h3 className="text-xl font-semibold mt-8 mb-4">
        4. Derechos de los Titulares (niños, niñas, adolescentes y jóvenes)
      </h3>
      <ul className="space-y-1">
        <li>
          <strong>4.1</strong> Todos los titulares, incluyendo menores mayores
          de 14 años, pueden ejercer sus Derechos ARCO (Acceso, Rectificación,
          Cancelación o Supresión, Bloqueo, Oposición y portabilidad si aplica).
        </li>
        <li>
          <strong>4.2</strong> Menores entre 14 y 18 años pueden prestar consentimiento 
          válido para tratamientos relacionados con actividades e inscripción, pero su representación 
          legal debe estar informada y, cuando se requiera, participar conforme al interés superior del menor.
        </li>
        <li>
          <strong>4.3</strong> Menores de 14 años requieren consentimiento explícito de los padres o 
          representantes legales para el tratamiento legal de sus datos personales.
        </li>
        <li>
          <strong>4.4</strong> La organización Chikara garantiza que se use lenguaje claro y accesible 
          para informar a los jóvenes participantes sobre sus derechos y cómo ejercerlos, siguiendo los 
          principios de <strong>transparencia y accesibilidad</strong>.
        </li>
        <li>
          <strong>4.5</strong> Las solicitudes de ejercicio de derechos deberán ser remitidas a {" "} 
          <a
            href="mailto:chikara.organizacion@gmail.com"
            className="text-red-600 dark:text-red-400 underline"
          >
            chikara.organizacion@gmail.com
          </a>{" "}
          o mensaje directo en redes.
        </li>
      </ul>
      <hr className="my-8 border-0 h-1 bg-gradient-to-r from-red-600 via-red-400 to-red-600 rounded-full" />

      {/* 5 */}
      <h3 className="text-xl font-semibold mt-8 mb-4">
        5. Medidas de Seguridad y Plazos de Conservación
      </h3>
      <ul className="space-y-1">
        <li>
          <strong>5.1</strong> 1.	Se aplica el principio de seguridad y confidencialidad, 
          con medidas técnicas (contraseñas, control de accesos), organizativas y físicas 
          para proteger los datos frente a accesos no autorizados, adulteraciones o pérdidas 
        </li>
        <li>
          <strong>5.2</strong> Los datos se conservan de por vida mientras no se
          solicite su eliminación.
        </li>
        <li>
          <strong>5.3</strong> Las solicitudes de supresión se atenderán en los
          plazos legales.
        </li>
      </ul>
      <hr className="my-8 border-0 h-1 bg-gradient-to-r from-red-600 via-red-400 to-red-600 rounded-full" />

      {/* 6 */}
      <h3 className="text-xl font-semibold mt-8 mb-4">
        6. Transferencias de datos a terceros o fuera del país
      </h3>
      <ul className="space-y-1">
        <li>
          <strong>6.1</strong> Google Forms almacena datos en servidores
          internacionales, luego trasladados a Colombia.
        </li>
        <li>
          <strong>6.2</strong> Hosting gestionado por Hostinger (servidores
          pueden estar fuera de Colombia).
        </li>
        <li>
          <strong>6.3</strong> No se transfieren datos sin autorización expresa,
          salvo requerimientos legales o situaciones específicas.
        </li>
      </ul>
      <hr className="my-8 border-0 h-1 bg-gradient-to-r from-red-600 via-red-400 to-red-600 rounded-full" />

      {/* 7 */}
      <h3 className="text-xl font-semibold mt-8 mb-4">
        7. Cesión de Derechos de Imagen
      </h3>
      <ul className="space-y-2">
        <li>
          <strong>7.1 Objeto:</strong> Participar en actividades implica ceder
          gratuitamente derechos de imagen (fotos, videos).
        </li>
        <li>
          <strong>7.2 Ámbito:</strong> Aplicable en todos los soportes y medios,
          sin límites geográficos ni temporales.
        </li>
        <li>
          <strong>7.3 Renuncia:</strong> No habrá contraprestación económica por
          el uso de la imagen.
        </li>
        <li>
          <strong>7.4 Revocación:</strong> Puede solicitarse al correo{" "}
          <a
            href="mailto:chikara.organizacion@gmail.com"
            className="text-red-600 dark:text-red-400 underline"
          >
            chikara.organizacion@gmail.com
          </a>{" "}
          o redes sociales.
        </li>
        <li>
          <strong>7.5 Protección:</strong> Respeto al honor, intimidad e imagen,
          con especial protección de menores.
        </li>
      </ul>
      <hr className="my-8 border-0 h-1 bg-gradient-to-r from-red-600 via-red-400 to-red-600 rounded-full" />

      {/* 8 */}
      <h3 className="text-xl font-semibold mt-8 mb-4">
        8. Uso de Cookies y Herramientas de Rastreo
      </h3>
      <p>
        Actualmente no utilizamos cookies, etiquetas pixel, Google Analytics ni
        otras herramientas de rastreo.
      </p>
      <p className="mt-2">
        En caso de cambios futuros, se solicitará consentimiento previo y se
        actualizará esta política.
      </p>
      <hr className="my-8 border-0 h-1 bg-gradient-to-r from-red-600 via-red-400 to-red-600 rounded-full" />

      {/* 9 */}
      <h3 className="text-xl font-semibold mt-8 mb-4">
        9. Contacto para Ejercicio de Derechos
      </h3>
      <ul className="space-y-1">
        <li>
          <strong>9.1</strong> Correo:{" "}
          <a
            href="mailto:chikara.organizacion@gmail.com"
            className="text-red-600 dark:text-red-400 underline"
          >
            chikara.organizacion@gmail.com
          </a>
        </li>
        <li>
          <strong>9.2</strong> Mensaje directo en redes sociales oficiales.
        </li>
        <li>
          <strong>9.3</strong> Whatsapp: +57 323697826
        </li>
      </ul>
      <p className="mt-2">
        Las solicitudes serán atendidas en los plazos legales, sin costo alguno
        para el titular.
      </p>
      <hr className="my-8 border-0 h-1 bg-gradient-to-r from-red-600 via-red-400 to-red-600 rounded-full" />

      {/* 10 */}
      <h3 className="text-xl font-semibold mt-8 mb-4">
        10. Modificaciones a la Política
      </h3>
      <ul className="space-y-1">
        <li>
          <strong>10.1</strong> Chikara se reserva el derecho de modificar esta
          política en cualquier momento.
        </li>
        <li>
          <strong>10.2</strong> Cambios relevantes se notificarán con al menos
          un mes de antelación por correo electrónico.
        </li>
        <li>
          <strong>10.3</strong> La nueva versión se publicará en el sitio web y
          el uso continuado implicará aceptación.
        </li>
      </ul>
    </TermsContent>
  );
};

export default PrivacyPolicy;
