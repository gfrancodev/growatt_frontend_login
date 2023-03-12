import React from "react";
import { Button } from "@chakra-ui/react";

interface ButtonInterface
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: "outline" | "solid";
  size?: "sm" | "md" | "lg";
  maxWidth?: string | number | object;
}

export const ButtonComponent = ({
  text,
  onClick,
  disabled,
  variant,
  size,
  maxWidth,
  ...props
}: ButtonInterface) => {
  const bgButton = "#6CB62E";
  const colorButton = "#FFFFFF";

  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      size={size}
      color={colorButton}
      maxWidth={maxWidth}
      bgColor={variant === "solid" ? bgButton : "transparent"}
      border={variant === "solid" ? "none" : `1px solid ${bgButton}`}
      borderRadius="full"
      isLoading={disabled}
      spinnerPlacement="end"
      loadingText="Aguarde"
      _hover={{}}
      _active={{}}
      {...props}
    >
      {text}
    </Button>
  );
};
