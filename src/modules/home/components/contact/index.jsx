import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Item from "./item";

const Contact = ({ data }) => {
  return (
    <div>
      <Swiper // install Swiper modules
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Item data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Contact;
