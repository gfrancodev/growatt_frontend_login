import { Box, HStack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Rating } from "../Rating";

interface MyCoursesProps {
  rating: number;
  title: string;
  description: string;
  image: string;
  path: string;
}

export const MyCourses = ({
  rating,
  title,
  description,
  image,
  path,
}: MyCoursesProps) => {
  const router = useRouter();
  return (
    <HStack
      as={"button"}
      spacing={5}
      bg="#0F0F0F"
      borderRadius={15}
      p={2}
      transition={"all 0.5s ease"}
      _hover={{
        transform: "scale(1.03)",
        border: "1px solid #6CB62E",
      }}
      onClick={() => {
        router.push(path);
      }}
    >
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
      <Box textAlign={"start"}>
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
          letterSpacing={"-0.025em"}
          noOfLines={3}
          maxW={500}
        >
          {description}
        </Text>
        <Rating rating={rating} />
      </Box>
    </HStack>
  );
};
