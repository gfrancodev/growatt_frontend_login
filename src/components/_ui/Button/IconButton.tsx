import React from "react";
import { IconButton } from "@chakra-ui/react";

// type IconButtonProps = {
//   icon: any;
//   onClick?: () => void;
//   disabled?: boolean;
//   variant?: "outline" | "solid";
//   size?: "sm" | "md" | "lg";
// };

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: any;
  variant?: "outline" | "solid";
  size?: "sm" | "md" | "lg";
}
export const IconButtonComponent = ({
  icon,
  onClick,
  disabled,
  variant = "solid",
  size = "md",
  ...props
}: IconButtonProps) => {
  const bgButton = "#6CB62E";
  const colorButton = "#FFFFFF";

  return (
    <IconButton
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      size={size}
      color={colorButton}
      bgColor={variant === "solid" ? bgButton : "transparent"}
      border={variant === "solid" ? "none" : `1px solid ${bgButton}`}
      borderRadius="full"
      isLoading={disabled}
      _hover={{}}
      _active={{}}
      icon={icon}
      aria-label={""}
      {...props}
    />
  );
};
