import footer from "@data/footer.json";
import navigation from "@data/navigation.json";

export default function Footer({}) {
  return (
    <footer className="footer" id="footer">
      <div className="footer-wrapper">
        <img
          className="footer-image"
          src={navigation.logo}
          alt="Nav-Logo"
          width={"30%"}
          height={"50%"}
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
        <div className="asociados-wrapper">
          <h2 className="text-white">Asociados a:</h2>
          <div className="asociados">
            <a href="https://alianzatic.org/" target="_blank">
              <img src="../images/alianza.png" alt="" width={"40%"} />
            </a>
            <a href="https://www.instagram.com/clustertolimatic/?hl=es-la" target="_blank">
              <img src="../images/cluster.png" alt="" width={"20%"} />
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 mt-2 text-center">
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
