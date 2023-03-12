import React from "react";
import {
  Container,
  Flex,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Tab,
  TabList,
  TabPanels,
  Tabs,
  Icon,
  TabPanel,
} from "@chakra-ui/react";
import { CourseList, LastSeenCourse } from "@components/courses";
import { MyCourses } from "@components/_ui/Cards";
import { BiSearch } from "@components/_ui/Icons";
import { MockCourses } from "@utils/mockCourses";

export default function Courses_Template() {
  return (
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
      <Stack flexDirection={"column"} w={"full"}>
        <HStack
          justifyContent={"space-between"}
          alignItems={"center"}
          w={"full"}
          px={4}
          py={2}
          mb={4}
          flexDirection={{
            base: "column",
            md: "row",
          }}
          align={"center"}
        >
          <Heading
            pl={4}
            pb={{
              base: 4,
              md: 0,
            }}
            textAlign={"start"}
          >
            Cursos
          </Heading>
          <InputGroup
            maxW={{
              base: "full",
              md: "300px",
            }}
          >
            <Input
              placeholder="Pesquisa"
              _placeholder={{
                color: "white",
                opacity: 0.5,
                fontSize: 14,
                lineHeight: "20px",
                textAlign: "center",
              }}
              rounded={"full"}
              bg={"#0B0B0B"}
              border={"none"}
              focusBorderColor="lime"
            />
            <InputRightElement>
              <Icon as={BiSearch} />
            </InputRightElement>
          </InputGroup>
        </HStack>

        <Tabs variant={"unstyled"}>
          <TabList>
            <Tab
              fontSize={{
                base: 14,
                md: 16,
              }}
            >
              Inicíl
            </Tab>
            <Tab
              fontSize={{
                base: 14,
                md: 16,
              }}
            >
              Em andamento
            </Tab>
            <Tab
              fontSize={{
                base: 14,
                md: 16,
              }}
            >
              Finalizados
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Stack spacing={3}>
                {MockCourses.map((item) => (
                  <MyCourses
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    rating={item.rating}
                    image={item.image}
                    path={"#"}
                  />
                ))}
              </Stack>
            </TabPanel>
            <TabPanel>2</TabPanel>
            <TabPanel>3</TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
      <Container w={100} />
      <Stack spacing={3} w={"full"}>
        <LastSeenCourse
          src="https://www.youtube.com/embed/QhBnZ6NPOY0"
          courseName="Reduza custos"
          courseDescription="standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."
          stars={4}
          photo="https://bit.ly/sage-adebayo"
          name="Segun Adebayo"
          description="Professor de fio verde"
        />
        <CourseList />
      </Stack>
    </Flex>
  );
}
