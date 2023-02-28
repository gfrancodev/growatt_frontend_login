import React from "react";
import { Box, Heading, Stack } from "@chakra-ui/react";
import { MockCourses } from "@utils/mockCourses";
import { CardActivitys } from "@components/cards/card-activitys";

export const Activities_Template = () => {
  return (
    <Box
      as={Stack}
      spacing={5}
      py={6}
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
      <Heading
        fontSize={{
          base: 20,
          md: 24,
        }}
      >
        Atividades recentes
      </Heading>

      {MockCourses.map((course) => (
        <CardActivitys
          key={course.id}
          img={course.img}
          title={course.name}
          description={course.description}
          rating={course.rating}
        />
      ))}
      <Heading
        fontSize={{
          base: 20,
          md: 24,
        }}
      >
        Atividades antigas
      </Heading>
      {MockCourses.map((course) => (
        <CardActivitys
          key={course.id}
          img={course.img}
          title={course.name}
          description={course.description}
          rating={course.rating}
        />
      ))}
    </Box>
  );
};
