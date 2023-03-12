import React from "react";
import {
  Link as LinkChakra,
  Heading,
  Box,
  Badge,
  Text,
  ListIcon,
  List,
  ListItem,
  MenuList,
  useColorModeValue,
  MenuItem,
  Flex,
  IconButton,
  HStack,
  Menu,
  MenuButton,
  Avatar,
  VStack,
  MenuDivider,
  FlexProps,
} from "@chakra-ui/react";
import Link from "next/link";
import { routers } from "src/router/router";
import { FiBell, FiChevronDown, FiMenu } from "react-icons/fi";

type RoutesProps = {
  type: string;
  label: string;
  icon?: any;
  path?: string;
  notifications?: number;
  messages?: number;
};

type Props = {
  isAcordeon?: boolean;
  isAcordeonActivated?: boolean;
  collapse: boolean;
  setAcordeonActivated?: (value: boolean) => void;
};

export const Navigation = ({ collapse }: Props) => (
  <List w="full" my={8}>
    {routers.map((item, index) => (
      <ListItem key={index}>
        <NavItem items={item} isActivated={index === 0} collapse={collapse} />
      </ListItem>
    ))}
  </List>
);

type NavItemProps = {
  items: RoutesProps;
  isActivated: boolean;
  collapse: boolean;
};

const NavItem = ({ items, isActivated, collapse }: NavItemProps) => {
  const { label } = items;

  console.log("collapse", collapse);
  if (items.type === "link") {
    const { label, icon, path, notifications, messages } = items;

    return (
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        my={6}
      >
        <LinkChakra
          href={path}
          as={Link}
          gap={1}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          fontWeight={"medium"}
          w={"full"}
          color={isActivated ? "white" : "gray.400"}
          _hover={{
            textDecoration: "none",
            color: "white",
          }}
          justifyContent={!collapse ? "center" : ""}
        >
          <ListIcon as={icon} fontSize={22} m={0} />
          {collapse && <Text fontSize={14}>{label}</Text>}
        </LinkChakra>
        {collapse && (
          <React.Fragment>
            {notifications && (
              <Badge
                borderRadius={"full"}
                colorScheme="yellow"
                w={6}
                textAlign={"center"}
              >
                {notifications}
              </Badge>
            )}
            {messages && (
              <Badge
                borderRadius={"full"}
                colorScheme="green"
                w={6}
                textAlign={"center"}
              >
                {messages}
              </Badge>
            )}
          </React.Fragment>
        )}
      </Box>
    );
  }

  return (
    <Heading
      color={"gray.400"}
      fontSize={"sm"}
      fontWeight={"medium"}
      textTransform={"uppercase"}
      borderTopWidth={1}
      borderColor={"gray.100"}
      pt={collapse ? 8 : 0}
      my={6}
    >
      <Text display={collapse ? "flex" : "none"}>{label}</Text>
    </Heading>
  );
};
