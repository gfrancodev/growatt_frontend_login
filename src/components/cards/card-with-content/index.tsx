import { Box, Flex, HStack, IconButton, Image, Text } from "@chakra-ui/react";
import { AiOutlinePlayCircle } from "react-icons/ai";

interface CourseContentProps {
  title: string;
  description: string;
  link?: string;
  duration?: string;
}

export const CardWithContent = ({
  title,
  description,
  duration,
  link,
}: CourseContentProps) => {
  return (
    <HStack
      spacing={5}
      h={"full"}
      maxH={190}
      w={"full"}
      borderRadius={15}
      bg="#0F0F0F"
      paddingRight={10}
      border={"none"}
      transition={"all 0.5s ease"}
      _hover={{
        transform: "scale(1.03)",
        border: "1px solid #6CB62E",
      }}
      position={"relative"}
    >
      <ClassImage />
      <Flex
        flexDir={{
          base: "column",
          md: "row",
        }}
      >
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
          >
            {description}
          </Text>
        </Box>
        <Box
          position={{
            base: "absolute",
            md: "relative",
          }}
          bottom={{
            base: 1,
            md: "auto",
          }}
          right={{
            base: 1,
            md: "auto",
          }}
          alignItems={{
            base: "center",
            md: "center",
          }}
          justifyContent={"center"}
          display={"flex"}
          flexDirection={"column"}
        >
          <IconButton
            aria-label="Play"
            icon={<AiOutlinePlayCircle color="#6CB62E" />}
            variant={"ghost"}
            border={"none"}
            bg={"transparent"}
            _hover={{ bg: "transparent" }}
            fontSize={{
              base: 25,
              md: 30,
            }}
            // onClick={() => window.open(link, "_blank")}
          />
          <Text fontSize={12} fontWeight={"bold"}>
            {duration}
          </Text>
        </Box>
      </Flex>
    </HStack>
  );
};

const ClassImage = () => {
  return (
    <Image
      src={"https://source.unsplash.com/random"}
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
