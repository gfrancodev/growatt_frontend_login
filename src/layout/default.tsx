import { Box, Container, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Sidebar from "@components/_ui/Sidebar";
import Footer from "@components/_ui/Footer";

type LayoutDashboardDefaultProps = {
  children: React.ReactNode;
};

export const LayoutDashboardDefault = ({
  children,
}: LayoutDashboardDefaultProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bgGradient="linear(to-r, #3D621E, green.900)" pb={10}>
      <Sidebar onClose={onClose} onOpen={onOpen} isOpen={isOpen} />

      <Box
        ml={{ base: 0, md: 60 }}
        rounded={{
          base: "none",
          md: "3xl",
        }}
        bg="#000"
        mx={4}
      >
        <Box
          p={4}
          w={"full"}
          h={"full"}
          color={"white"}
          overflowY={"auto"}
          css={{
            "&::-webkit-scrollbar": {
              width: "0.3em",
            },
            "&::-webkit-scrollbar-track": {
              boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
              webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
            },
            "&::-webkit-scrollbar-thumb": {
              outline: "1px solid  slategrey",
              borderRadius: "4px",
              backgroundColor: "#666",
            },
          }}
        >
          {children}
        </Box>
      </Box>
      {/* <Footer /> */}
    </Box>
  );
};
