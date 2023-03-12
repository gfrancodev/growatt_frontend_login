import {
  Box,
  ButtonGroup,
  Heading,
  Text,
  Button,
  HStack,
} from "@chakra-ui/react";
import { Rating } from "@components/_ui/Rating";
import { BsCartPlus } from "@components/_ui/Icons";

type CardSuggestionsProps = {
  image: string;
  title: string;
  description: string;
  rating: number;
  price: number;
  onClick?: () => void;
};

export const CardSuggestions = ({
  image,
  title,
  description,
  rating,
  price = 0,
  onClick,
}: CardSuggestionsProps) => {
  return (
    <HStack border={"1px solid #6CB62E"} p={2} rounded="2xl">
      <Box
        w={176}
        h={176}
        minH={150}
        minW={150}
        rounded={"lg"}
        bgImage={`url(${image})`}
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        position={"relative"}
        zIndex={1}
      />
      <Box
        w={"full"}
        h={"full"}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
        p={4}
      >
        <Box m={"auto 0"}>
          <Heading as="h1" fontSize={"md"} fontWeight={"bold"} color={"white"}>
            {title}
          </Heading>
          <Text fontSize={"small"} color={"white"} mt={2}>
            {description}
          </Text>
          <Rating rating={rating} />
        </Box>
        <Box alignSelf={"flex-end"} alignContent={"space-between"} m={"auto 0"}>
          <Heading as="h1" fontSize={"md"} fontWeight={"bold"} color={"white"}>
            {price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </Heading>
        </Box>

        <ButtonGroup size="sm" isAttached variant="outline" mt={4}>
          <Button
            borderColor="#6CB62E"
            rightIcon={<BsCartPlus size={20} />}
            _hover={{}}
            _active={{}}
            _focus={{}}
            onClick={onClick}
          >
            Adicionar
          </Button>
        </ButtonGroup>
      </Box>
    </HStack>
  );
};
