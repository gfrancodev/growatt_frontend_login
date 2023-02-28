import {
  AspectRatio,
  Heading,
  Stack,
  Text,
  Avatar,
  HStack,
  Flex,
  Box,
} from "@chakra-ui/react";
import { CardWithContent } from "@components/cards/card-with-content";
import { Rating } from "@components/rating";
import React from "react";

const SpeakerAvatar = () => {
  return (
    <HStack direction="row" alignItems={"center"}>
      <Avatar bg="teal.500" />
      <Box lineHeight={1}>
        <Text
          fontSize={{
            base: 14,
            md: 16,
          }}
          mb={1}
          fontWeight={"bold"}
        >
          Energia sola
        </Text>
        <Text
          fontSize={{
            base: 12,
            md: 14,
          }}
          fontWeight={"thin"}
        >
          Professor de fio verde
        </Text>
      </Box>
    </HStack>
  );
};

export const CurrentCourse = () => {
  return (
    <Stack spacing={3} w={"full"}>
      <AspectRatio maxW={615} maxH={382} ratio={1}>
        <iframe
          title="naruto"
          src="https://www.youtube.com/embed/QhBnZ6NPOY0"
          allowFullScreen
        />
      </AspectRatio>

      <Rating number={4} />

      <Heading
        as="h2"
        fontSize={{
          base: 16,
          md: 20,
        }}
        fontWeight={"bold"}
      >
        Reduza custos
      </Heading>

      <Text
        fontSize={{
          base: 12,
          md: 14,
        }}
      >
        standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into electronic.
      </Text>
      <SpeakerAvatar />

      <Flex justifyContent={"space-between"} pt={5} alignItems={"center"}>
        <Text
          fontSize={{
            base: 16,
            md: 20,
          }}
          fontWeight={"bold"}
        >
          Reduza custos
        </Text>
        <Text
          fontSize={{
            base: 12,
            md: 14,
          }}
          fontWeight={400}
        >
          10 Aulas / 10 horas
        </Text>
      </Flex>
      <Stack spacing={3} pb={3}>
        <CardWithContent
          title="Introdução"
          description="standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."
          duration="10:00"
        />
        <CardWithContent
          title="Introdução"
          description="standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."
          duration="10:00"
        />
        <CardWithContent
          title="Introdução"
          description="standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."
          duration="10:00"
        />
      </Stack>
    </Stack>
  );
};
