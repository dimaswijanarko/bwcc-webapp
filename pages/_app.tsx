import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "themes/theme";
import { makeStyles } from "@material-ui/core/styles";
import GeneralLoader from "components/general/general-loader"

const useStyles = makeStyles({
  rootContainer: {
    "overflow-x": "hidden",
    "overflow-y": "auto",
    margin: "0 auto",
    "max-width": 480,
    height: "100%",
    overflow: 'scroll',
    position: 'relative'
  },
});

export default function MyApp(props:any) {
  const { Component, pageProps } = props;
  const classes = useStyles();

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>BWCC WebApp</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <div className={classes.rootContainer}>
          <Component {...pageProps} />
        </div>
        <GeneralLoader/>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
