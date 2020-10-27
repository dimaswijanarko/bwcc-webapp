import React, { useState } from "react";
import { AxiosRequestConfig } from "axios";
import qs from "qs";
import { useForm } from "react-hook-form";
import { Container, Box, Input as TextField, Button } from "@material-ui/core";
import { useStyles } from "./styles";
import API from "config/api";
import { useRouter } from 'next/router'

const Login = (props: any) => {
  const router = useRouter();
  const classes = useStyles();
  const [values, setValues] = useState({ email: "", password: "" });
  const { handleSubmit, register, errors } = useForm();

  const handleChange = (e) => {
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const onSubmit = async () => {
    const options: AxiosRequestConfig = {
      method: "post",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: qs.stringify(values),
      url:
        "user/login?key=m3svkHTbtMPiuIHybgdjDjsW2hEE29YN",
    };

    try {
      const { data: {status, data} } = await API(options);
      if(status === 'Success'){
        document.cookie = `bwccKey=${data.token_user}; path=/`;
        router.push('/home')
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.wrapper}>
      <Container className={classes.container}>
        <div className={classes.imgWrapper}>
          <img src="/images/small_logo_bwcc.png" alt="bwcc-logo" />
        </div>
        <form className="form-container" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <TextField
              placeholder="email"
              type="text"
              fullWidth
              value={values.email}
              onChange={handleChange}
              name="email"
              inputRef={register({
                required: "Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
              error={errors.email && errors.email.message ? true : false}
            />
            {errors.email && errors.email.message ? (
              <p className="error-message">{errors.email.message}</p>
            ) : null}
          </Box>
          <Box>
            <TextField
              placeholder="password"
              type="password"
              fullWidth
              value={values.password}
              onChange={handleChange}
              name="password"
              inputRef={register({
                required: "Required",
              })}
              error={errors.password && errors.password.message ? true : false}
            />
            {errors.password && errors.password.message ? (
              <p className="error-message">{errors.password.message}</p>
            ) : null}
          </Box>
          <Box className={classes.btnWrapper}>
            <Button variant="contained" color="primary" type="submit">
              login
            </Button>
          </Box>
        </form>
      </Container>
    </div>
  );
};

export default Login;
