import { FormControl, Textarea } from "@chakra-ui/react";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  bgInput?: string;
  colorInput?: string;
  isInvalid?: boolean;
}

export const TextAreaComponent = ({
  bgInput = "#171717",
  colorInput = "#FFFFFF",
  isInvalid,
  ...props
}: TextareaProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <FormControl isInvalid={isInvalid}>
      <Textarea
        w={"full"}
        h={229}
        variant="outline"
        color={colorInput}
        bg={bgInput}
        border="0"
        _hover={{
          border: "1px solid #6CB62E",
        }}
        _placeholder={{
          color: "white",
        }}
        _focus={{
          outline: "none",
        }}
        {...props}
      />
    </FormControl>
  );
};
