"use client";

export default function EventDetails(block: any){
  return (
    <section className="event-details">
      {/* Background decoration */}
      <div className="event-details__bg-decoration">
        <div className="event-details__bg-blob event-details__bg-blob--top animate-pulse-very-slow" />
        <div className="event-details__bg-blob event-details__bg-blob--bottom animate-pulse-very-slow-delayed" />
      </div>

      {/* Decorative pattern */}
      <div className="event-details__pattern">
        <svg xmlns="http://www.w3.org/2000/svg">
          <pattern id="details-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="1" fill="#a855f7" />
            <path d="M30,25 Q33,28 30,31 Q27,28 30,25" fill="none" stroke="#a855f7" strokeWidth="0.3" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#details-pattern)" />
        </svg>
      </div>

      <div className="event-details__container">
        {/* Header */}
        <div className="event-details__header">
          <div className="event-details__header-ornament">
            <div className="event-details__ornament-line event-details__ornament-line--left" />
            <svg className="event-details__ornament-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <div className="event-details__ornament-line event-details__ornament-line--right" />
          </div>

          <h2 className="event-details__title">
            Detalles del Evento
          </h2>
          
          <div className="event-details__divider-group">
            <div className="event-details__divider-line event-details__divider-line--left" />
            <div className="event-details__divider-symbol">✦</div>
            <div className="event-details__divider-line event-details__divider-line--right" />
          </div>

          {block.message1 && (
            <p className="event-details__message">
              {block.message2}
            </p>
          )}
        </div>

        {/* Ceremony & Reception Cards */}
        <div className="event-details__cards">
          {/* Celebration */}
          <div className="event-details__card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Glow effect */}
            <div className="event-details__card-glow event-details__card-glow--pink" />
            
            <div className="event-details__card-content event-details__card-content--pink">
              {/* Corner decorations */}
              <div className="event-details__card-corner event-details__card-corner--top-left event-details__card-corner--pink" />
              <div className="event-details__card-corner event-details__card-corner--top-right event-details__card-corner--pink" />
              <div className="event-details__card-corner event-details__card-corner--bottom-left event-details__card-corner--pink" />
              <div className="event-details__card-corner event-details__card-corner--bottom-right event-details__card-corner--pink" />

              {/* Icon with glow */}
              <div className="event-details__card-icon-wrapper">
                <div className="event-details__card-icon-container">
                  <div className="event-details__card-icon-glow event-details__card-icon-glow--pink" />
                  <div className="event-details__card-icon-bg event-details__card-icon-bg--pink">
                    <svg className="event-details__card-icon" fill="none" stroke="url(#celebration-gradient)" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <defs>
                        <linearGradient id="celebration-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ec4899" />
                          <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                      </defs>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <h3 className="event-details__card-title event-details__card-title--celebration">
                Celebración
              </h3>

              {/* Divider */}
              <div className="event-details__card-divider">
                <div className="event-details__card-divider-line event-details__card-divider-line--pink-left" />
                <div className="event-details__card-divider-dot event-details__card-divider-dot--pink" />
                <div className="event-details__card-divider-line event-details__card-divider-line--pink-right" />
              </div>

              <div className="event-details__card-info">
                <div className="event-details__card-info-item">
                  <div className="event-details__card-info-icon-wrapper">
                    <svg className="event-details__card-info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="event-details__card-info-text">Te esperamos a las 6:00 pm</p>
                </div>

                <div className="event-details__card-info-item">
                  <div className="event-details__card-info-icon-wrapper">
                    <svg className="event-details__card-info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="event-details__card-info-text event-details__card-info-text--center">{block.receptionPlace}</p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="event-details__card animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="event-details__card-glow event-details__card-glow--purple" />
            
            <div className="event-details__card-content event-details__card-content--purple event-details__card-content--dress-code">
              <div className="event-details__card-corner event-details__card-corner--top-left event-details__card-corner--purple" />
              <div className="event-details__card-corner event-details__card-corner--top-right event-details__card-corner--purple" />
              <div className="event-details__card-corner event-details__card-corner--bottom-left event-details__card-corner--purple" />
              <div className="event-details__card-corner event-details__card-corner--bottom-right event-details__card-corner--purple" />

              <div className="event-details__card-icon-wrapper">
                <div className="event-details__card-icon-container">
                  <div className="event-details__card-icon-glow event-details__card-icon-glow--purple" />
                  <div className="event-details__card-icon-bg event-details__card-icon-bg--purple">
                    <svg className="event-details__card-icon" fill="none" stroke="url(#dress-gradient)" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <defs>
                        <linearGradient id="dress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                      </defs>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              <h3 className="event-details__card-title event-details__card-title--dress-code">
                Código de Vestimenta
              </h3>

              <div className="event-details__card-divider">
                <div className="event-details__card-divider-line event-details__card-divider-line--purple-left" />
                <div className="event-details__card-divider-dot event-details__card-divider-dot--purple" />
                <div className="event-details__card-divider-line event-details__card-divider-line--purple-right" />
              </div>

              <div className="event-details__card-dress-content">
                <p className="event-details__card-dress-text">{block.dressCode}</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
