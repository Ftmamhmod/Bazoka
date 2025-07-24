import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import img1 from "../../assets/images/s-1745166789333786.jpg";
import img2 from "../../assets/images/s-1745762720201948.jpg";
import img3 from "../../assets/images/s-1748350339481110.jpg";
import img4 from "../../assets/images/s_1753013659483730.jpg";
import img5 from "../../assets/images/s-1748350792622885.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
    <div className="mb-12 ">
      <h2 className="text-2xl font-bold  mb-6 text-yellow-primary">{title}</h2>
      <div className="relative w-full">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={products.length === 1}
          breakpoints={{
            480: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          className="product-carousel "
        >
          {products.map((product) => (
            <SwiperSlide className="py-2 " key={product.id}>
              <img src={product?.images} alt={product?.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductCarousel;
