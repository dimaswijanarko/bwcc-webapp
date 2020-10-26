import React, { useState } from "react";
import qs from 'qs';
import { useForm } from "react-hook-form";
import { Container, Box, Input as TextField, Button } from "@material-ui/core";
import { useStyles } from "./styles";
import API from "config/api";

const Login = () => {
  const classes = useStyles();
  const [values, setValues] = useState({ email: "", password: "" });
  const { handleSubmit, register, errors } = useForm();

  const handleChange = (e) => {
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const onSubmit = async () => {
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify(values),
      url : 'https://cors-anywhere.herokuapp.com/https://bwcc.inovasialfatih.com/api/public/user/login?key=m3svkHTbtMPiuIHybgdjDjsW2hEE29YN',
    };

    try {
      const { data } = await API(options);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.wrapper}>
      <Container className={classes.container}>
        <div className={classes.imgWrapper}>
          <img src="/images/small_logo_bwcc.png" alt="bwcc-logo"/>
        </div>
        <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
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
                  message: "invalid email address"
                }
              })}
              error={errors.email && errors.email.message ? true : false}
            />
            {errors.email && errors.email.message ?  <p className="error-message">{errors.email.message}</p> : null}
           
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
            {errors.password && errors.password.message ?  <p className="error-message">{errors.password.message}</p> : null}
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
