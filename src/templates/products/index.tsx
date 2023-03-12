import React from "react";
import { SwiperSlide } from "swiper/react";
import {
  Box,
  Heading,
  Stack,
  HStack,
  useMediaQuery,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import { Banner } from "@components/_ui/Banner";
import { ActiveButton } from "@components/_ui/Button";
import { CardWithBannerCategory } from "@components/_ui/Cards/card-with-banner-category";
import { CardFavorite } from "@components/_ui/Cards";
import { Carosel } from "@components/_ui/Carosel";
import { ActiveSelected } from "@components/_ui/Input";
import { ProductsLaunch, ProductsWithBanner } from "@utils/mockCourses";
import { CartContext } from "@context/CartContext";

export default function Product_Template() {
  const { dispatch } = React.useContext(CartContext);
  const [isMobile] = useMediaQuery("(max-width: 1144px)");

  const handleAddToCart = (item: any) => {
    dispatch({ type: "add", payload: item });
  };

  return (
    <Box
      as={Stack}
      spacing={8}
      py={6}
      px={{
        base: 3,
        md: 8,
      }}
      w={"full"}
      h={"full"}
      color={"white"}
      overflowY={"auto"}
      css={{
        "&::-webkit-scrollbar": {
          width: "0.3em",
        },
        "&::-webkit-scrollbar-track": {
          boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
          webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
        },
        "&::-webkit-scrollbar-thumb": {
          outline: "1px solid  slategrey",
          borderRadius: "4px",
          backgroundColor: "#666",
        },
      }}
    >
      {/*  Aqui vai o banner */}
      <Banner
        title={""}
        subtitle={""}
        image={"https://source.unsplash.com/random"}
        cta={""}
        ctaLink={""}
        isButton={false}
      />
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        gap={6}
        maxW={700}
      >
        <GridItem>
          <ActiveButton text="Lançamento" />
        </GridItem>
        <GridItem>
          <ActiveButton text="Mais vendidos" />
        </GridItem>
        <GridItem>
          <ActiveButton text="Lançamento" />
        </GridItem>
        <GridItem>
          <ActiveSelected
            text="Categoria"
            options={[
              { value: "email", label: "Email" },
              { value: "phone", label: "Phone" },
              { value: "country", label: "Country" },
            ]}
          />
        </GridItem>
        <GridItem>
          <ActiveButton text="Ofertas" />
        </GridItem>
      </Grid>

      {/* Aqui vai o grid de produtos */}
      <Heading as="h3" size="md" fontWeight="bold" letterSpacing="tight">
        Lançamentos
      </Heading>
      <Carosel>
        {ProductsLaunch.map((item, index) => (
          <SwiperSlide key={index}>
            <CardFavorite
              image={item.img}
              title={item.title}
              price={item.price}
              description={item.description}
              rating={item.rating}
              onClick={() => handleAddToCart(item)}
            />
          </SwiperSlide>
        ))}
      </Carosel>

      <Heading as="h3" size="md" fontWeight="bold" letterSpacing="tight">
        Ofertas do dia
      </Heading>
      <Carosel>
        {ProductsLaunch.map((item, index) => (
          <SwiperSlide key={index}>
            <CardFavorite
              image={item.img}
              title={item.title}
              price={item.price}
              description={item.description}
              rating={item.rating}
              onClick={() => console.log("clicou no carrinho")}
            />
          </SwiperSlide>
        ))}
      </Carosel>

      <HStack spacing={4} flexDir={isMobile ? "column" : "row"}>
        {ProductsWithBanner.map((item) => (
          <CardWithBannerCategory
            key={item.id}
            img={item.imagem}
            title={item.title}
          />
        ))}
      </HStack>
      <Heading as="h3" size="md" fontWeight="bold" letterSpacing="tight">
        Lançamentos
      </Heading>
      <Carosel>
        {ProductsLaunch.map((item, index) => (
          <SwiperSlide key={index}>
            <CardFavorite
              image={item.img}
              title={item.title}
              price={item.price}
              description={item.description}
              rating={item.rating}
              onClick={() => console.log("clicou no carrinho")}
            />
          </SwiperSlide>
        ))}
      </Carosel>
      <Heading as="h3" size="md" fontWeight="bold" letterSpacing="tight">
        Ofertas do dia
      </Heading>
      <Carosel>
        {ProductsLaunch.map((item, index) => (
          <SwiperSlide key={index}>
            <CardFavorite
              image={item.img}
              title={item.title}
              price={item.price}
              description={item.description}
              rating={item.rating}
              onClick={() => console.log("clicou no carrinho")}
            />
          </SwiperSlide>
        ))}
      </Carosel>

      <Banner
        title={""}
        subtitle={""}
        image={"https://source.unsplash.com/random"}
        cta={""}
        ctaLink={""}
        isButton={false}
      />

      <Heading as="h3" size="md" fontWeight="bold" letterSpacing="tight">
        Energia florestal
      </Heading>

      <Carosel>
        {ProductsLaunch.map((item, index) => (
          <SwiperSlide key={index}>
            <CardFavorite
              image={item.img}
              title={item.title}
              price={item.price}
              description={item.description}
              rating={item.rating}
              onClick={() => console.log("clicou no carrinho")}
            />
          </SwiperSlide>
        ))}
      </Carosel>
    </Box>
  );
}
