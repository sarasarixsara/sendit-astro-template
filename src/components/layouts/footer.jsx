import footer from "@data/footer.json";
import navigation from "@data/navigation.json";


export default function Footer({ }) {
  return (
    <footer className="footer" id="footer">
      <div className="" style={{ display: "flex" }}>
        
          <div className="py-4 px-lg-20 justify-content-around align-content-center flex-1 flex col" style={{display: 'flex', flex: '1', flexDirection: 'column'}}>
            {footer.sections.map((section, i) => (
              <div className="row order-1 mb-4" key={i}>
                <div className="footer-widget">  
                  <ul className="list-unstyled align-content-center">
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <a href={`${link.link}`} >{link.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="py-4 px-lg-14 justify-content-center flex-1"
          style={{ flex: '1'}}>
            <div className="">
              <div className="justify-content-around" style={{ display: 'flex', flexDirection: 'column' }}>
                <p className="text-white">Romoredes - NIT: 901527987</p>
                <p className="text-white">Teléfono: 3204242865 - 3182309432</p>
                <p className="text-white"> Correo electrónico: romored3s@gmail.com</p>
              </div>
            </div>
            <div className="col-12 col-lg-12 me-auto order-2 order-lg-1">
              <div className="mt-4 mt-md-0">

                <p className="text-white">
                  © Copyright <span>{new Date().getFullYear()}</span>{" "}
                  {footer.copyright}
                </p>
              </div>
            </div>
          </div>
       
      </div>
    </footer>
  );
}
