import { useEffect, useState } from "react";
import navigation from "@data/navigation.json";

export default function Navigation({ pageUrl }) {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    setSticky(window.scrollY >= 70);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (event) => {
    const navbar = $("#mainnavigationBar");
    navbar.toggleClass("bg-nav");
  };

  const generateLink = (phone, message) => {
    return 'https://wa.me/' + `${phone}` + '?text=' + `${message.replace(/ /g, "%20")}`
  };

  return (
    <>
      <header>
        <nav
          className={`navbar navbar-expand-lg position-fixed w-100 zindex-dropdown${isSticky ? " sticky-nav" : ""
            }`}
          id="mainnavigationBar"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/" >
              <img src={navigation.logo} alt="Nav-Logo" height={"45px"} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={handleClick}
            >
              <span className="navbar-toggler-default">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="3.5"
                    y1="5.5"
                    x2="21.5"
                    y2="5.5"
                    stroke="#292D32"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="4.5"
                    y1="12.5"
                    x2="21.5"
                    y2="12.5"
                    stroke="#292D32"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="11.5"
                    y1="19.5"
                    x2="21.5"
                    y2="19.5"
                    stroke="#292D32"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="navbar-toggler-toggled">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.5 6.5L6.5 21.5"
                    stroke="#404152"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.5 21.5L6.5 6.5"
                    stroke="#404152"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-20 mb-lg-0">
                {navigation.items.map((link, i) => (
                  <li key={i} className="nav-item">
                    <a
                      href={`${link.link}`}
                      className={`nav-link ${pageUrl?.pathname === link.link ? "active" : ""
                        }`}
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
                <li className="nav-item dropdown">
                  <a className="nav-link " href="/" role="link" data-bs-toggle="dropdown" aria-expanded="false">
                    Productos
                    
                  </a>
                  <ul className="dropdown-menu">
                    {navigation.products.map((link, i) => (
                      <li key={i} >
                        <a
                          href={`${link.link}`}
                          className={`dropdown-item ${pageUrl?.pathname === link.link ? "active" : ""
                            }`}
                        >
                          {link.text}
                        </a>
                      </li>
                    ))}

                  </ul>
                </li>
              </ul>
            </div>
            <div className="d-none d-lg-block">
              <div className="nav-item">
                <a
                  href={`${navigation.btn.link}`}
                  //className="btn btn-sm btn-links"
                  className="btn btn-sm btn-primary"
                >
                  {navigation.btn.text}
                </a>
              </div>
            </div>
            <div className="whsp-container">
              <a href={`${generateLink(navigation.whsp.number, navigation.whsp.message)}`} target="_blank">
                <img src={navigation.whsp.src} alt="Descripción de la imagen" width={"50"} />
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
