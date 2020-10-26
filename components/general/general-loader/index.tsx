import React, { useState, useCallback, useMemo, useEffect } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import ax from "config/api";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const useAxiosLoader = () => {
  const [counter, setCounter] = useState(0);
  const [errorMessage, setError] = useState({ status: false, message: "" });
  const inc = useCallback(() => setCounter((counter) => counter + 1), [
    setCounter,
  ]); // add to counter
  const dec = useCallback(() => setCounter((counter) => counter - 1), [
    setCounter,
  ]); // remove from counter

  const interceptors = useMemo(
    () => ({
      request: (config) => (inc(), config),
      response: (response) => (dec(), response),
      error: (error) => (dec(), Promise.reject(error)),
    }),
    [inc, dec]
  ); // create the interceptors

  useEffect(() => {
    // add request interceptors
    const reqInterceptor = ax.interceptors.request.use(
      interceptors.request,
      interceptors.error
    );
    // add response interceptors
    const resInterceptor = ax.interceptors.response.use((res) => {
      const { data } = res;
      if (data.status === "Error")
        setError({ status: true, message: data.data.message });
      return interceptors.response(res);
    }, interceptors.error);

    return () => {
      // remove all intercepts when done
      ax.interceptors.request.eject(reqInterceptor);
      ax.interceptors.response.eject(resInterceptor);
    };
  }, [interceptors]);

  return [counter > 0, { ...errorMessage, setError: setError }];
};

const GeneralLoader = () => {
  const [loading, errorMessage] = useAxiosLoader();
  const classes = useStyles();

  return (
    <React.Fragment>
      <Snackbar
        open={errorMessage.status}
        autoHideDuration={3000}
        onClose={() => errorMessage.setError({ status: false, message: "" })}
      >
        <Alert
          variant="filled"
          severity="error"
          onClose={() => errorMessage.setError({ status: false, message: "" })}
        >
          {errorMessage.message}
        </Alert>
      </Snackbar>
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </React.Fragment>
  );
};

export default GeneralLoader;
