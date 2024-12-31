import React, { useEffect } from "react";
import "./carousel.csss";

const Carousel = () => {
  const images = [
    "https://unsplash.com/photos/a-chair-and-a-table-in-a-room--zrid3JkehQ",
    "https://unsplash.com/photos/white-sofa-chair-near-fireplace-H-1j_s0dhCw",
    "https://unsplash.com/photos/brown-wooden-board-on-white-table-cIW11hVB584",
    "https://unsplash.com/photos/white-sectional-sofa-and-black-table-mcL2f-J74GY",
    "https://www.pinterest.com/pin/463800461644678537/",
    "https://pin.it/19eCz7NAO",
    "https://www.pinterest.com/pin/770889661247240271/",
  ];

  useEffect(() => {
    const images = document.querySelectorAll(".carousel__img");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("grow");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    images.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div className="carousel__img-container" key={index}>
          <img
            src={image}
            alt={`Slide ${index}`}
            className="carousel__img"
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
