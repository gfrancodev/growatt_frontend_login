import {
  Box,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Rating } from "@components/rating";

interface CourseProps {
  rating: number;
  title: string;
  description: string;
  img: string;
}

export const CardCourses = ({
  img,
  title,
  description,
  rating,
}: CourseProps) => {
  return (
    <Card
      display={"flex"}
      flexDirection={"row"}
      maxH={190}
      borderRadius={15}
      p={2}
      color={"white"}
      bg="#0F0F0F"
      transition={"all 0.5s ease"}
      _hover={{
        transform: "scale(1.03)",
        border: "1px solid #6CB62E",
      }}
    >
      <CardHeader
        m={1}
        rounded={"2xl"}
        height={{
          base: "130px",
          md: "170px",
        }}
        width={{
          base: "130px",
          md: "170px",
        }}
        minW={130}
        backgroundImage={`url(${img})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      />
      <CardBody display={"flex"} flexDirection={"column"}>
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
        >
          {description}
        </Text>
        <Rating number={rating} />
      </CardBody>
    </Card>
  );
};

// interface ImageCourseProps {
//   img: string;
// }

{
  /* <HStack
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
        transform: "scale(1.03)",
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
    </HStack> */
}

// const ImageCourse = ({ img }: ImageCourseProps) => {
//   return (
//     <Image
//       src={img}
//       height={{
//         base: "130px",
//         md: "170px",
//       }}
//       width={{
//         base: "130px",
//         md: "170px",
//       }}
//       alt={"Image Course"}
//       objectFit={"cover"}
//       style={{ borderRadius: "15px" }}
//     />
//   );
// };
