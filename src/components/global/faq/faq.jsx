import FaqItem from "./faqItem";
import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function GlobalFaq(block) {
  return (
    <section className="faq-two">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-header">
              <h2>
                {block.title} <span>{block.title_suffix}</span>
              </h2>
             
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
          </div>
          <div className="mt-4">
            <p classname="legal-text font-weight-bold">CONVERGENCIA DIGITAL SAS, se permite comunicar respecto al bloqueo de contenidos, que NO se realiza por ningún motivo guardando el principio de neutralidad en la prestación del servicio, salvo aquellos que por disposición legal se deba realizar (contenido de pornografía infantil con base en la ley 679 de 2001), sin el consentimiento expreso del usuario.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
