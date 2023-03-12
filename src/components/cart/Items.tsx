import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  HStack,
  IconButton,
  Select,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { RiDeleteBin5Line } from "@components/_ui/Icons";

type CartItemsProps = {
  title: string;
  description: string;
  price: number;
  image: string;
  onDelete?: () => void;
};

export function CartItems({
  image,
  description,
  price,
  title,
  onDelete,
}: CartItemsProps) {
  const green_500 = "#6CB62E";
  return (
    <HStack w={"full"} borderTop={`1px solid ${green_500}`} p={2} mt={10}>
      <Box
        w={176}
        h={176}
        bgImage={image}
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        position={"relative"}
        zIndex={1}
      />
      <Flex
        w={"full"}
        h={"full"}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
        p={4}
      >
        <Box m={"auto 0"}>
          <Heading as="h1" fontSize={"xl"} fontWeight={"bold"} color={"white"}>
            {title}
          </Heading>
          <Text fontSize={"sm"} color={"white"} mt={2}>
            {description}
          </Text>
        </Box>
        <Box
          alignSelf={"flex-end"}
          alignContent={"space-between"}
          justifyContent={"space-between"}
          display={"flex"}
          flexDirection={"column"}
          h={140}
        >
          <Box display={"flex"}>
            <FormControl>
              <FormLabel>Quantidade</FormLabel>
              <Select
                placeholder=""
                w={20}
                size={"sm"}
                variant={"filled"}
                bg={green_500}
                _hover={{}}
                _focus={{
                  bg: green_500,
                  color: "white",
                }}
                _focusWithin={{
                  bg: green_500,
                  color: "gray.900",
                }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Select>
            </FormControl>
            <IconButton
              aria-label="Search database"
              icon={<RiDeleteBin5Line size={20} color={"red"} />}
              size={"sm"}
              variant={"ghost"}
              color={"white"}
              alignSelf={"flex-end"}
              onClick={onDelete}
            />
          </Box>

          <Text fontSize={"lg"} color={green_500}>
            {price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </Text>
        </Box>
      </Flex>
    </HStack>
  );
}
