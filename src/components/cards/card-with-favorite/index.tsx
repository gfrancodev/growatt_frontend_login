import React from "react";
import { Card, HStack, IconButton, Stack, Text } from "@chakra-ui/react";
import { Rating } from "@components/rating";
import { BsCartPlus } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

interface CardWithFavoriteProps {
  img: string;
  title?: string;
  description?: string;
  rating?: number;
  carClick?: () => void;
  price?: string;
}

export const CardWithFavorite = ({
  img,
  title,
  description,
  rating,
  carClick,
  price,
}: CardWithFavoriteProps) => {
  return (
    <Stack maxW={250}>
      <Card
        w={253}
        h={238}
        bg="#0F0F0F"
        rounded={"2xl"}
        backgroundImage={`url(${img})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position="relative"
        transition={"all 0.5s ease"}
        _hover={{
          transform: "scale(1.01)",
          border: "1px solid #6CB62E",
        }}
      >
        <IconButton
          aria-label="Search database"
          icon={<FaHeart color="red" />}
          variant={"ghost"}
          _hover={{ bg: "transparent" }}
          fontSize={{
            base: 20,
            md: 25,
          }}
          position="absolute"
          top={2}
          right={2}
        />
      </Card>
      {title && (
        <Text
          fontSize={{
            base: 14,
            md: 16,
          }}
          fontWeight="bold"
        >
          {title}
        </Text>
      )}
      {description && (
        <Text fontSize={12} fontWeight="normal" w={253}>
          {description}
        </Text>
      )}
      {rating && <Rating number={rating} />}

      {carClick && price && (
        <HStack justifyContent={"space-between"}>
          <IconButton
            aria-label="Search database"
            icon={<BsCartPlus color="#6CB62E" />}
            variant={"ghost"}
            borderWidth="1px"
            borderColor="#6CB62E"
            rounded={"full"}
            bg={"transparent"}
            _hover={{ bg: "transparent" }}
            fontSize={{
              base: 25,
              md: 20,
            }}
            onClick={carClick}
          />
          <Text
            fontSize={{
              base: 14,
              md: 16,
            }}
            fontWeight="bold"
            color="#6CB62E"
          >
            R$ {price}
          </Text>
        </HStack>
      )}
    </Stack>
  );
};
