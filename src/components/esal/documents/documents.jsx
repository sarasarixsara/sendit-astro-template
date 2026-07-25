import Year from "./year";

export default function EsalDocuments({ title,description,years }) {
  return (
    <section className="faq-two esal-documents">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-header">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="accordion" id="esalYearsAccordion">
              {years.map((year, index) => (
                <Year yearData={year} index={index} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
