import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { AiFillStar } from "@components/_ui/Icons";

interface RatingProps {
  number: number;
}

export const Rating = ({ number }: RatingProps) => {
  return (
    <Flex as="div" alignItems={"center"}>
      <AiFillStar fontSize={12} color={number >= 1 ? "#6CB62E" : "#fff"} />
      <AiFillStar fontSize={12} color={number >= 2 ? "#6CB62E" : "#fff"} />
      <AiFillStar fontSize={12} color={number >= 3 ? "#6CB62E" : "#fff"} />
      <AiFillStar fontSize={12} color={number >= 4 ? "#6CB62E" : "#fff"} />
      <AiFillStar fontSize={12} color={number >= 5 ? "#6CB62E" : "#fff"} />

      <Text fontSize={12} ml={3}>
        {number && number.toFixed(1)}
      </Text>
    </Flex>
  );
};
