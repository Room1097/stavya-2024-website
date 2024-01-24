import React, { useState, useEffect } from "react";
import { Swiper as SwiperReact, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

interface SwiperComponentProps {
  images: string[];
  autoplayDelay?: number;
  reverseDirection?: boolean;
}

const SwiperComponent: React.FC<SwiperComponentProps> = ({
  images,
  autoplayDelay = 2000,
  reverseDirection = true,
}) => {
  const [slideCount, setSlideCount] = useState(getInitialSlideCount);

  useEffect(() => {
    function handleResize() {
      setSlideCount(getInitialSlideCount());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function getInitialSlideCount() {
    return window.innerWidth < 640 ? 1 : 3;
  }

  const spaceBetween = window.innerWidth < 640 ? 20 : 40; // Adjust the gap based on your preference

  return (
    <SwiperReact
      slidesPerView={slideCount}
      spaceBetween={spaceBetween}
      modules={[Autoplay]}
      loop={true}
      autoplay={{
        delay: autoplayDelay,
        disableOnInteraction: false,
        reverseDirection: reverseDirection,
      }}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img src={src} alt="" className="aspect-video"/>
        </SwiperSlide>
      ))}
    </SwiperReact>
  );
};

export default SwiperComponent;
