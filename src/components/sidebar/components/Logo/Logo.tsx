import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { GiFootprint } from "react-icons/gi";
import logo from "@assets/svg/logo.svg";
import React from "react";
import Image from "next/image";

type LogoWithSeachProps = {
  collapse: boolean;
};

export const Logo = ({ collapse }: LogoWithSeachProps) => {
  return (
    <Flex
      w={"full"}
      alignContent={"center"}
      justifyContent={"space-between"}
      flexDirection={collapse ? "row" : "column"}
      opacity={collapse ? 1 : 0}
      gap={4}
    >
      <Box display={"flex"} alignItems={"center"} gap={2}>
        {/* <Icon as={GiFootprint} fontSize={30} /> */}
        <Image src={logo} alt={""} />

        {/* {collapse && (
          <React.Fragment>
            <Text fontSize={16} fontWeight={"bold"}>
              DiPéaPé
            </Text>
          </React.Fragment>
        )} */}
      </Box>
    </Flex>
  );
};
