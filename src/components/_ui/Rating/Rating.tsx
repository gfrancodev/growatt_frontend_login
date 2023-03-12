import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { FaStar } from "@components/_ui/Icons";

interface RatingProps {
  rating?: number;
  onClick?: () => void;
}

export const Rating = ({ rating = 0, onClick }: RatingProps) => {
  const [ratingState, setRatingState] = React.useState(rating);

  return (
    <Flex alignItems="center" my={2}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Box
          key={index}
          as={FaStar}
          color={
            ratingState >= index + 1 || rating >= index + 1
              ? "#FFD700"
              : "#E4E7EB"
          }
          onClick={() => {
            if (rating !== 0) {
              return;
            }
            setRatingState(index + 1);
            onClick && onClick();
          }}
        />
      ))}
      <Text
        fontSize={{
          base: 12,
          md: 14,
        }}
        fontWeight="normal"
        color="gray.500"
        ml={2}
      >
        {ratingState} de 5 estrelas
      </Text>
    </Flex>
  );
};
