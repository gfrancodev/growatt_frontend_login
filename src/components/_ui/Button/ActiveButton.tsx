import { Button } from "@chakra-ui/react";
import React from "react";

interface ActiveButtonProps {
  text: string;
  onClick?: () => void;
}

export const ActiveButton = ({ text = "", onClick }: ActiveButtonProps) => {
  const [active, setActive] = React.useState(false);
  return (
    <Button
      bg={active ? "#6CB62E" : "transparent"}
      w={120}
      minW={120}
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
      _hover={{}}
      _focus={{}}
      onClick={() => {
        setActive(!active);
        onClick && onClick();
      }}
    >
      {text}
    </Button>
  );
};
