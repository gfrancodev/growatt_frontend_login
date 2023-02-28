import { Box, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Rating } from "@components/rating";

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
      _hover={{
        transform: "scale(1.01)",
        border: "1px solid #6CB62E",
      }}
    >
      <ImageCourse img={img} />
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
            base: 10,
            md: 12,
          }}
          fontWeight={"normal"}
          mt={2}
          mb={2}
          letterSpacing={"-0.025em"}
        >
          {description}
        </Text>
        <Rating number={rating} />
      </Box>
    </HStack>
  );
};

interface ImageCourseProps {
  img: string;
}

const ImageCourse = ({ img }: ImageCourseProps) => {
  return (
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
      objectFit={"cover"}
      style={{ borderRadius: "15px" }}
    />
  );
};
