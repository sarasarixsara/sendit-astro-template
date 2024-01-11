import footer from "@data/footer.json";
import navigation from "@data/navigation.json";


export default function Footer({ }) {
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
                        <a href={`${link.link}`} >{link.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            <div className="col-12 col-lg-12 me-auto order-2 order-lg-1">
              <div className="mt-5 mt-md-0">
                <div className="justify-content-around" style={{display: 'flex', flexDirection: 'row'}}>
                  <p className="text-white">Romoredes - NIT: 901527987</p>
                 <p className="text-white">Teléfono: 3204242865 - 3182309432</p> 
                 <p className="text-white"> Correo electrónico: romored3s@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-12 me-auto order-2 order-lg-1">
              <div className="mt-4 mt-md-0">

                <p className="text-white">
                  © Copyright <span>{new Date().getFullYear()}</span>{" "}
                  {footer.copyright}
                </p>
              </div>
              {/* <div className="social-icon">
                <ul className="list-unstyled">
                  {footer.social.map((link, i) => (
                    <li key={i}>
                      <a href={'https://wa.me/' +`${navigation.whsp.number}`+ '?text=' + `${link.message.replace(/ /g, "%20")}`}  target="_blank">
                        <img src={link.social_icon} width="35" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>  */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
