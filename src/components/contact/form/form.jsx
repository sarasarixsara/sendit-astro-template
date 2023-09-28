export default function ContactForm(block) {
  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 me-auto order-2 order-lg-1">
            <div className="contact-form-Information">
              <div className="address">
                {block.address && (
                  <>
                    <h3>{block.address.heading}</h3>
                    <p>{block.address.address}</p>
                  </>
                )}
                <div className="item mb-4">
                  {block.phone && (
                    <>
                      <h3>{block.phone.heading}</h3>
                      <a href={`tel:${block.phone.cell}`}>
                        {block.phone.cell}
                        <span>
                          <img
                            src={block.phone.image}
                            alt={block.phone.image_alt}
                            loading="lazy"
                          />
                        </span>
                      </a>
                    </>
                  )}
                </div>
                <div className="item">
                  {block.email && (
                    <>
                      <h3>{block.email.heading}</h3>
                      <a href={`mailto:${block.email.email}`}>
                        {block.email.email}
                        <span>
                          <img
                            src={block.email.image}
                            alt={block.email.image_alt}
                            loading="lazy"
                          />
                        </span>
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 pt-8">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3977.832087715694!2d-75.23536946375425!3d4.4423339877986!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38c48f02d4af49%3A0xe9bb3a7722e0d1b!2zQ2wuIDE3ICMjOC01MiwgSWJhZ3XDqSwgVG9saW1h!5e0!3m2!1ses-419!2sco!4v1625754506893!5m2!1ses-419!2sco" height="450" width="100%" style={{border:0}} allowFullScreen loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
