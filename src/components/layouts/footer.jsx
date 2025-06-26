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
            <div className="col-12 col-lg-6 order-1 mb-4" key={i}>
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
        <h6 >
          Contactanos en: <br />
          accionsocialmelgar@gmail.com <br />
          DIRECCION: Km. 1 Vía
          Melgar – Bogotá
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
