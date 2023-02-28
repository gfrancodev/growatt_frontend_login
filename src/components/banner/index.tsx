import { Box, Button, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface BannerProps {
  title: string;
  subtitle: string;
  image: string;
  cta: string;
  ctaLink: string;
  isButton: boolean;
}

export const Banner = ({
  title,
  subtitle,
  image,
  cta,
  ctaLink,
  isButton,
}: BannerProps) => {
  const router = useRouter();
  return (
    <Box
      onClick={() => !isButton && router.push(ctaLink)}
      cursor={isButton ? "default" : "pointer"}
      bgImage={`url(${image})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      w="full"
      h="full"
      minH={200}
      rounded="xl"
      color="white"
      px={{
        base: 3,
        md: 6,
      }}
      py={{
        base: 3,
        md: 6,
      }}
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
      <Box
        maxW={{
          base: "xl",
          md: "7xl",
        }}
        mx="auto"
        px={{
          base: 3,
          md: 6,
        }}
        py={{
          base: 3,
          md: 6,
        }}
      >
        <Heading
          as="h1"
          fontSize={{
            base: "3xl",
            md: "4xl",
          }}
          fontWeight="extrabold"
          letterSpacing="tight"
          lineHeight="shorter"
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          fontSize={{
            base: "xl",
            md: "2xl",
          }}
          fontWeight="medium"
          letterSpacing="tight"
          lineHeight="shorter"
        >
          {subtitle}
        </Heading>
        {isButton && (
          <Button
            as="a"
            href={ctaLink}
            mt={4}
            colorScheme="blue"
            size="lg"
            fontWeight="bold"
            px={8}
          >
            {cta}
          </Button>
        )}
      </Box>
    </Box>
  );
};
