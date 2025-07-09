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
          Contactanos en: <br />
          loretotqs2023@gmail.com
          <br />
          CACOM 6 Tres Esquinas Caquetá
          <br />
          <a href="tel:3160561540">3160561540</a>
          
          <br />
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
