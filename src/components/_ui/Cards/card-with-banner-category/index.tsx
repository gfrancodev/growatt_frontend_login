import { Card, CardBody, CardHeader, Text } from "@chakra-ui/react";
import React from "react";

interface CardWithBannerCategoryProps {
  img: string;
  title?: string;
}

export const CardWithBannerCategory = ({
  img,
  title,
}: CardWithBannerCategoryProps) => {
  return (
    <Card bg={"transparent"} w={"full"}>
      <CardHeader
        w={"full"}
        h={544}
        rounded={"2xl"}
        backgroundImage={`url(${img})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      />
      <CardBody>
        <Text
          fontSize={{
            base: 16,
            md: 20,
          }}
          fontWeight={"bold"}
          color={"white"}
          textAlign={"center"}
        >
          {title}
        </Text>
      </CardBody>
    </Card>
  );
};
