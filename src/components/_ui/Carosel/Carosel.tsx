import React from "react";

import { Box, useMediaQuery } from "@chakra-ui/react";

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
  spaceBetween: 50,
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

export const Carosel = ({
  children,
}: Props & React.ComponentProps<typeof Box>) => {
  const [mobile] = useMediaQuery("(max-width: 1345px)");
  return (
    <Box
      px={{
        base: 3,
        md: 6,
      }}
      w={"full"}
      h={"full"}
      color={"white"}
    >
      <Swiper
        {...Settings}
        effect="fade"
        style={{
          height: "100%",
          padding: "1rem 0",
          position: "relative",
        }}
        slidesPerView={mobile ? 1 : 3}
      >
        {children}
      </Swiper>
    </Box>
  );
};
