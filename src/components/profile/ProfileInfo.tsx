import { Box, Container } from "@chakra-ui/react";
import { IconButtonComponent, ButtonComponent } from "@components/_ui/Button";
import { FiLinkedin } from "@components/_ui/Icons";
import { useRouter } from "next/router";

export const ProfileInfoComponent = () => {
  const router = useRouter();
  return (
    <Box h={200} border={"1px solid #3C611D"} rounded={"xl"} w={"full"}>
      <Container
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-around"}
        h={200}
        w={180}
        border={"1px solid #3C611D"}
        rounded={"xl"}
      >
        <IconButtonComponent
          icon={<FiLinkedin />}
          size="lg"
          onClick={() => {
            router.push("https://www.linkedin.com/feed/");
          }}
        />
        <ButtonComponent
          variant="outline"
          size="lg"
          disabled={false}
          onClick={() => {
            console.log("certificado");
          }}
          text={"Certificado"}
        />
      </Container>
    </Box>
  );
};
