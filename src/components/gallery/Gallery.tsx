// Gallery.tsx

import { Separator } from "../ui/separator";
import SwiperComponent from "./galleryComponent";
import Footer from "../footer/Footer";

const Gallery = () => {
  // Example JSON file with image sources
  const swiperData1 = [
    "img/gallery/1.jpg",
    "img/gallery/2.JPG",
    "img/gallery/3.JPG",
    "img/gallery/4.JPG",
    "img/gallery/5.JPG",
    "img/gallery/6.JPG",
    "img/gallery/7.JPG",
    "img/gallery/8.JPG",
    "img/gallery/9.JPG",
    "img/gallery/10.JPG",
    "img/gallery/11.JPG",
    "img/gallery/12.JPG",
    "img/gallery/13.JPG",
    "img/gallery/14.JPG",
    "img/gallery/15.JPG",
    "img/gallery/16.JPG",
    "img/gallery/17.JPG",
    "img/gallery/18.JPG",
    
  ];

  const swiperData2 = [
    "img/gallery/gallery_1.JPG",
    "img/gallery/gallery_2.JPG",
    "img/gallery/gallery_3.JPG",
    "img/gallery/gallery_4.JPG",
    "img/gallery/gallery_5.JPG",
    "img/gallery/gallery_6.JPG",
    "img/gallery/gallery_7.JPG",
    "img/gallery/gallery_8.JPG",
    "img/gallery/gallery_9.JPG",
    "img/gallery/gallery_10.JPG",
    "img/gallery/gallery_11.JPG",
    "img/gallery/gallery_12.JPG",
    "img/gallery/gallery_13.JPG",
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      
      <h1 className="font-Undev lg:text-8xl text-5xl">STAVYA2023</h1>

      <Separator className="w-[100vw] my-[20px]" />

      <h1 className="lg:text-4xl text-3xl font-NetHouse">Cultural Events</h1>


      <div className="w-full p-10">
        <SwiperComponent images={swiperData1} autoplayDelay={1500} reverseDirection={true} />
      </div>

      <Separator className="w-[100vw] mb-[20px]" />

      <h1 className="lg:text-4xl text-3xl font-NetHouse">Literature Events</h1>

      <div className="w-full p-10">
        <SwiperComponent images={swiperData2} autoplayDelay={1500} reverseDirection={false} />
      </div>

      <Footer />
      
    </div>
  );
};

export default Gallery;
