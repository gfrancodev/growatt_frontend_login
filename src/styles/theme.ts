import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#1E1E1E",
        color: "gray.800",
      },
      fonts: {
        heading: "Montserrat sans-serif",
        body: "Montserrat sans-serif",
      },
    },
  },
});

export default theme;
