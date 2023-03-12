import { Box, Checkbox, Text } from "@chakra-ui/react";
import React from "react";

const currentDay = new Date().getDate();

const daysInMonth = new Date(
  new Date().getFullYear(),
  new Date().getMonth() + 1,
  0
).getDate();

export const FrequencyComponent = () => {
  const [mockChecked, setMockChecked] = React.useState<any>([1, 2, 3, 4]);

  React.useEffect(() => {
    setMockChecked([...mockChecked, currentDay]);
  }, [mockChecked]);

  return (
    <Box
      mx={"auto"}
      rounded={"lg"}
      position={"relative"}
      h={148}
      w={"full"}
      maxW={595}
      bg={"#0F0F0F"}
      my={10}
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
                  size={"lg"}
                  bg={"#000"}
                  iconColor={"#3C611D"}
                  colorScheme="transparent"
                  borderColor={"#3C611D"}
                  isChecked={mockChecked.includes(day)}
                />
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
