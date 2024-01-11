import React, { useState, useEffect } from 'react';

export default function GlobalFeature() {
  const [location, setLocation] = useState(null);
  const [reloadLocation, setReloadLocation] = useState(false);

  const handleGetLocation = () => {
    setReloadLocation(!reloadLocation);
  };

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
          },
          (error) => {
            console.error('Error getting location:', error.message);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };

    if (reloadLocation) {
      getLocation();
    }
  }, [reloadLocation]);

  return (
    <section className="container my-8">
      <div className="">
        <div className="justify-content-center align-items-center" style={{ display: 'flex', flexDirection: 'column' }}>
          <h1 className="text-center">Obten tu Ubicación</h1>
          <div className="text-center">
            Para poder brindarte una asesoría personalizada necesitamos conocer tu ubicación.
          </div>
          <button
            onClick={handleGetLocation}
            className="btn btn-sm btn-links my-4"
          >
            Obtener Ubicación
          </button>
        </div>
      </div>
      <div className="flex col-lg-12">
        {location && (
          <div className=" flex ">
            <div className='justify-content-around px-lg-12 feature-item-content' style={{ display: 'flex' }}>
              <p>Latitud: {location.latitude}</p>
              <p>Longitud: {location.longitude}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
