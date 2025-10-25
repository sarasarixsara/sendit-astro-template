"use client";

import { useState, useEffect } from "react";

// interface CountdownProps {
//   eventDate: string; // Format: "15 de Diciembre, 2025"
// }

export default function countDown(block: any) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Parse the Spanish date format
    const months: Record<string, number> = {
      enero: 0, febrero: 1, marzo: 2, abril: 3, mayo: 4, junio: 5,
      julio: 6, agosto: 7, septiembre: 8, octubre: 9, noviembre: 10, diciembre: 11
    };

    const dateParts = block.eventDate.toLowerCase().match(/(\d+)\s+de\s+(\w+),?\s+(\d+)/);
    if (!dateParts) return;

    const day = parseInt(dateParts[1]);
    const month = months[dateParts[2]];
    const year = parseInt(dateParts[3]);
    const targetDate = new Date(year, month, day).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [block.eventDate]);

  return (
    <section className="countdown">
      {/* Elegant background decoration */}
      <div className="countdown__bg-decoration">
        <div className="countdown__bg-blob countdown__bg-blob--top animate-pulse-very-slow" />
        <div className="countdown__bg-blob countdown__bg-blob--bottom animate-pulse-very-slow-delayed" />
      </div>

      {/* Decorative pattern */}
      <div className="countdown__pattern">
        <svg xmlns="http://www.w3.org/2000/svg">
          <pattern id="countdown-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M40,30 Q45,35 40,40 Q35,35 40,30" fill="none" stroke="#a855f7" strokeWidth="0.5" />
            <circle cx="40" cy="40" r="1.5" fill="#a855f7" opacity="0.3" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#countdown-pattern)" />
        </svg>
      </div>

      <div className="countdown__container">
        {/* Header section */}
        <div className="countdown__header">
          {/* Ornamental top */}
          <div className="countdown__header-ornament">
            <div className="countdown__ornament-line countdown__ornament-line--left" />
            <svg className="countdown__ornament-icon animate-spin-slow" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <div className="countdown__ornament-line countdown__ornament-line--right" />
          </div>

          <h2 className="countdown__title">
            Cuenta Regresiva
          </h2>
          
          <div className="countdown__divider-group">
            <div className="countdown__divider-line countdown__divider-line--left" />
            <div className="countdown__divider-symbol">✦</div>
            <div className="countdown__divider-line countdown__divider-line--right" />
          </div>

          <p className="countdown__subtitle">
            Cada momento nos acerca más al gran día
          </p>
        </div>

        {/* Countdown cards */}
        <div className="countdown__cards">
          {[
            { label: "Días", value: timeLeft.days, gradientClass: "purple-pink", delay: "0s" },
            { label: "Horas", value: timeLeft.hours, gradientClass: "pink-purple", delay: "0.2s" },
            { label: "Minutos", value: timeLeft.minutes, gradientClass: "purple-light", delay: "0.4s" },
            { label: "Segundos", value: timeLeft.seconds, gradientClass: "pink-light", delay: "0.6s" },
          ].map((item) => (
            <div
              key={item.label}
              className="countdown__card animate-fade-in-up"
              style={{ animationDelay: item.delay }}
            >
              {/* Background glow effect */}
              <div className={`countdown__card-glow countdown__card-glow--${item.gradientClass}`} />
              
              {/* Card */}
              <div className="countdown__card-content">
                {/* Corner decorations */}
                <div className="countdown__card-corner countdown__card-corner--top-left" />
                <div className="countdown__card-corner countdown__card-corner--top-right" />
                <div className="countdown__card-corner countdown__card-corner--bottom-left" />
                <div className="countdown__card-corner countdown__card-corner--bottom-right" />

                {/* Number with gradient */}
                <div className={`countdown__card-number countdown__card-number--${item.gradientClass}`}>
                  {item.value.toString().padStart(2, "0")}
                </div>

                {/* Divider */}
                <div className="countdown__card-divider">
                  <div className={`countdown__card-divider-line countdown__card-divider-line--${item.gradientClass}`} />
                  <div className={`countdown__card-divider-dot countdown__card-divider-dot--${item.gradientClass}`} />
                  <div className={`countdown__card-divider-line countdown__card-divider-line--${item.gradientClass}`} />
                </div>

                {/* Label */}
                <div className="countdown__card-label">
                  {item.label}
                </div>

                {/* Floating sparkle on hover */}
                <div className="countdown__card-sparkle">
                  <div className={`countdown__card-sparkle-dot countdown__card-sparkle-dot--${item.gradientClass}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom ornament */}
        <div className="countdown__footer">
          <div className="countdown__footer-divider">
            <div className="countdown__footer-line countdown__footer-line--left" />
            <div className="countdown__footer-dot animate-pulse" />
          </div>
          
          <div className="countdown__footer-content">
            <div className="countdown__footer-icon">🎂</div>
            <p className="countdown__footer-text">
              Un día para celebrar juntas
            </p>
          </div>

          <div className="countdown__footer-divider">
            <div className="countdown__footer-line countdown__footer-line--right" />
            <div className="countdown__footer-dot animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
