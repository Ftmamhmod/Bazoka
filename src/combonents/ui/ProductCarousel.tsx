import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import img1 from "../../assets/images/s-1745166789333786.jpg";
import img2 from "../../assets/images/s-1745762720201948.jpg";
import img3 from "../../assets/images/s-1748350339481110.jpg";
import img4 from "../../assets/images/s_1753013659483730.jpg";
import img5 from "../../assets/images/s-1748350792622885.jpg";

import "./../../../node_modules/swiper/swiper.min.css";
import "./../../../node_modules/swiper/swiper-bundle.min.css";

const products = [
  { id: 1, images: img1, title: "Product 1" },
  { id: 2, images: img2, title: "Product 2" },
  { id: 3, images: img3, title: "Product 3" },
  { id: 4, images: img4, title: "Product 4" },
  { id: 5, images: img5, title: "Product 5" },
];
const title = "Best sellers";
const ProductCarousel = () => {
  return (
    <div className="justify-center items-center flex flex-col gap-4">
      <h2 className="md:text-2xl text-sm font-bold  mb-6 text-yellow-primary">
        {title}
      </h2>
      <div className="relative w-full">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={products.length === 1}
          breakpoints={{
            480: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          className="product-carousel "
        >
          {products.map((product) => (
            <SwiperSlide
              className="py-3 px-2 flex justify-center "
              key={product.id}
            >
              <img
                className=" w-50 md:w-full sm:w-50 object-cover rounded-lg shadow-lg"
                src={product?.images}
                alt={product?.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductCarousel;
