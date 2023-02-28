import {
  Icon,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { MockCourses } from "@utils/mockCourses";
import { BiSearch } from "react-icons/bi";
import { CardCourses } from "../../../components/cards/card-courses";

export const Courses = () => {
  return (
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
              {MockCourses.map((course) => (
                <CardCourses
                  key={course.id}
                  title={course.name}
                  description={course.description}
                  rating={course.rating}
                  img={course.img}
                />
              ))}
            </Stack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  );
};
