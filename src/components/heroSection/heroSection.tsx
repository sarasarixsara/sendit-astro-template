"use client";

interface HeroSectionProps {
  groomName: string;
  brideName: string;
  eventDate: string;
}

export default function HeroSection(block: any) {
  return (
    <section className="hero-section">
      <div className="hero-section__bg">
        <div className="hero-section__bg-blob hero-section__bg-blob--top animate-float-slow" />
        <div className="hero-section__bg-blob hero-section__bg-blob--bottom animate-float-slow-delayed" />
        <div className="hero-section__bg-blob hero-section__bg-blob--middle animate-pulse-very-slow" />
      </div>

      <div className="hero-section__content">
        {/* Floating animated hearts background */}
        <div className="hero-section__floating-bg">
          <div className="hero-section__floating-emoji hero-section__floating-emoji--1 animate-float-up">💗</div>
          <div className="hero-section__floating-emoji hero-section__floating-emoji--2 animate-float-up-delayed">✨</div>
          <div className="hero-section__floating-emoji hero-section__floating-emoji--3 animate-float-up-slower">💕</div>
          <div className="hero-section__floating-emoji hero-section__floating-emoji--4 animate-float-up-delayed-2">🌸</div>
          <div className="hero-section__floating-emoji hero-section__floating-emoji--5 animate-float-up">✨</div>
        </div>

        <div className="hero-section__top">
          <div className="hero-section__ornament">
            <div className="hero-section__ornament-line hero-section__ornament-line--left" />
            <svg className="hero-section__ornament-icon animate-spin-slow" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <div className="hero-section__ornament-line hero-section__ornament-line--right" />
          </div>

          {/* Animated cake with sparkles */}
          <div className="hero-section__cake-wrapper">
            <div className="hero-section__cake-glow animate-pulse-glow" />
            <div className="hero-section__cake-icon animate-bounce-gentle">🎂</div>
            <div className="hero-section__cake-sparkle hero-section__cake-sparkle--top animate-float-sparkle">✨</div>
            <div className="hero-section__cake-sparkle hero-section__cake-sparkle--bottom animate-float-sparkle-delayed">🎉</div>
          </div>

          {/* Animated sparkle trio */}
          <div className="hero-section__sparkles">
            <span className="hero-section__sparkle animate-twinkle">✨</span>
            <span className="hero-section__sparkle hero-section__sparkle--center animate-bounce-intense delay-100">🎉</span>
            <span className="hero-section__sparkle animate-twinkle-delayed">✨</span>
          </div>
        </div>

        {/* Main title with animated gradient */}
        <h1 className="hero-section__title animate-title-shimmer">
          {block.groomName}
        </h1>

        {/* Subtitle with elegant animation */}
        <p className="hero-section__subtitle hero-section__subtitle--primary animate-fade-in-down">
          Te celebramos
        </p>
        <p className="hero-section__subtitle hero-section__subtitle--secondary animate-fade-in-down-delayed">
          🎈 Cumple años en grande 🎈
        </p>

        {/* Decorative elements with animations */}
        <div className="hero-section__divider-section">
          <div className="hero-section__divider-group">
            <div className="hero-section__divider-line hero-section__divider-line--left" />
            <div className="hero-section__divider-dot hero-section__divider-dot--purple animate-pulse-bright" />
          </div>
          <div className="hero-section__divider-ornament animate-spin-slow-reverse">❧</div>
          <div className="hero-section__divider-group">
            <div className="hero-section__divider-line hero-section__divider-line--right" />
            <div className="hero-section__divider-dot hero-section__divider-dot--pink animate-pulse-bright" />
          </div>
        </div>

        {/* Main tagline */}
        <p className="hero-section__tagline animate-fade-in">
          Una noche llena de magia, <span className="hero-section__tagline-highlight">luces y celebración</span> 🌟
        </p>

        {/* Date card with enhanced effects */}
        <div className="hero-section__date-wrapper">
          {/* Animated glow background */}
          <div className="hero-section__date-glow animate-glow-pulse" />
          
          {/* Particle effects around card */}
          <div className="hero-section__date-particle hero-section__date-particle--1 animate-float-particle" />
          <div className="hero-section__date-particle hero-section__date-particle--2 animate-float-particle-delayed" />
          <div className="hero-section__date-particle hero-section__date-particle--3 animate-float-particle-2" />
          
          {/* Main card */}
          <div className="hero-section__date-card">
            <div className="hero-section__date-corner hero-section__date-corner--top-left" />
            <div className="hero-section__date-corner hero-section__date-corner--top-right" />
            <div className="hero-section__date-corner hero-section__date-corner--bottom-left" />
            <div className="hero-section__date-corner hero-section__date-corner--bottom-right" />
            
            {/* Date display with icon */}
            <div className="hero-section__date-icons">
              <svg className="hero-section__date-icon hero-section__date-icon--purple animate-spin-slow" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <svg className="hero-section__date-icon hero-section__date-icon--pink animate-spin-slow-reverse" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            
            <p className="hero-section__date-text animate-fade-in-up">
              {block.eventDate}
            </p>
            
            <div className="hero-section__date-divider">
              <div className="hero-section__date-divider-line hero-section__date-divider-line--left" />
              <span className="hero-section__date-divider-heart animate-pulse-bright">💝</span>
              <div className="hero-section__date-divider-line hero-section__date-divider-line--right" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}