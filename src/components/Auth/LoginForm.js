import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Image,
} from "react-native";
import React, { useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import { USER, USER_DETAILS } from "../../utils/constants";

import useAuth from "../../hooks/useAuth";

const LoginForm = () => {
  const [error, setError] = useState("");
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: ({ username, password }) => {
      setError("");
      if (username !== USER.username || password !== USER.password) {
        setError("Username or Password are incorrect");
      } else {
        login(USER_DETAILS);
      }
    },
  });

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/pokeball.png")}
        style={styles.pokeball}
      />
      <View style={styles.bg} />
      <Text style={styles.title}>Login Form</Text>
      <View style={{ zIndex: 1 }}>
        <TextInput
          placeholder="username"
          autoCapitalize="none"
          style={styles.input}
          placeholderTextColor="white"
          value={formik.values.username}
          onChangeText={(text) => formik.setFieldValue("username", text)}
        />
        <Text style={styles.require}>{formik.errors.username}</Text>
        <TextInput
          placeholder="password"
          autoCapitalize="none"
          style={styles.input}
          secureTextEntry={true}
          placeholderTextColor="white"
          value={formik.values.password}
          onChangeText={(text) => formik.setFieldValue("password", text)}
        />
        <Text style={styles.require}>{formik.errors.password}</Text>
        <TouchableOpacity style={styles.button} onPress={formik.handleSubmit}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        <Text style={{ ...styles.require, left: 0, marginTop: 10 }}>
          {error}
        </Text>
      </View>
    </View>
  );
};

const initialValues = () => ({
  username: "",
  password: "",
});

const validationSchema = () => ({
  username: Yup.string().required("Username Required*"),
  password: Yup.string().required("Password Required*"),
});

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 80,
    color: "white",
  },
  input: {
    height: 40,
    marginTop: 20,
    alignSelf: "center",
    borderWidth: 1,
    padding: 10,
    width: "70%",
    paddingLeft: 20,
    borderRadius: 50,
    borderColor: "white",
    color: "white",
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 50,
    marginTop: 130,
    width: 100,
    alignContent: "center",
    alignSelf: "center",
    backgroundColor: "#0B2A4D",
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
  bg: {
    backgroundColor: "#B80221",
    position: "absolute",
    height: 800,
    width: 800,
    borderRadius: 800,
    top: -440,
    left: -200,
  },
  pokeball: {
    position: "absolute",
    zIndex: 1,
    opacity: 0.1,
    height: 300,
    width: 300,
    top: 15,
    alignSelf: "center",
  },
  require: {
    textAlign: "center",
    left: 75,
    fontSize: 10,
    color: "#0B2A4D",
  },
});

export default LoginForm;
