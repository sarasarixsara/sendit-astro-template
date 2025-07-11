import footer from "@data/footer.json";
import navigation from "@data/navigation.json";

export default function Footer({}) {
  return (
    <footer className="footer" id="footer">
      <div className="footer-wrapper">
        <img
          className="footer-image h-10"
          src={navigation.logo}
          alt="Nav-Logo"
          height={"120px"}
        />

        <div className="row py-6 px-lg-10 ">
          {footer.sections.map((section, i) => (
            <div className="col-12 col-lg-6 order-1 mb-2" key={i}>
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
        </div>
        <h6 className="contact text-center">
          Contáctanos en: <br />
          CACOM 6 Tres Esquinas Caquetá
        
          <div className="flex flex-row justify-content-center gap-4 w-fit mt-2" style={{ display: "flex" }}>
            <a href="mailto:loretotqs2023@gmail.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="#479ac4"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z" />
              </svg>
            </a>
            
            <a href="tel:3160561540">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="#479ac4"
                viewBox="0 0 24 24"
              >
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" />
              </svg>
            </a>
            
            <a href="https://www.instagram.com/loretotresesquinas?igsh=eDRiZTUxaWJsY3Zo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="#479ac4"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.13.62a1.13 1.13 0 1 1-2.25 0a1.13 1.13 0 0 1 2.25 0z" />
              </svg>
            </a>
          </div>
        </h6>
      </div>
      <div className="col-12 mt-2 text-center ">
        <p>
          © Copyright <span>{new Date().getFullYear()}</span>{" "}
          <a href="https://blackgolden.co/" target="_blank">
            {footer.copyright}
          </a>
        </p>
      </div>
    </footer>
  );
}
