"use client";

interface HeroSectionProps {
  groomName: string;
  eventDate: string;
}

const baseUrl = import.meta.env.BASE_URL;

export default function HeroSection(block: any) {
  return (
    <section className="hero-section">
      {/* Background image - responsive for mobile/desktop */}
      <div className="hero-section__background">
        <div className="hero-section__background-mobile" />
        <div className="hero-section__background-desktop" />
      </div>

      {/* Content container */}
      <div className="hero-section__container">
        {/* Photo at top center */}
        <div className="hero-section__photo-wrapper">
          <div className="hero-section__photo-glow" />
          <img 
            src={`${baseUrl}/images/birthday/photo.png`} 
            alt={block.groomName}
            className="hero-section__photo"
          />
        </div>

        {/* Invitation text below photo */}
        <div className="hero-section__invitation">
            <h1 className="hero-section__name ">
            Mis 15 años ❤
          </h1>
          <h2 className="hero-section__name">
            {block.groomName}
          </h2>
   

        </div>
      </div>
    </section>
  );
}