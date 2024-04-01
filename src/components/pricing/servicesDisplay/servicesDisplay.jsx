import React, { useState, useEffect } from "react";

export default function ServicesSlider(block) {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Verificamos si estamos en el navegador antes de agregar el event listener
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }

    // Limpiamos el event listener en el componente se desmonta
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  if (!windowWidth) {
    return null; // Otra opción podría ser mostrar un spinner o un mensaje de carga
  }

  const maxSlidesToShow = windowWidth < 768 ? 2 : 3;
  return (
    <div className="slider-container" id="soluciones">
      <div className="header-section">
        <h2>{block.title}</h2>
      </div>
      <div className="card-container">
      <div className="row">
      {block.sliders
        .slice(0, showAll ? block.sliders.length : maxSlidesToShow)
        .map((slides, i) => (
          <Services slides={slides} i={i} key={i} />
        ))}
    </div>
      </div>
      {!showAll && (
        <div className="text-center mt-3">
          <button className="btn btn-primary" onClick={toggleShowAll}>
            Mostrar más
          </button>
        </div>
      )}
    </div>
  );
}

function Services({ slides, i }) {
  return (
    <div className="col-lg-4 col-md-6 mb-5" style={{ height: "420px" }}>
      <button
        type="button"
        class="btn-service"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <div key={i}>
          <img className="img" src={slides.src} alt="" />
          <div className="text-slide">
            <h5>{slides.service}</h5>
          </div>
        </div>
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        
      >
        <div className="modal-dialog" style={{ maxWidth: "1000px" }}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel" key={i}>
                {slides.service}
              </h1>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" key={i}>
              <h2>Descripcion</h2>
              <p>{slides.desc}</p>

              <div key={i}>
                <img className="img" src={slides.src} alt="" />
                <div className="text-slide">
                  <h5>{slides.service}</h5>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

);

}
<style>
 
</style>
