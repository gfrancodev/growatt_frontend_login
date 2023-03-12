/* eslint-disable react/no-children-prop */
import {
  FormControl,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  isInvalid?: boolean;
  bgInput?: string;
  helperText?: string;
}

export const InputComponent = ({
  iconLeft,
  iconRight,
  isInvalid,
  bgInput = "#171717",
  helperText,
  ...props
}: InputProps & React.InputHTMLAttributes<HTMLInputElement>) => (
  <FormControl id="name" isInvalid={isInvalid}>
    <InputGroup>
      {iconLeft && (
        <InputLeftElement pointerEvents="none" children={iconLeft} />
      )}
      <Input
        w={"full"}
        variant="outline"
        color="white"
        bg={bgInput}
        border="0"
        _hover={{
          border: "1px solid #6CB62E",
        }}
        _placeholder={{
          color: "white",
        }}
        _focus={{
          borderColor: "#6CB62E",
        }}
        {...props}
      />
      {iconRight && (
        <InputRightElement pointerEvents="none" children={iconRight} />
      )}
    </InputGroup>
    {helperText && (
      <FormHelperText color="red.500" fontSize="sm">
        {helperText}
      </FormHelperText>
    )}
  </FormControl>
);
