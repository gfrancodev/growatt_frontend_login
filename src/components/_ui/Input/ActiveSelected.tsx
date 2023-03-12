import {
  Button,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import React from "react";

interface ActiveSelectedProps {
  text: string;
  options: any[];
}

export const ActiveSelected = ({
  text = "",
  options = [],
}: ActiveSelectedProps) => {
  const [active, setActive] = React.useState(false);

  return (
    <Menu>
      <MenuButton
        as={Button}
        bg={active ? "#6CB62E" : "transparent"}
        minW={120}
        display={"flex"}
        colorScheme=""
        border={"1px solid #6CB62E "}
        borderRadius="full"
        px={4}
        py={2}
        fontSize={"x-small"}
        fontWeight={600}
        textTransform={"uppercase"}
        letterSpacing={1.1}
        justifyContent={"center"}
        alignItems={"center"}
        _active={{
          transform: "scale(0.95)",
        }}
      >
        {text}
      </MenuButton>
      <MenuList
        color={"gray.900"}
        zIndex={999}
        bg={"white"}
        borderRadius={"xl"}
        boxShadow={"xl"}
        p={4}
        minW={"200px"}
      >
        <MenuOptionGroup
          type="checkbox"
          onChange={(value) => {
            console.log(value);
            if (value.length > 0) {
              setActive(true);
            }

            if (value.length === 0) {
              setActive(false);
            }
          }}
        >
          {options.map((option) => (
            <MenuItemOption key={option.value} value={option.value}>
              {option.label}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};
