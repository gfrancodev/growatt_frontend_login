import React from "react";
import { useRouter } from "next/router";
import { SwiperSlide } from "swiper/react";
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

import { CartItems, CardSuggestions } from "@components/cart";
import { Carosel } from "@components/_ui/Carosel";

import { MyCourses } from "@utils/mockCourses";
import { CartContext } from "@context/CartContext";
import { ButtonComponent } from "@components/_ui/Button";
import { InputComponent } from "@components/_ui/Input";

export default function Cart_Template() {
  const router = useRouter();
  const { state, dispatch } = React.useContext(CartContext);

  const plural = state.length > 1 ? "itens" : "item";

  const totalItems = state.length < 10 ? `0${state.length}` : state.length;

  const total = state.reduce((acc: any, item: any) => {
    return acc + item.price;
  }, 0);

  return (
    <Box
      py={6}
      px={{
        base: 3,
        md: 6,
      }}
      w={"full"}
      h={"full"}
      color={"white"}
      overflowY={"auto"}
      css={{
        "&::-webkit-scrollbar": {
          width: "0.3em",
        },
        "&::-webkit-scrollbar-track": {
          boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
          webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
        },
        "&::-webkit-scrollbar-thumb": {
          outline: "1px solid  slategrey",
          borderRadius: "4px",
          backgroundColor: "#666",
        },
      }}
    >
      <Heading
        as="h1"
        fontSize={"2xl"}
        fontWeight={"bold"}
        color={"white"}
        mt={10}
      >
        Aproveite e leve também
      </Heading>
      <Carosel>
        {MyCourses.map((item, index) => (
          <SwiperSlide key={index}>
            <CardSuggestions
              image={item.image}
              title={"test"}
              description={"test"}
              price={item.price}
              rating={3}
              onClick={() => router.push(item.link)}
            />
          </SwiperSlide>
        ))}
      </Carosel>

      <Heading
        as="h1"
        fontSize={"2xl"}
        fontWeight={"bold"}
        color={"white"}
        mt={10}
      >
        Meus produtos
      </Heading>
      <Stack>
        {state.length > 0 ? (
          state.map((item: any, index: number) => (
            <CartItems
              key={index}
              image={item.img}
              title={item.title}
              description={item.description}
              price={item.price}
              onDelete={() => dispatch({ type: "remove", payload: item })}
            />
          ))
        ) : (
          <Text
            fontSize={"lg"}
            py={10}
            color={"white"}
            textAlign={"center"}
            mt={2}
          >
            Nenhum item no carrinho
          </Text>
        )}

        <Flex
          w={"full"}
          h={"full"}
          justifyContent={"space-between"}
          alignItems={"flex-start"}
          flexDirection={{
            base: "column",
            md: "row",
          }}
          p={4}
        >
          <Box
            as={Stack}
            m={"auto 0"}
            alignItems={"center"}
            mr={4}
            h={"full"}
            mb={5}
          >
            <Stack spacing={4} w="full" bg="#0D0D0D" rounded={"xl"} p={4}>
              <Text fontSize={"xl"} fontWeight={"bold"} mb={2}>
                Calcule a entrega
              </Text>
              <Flex>
                <InputComponent
                  placeholder="x x x x x -x x x "
                  width={"full"}
                  height={50}
                />
                <ButtonComponent
                  text={"Calcular"}
                  variant={"solid"}
                  style={{ width: 200, marginLeft: 10 }}
                />
              </Flex>
            </Stack>
            <Stack spacing={4} w="full" bg="#0D0D0D" rounded={"xl"} p={4}>
              <Text fontSize={"xl"} fontWeight={"bold"} mb={2}>
                Cupom de desconto
              </Text>
              <Flex>
                <InputComponent
                  placeholder="Cupom de desconto"
                  width={"full"}
                  height={50}
                />
                <ButtonComponent
                  text={"Aplicar"}
                  variant={"solid"}
                  style={{ width: 200, marginLeft: 10 }}
                />
              </Flex>
            </Stack>
          </Box>
          <Box w={"full"}>
            <Flex
              justifyContent={"space-between"}
              borderTopWidth={1}
              borderTopColor={"#6CB62E"}
              p={4}
            >
              <Text fontSize={"lg"} fontWeight={"bold"}>
                {totalItems} {plural}
              </Text>
              <Text fontSize={"lg"} fontWeight={"bold"} ml={2}>
                {total.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Text>
            </Flex>
            <Flex
              justifyContent={"space-between"}
              borderTopWidth={1}
              borderTopColor={"#6CB62E"}
              p={4}
            >
              <Text fontSize={"lg"} fontWeight={"bold"}>
                Total
              </Text>
              <Text fontSize={"lg"} fontWeight={"bold"} ml={2}>
                {total.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Text>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Link
                fontSize={"sm"}
                fontWeight={"400"}
                pl={4}
                onClick={() => router.push("/products")}
              >
                Continue comprando
              </Link>
              <ButtonComponent
                text={"Finalizar compra"}
                variant={"solid"}
                style={{ marginTop: 10 }}
              />
            </Flex>
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
}
