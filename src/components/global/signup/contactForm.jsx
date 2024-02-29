export default function GlobalSignup(block) {
  return (
    <section className="sing-up pt-md-20 pt-18 pb-md-20 pb-10">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mx-auto">
            <div className="contact-body">
              <h2>
                {block.title} <br /> {block.title2}{" "}
              </h2>
              <form className="sing-up-items row gy-4 gx-3">
                <div className="col-md-12">
                  <label htmlFor="fullName" className="form-label">
                    {block.form.fullname.heading}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    placeholder={block.form.fullname.placeholder}
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="pEmailId" className="form-label">
                    {block.form.email.heading}
                  </label>
                  <select className="form-select" id="pEmailId" >
                    <option value="bull" selected disabled>
                      Selecciona el servicio
                    </option>
                    <option value="" selected>
                      {block.form.email.placeholder}
                    </option>
                    <option value="servicio1" selected>
                      Servicio 1
                    </option>
                    <option value="servicio2" selected>
                      Servicio 2
                    </option>

                    {/* Aquí puedes agregar opciones adicionales si es necesario */}
                  </select>
                </div>

                <div className="col-md-12">
                  <button type="submit" className="btn btn-submit w-30">
                    {block.form.sign_up_text}
                  </button>
                </div>
                <div className="col-md-12 mt-3">
                  <label htmlFor="" className="d-block text-center mb-0">
                    or
                  </label>
                </div>

                <div className="divider mt-9"></div>
                <div className="col-md-12">
                  <a
                    href={block.form.log_in_button.link}
                    className="create-account"
                  >
                    {block.form.log_in_button.text}
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
