import React from "react";
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import logo from "@assets/svg/logo.svg";
import Image from "next/image";

const Logo = () => {
  return (
    <Stack
      textAlign={{
        base: "center",
        md: "left",
      }}
      justifyContent={{
        base: "center",
        md: "flex-start",
      }}
      alignItems={{
        base: "center",
        md: "flex-start",
      }}
    >
      <Image src={logo} alt="logo" />
      <Text>growattacademy@gmail.com</Text>
      <Text>+55 (75)98258-3901</Text>
    </Stack>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box w={"full"} bg={"#0D0D0D"} color={"gray.200"}>
      <Container
        as={Stack}
        maxW={"8xl"}
        py={10}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Logo />
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
          }}
          alignItems={"center"}
          spacing={10}
        >
          <Stack
            align={{
              base: "center",
              md: "flex-start",
            }}
            ml={{ base: 0, md: 8 }}
          >
            <ListHeader>Todos os produtos</ListHeader>
            <Link href={"#"}>Cupons</Link>
            <Link href={"#"}>Carrinho</Link>
            <Link href={"#"}>Juridico</Link>
          </Stack>
          <Stack
            align={{
              base: "center",
              md: "flex-start",
            }}
          >
            <Link href={"#"}>Cliente</Link>
            <Link href={"#"}>Cursos</Link>
            <Link href={"#"}>Produtos</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={5}>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © 2023 Growatt Academy
        </Text>
      </Box>
    </Box>
  );
}
