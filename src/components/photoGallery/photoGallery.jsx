import { useState, useEffect, useRef } from 'react';

export default function PhotoGallery({ title, subtitle, images, autoplay = true, autoplaySpeed = 50 }) {
  const [offset, setOffset] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(autoplay);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  // Duplicar imágenes para efecto infinito
  const duplicatedImages = images ? [...images, ...images, ...images] : [];

  useEffect(() => {
    if (!isAutoplay || !images || images.length === 0) return;

    const animate = () => {
      setOffset((prev) => {
        const newOffset = prev - 1;
        // Reset cuando llegue al final del primer set
        if (Math.abs(newOffset) >= containerRef.current?.scrollWidth / 3) {
          return 0;
        }
        return newOffset;
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isAutoplay, images]);

  if (!images || images.length === 0) {
    return null;
  }

  const toggleAutoplay = () => {
    setIsAutoplay(!isAutoplay);
  };

  const scrollLeft = () => {
    setOffset((prev) => prev + 300);
  };

  const scrollRight = () => {
    setOffset((prev) => prev - 300);
  };

  return (
    <section className="photo-gallery">
      <div className="photo-gallery__container">
        {title && (
          <div className="photo-gallery__header">
            <h2 className="photo-gallery__title">{title}</h2>
            {subtitle && <p className="photo-gallery__subtitle">{subtitle}</p>}
          </div>
        )}

        <div className="photo-gallery__carousel">
          <div className="photo-gallery__track-container">
            <div 
              ref={containerRef}
              className="photo-gallery__track"
              style={{ transform: `translateX(${offset}px)` }}
            >
              {duplicatedImages.map((image, index) => (
                <div
                  key={index}
                  className="photo-gallery__slide"
                >
                  <img
                    src={image.src}
                    alt={image.alt || `Foto ${(index % images.length) + 1}`}
                    className="photo-gallery__image"
                    loading="lazy"
                  />
                  {/* {image.caption && (
                    <div className="photo-gallery__caption-overlay">
                      <p className="photo-gallery__caption">{image.caption}</p>
                    </div>
                  )} */}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollLeft}
            className="photo-gallery__arrow photo-gallery__arrow--prev"
            aria-label="Desplazar izquierda"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button
            onClick={scrollRight}
            className="photo-gallery__arrow photo-gallery__arrow--next"
            aria-label="Desplazar derecha"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={toggleAutoplay}
            className="photo-gallery__play-pause"
            aria-label={isAutoplay ? 'Pausar' : 'Reproducir'}
          >
            {isAutoplay ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" rx="1"/>
                <rect x="14" y="4" width="4" height="16" rx="1"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
