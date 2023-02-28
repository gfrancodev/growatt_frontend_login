import React from "react";
import { Stack } from "@chakra-ui/react";
import Slider from "react-slick";

interface CaroselProps {
  slidesToShow: number;
  children: React.ReactNode;
}

export default function Carosel({ slidesToShow, children }: CaroselProps) {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
  };

  return (
    <Stack spacing={5} mx={"auto"} display="flex">
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Slider {...settings}>{children}</Slider>
    </Stack>
  );
}
