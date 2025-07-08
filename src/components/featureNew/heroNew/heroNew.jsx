import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });
import navigation from "../../../../data/navigation.json";
export default function GlobalFeature(block) {
  let content = "";
  if (block.reversed) {
    content = (
      <>
        <div className="row align-items-center ">
          <div className="col-lg-6 ">
            <div className="feature-item-banner mb-xl-10 mb-md-4 mb-3">
              <div className="card-image ">
                <img src={block.image} alt={block.image_alt} loading="lazy" width="500" height="300" />
              </div>
              <div className="effect-one"></div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="feature-item-content  mb-xl-10 mb-md-4 mb-3">
            
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
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="feature-item-content  mb-xl-10 mb-md-4 mb-3">
    
              <div 
                dangerouslySetInnerHTML={{
                  __html: md.render(block.description),
                }}
              />
             
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="feature-item-banner mb-xl-10 mb-md-4 mb-3">
              <div className="card-image">
                <img src={block.image} alt={block.image_alt} loading="lazy" width="400" height="400" />
              </div>
              <div className="effect-two"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <section className="feature pt-sm-2 pt-2 pb-2">
      <div className="container">{content}</div>
    </section>
  );
}
<style>


</style>