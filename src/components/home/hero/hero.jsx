import MarkdownIt from "markdown-it";
import navigation from "@data/navigation.json";
const md = new MarkdownIt({ html: true });

export default function HomeHero(block) {
  return (
    <section className="hero-two">
      
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 h-fit">
            <div className="hero-two-content ">
              <h1 className=" text-white ">{block.title}</h1>
            
            </div>
          </div>
          <div className="col-lg-6 justify-content-center" style={{display: "flex"}}>
            <div className="hero-two-btn-md-up">
              {block.button && (
                <a href="/features/" className="btn btn-primary btn-lg">
                  {block.button.text}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
