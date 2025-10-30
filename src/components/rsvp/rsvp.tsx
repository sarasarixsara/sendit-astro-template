"use client";

// interface RSVPProps {
//   whspUrl: string;
//   emailUrl: string;
//   phone: string;
// }

export default function Rsvp(block: any) {
  return (
    <section className="Rsvp">
      {/* Background decoration */}
      <div className="rsvp__bg-decoration">
        <div className="rsvp__bg-blob rsvp__bg-blob--top animate-pulse-slow" />
        <div className="rsvp__bg-blob rsvp__bg-blob--bottom animate-pulse-slow-delayed" />
      </div>

      {/* Decorative pattern */}
      <div className="rsvp__pattern">
        <svg xmlns="http://www.w3.org/2000/svg">
          <pattern id="rsvp-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <circle cx="40" cy="40" r="1" fill="#a855f7" />
            <path d="M40,35 Q43,38 40,41 Q37,38 40,35" fill="none" stroke="#a855f7" strokeWidth="0.3" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#rsvp-pattern)" />
        </svg>
      </div>

      <div className="rsvp__container">
        {/* Header */}
        <div className="rsvp__header">
          <div className="rsvp__header-ornament">
            <div className="rsvp__ornament-line rsvp__ornament-line--left" />
            <svg className="rsvp__ornament-icon animate-pulse-gentle" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <div className="rsvp__ornament-line rsvp__ornament-line--right" />
          </div>

          <h2 className="rsvp__title">
            Confirma tu Asistencia
          </h2>
          
          <div className="rsvp__divider-group">
            <div className="rsvp__divider-line rsvp__divider-line--left" />
            <div className="rsvp__divider-symbol">✦</div>
            <div className="rsvp__divider-line rsvp__divider-line--right" />
          </div>

          <p className="rsvp__subtitle">
            Tu presencia es el mejor regalo que podemos recibir
          </p>
        </div>

        {/* Main RSVP Card */}
        <div className="rsvp__card-wrapper">
          {/* Glow effect */}
          <div className="rsvp__card-glow" />
          
          <div className="rsvp__card">
            {/* Corner ornaments */}
            <div className="rsvp__corner rsvp__corner--top-left" />
            <div className="rsvp__corner rsvp__corner--top-right" />
            <div className="rsvp__corner rsvp__corner--bottom-left" />
            <div className="rsvp__corner rsvp__corner--bottom-right" />

            {/* Deadline message */}
            <div className="rsvp__deadline">
              <div className="rsvp__deadline-badge">
                <svg className="rsvp__deadline-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="rsvp__deadline-text">
                  Confirma antes del <span className="rsvp__deadline-date">1 de Diciembre</span>
                </p>
              </div>
            </div>

            {/* Contact buttons */}
            <div className="rsvp__buttons">
              {/* WhatsApp Button */}
              <a
                href={block.whspUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rsvp__button-wrapper"
              >
                {/* Button glow */}
                <div className="rsvp__button-glow rsvp__button-glow--whatsapp" />
                
                <div className="rsvp__button rsvp__button--whatsapp">
                  <svg className="rsvp__button-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span className="rsvp__button-text">WhatsApp</span>
                  
                  {/* Sparkle effect */}
                  <div className="rsvp__button-sparkle" />
                </div>
              </a>

              {/* Phone Button */}
              <a
                href={`tel:${block.phone}`}
                className="rsvp__button-wrapper"
              >
                <div className="rsvp__button-glow rsvp__button-glow--email" />
                
                <div className="rsvp__button rsvp__button--email">
                  {/* <svg className="rsvp__button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg> */}
                   📞
                  
                  <div className="rsvp__button-sparkle" />
                </div>
              </a>
            </div>

            {/* Phone contact */}
            {/* <div className="rsvp__phone">
              <div className="rsvp__phone-badge">
                <div className="rsvp__phone-icon-wrapper">
                  <svg className="rsvp__phone-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="rsvp__phone-text">
                  O llámanos al: <span className="rsvp__phone-number">{block.phone}</span>
                </p>
              </div>
            </div> */}

            {/* Bottom ornament */}
            <div className="rsvp__footer">
              <div className="rsvp__footer-divider">
                <div className="rsvp__footer-line rsvp__footer-line--left" />
                <div className="rsvp__footer-dot animate-pulse" />
              </div>
              
              <div className="rsvp__footer-heart-wrapper">
                <div className="rsvp__footer-heart-glow" />
                <svg className="rsvp__footer-heart" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>

              <div className="rsvp__footer-divider">
                <div className="rsvp__footer-line rsvp__footer-line--right" />
                <div className="rsvp__footer-dot animate-pulse" />
              </div>
            </div>

            {/* Thank you message */}
            <p className="rsvp__thank-you">
              ¡Esperamos verte allí!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
