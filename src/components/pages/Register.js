import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  TextField,
  Link,
} from "@material-ui/core";

import { useNavigate } from "react-router-dom";
import { Formik } from "formik";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: 80,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  media: {
    height: 200,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register(props) {
  const classes = useStyles();
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });
  let navigate = useNavigate();

  function showForm({
    values,
    handleChange,
    handleSubmit,
    setFiledValue,
    isSubmitting,
  }) {
    return (
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          autoComplete="email"
          autoFocus
          value={values.username}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={values.password}
          onChange={handleChange}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Register
        </Button>
        <Button
          fullWidth
          size="small"
          color="primary"
          onClick={() => navigate("/login")}
        >
          Cancel
        </Button>
      </form>
    );
  }
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={`${process.env.PUBLIC_URL}/images/authen_header.jpg`}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Register
        </Typography>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={(values, { setSubmit }) => {}}
        >
          {(props) => showForm(props)}
        </Formik>
      </CardContent>
    </Card>
  );
}
