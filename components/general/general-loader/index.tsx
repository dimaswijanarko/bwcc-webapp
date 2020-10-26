import React, { useState, useCallback, useMemo, useEffect } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import ax from "config/api";

interface ILoader {
  status: string;
  message: string;
}

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const useAxiosLoader = () => {
  const [loader, setLoader] = useState<ILoader>({ status: 'hide', message: "" });
  const inc = useCallback(() => setLoader((state) => { return {...state, status: 'loading'}}), [
    setLoader,
  ]); // add to counter
  const dec = useCallback((param) => setLoader((state) => {return {...state, status: 'hide', ...param}}), [
    setLoader,
  ]); // remove from counter

  const interceptors = useMemo(
    () => ({
      request: (config: any) => (inc(), config),
      response: (response: any,param:object) => (dec(param), response),
      error: (error: any) => (dec({status: 'err', message:error.message}), Promise.reject(error)),
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
      if (data.status === "Error"){
        return interceptors.response(res,{ status: 'err', message: data.data.message });
      }
      return interceptors.response(res,{});
    }, interceptors.error);

    return () => {
      // remove all intercepts when done
      ax.interceptors.request.eject(reqInterceptor);
      ax.interceptors.response.eject(resInterceptor);
    };
  }, [interceptors]);

  return [loader, setLoader] as const;
};

const GeneralLoader = () => {
  const [loader, setLoader] = useAxiosLoader();
  const classes = useStyles();

  return (
    <React.Fragment>
      <Snackbar
        open={loader.status === 'err'}
        autoHideDuration={3000}
        onClose={() => setLoader({ status: 'hide', message: "" })}
      >
        <Alert
          variant="filled"
          severity="error"
          onClose={() => setLoader({ status: 'hide', message: "" })}
        >
          {loader.message}
        </Alert>
      </Snackbar>
      <Backdrop className={classes.backdrop} open={loader.status === 'loading'}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </React.Fragment>
  );
};

export default GeneralLoader;
