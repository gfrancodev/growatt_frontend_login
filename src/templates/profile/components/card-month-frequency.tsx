import {
  Box,
  Button,
  Checkbox,
  Container,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { FiLinkedin } from "react-icons/fi";
import { BiCheck } from "react-icons/bi";
import React from "react";

export const CardMonthFrequency = () => {
  const [isChecked, setChecked] = React.useState(false);

  const daysInMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    0
  ).getDate();

  return (
    <React.Fragment>
      <Box h={200} border={"1px solid #3C611D"} rounded={"xl"} w={"full"}>
        <Container
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-around"}
          h={200}
          w={180}
          border={"1px solid #3C611D"}
          rounded={"xl"}
        >
          <IconButton
            aria-label="Search database"
            icon={<FiLinkedin />}
            size="lg"
            bg={"#6CB62E"}
            w={150}
            rounded={"full"}
          />
          <Button
            variant="outline"
            color={"#6CB62E"}
            colorScheme={"#6CB62E"}
            rounded={"full"}
          >
            <Text color={"white"}>Certificado</Text>
          </Button>
        </Container>
      </Box>

      <Box
        mx={"auto"}
        rounded={"lg"}
        h={148}
        w={"full"}
        maxW={daysInMonth < 31 ? 715 : 755}
        bg={"#0F0F0F"}
        mt={10}
      >
        <Text
          maxW={400}
          mx={"auto"}
          textAlign={"center"}
          p={1}
          bg={"#000"}
          borderBottomRadius={"xl"}
        >
          Atividades dos últimos {daysInMonth} dias do mês de{" "}
          {new Date().toLocaleString("pt-BR", { month: "long" })}
        </Text>

        <Box display={"flex"} flexWrap={"wrap"} p={2}>
          {Array.from(Array(daysInMonth).keys()).map((day) => (
            <Box key={day} p={2}>
              {Array.from(Array(1).keys()).map((week) => (
                <Box key={week} display={"flex"} flexDirection={"column"}>
                  <Checkbox
                    p={1.5}
                    bg={"#000"}
                    rounded={"lg"}
                    border={"1px solid #3C611D"}
                    icon={
                      isChecked ? (
                        <BiCheck color={"#6CB62E"} />
                      ) : (
                        <BiCheck color={"#000"} />
                      )
                    }
                    colorScheme="transparent"
                    value={day}
                    onChange={(e) => {
                      setChecked(e.target.checked);
                    }}
                  />
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </React.Fragment>
  );
};
