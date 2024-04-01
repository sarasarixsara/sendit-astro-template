import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function GlobalHeader(block) {
  return (
    <section className="feature pt-8 pb-0" id="nosotros">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mx-auto">
            <div
              className={`section-header @@disply ${
                block.remove_top_padding ? "no-top-pad" : ""
              }`}
            >
              <h2>
                {block.title }{" "}
                <span>{block.title_suffix}</span>
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: md.render(block.description),
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
