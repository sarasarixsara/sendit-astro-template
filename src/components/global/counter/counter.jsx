import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function GlobalCounter(block) {
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
              <div className="btn btn-links mt-4">
                Conoce el{" "}
                <a target="_blank" href="docs/SISTEMA DE MEDIDA DE CALIDAD.pdf">
                  Sistema de medida de calidad
                </a>
              </div>
            </div>
          </div>
          <div className="section-header col-lg-6" style={{padding: 0,}}>
            <h1>Nuestra cobertura</h1>
            <p>Convergencia Digital cuenta con cobertura en los municipios de Ibagué y Suárez</p>
            </div>
          <div className="col-lg-6" style={{display: "flex", flexWrap: "wrap"}}>
          <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1qQgbngrCHlgnDUdnI-n5-36AZLg_Rcc&ehbc=2E312F&noprof=1" width="540" height="280"></iframe>
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
