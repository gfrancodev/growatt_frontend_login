import { ChakraProvider } from "@chakra-ui/react";
import App from "next/app";
import React from "react";
import theme from "@themes/theme";
import NProgress from "nprogress";
import "@themes/nprogress.css";
import { Router } from "next/router";

export default class myApp extends App {
  static async getInitialProps({ Component, ctx }: any) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    NProgress.configure({
      showSpinner: false,
      trickleSpeed: 100,
      minimum: 0.3,
    });

    const handleRouteChange = (url: string) => {
      console.log("App is changing to: ", url);
      NProgress.start();
    };

    const handleRouteChangeComplete = (url: string) => {
      console.log("App is changed to: ", url);
      NProgress.done();
    };

    const handleRouteChangeError = (err: any, url: string) => {
      console.log("App is changed to: ", url);
      NProgress.done();
    };

    Router.events.on("routeChangeStart", handleRouteChange);
    Router.events.on("routeChangeComplete", handleRouteChangeComplete);
    Router.events.on("routeChangeError", handleRouteChangeError);

    return () => {
      Router.events.off("routeChangeStart", handleRouteChange);
      Router.events.off("routeChangeComplete", handleRouteChangeComplete);
      Router.events.off("routeChangeError", handleRouteChangeError);
    };
  }

  render() {
    const { Component, pageProps } = this.props;

    const Layout =
      Component.layout ||
      (({ children }: any) => <React.Fragment>{children}</React.Fragment>);

    return (
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    );
  }
}
