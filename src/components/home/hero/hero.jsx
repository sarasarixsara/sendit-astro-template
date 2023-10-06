import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function HomeHero(block) {
  return (
    <section className="hero-two">
      <div className="hero-two-shape"></div>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-two-content">
              <h1 className="mb-4">{block.title}</h1>
              
            </div>
          </div>
          <div className="col-lg-6 justify-content-center" style={{display: "flex"}}>
          <div className="">
                {block.button && (
                  <a
                    href={block.button.link}
                    className="btn btn-primary btn-lg"
                  >
                    {" "}
                    {block.button.text}{" "}
                  </a>
                )}
              </div>
           
          </div>
        </div>
      </div>
    </section>
  );
}
