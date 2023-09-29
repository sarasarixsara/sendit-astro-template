import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function GlobalFeature(block) {
  let content = "";
  
    content = (
      <>
        <div className="row align-items-center">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="feature-item-content mb-xl-15 mb-md-10 mb-7 ps-xxl-8 ps-0">
              <h1 className="pe-xl-0">{block.title}</h1>
              {/* <p>{block.description}</p> */}
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="feature-item-banner mb-sm-8 mb-lg-10 mb-xxl-15 mb-7">
            
             
            </div>
          </div>
        </div>
      </>
    );
  
  return (
    <section className="feature pt-sm-10 pt-5 pb-4">
      <div className="container">{content}</div>
    </section>
  );
}
