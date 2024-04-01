import emailjs from '@emailjs/browser';
import React, { useState, useRef  } from "react";
import MarkdownIt from "markdown-it";

export default function GlobalSignup(block) {
  var templateParams = {
    name: 'James',
    notes: 'Check this out!',
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_dk5p6bl', 'template_05t3vth', form.current , {
        publicKey: 'RBubUaasZiS4FI7mJ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
 }
  return (
    <section className="sing-up pt-md-20 pt-18 pb-md-20 pb-10">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mx-auto">
            <div className="contact-body">
              <h2>
                {block.title} <br /> {block.title2}{" "}
              </h2>
              <form className="sing-up-items row gy-4 gx-3" ref={form} onSubmit={sendEmail}>
                <div className="col-md-12">
                  <label htmlFor="fullName" name="email" className="form-label">
                    {block.form.fullname.heading}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    name="email"
                    placeholder={block.form.fullname.placeholder}
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="pEmailId" className="form-label" name="service">
                    {block.form.email.heading}
                  </label>
                  <select className="form-select" id="pEmailId" name="service" >
                    <option value="bull" selected disabled>
                      Selecciona el servicio
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

                <div className="col-md-12" style={{display: "flex", justifyContent: "center"}}>
                  <button type="submit" className="btn btn-submit w-30" reload="false">
                    {block.form.sign_up_text}
                  </button>
                </div>
                <div className="col-md-12 mt-3">
                  <label htmlFor="" className="d-block text-center mb-0">
                    ó
                  </label>
                </div>

                <div className="divider mt-5"></div>
                <div className="col-md-12" style={{display: "flex", justifyContent: "center"}}>
                 <a href="https://api.whatsapp.com/send/?phone=573138825184&text=Me+interesa+conocer+mas+sobre+sus+productos&type=phone_number&app_absent=0" target='_blank'>
                 <img src="images/whsp-button.png" alt="" width={60} />
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