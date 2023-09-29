import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function FeatureHero(block) {
  return (
    <section className="feature-hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="feature-hero-content">
              <h3 className="pe-xl-0">{block.title}</h3>
            </div>
          </div>
          <div className="col-lg-8">
             <div
                dangerouslySetInnerHTML={{
                  __html: md.render(block.description),
                }}
              />           
          </div>
        </div>
      </div>
    </section>
  );
}
