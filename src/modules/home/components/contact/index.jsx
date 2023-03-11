import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import Item from "./item";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Container } from "./style";

const Contact = ({ data }) => {
  return (
    <Container>
      <Swiper
        speed={1000}
        autoplay
        loop
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Item data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Contact;
