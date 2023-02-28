import React from "react";
import {
  Box,
  Flex,
  Heading,
  Icon,
  IconButton,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  ContinueWatching,
  MockCourses,
  MyCourses,
  wishlist,
} from "@utils/mockCourses";
import { CardMonthFrequency } from "./components/card-month-frequency";
import SocialProfileWithImage from "./components/card-profile";
import Carosel from "@components/carosel";
import { FaHeart } from "react-icons/fa";
import { CardCourses } from "@components/cards/card-courses";

export const Profile_Template = () => {
  const [isMobile] = useMediaQuery("(max-width: 1144px)");
  const [isLarge] = useMediaQuery("(max-width: 1800px)");

  return (
    <Box
      p={2}
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
        <SocialProfileWithImage />
      </Flex>
      <CardMonthFrequency />

      <Stack my={10} mx={10} spacing={10}>
        <Heading fontSize={"2xl"} fontWeight={"bold"} color={"white"}>
          Seus cursos
        </Heading>
        <Carosel slidesToShow={isMobile ? 1 : 3}>
          {MyCourses.map((card, index) => (
            <div key={index}>
              <Box
                mt={3}
                position="relative"
                mx={"auto"}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundImage={`url(${card.image})`}
                borderRadius="xl"
                transition="all 0.3s ease"
                cursor={"pointer"}
                width={251}
                height={367}
                // onClick={() => router.push(card.link)}
              />
            </div>
          ))}
        </Carosel>

        <Heading fontSize={"2xl"} fontWeight={"bold"} color={"white"}>
          Continue assistindo
        </Heading>
        <Carosel slidesToShow={isLarge ? 1 : 3}>
          {ContinueWatching.map((card, index) => (
            <div key={index}>
              <Box
                mt={3}
                position="relative"
                mx={"auto"}
                width={474}
                height={190}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundImage={`url(${card.image})`}
                borderRadius="xl"
                transition="all 0.3s ease"
                cursor={"pointer"}
                // onClick={() => router.push(card.link)}
              />
              <Heading
                fontSize={"xl"}
                fontWeight={"bold"}
                color={"white"}
                py={2}
                pl={2}
              >
                {card.title}
              </Heading>

              <Text
                fontSize={"sm"}
                color={"gray.200"}
                fontWeight={"400"}
                pl={2}
              >
                {card.description}
              </Text>
            </div>
          ))}
        </Carosel>

        <Box>
          <Heading fontSize={"2xl"} fontWeight={"bold"} color={"white"}>
            Lista de desejo
          </Heading>
          <Text fontSize={"lg"} color={"gray.200"} fontWeight={"bold"} pt={2}>
            Produtos
          </Text>
          <Carosel slidesToShow={isMobile ? 1 : 3}>
            {wishlist.map((card, index) => (
              <div key={index}>
                <Box
                  mt={3}
                  position="relative"
                  mx={"auto"}
                  width={253}
                  height={238}
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundImage={`url(${card.image})`}
                  borderRadius="xl"
                  transition="all 0.3s ease"
                  cursor={"pointer"}
                  border={"1px solid #6CB62E"}
                  // onClick={() => router.push(card.link)
                >
                  <IconButton
                    position="absolute"
                    top={0}
                    right={0}
                    aria-label="Call Sage"
                    size="sm"
                    bg={"transparent"}
                    icon={
                      <Icon
                        as={FaHeart}
                        fontSize={20}
                        color={card.favorite ? "red" : "white"}
                      />
                    }
                    onClick={() => console.log("click")}
                  />
                </Box>
              </div>
            ))}
          </Carosel>

          <Text fontSize={"lg"} color={"gray.200"} fontWeight={"bold"} pt={2}>
            Cursos
          </Text>
          <Carosel slidesToShow={isMobile ? 1 : 3}>
            {MockCourses.map((course) => (
              <Box pl={5} mt={2} key={course.id} h={200}>
                <CardCourses
                  title={course.name}
                  description={course.description}
                  rating={course.rating}
                  img={course.img}
                />
              </Box>
            ))}
          </Carosel>
        </Box>
      </Stack>
    </Box>
  );
};
