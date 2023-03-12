import { AspectRatio, Box, Heading, Input, Stack } from "@chakra-ui/react";
import React from "react";

export const ProfileHeaderComponent = () => {
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
    <AspectRatio width="full" justifyItems={"center"} h={231}>
      <Box
        bg={"#3C611F"}
        borderColor="gray.300"
        rounded="md"
        shadow="sm"
        role="group"
        transition="all 150ms ease-in-out"
        bgImage={preview || "https://bit.ly/sage-adebayo"}
        bgSize="cover"
        bgPosition="center"
        bgRepeat={"no-repeat"}
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
          onChange={handleFile}
        />
      </Box>
    </AspectRatio>
  );
};
