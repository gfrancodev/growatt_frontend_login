import {
  Box,
  Button,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Stack,
  Icon,
  HStack,
  Checkbox,
  useMediaQuery,
} from "@chakra-ui/react";
import { Banner } from "@components/banner";
import { CardCourses } from "@components/cards/card-courses";
import { CardWithBannerCategory } from "@components/cards/card-with-banner-category";
import { CardWithFavorite } from "@components/cards/card-with-favorite";
import Carosel from "@components/carosel";
import {
  MockCourses,
  ProductsLaunch,
  ProductsWithBanner,
} from "@utils/mockCourses";
import { MdExpandMore } from "react-icons/md";

export default function Product_Template() {
  const [isMobile] = useMediaQuery("(max-width: 1144px)");
  return (
    <Box
      as={Stack}
      spacing={8}
      py={6}
      px={{
        base: 3,
        md: 8,
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
      {/*  Aqui vai o banner */}
      <Banner
        title={""}
        subtitle={""}
        image={"https://source.unsplash.com/random"}
        cta={""}
        ctaLink={""}
        isButton={false}
      />

      {/* Aqui vai os menus */}
      <HStack spacing={4}>
        <Button
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
            bg: "gray.900",
            transform: "scale(0.95)",
          }}
        >
          Lançamento
        </Button>

        <Button
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
            bg: "gray.900",
            transform: "scale(0.95)",
          }}
        >
          Mais vendidos
        </Button>

        <Menu closeOnSelect={false}>
          <MenuButton
            as={Button}
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
              bg: "gray.900",
              transform: "scale(0.95)",
            }}
          >
            categoria
            {/* <MdExpandMore /> */}
            <Icon ml={2} as={MdExpandMore} />
          </MenuButton>
          <MenuList minWidth="240px" color={"gray.900"}>
            <MenuOptionGroup type="checkbox">
              <MenuItemOption value="email">Email</MenuItemOption>
              <MenuItemOption value="phone">Phone</MenuItemOption>
              <MenuItemOption value="country">Country</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
        <Button
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
            bg: "gray.900",
            transform: "scale(0.95)",
          }}
        >
          Ofertas
        </Button>
      </HStack>

      {/* Aqui vai o grid de produtos */}
      <Heading as="h3" size="md" fontWeight="bold" letterSpacing="tight">
        Lançamentos
      </Heading>
      <Carosel slidesToShow={isMobile ? 1 : 3}>
        {ProductsLaunch.map((item) => (
          <CardWithFavorite
            key={item.id}
            img={item.img}
            title={item.title}
            price={item.price.toFixed(2)}
            description={item.description}
            rating={item.rating}
            carClick={() => console.log("clicou no carrinho")}
          />
        ))}
      </Carosel>

      <Heading as="h3" size="md" fontWeight="bold" letterSpacing="tight">
        Ofertas do dia
      </Heading>
      <Carosel slidesToShow={isMobile ? 1 : 3}>
        {ProductsLaunch.map((item) => (
          <CardWithFavorite
            key={item.id}
            img={item.img}
            title={item.title}
            price={item.price.toFixed(2)}
            description={item.description}
            rating={item.rating}
            carClick={() => console.log("clicou no carrinho")}
          />
        ))}
      </Carosel>
      <HStack spacing={4} flexDir={isMobile ? "column" : "row"}>
        {ProductsWithBanner.map((item) => (
          <CardWithBannerCategory
            key={item.id}
            img={item.imagem}
            title={item.title}
          />
        ))}
      </HStack>

      <Banner
        title={""}
        subtitle={""}
        image={"https://source.unsplash.com/random"}
        cta={""}
        ctaLink={""}
        isButton={false}
      />

      <Heading as="h3" size="md" fontWeight="bold" letterSpacing="tight">
        Lançamentos
      </Heading>
      <Carosel slidesToShow={isMobile ? 1 : 2}>
        {MockCourses.map((course) => (
          <Stack key={course.id} pl={3}>
            <CardCourses
              title={course.name}
              description={course.description}
              rating={course.rating}
              img={course.img}
            />
          </Stack>
        ))}
      </Carosel>
    </Box>
  );
}
