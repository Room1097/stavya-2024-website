import { Swiper, SwiperSlide } from "swiper/react"
import { Separator } from "../ui/separator"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/autoplay"

const Gallery = () => {
  return (
    <>
        <div className="w-full flex justify-center items-center text-white font-mono h-24 text-4xl">
        Stavya 2K23
      </div>
      <Separator className="w-[80vw] m-auto" />
      <div className=" w-full h-[33rem] p-10">

      <Swiper
      slidesPerView={5}
      modules={[Autoplay]}
      autoplay={true}
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
      </Swiper>
        </div>
    </>
  )
}

export default Gallery