import footer from "@data/footer.json";

export default function Footer({}) {
  return (
    <footer className="footer" id="footer">
      <div className="container-fluid">
        <div className="footer-wrapper">
          <div className="row py-6 px-lg-20 ">
           

            {footer.sections.map((section, i) => (
              <div className="col-6 col-md-3 col-lg-3 order-1 mb-4" key={i}>
                <div className="footer-widget">
                  <ul className="list-unstyled">
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <a href={`${link.link}`}>{link.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
             <div className="col-12 col-lg-12 me-auto order-2 order-lg-1">
              <div className="mt-7 mt-md-0">
               
                <p>
                  © Copyright <span>{new Date().getFullYear()}</span>{" "}
                  {footer.copyright}
                </p>
              </div>
               <div className="social-icon">
                <ul className="list-unstyled">
                  {footer.social.map((link, i) => (
                    <li key={i}>
                      <a href={`${link.link}`}>
                        <img src={link.social_icon} width="30" />
                          
                      </a>
                    </li>
                  ))}
                </ul>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
