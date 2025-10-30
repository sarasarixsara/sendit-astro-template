import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function GlobalTestimonial(block) {
  return (
    <section style={{ backgroundColor: "#ffffff", paddingTop: "20px", paddingBottom: "20px" }}>
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-8 mx-auto text-center mb-2"
            
          >
            <div className="testimonial-content">
              <h2>
                {block.title} <span> {block.title_suffix}</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {block.slider.map((slide, i) => (
            <Testimonial slide={slide} i={i} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
function Testimonial({ slide, i }) {
  return (
    <div className="col-lg-3 col-md-6 mb-5" key={i}>
      <div className="testimonial-item " style={{ height: "100%" }}>
        <div
          className="testimonial-item-person flex-column justify-content-between"
          style={{ height: "100%", display: "flex" }}
        >
         
            <img
              src={slide.image}
              alt="logo"
              className={slide.image_alt}
              style={{borderRadius: "10px"}}
              loading="lazy"
            />
        </div>
      </div>
    </div>
  );
}
