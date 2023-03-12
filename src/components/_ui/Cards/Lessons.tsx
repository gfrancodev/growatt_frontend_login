import React from "react";
import { Box, HStack, Text, WrapItem } from "@chakra-ui/react";
import { IconButtonComponent } from "../Button";
import { AiOutlinePlayCircle } from "@components/_ui/Icons";

interface CardLessonProps {
  image: string;
  title: string;
  description: string;
  time: number;
  onClick?: () => void;
}

export const CardLesson = ({
  image,
  title,
  description,
  time = 0,
  onClick,
}: CardLessonProps) => {
  return (
    <HStack
      spacing={5}
      maxW={850}
      bg={"#0F0F0F"}
      borderRadius={15}
      transition={"all 0.5s ease"}
      _hover={{
        transform: "scale(1.03)",
        border: "1px solid #6CB62E",
      }}
    >
      <WrapItem alignSelf={"flex-start"}>
        <Box
          w={170}
          h={170}
          borderRadius={15}
          bg="#0F0F0F"
          border={"none"}
          transition={"all 0.5s ease"}
          bgImage={`url(${image})`}
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
        />
      </WrapItem>
      <Box w={"full"}>
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
          noOfLines={3}
        >
          {description}
        </Text>
      </Box>

      <Box w={"35"} pr={2}>
        <IconButtonComponent
          icon={<AiOutlinePlayCircle color="#6CB62E" size={30} />}
          variant={"outline"}
          size={"lg"}
          style={{ border: "none" }}
          onClick={onClick}
        />
        <Text fontSize={14} fontWeight={"bold"}>
          {time} min
        </Text>
      </Box>
    </HStack>
  );
};
