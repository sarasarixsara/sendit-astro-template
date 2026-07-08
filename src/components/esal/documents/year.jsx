import DocumentItem from "./documentItem";

export default function Year({ yearData, index }) {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header"
                id={`heading${index}`}
            >
                <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                > 
                  <h3>{yearData.year}</h3> 
                
                </button>
            </h2>
            <div id={`collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${index}`}

            >
                {
                    yearData.documents.map((documentItem, docIndex) => (
                        <DocumentItem
                            documentItem={documentItem} docIndex={docIndex} key={docIndex}
                        />
                    ))
                }
            </div>
        </div>
    );
}