import MarkdownIt from "markdown-it";

const md = new MarkdownIt({html: true});

export default function ContactHero(block) {
    return (
        <section className="contact-hero">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="contact-hero-content">
                            <h1>{block.title}</h1>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: md.render(block.description),
                                }}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
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
                </div>
            </div>
        </section>
    );
}
