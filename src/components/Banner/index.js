import React, { useState, useEffect } from "react";
import image1 from "../../asset/images/kkn.jpg";
import image2 from "../../asset/images/kkn2.jpeg";
import image3 from "../../asset/images/kkn3.jpeg";

export default function Banner() {
  const images = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(Math.random() * images.length)
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) => {
        const nextIndex = (currentIndex + 1) % images.length;
        return nextIndex;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-container">
      <img
        height={250}
        width={1000}
        src={images[currentIndex]}
        alt="shuffled"
      />
    </div>
  );
}
