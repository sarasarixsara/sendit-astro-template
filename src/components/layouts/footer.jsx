import footer from "@data/footer.json";
import navigation from "@data/navigation.json";


export default function Footer({ }) {
  return (
    <footer className="footer" id="footer">
      <div className="" style={{ display: "flex" }}>

          {/* {footer.sections.map((section, i) => (
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
            ))} */}
          <div className="h-full py-2 px-lg-20 p-4 flex col relative justify-content-around align-content-center" style={{ display: 'flex', flexDirection: 'column' }}>
            <img src="/images/logo-romoredes-nofondo.png" alt="" width={150} />
            <p className="text-white text-justify">{footer.description}</p>
          </div>
        

        <div className="p-8 px-lg-14 justify-content-around align-content-center flex-1 hidden-md-down"
          style={{ display:'flex',flex: '1' }}>
          
            <div className="justify-content-around" style={{ display: 'flex', flexDirection: 'column' }}>
              <p className="text-white">NIT: 901527987</p>
              <p className="text-white">Teléfono: 3204242865 - 3182309432</p>
              <p className="text-white"> Correo electrónico: romored3s@gmail.com</p>
            </div>
        </div>

      </div>
      <div className="border-top h-full">
        <p className="text-white mb-0 p-4 text-center">
          © Copyright <span>{new Date().getFullYear()}</span>{" "}
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
