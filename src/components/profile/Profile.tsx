import { Avatar, Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { ProfileHeaderComponent } from "./ProfileHeader";

export const ProfileComponent = () => {
  return (
    <Box
      w={"full"}
      boxShadow={"2xl"}
      borderTopRightRadius={20}
      borderTopLeftRadius={20}
      overflow={"hidden"}
    >
      {/* <Hero /> */}
      <ProfileHeaderComponent />
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
};
