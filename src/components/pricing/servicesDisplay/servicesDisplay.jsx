import React, { useState } from 'react';
import MarkdownIt from "markdown-it";

export default function ServicesSlider(block) {
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <div className="slider-container">
            <div className="header-section">
                <h2>{block.title}</h2>
            </div>
            <div className="card-container">
                <div className="row">
                    {block.slider.slice(0, showAll ? block.slider.length : 3).map((slide, i) => (
                        <Services slide={slide} i={i} key={i} />
                    ))}
                </div>
                
            </div>
            {!showAll && (
                    <div className="text-center mt-3">
                        <button className="btn btn-primary" onClick={toggleShowAll}>Mostrar más</button>
                    </div>
                )}
        </div>
    );
}

function Services({ slide, i }) {
    return (
        <div className="col-lg-4 col-md-6 mb-5" key={i}>
            <div className="image">
                <img className="img" src={slide.src} alt="" />
            </div>
            <div className="text-slide">
                <h5>{slide.descp}</h5>
            </div>
        </div>
    );
}
