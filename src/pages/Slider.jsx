import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function Slider({ recipe }) {
  console.log(recipe);
  return (
    <div className="w-full md:max-w-[450px] ">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        // spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {recipe &&
          recipe.images.map((image) => {
            return (
              <SwiperSlide key={image}>
                <img
                  className=" h-[250px] w-full rounded-lg object-cover md:h-[350px] md:max-w-[450px] md:rounded-l-lg"
                  src={image}
                  alt="..."
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}

export default Slider;
