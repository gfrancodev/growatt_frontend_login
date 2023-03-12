import React from "react";
import { Box } from "@chakra-ui/react";

import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { Swiper } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";

type Props = {
  children: React.ReactNode;
};

const Settings = {
  grabCursor: true,
  centeredSlides: false,
  spaceBetween: 5,
  slidesPerView: 5,
  loop: false,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  navigation: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  modules: [EffectCoverflow, Pagination, Navigation],
};

export const Carosel3D = ({
  children,
}: Props & React.ComponentProps<typeof Box>) => {
  return (
    <Box
      py={6}
      px={{
        base: 3,
        md: 6,
      }}
      w={"full"}
      h={"full"}
      color={"white"}
    >
      <Swiper effect="coverflow" {...Settings}>
        {children}
      </Swiper>
    </Box>
  );
};
