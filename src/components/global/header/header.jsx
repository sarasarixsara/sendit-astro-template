import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function GlobalHeader(block) {
  return (
    <section className="feature pt-0 pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div
              className={`section-header @@disply ${
                block.remove_top_padding ? "no-top-pad" : ""
              }`}
            >
              <h2>
                {block.title}
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
      <iframe
        width="424"
        height="240"
        src="https://www.youtube.com/embed/E5BSybQmoQY"
        title="Ferstival Hatoviejo Cotrafa"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </section>
  );
}
