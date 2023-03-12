import { Box, Text } from "@chakra-ui/react";
import { LayoutDashboardDefault } from "src/layout/default";
import Erro404 from "@assets/svg/404.svg";
import Image from "next/image";

const NotFound = () => {
  return (
    <Box
      h={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Image src={Erro404} alt={"404"} />
      <Text fontSize={"xl"} color={"white"} mt={2}>
        Página não encontrada
      </Text>
    </Box>
  );
};
NotFound.layout = LayoutDashboardDefault;

export default NotFound;
