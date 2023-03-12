import React from "react";
import { useRouter } from "next/router";
import { SwiperSlide } from "swiper/react";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";

import {
  FrequencyComponent,
  ProfileComponent,
  ProfileInfoComponent,
} from "@components/profile";
import { Carosel3D, Carosel } from "@components/_ui/Carosel";
import { ContinueWatching, MockCourses, MyCourses } from "@utils/mockCourses";

export const Profile_Template = () => {
  const router = useRouter();

  return (
    <React.Fragment>
      <ProfileComponent />
      <ProfileInfoComponent />
      <FrequencyComponent />

      <Stack my={10} mx={10}>
        <Heading fontSize={"2xl"} fontWeight={"bold"} color={"white"} mt={10}>
          Seus cursos
        </Heading>
        <Carosel3D>
          {MyCourses.map((item, index) => (
            <SwiperSlide key={index}>
              <Box
                mt={3}
                position="relative"
                mx={"auto"}
                backgroundPosition="center"
                backgroundSize="cover"
                borderRadius="xl"
                transition="all 0.3s ease"
                cursor={"pointer"}
                width={251}
                height={367}
                bgImg={item.image}
                onClick={() => router.push(item.link)}
              />
            </SwiperSlide>
          ))}
        </Carosel3D>
        <Heading fontSize={"2xl"} fontWeight={"bold"} color={"white"} mt={10}>
          Continue assistindo
        </Heading>
        <Carosel>
          {ContinueWatching.map((item, index) => (
            <SwiperSlide key={index}>
              <Box
                mt={3}
                position="relative"
                mx={"auto"}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                borderRadius="xl"
                transition="all 0.3s ease"
                cursor={"pointer"}
                width={454}
                height={190}
                bgImg={item.image}
                onClick={() => router.push(item.link)}
              />
              <Heading
                fontSize={"xl"}
                fontWeight={"bold"}
                color={"white"}
                py={2}
                pl={2}
              >
                {item.title}
              </Heading>

              <Text
                fontSize={"sm"}
                color={"gray.200"}
                fontWeight={"400"}
                pl={2}
              >
                {item.description}
              </Text>
            </SwiperSlide>
          ))}
        </Carosel>
        <Heading fontSize={"2xl"} fontWeight={"bold"} color={"white"} mt={10}>
          Cursos
        </Heading>
        <Carosel>
          {MockCourses.map((item, index) => (
            <SwiperSlide key={index}>
              <Box
                mt={3}
                position="relative"
                mx={"auto"}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                borderRadius="xl"
                transition="all 0.3s ease"
                cursor={"pointer"}
                width={454}
                height={190}
                bgImg={item.image}
                onClick={() => router.push(item.link)}
              />
              <Heading
                fontSize={"xl"}
                fontWeight={"bold"}
                color={"white"}
                py={2}
                pl={2}
              >
                {item.title}
              </Heading>

              <Text
                fontSize={"sm"}
                color={"gray.200"}
                fontWeight={"400"}
                pl={2}
              >
                {item.description}
              </Text>
            </SwiperSlide>
          ))}
        </Carosel>
      </Stack>
    </React.Fragment>
  );
};
