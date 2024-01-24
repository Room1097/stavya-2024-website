// Gallery.tsx

import React from "react";
import { Separator } from "../ui/separator";
import SwiperComponent from "./galleryComponent";
import Footer from "../footer/Footer";

const Gallery = () => {
  // Example JSON file with image sources
  const swiperData1 = [
    "https://picsum.photos/536/354",
    "https://picsum.photos/536/354",
    "https://picsum.photos/536/354",
    "https://picsum.photos/536/354",
    "https://picsum.photos/536/354",
    "https://picsum.photos/536/354",
    "https://picsum.photos/536/354",
    "https://picsum.photos/536/354",
    "https://picsum.photos/536/354",
    
  ];

  const swiperData2 = [
    "https://picsum.photos/536/354",
    "https://picsum.photos/536/354",
    "https://picsum.photos/536/354",
    "https://picsum.photos/536/354",
    "https://picsum.photos/536/354",
    "https://picsum.photos/536/354",
    "https://picsum.photos/536/354",
    "https://picsum.photos/536/354",
    "https://picsum.photos/536/354",
    
  ];

  return (
    <>
      <div className="w-full lg:h-[28rem] p-10">
        <SwiperComponent images={swiperData1} autoplayDelay={2000} reverseDirection={true} />
      </div>

      <Separator className="w-[80vw] m-auto" />

      <div className="w-full h-[28rem] p-10">
        <SwiperComponent images={swiperData2} autoplayDelay={2000} reverseDirection={false} />
      </div>

      <Footer />
      
    </>
  );
};

export default Gallery;
