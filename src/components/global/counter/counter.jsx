import MarkdownIt from "markdown-it";
import { useEffect, useState } from "react";
const md = new MarkdownIt({ html: true });

export default function GlobalCounter(block) {
    const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // o un loader temporal
  return (
    <section
      className={`counter-up ${
        block.alternate_style ? "counter-up-two pb-xxl-14 pb-lg-13" : ""
      }`}
      id="counter-up"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
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
          <div className="section-header col-lg-6" style={{ padding: 0 }}>
            <h2>Ponte en contacto con nosotros</h2>
            <p>
              Teléfono:{" "}
              <a href="https://api.whatsapp.com/send/?phone=57&text=Me+interesa+conocer+mas+sobre+su+asociacion&type=phone_number&app_absent=0">
                TELEFONO
              </a>
            </p>
            <p>
              Email:{" "}
              <a href="emailto:">
                EMAIL
              </a>{" "}
            </p>
            <p>DIRECCION</p>
          </div>
          <div
            className="col-lg-6"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.7828030807814!2d-74.07383658161287!3d4.6327996523906725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a2c89b424fb%3A0x5b5e23f29cee19c2!2sAsociaci%C3%B3n%20FAC%20Nuestra%20Se%C3%B1ora%20de%20Loreto!5e0!3m2!1ses!2sco!4v1750954430200!5m2!1ses!2sco"
              width="500"
              height="350"
          
              loading="lazy"
            
            ></iframe> */}
          </div>

          <div className="col-12 pb-8 mt-4">
            <div className="counter-up-wrapper d-grid">
              {block.numbers.map((number, i) => (
                <div className="counter-up-content" key={i}>
                  <div className="counter-up-content-item">
                    <div className="counter-percent">
                      {number.prefix && (
                        <span className="percent">{number.prefix}</span>
                      )}

                      <span className="counter">{number.number}</span>

                      {number.suffix && (
                        <span className="percent">{number.suffix}</span>
                      )}
                    </div>
                    <p>{number.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
