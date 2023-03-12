import React from "react";
import { Box, Stack, Text } from "@chakra-ui/react";

import { Rating } from "../Rating";
import { IconButtonComponent } from "../Button";
import { FaHeart, BsCartPlus } from "@components/_ui/Icons";

interface CardFavoriteProps {
  image: string;
  title: string;
  description: string;
  rating: number;
  price: number;
  onClick?: () => void;
}

export const CardFavorite = ({
  image,
  title,
  description,
  rating,
  price = 0,
  onClick,
}: CardFavoriteProps) => {
  const [favorite, setFavorite] = React.useState(false);
  const colorHeartActive = "#FF0000";
  const colorHeartDesactive = "#FFFFFF";
  const colorBorder = "#6CB62E";

  return (
    <Stack w={253} spacing={5}>
      <Box
        w={253}
        h={238}
        bg="white"
        borderRadius="md"
        boxShadow="md"
        p={4}
        cursor="pointer"
        position="relative"
        bgImage={`url(${image})`}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        transition="all 0.5s ease"
        _hover={{
          transform: "scale(1.01)",
          border: `1px solid ${colorBorder}`,
        }}
      >
        <IconButtonComponent
          variant="outline"
          icon={
            favorite ? (
              <FaHeart color={colorHeartActive} size={23} />
            ) : (
              <FaHeart color={colorHeartDesactive} size={23} />
            )
          }
          onClick={() => setFavorite(!favorite)}
          size="lg"
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 1,
          }}
        />
      </Box>

      <Box>
        <Text
          fontSize={{
            base: 14,
            md: 16,
          }}
          fontWeight="bold"
          color="gray.200"
          mb={1}
        >
          {title}
        </Text>
        <Text
          fontSize={{
            base: 12,
            md: 14,
          }}
          fontWeight="normal"
          color="gray.500"
        >
          {description}
        </Text>

        <Rating rating={rating} />
      </Box>

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <IconButtonComponent
          variant="outline"
          icon={<BsCartPlus color={colorBorder} size={23} />}
          size="md"
          onClick={onClick}
        />
        <Text
          fontSize={{
            base: 14,
            md: 16,
          }}
          fontWeight="bold"
          color="#6CB62E"
        >
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Text>
      </Box>
    </Stack>
  );
};
