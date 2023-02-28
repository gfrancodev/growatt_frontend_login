import { Box, Container, Flex } from "@chakra-ui/react";
import { Courses } from "./courses";
import { CurrentCourse } from "./current-course";

export default function Courses_Template() {
  return (
    <Box
      pt={6}
      px={{
        base: 3,
        md: 6,
      }}
      w={"full"}
      h={"full"}
      color={"white"}
      overflowY={"auto"}
      css={{
        "&::-webkit-scrollbar": {
          width: "0.3em",
        },
        "&::-webkit-scrollbar-track": {
          boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
          webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
        },
        "&::-webkit-scrollbar-thumb": {
          outline: "1px solid  slategrey",
          borderRadius: "4px",
          backgroundColor: "#666",
        },
      }}
    >
      <Flex
        alignItems={{
          base: "center",
          md: "initial",
        }}
        justifyContent={{
          base: "center",
          md: "space-between",
        }}
        flexDirection={{ base: "column", md: "column", lg: "row" }}
      >
        <Courses />
        <Container w={100} />
        <CurrentCourse />
      </Flex>
    </Box>
  );
}
