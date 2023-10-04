import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function GlobalFeature(block) {
  let content = "";
  if (block.reversed) {
    content = (
      <>
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="feature-item-banner mb-sm-8 mb-lg-10 mb-xxl-15 mb-7">
              <div className="feature-item-content mb-xl-15 mb-md-10 mb-7 ps-xxl-8 ps-0">
               
                <h2>{block.title}</h2>
              </div>
              <div className="effect-one"></div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="feature-item-content mb-xl-15 mb-md-10 mb-7 ps-xxl-8 ps-0">
             
              <div
                dangerouslySetInnerHTML={{
                  __html: md.render(block.description),
                }}
              />
              
            </div>
          </div>
        </div>
      </>
    );
  } else {
    content = (
      <>
        <div className="row align-items-center">
          <div className="col-lg-4 ">
            <div className="feature-item-content mb-xl-15 mb-md-10 mb-7 ps-xxl-8 ps-0">
              <h2 >{block.title}</h2>
              
            </div>
          </div>
          <div className="col-lg-8 ">
            <div className="feature-item-content mb-xl-15 mb-md-10 mb-2 ps-xxl-8 ps-0">
             
              <div
                dangerouslySetInnerHTML={{
                  __html: md.render(block.description),
                }}
              />
              {/* <div className="effect-two"></div> */}
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <section className="feature ">
      <div className="container">{content}</div>
    </section>
  );
}