import FaqItem from "./faqItem";
import MarkdownIt from "markdown-it";
import { useState } from "react";

const md = new MarkdownIt({ html: true });

export default function GlobalFaq(block) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <section className="faq-two">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-header">
              <h2>
                {block.title} <span>{block.title_suffix}</span>
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: md.render(block.description),
                }}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="accordion" id="accordionExample">
              {block.FAQ.map((q, i) => (
                <FaqItem faq={q} i={i} key={i} />
              ))}
            </div>
            <div className="accordion-item mt-6">
              <span>07</span>
              <h2 className="accordion-header"> </h2>
              <p
                className="header-content"
                onClick={handleOpenModal}
                style={{
                  cursor: "pointer",
                  fontSize: "1.6rem",
                  fontWeight: "600",
                  marginBottom: "0",
                }}
              >
                Informacion de interes sobre Dignidad Infantil
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="bg-gray-900 bg-opacity-80 flex items-center justify-center"
          style={{
            backgroundColor: "rgba(17, 24, 39, 0.3)",
            position: "fixed",
            flexWrap: "wrap",
            width: "100%",
            height: "100%",
            top: 30,
            display: "flex",
            justifyContent: "center",
            zIndex: 100,
            alignContent: "center",
          }}
        >
          <div
            className="bg-white p-6 rounded-xl shadow-lg w-1/2"
            style={{
              width: "60%",
              height: "70%",
              overflowY: "auto",
              borderRadius: "10px",
            }}
          >
            <h2>Dignidad Infantil</h2>
            <p>
              La Pornografía Infantil se define como toda representación, por
              cualquier medio, de un menor o una persona con aspecto de menor
              entregada a actividades sexuales explicitas, reales, simuladas o
              creadas mediante procesos de cualquier índole, así como toda
              representación de las partes de unos menores reales, simulados o
              creados mediante procesos de cualquier índole con fines
              primordialmente sexuales. Para lo cual se considerará menor a toda
              persona que no haya alcanzado la edad legal en la cual sea
              definido el carácter de adulto.
              <h2>Normatividad</h2>
              De acuerdo con lo establecido en la Ley 679 de 2001 el Decreto
              1524 de 2002, el Decreto 67 de 2003 y la Ley 1336 de 2009, todas
              las personas deben prevenir, bloquear, combatir y denunciar la
              explotación, alojamiento, uso, publicitación, difusión de
              imágenes, textos, documentos, archivos audiovisuales, uso indebido
              de redes globales de información, o el establecimiento de vínculos
              telemáticos de cualquier clase, relacionados con material
              pornográfico o alusivo a actividades sexuales de menores de edad,
              por cuanto podría generar responsabilidad penal. Si encuentra
              algún contenido o actividad dentro de la red considerado como
              pornografía infantil puede denunciarlo.{" "}
              <a href="/docs/LEY-679-DE-2001.pdf" style={{ cursor: "pointer" , color: "blue"}}>Ley 679 de 2001</a>
              <h2>Internet Sano</h2>
              Otro de los aspectos que la Ley 679 de 2001 promulga, es el
              interés de proteger a los infantes de acceder a sitios con
              contenido para adultos (pornografía). Pese al crecimiento y
              difícil control de internet en este sentido, existen métodos y
              herramientas que pueden filtrar contenidos no deseados y así
              proteger a los menores
            </p>
            <h2>¿Qué busca la Ley 679 de 2001?</h2>
            <p>
              {" "}
              Dictar medidas de protección contra la explotación, la pornografía
              y el turismo sexual y demás formas de abuso sexual con menores de
              edad, mediante el establecimiento de normas de carácter preventivo
              y sancionatorio, y la expedición de otras disposiciones en
              desarrollo del artículo 44 de la Constitución de Colombia.
            </p>
            <h2>
              ¿Dónde denunciar las páginas que tengan contenido infantil
              pornográfico?{" "}
            </h2>

            <p>
              El Ministerio de Comunicaciones, a partir de las obligaciones de
              la Ley 679 del 3 de agosto de 2001 implementó dos puntos de
              información y denuncia. Una línea telefónica gratuita nacional 01
              8000 912667 y el sitio Web: www.teprotejo.org/
            </p>
            <h2>Ley 1336 de 2009</h2>
            <p>
              Por medio de la cual se adiciona y robustece la Ley 679 de 2001,
              de lucha contra la explotación, la pornografía y el turismo sexual
              con niños, niñas y adolescentes.
            </p>
            <h2>DECRETO 1524 DE 2002</h2>
            <p>
              Que de conformidad con lo dispuesto por el artículo 44 de la
              Constitución Política, los niños serán protegidos contra toda
              forma de abandono, violencia física o moral, secuestro, venta,
              abuso sexual, explotación laboral o económica y trabajos riesgosos
            </p>
            <h2>Otros sitios de denuncia</h2>
            <p>
              <ul>
                <li>
                  Fiscalía General de la Nación: Teléfono: 01800 09 12280 Pagina
                  Web: www.fiscalia.gov.co e-mail: contacto@fiscalia.gov.co{" "}
                </li>
                <li>
                  Instituto Colombiano de Bienestar Familiar: Teléfonos Bogotá:
                  01-8000-91-8080 - 6016605520 - 6016605530 - 6016605540 Horario
                  de 7am a 9pm de lunes a domingo Página Web: www.icbf.gov.co{" "}
                </li>
                <li>
                  MINISTERIO DE TECNOLOGÍAS DE LA INFORMACIÓN Y COMUNICACIONES
                  Teléfono: 01 800 0912667 www.internetsano.gov.co{" "}
                </li>
                <li>
                  <a style={{ cursor: "pointer" , color: "blue"}} href="https://www.teprotejo.org">TE PROTEJO</a>{" "}
                </li>
                <li>
                  <a style={{ cursor: "pointer" , color: "blue"}} href="http://www.enticonfio.gov.co">ENTIC CONFIO</a>{" "}
                </li>
              </ul>
            </p>
            <h3>Control parental</h3>
            <a style={{ cursor: "pointer" , color: "blue"}} href="/docs/LEY-679-DE-2001.pdf">Control parental</a>
            <div
              style={{ display: "flex", gap: "10px", justifyContent: "center" }}
            >
              <iframe
                width="300"
                height="200"
                src="https://www.youtube.com/embed/gxFK25NB1Ug"
                title="Herramientas de control parental"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <iframe
                width="300"
                height="200"
                src="https://www.youtube.com/embed/Bnf9GfA0i18"
                title="Cómo ACTIVAR el Control Parental en Android | Android Evolution"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <button
              onClick={handleCloseModal}
              className="btn btn-primary btn-lg mt-4"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
