import { useState, useEffect } from "react";

// Importar imágenes y videos
import coffeVideo from "./assets/coffeeVideo.mp4"; // Video en formato .mp4
import coffee1 from "./assets/coffee1.jpg"; // Imagen 1
import coffee2 from "./assets/coffee2.jpg"; // Imagen 2

// Lista de recursos (imágenes y videos)
const media = [
  { type: "video", src: coffeVideo },
  { type: "image", src: coffee1 },
  { type: "image", src: coffee2 },
];

const MediaCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Cambiar el índice automáticamente cada 3 segundos con transición
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true); // Iniciar la transición
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
        setIsFading(false); // Finalizar la transición
      }, 500); // Duración de la transición (en ms)
    }, 3000); // Intervalo de 3 segundos

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

  const currentMedia = media[currentIndex];

  return (
    <div className="relative w-full h-full max-w-full mx-auto overflow-hidden">
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Mostrar el contenido actual (video o imagen) */}
        {currentMedia.type === "video" ? (
          <video
            src={currentMedia.src}
            autoPlay
            muted
            loop
            className="object-cover w-full h-full"
          />
        ) : (
          <img
            src={currentMedia.src}
            alt="Coffee"
            className="object-cover w-full h-full"
          />
        )}
      </div>
    </div>
  );
};

export default MediaCarousel;
