import React, { ReactText } from "react";
import {
  Icon,
  Box,
  CloseButton,
  Flex,
  FlexProps,
  IconButton,
  Link,
  Drawer,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";

import { IconType } from "react-icons";

import logo from "@assets/svg/logo.svg";
import { FiMenu } from "@components/_ui/Icons";
import { routers } from "@constants/router";

type SidebarProps = {
  onClose: () => void;
  onOpen: () => void;
  isOpen: boolean;
};

export const Sidebar = ({ isOpen, onClose, onOpen }: SidebarProps) => {
  return (
    <React.Fragment>
      <SidebarContent onClose={() => onClose} />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerOverlay />

        <DrawerContent>
          <SidebarContent onClose={onClose} isOpen={isOpen} />
        </DrawerContent>
      </Drawer>
      <MobileNav onOpen={onOpen} />
    </React.Fragment>
  );
};

interface SidebarContentProps {
  onClose: () => void;
  isOpen?: boolean;
}

const SidebarContent = ({ onClose, isOpen }: SidebarContentProps) => {
  return (
    <Box
      transition="3s ease"
      border={"none"}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      px={4}
      bg={{
        base: "#3D621E",
        md: "transparent",
      }}
      display={{
        base: isOpen ? "block" : "none",
        md: "block",
      }}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Image src={logo} alt={""} />

        <CloseButton
          display={{ base: "flex", md: "none" }}
          fontSize="20px"
          color={"white"}
          onClick={onClose}
        />
      </Flex>
      {routers.map((link) => (
        <NavItem key={link.label} path={link.path} icon={link.icon}>
          {link.label}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
  path: string;
}
const NavItem = ({ icon, path, children, ...rest }: NavItemProps) => {
  const router = useRouter();

  return (
    <Link
      onClick={() => router.push(path)}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        color="white"
        w={"full"}
        flexDirection={"column"}
        justify={"center"}
        mx={"auto"}
        _hover={{
          bg: "#6CB62E",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mb={2}
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileNavProps {
  onOpen: () => void;
}

const MobileNav = ({ onOpen }: MobileNavProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      border={"none"}
      justifyContent={{ base: "space-between", md: "flex-end" }}
    >
      <Box
        display={{
          base: "flex",
          md: "none",
        }}
      >
        <Image src={logo} alt={""} />
      </Box>

      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu color="white" />}
      />
    </Flex>
  );
};
