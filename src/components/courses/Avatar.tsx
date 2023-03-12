import { Avatar, Box, Text, Wrap, WrapItem } from "@chakra-ui/react";

interface AvatarProps {
  src: string;
  name: string;
  title: string;
  description: string;
}

export const AvatarComponent = ({
  src,
  name,
  title,
  description,
}: AvatarProps) => {
  return (
    <Wrap>
      <WrapItem>
        <Avatar src={src} name={name} />
      </WrapItem>
      <WrapItem>
        <Box>
          <Text fontWeight="bold">{title}</Text>

          <Text noOfLines={1}>{description}</Text>
        </Box>
      </WrapItem>
    </Wrap>
  );
};
