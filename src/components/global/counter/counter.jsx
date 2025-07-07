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

          
        </div>
      </div>
    </section>
  );
}
