import {
  AspectRatio,
  Avatar,
  Box,
  Button,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import React from "react";

export const UploadProfile = () => {
  const [file, setFile] = React.useState(null);
  const [preview, setPreview] = React.useState<any>(null);

  const handleFile = (e: any) => {
    setFile(e.target.files[0]);

    const reader = new FileReader();

    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      setPreview(reader.result);
    };
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(file);
  };

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      borderWidth={1}
      borderColor="#3C611F"
      rounded={"lg"}
      overflow={"hidden"}
      px={6}
    >
      <Avatar size={"xl"} src={preview || "https://bit.ly/sage-adebayo"} />
      <AspectRatio width="full" justifyItems={"center"} h={151}>
        <Box
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
                Fazer upload de uma foto de perfil. Tamanho máximo 2MB
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
            onChange={handleFile}
          />
        </Box>
      </AspectRatio>
      <Button
        borderColor="#3C611F"
        rounded={"full"}
        px={6}
        variant="outline"
        size="sm"
        ml={4}
        mt={4}
        _hover={{
          bg: "green.500",
          color: "white",
        }}
      >
        Upload
      </Button>
    </Box>
  );
};
