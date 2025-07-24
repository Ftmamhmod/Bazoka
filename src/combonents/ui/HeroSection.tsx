import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Hero1 from "../../assets/images/171467158439066.jpg";
import Hero2 from "../../assets/images/1714671691365642.jpg";
import "./../../../node_modules/swiper/swiper.min.css";
import "./../../../node_modules/swiper/swiper-bundle.min.css";

const HeroSection = () => {
  return (
    <div className="relative -z-10">
      <div className="w-full flex items-center justify-between absolute top-0 left-0 z-10 px-4 py-2">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="hero-swiper h-[60vh] md:h-[80vh] lg:h-96 w-screen"
        >
          <SwiperSlide className="relative">
            <div className="absolute inset-0 overflow-hidden">
              <img
                loading="lazy"
                src={Hero1}
                alt="Grocery Products"
                className="w-screen h-full object-cover min-h-full min-w-full sm:object-fill md:object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="absolute inset-0 overflow-hidden">
              <img
                loading="lazy"
                src={Hero2}
                alt="Grocery Products"
                className="w-full h-full object-cover min-h-full min-w-full sm:object-fill md:object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;
