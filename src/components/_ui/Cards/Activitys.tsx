import React from "react";
import { Box, HStack, Image, Text } from "@chakra-ui/react";
import { Rating } from "@components/_ui/Rating";

interface CourseProps {
  rating: number;
  title: string;
  description: string;
  img: string;
}

export const CardActivitys = ({
  img,
  title,
  description,
  rating,
}: CourseProps) => {
  return (
    <Box
      w={"full"}
      h={"full"}
      borderRadius={15}
      p={2}
      bg="#0F0F0F"
      border={"none"}
      transition={"all 0.5s ease"}
      _hover={{
        transform: "scale(1.01)",
        border: "1px solid #6CB62E",
      }}
    >
      <HStack
        spacing={5}
        h={"full"}
        maxH={190}
        w={"full"}
        borderRadius={15}
        p={2}
        bg="#0F0F0F"
        border={"none"}
        transition={"all 0.5s ease"}
      >
        <Image
          src={img}
          height={{
            base: "130px",
            md: "170px",
          }}
          width={{
            base: "130px",
            md: "170px",
          }}
          alt={"Image Course"}
        />
        <Box>
          <Text
            fontSize={{
              base: 16,
              md: 20,
            }}
            fontWeight={"bold"}
          >
            {title}
          </Text>
          <Text
            fontSize={{
              base: 12,
              md: 14,
            }}
            fontWeight={"normal"}
            mt={2}
            mb={2}
            letterSpacing={"-0.025"}
          >
            {description}
          </Text>
          <Rating number={rating} />
        </Box>
      </HStack>
    </Box>
  );
};
