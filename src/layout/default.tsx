import { Box, Container, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Sidebar from "@components/sidebar";
import Footer from "@components/footer";

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
        // mb={10}
        bg="#000"
        mx={4}
      >
        {children}
      </Box>
      {/* <Footer /> */}
    </Box>
  );
};
