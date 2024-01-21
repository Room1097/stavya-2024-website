import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Separator } from "../ui/separator";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Footer from "../footer/Footer";

const Gallery = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center text-black font-mono h-24 text-4xl">
        Stavya 2023
      </div>
      <Separator className="w-[80vw] m-auto" />
      <div className="w-full h-[28rem] p-10">
        <Swiper
          slidesPerView={5}
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
        >
          <SwiperSlide>
            <img src="https://picsum.photos/200/300?grayscale" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/200/300?grayscale" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/200/300?grayscale" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/200/300?grayscale" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/200/300?grayscale" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/200/300?grayscale" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/200/300?grayscale" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/200/300?grayscale" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/200/300?grayscale" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/200/300?grayscale" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>

      <Separator className="w-[80vw] m-auto" />
      <div className="w-full h-[28rem] p-10">
        <Swiper
          slidesPerView={5}
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
        >
          <SwiperSlide>
            <img src="https://picsum.photos/200/300?grayscale" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/200/300?grayscale" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/200/300?grayscale" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/200/300?grayscale" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/200/300?grayscale" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/200/300?grayscale" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/200/300?grayscale" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/200/300?grayscale" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/200/300?grayscale" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
