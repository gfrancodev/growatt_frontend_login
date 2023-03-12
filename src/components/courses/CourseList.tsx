import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { CardLesson } from "@components/_ui/Cards/Lessons";
import React from "react";
import { CourseListSkeleton } from "./CourseListSkeleton";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
export const CourseList = () => {
  const [data, setData] = React.useState({
    id: 1,
    name: "Reduza custos",
    description:
      "standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
    duration: "1h 30m",
    image: "https://bit.ly/sage-adebayo",
    rating: 4,

    list: [
      {
        id: 1,
        name: "Reduza custos",
        description:
          "standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
        duration: "1h 30m",
      },
      {
        id: 2,
        name: "Reduza custos",
        description:
          "standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
        duration: "1h 30m",
      },
      {
        id: 3,
        name: "Reduza custos",
        description:
          "standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
        duration: "1h 30m",
      },
    ],
  });
  const [isLoading, setIsLoading] = React.useState(false);
  // TODO: Fetch data from API

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await delay(2000);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <CourseListSkeleton />;
  }

  return (
    <Box>
      <Flex justifyContent={"space-between"} py={5} alignItems={"center"}>
        <Text
          fontSize={{
            base: 16,
            md: 20,
          }}
          fontWeight={"bold"}
        >
          {data.name}
        </Text>
        <Text
          fontSize={{
            base: 12,
            md: 14,
          }}
          fontWeight={400}
        >
          {data.list.length} aulas disponíveis
        </Text>
      </Flex>
      <Stack spacing={3} w={"full"}>
        {data.list.map((course: any) => (
          <CardLesson
            key={course.id}
            image={data.image}
            title={course.name}
            description={course.description}
            time={course.duration}
          />
        ))}
      </Stack>
    </Box>
  );
};
