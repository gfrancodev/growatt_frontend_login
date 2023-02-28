import {
  Heading,
  Avatar,
  Box,
  Flex,
  Text,
  Stack,
  Input,
  AspectRatio,
} from "@chakra-ui/react";

export default function SocialProfileWithImage() {
  return (
    <Box
      w={"full"}
      boxShadow={"2xl"}
      borderTopRightRadius={20}
      borderTopLeftRadius={20}
      overflow={"hidden"}
    >
      <Hero />
      <Flex justify={"center"} mt={-12}>
        <Avatar
          size={"2xl"}
          src={
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
          }
          css={{
            border: "2px solid white",
          }}
        />
      </Flex>

      <Box p={6}>
        <Stack spacing={0} align={"center"} mb={5}>
          <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
            John Doe
          </Heading>
          <Text color={"gray.500"}>Frontend Developer</Text>
        </Stack>
      </Box>
    </Box>
  );
}

const Hero = () => {
  return (
    <AspectRatio width="full" justifyItems={"center"} h={231}>
      <Box
        bg={"#3C611F"}
        borderColor="gray.300"
        rounded="md"
        shadow="sm"
        role="group"
        transition="all 150ms ease-in-out"
        _hover={{
          shadow: "md",
        }}
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          height="100%"
          width="100%"
          display="flex"
          flexDirection="column"
        >
          <Stack
            height="100%"
            width="100%"
            display="flex"
            alignItems="center"
            justify="center"
            spacing="4"
          >
            <Heading
              fontSize="lg"
              textAlign={"center"}
              color="white"
              fontWeight="400"
            >
              Fazer upload de uma capa. Tamanho máximo 8MB
            </Heading>
          </Stack>
        </Box>
        <Input
          type="file"
          height="100%"
          width="100%"
          position="absolute"
          top="0"
          left="0"
          opacity="0"
          aria-hidden="true"
          accept="image/*"
        />
      </Box>
    </AspectRatio>
  );
};
