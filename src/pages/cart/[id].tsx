import { Heading } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";

export default function test(props: any) {
  return <Heading color={"white"}>{props.test}</Heading>;
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      test: "tests",
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};
