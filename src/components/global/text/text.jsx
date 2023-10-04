import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function GlobalHeader(block) {
  return (
    <section className="feature pt-10 pb-0 ">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mx-auto ">
            <div
              className={`section-header @@disply ${
                block.remove_top_padding ? "no-top-pad" : ""
              }`}
            >
            
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
