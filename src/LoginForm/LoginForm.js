import React from "react";
import { Formik } from "formik";
import Login from "./Login";
import { gql, useMutation } from "@apollo/client";

const LOGIN = gql`
  mutation ($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ... on CurrentUser {
        channels {
          token
        }
      }
    }
  }
`;

export default function LoginForm({ setChannelToken }) {
  const [mutateFunction, { data }] = useMutation(LOGIN);
  return (
    <Formik
      initialValues={{ username: "superadmin", password: "superadmin" }}
      onSubmit={(values, { setSubmitting }) => {
        mutateFunction({ variables: { ...values } }).then((res) => {
          setChannelToken((prev) => {
            return { ...prev, is: true, tokens: res.data };
          });
          setSubmitting(false);
        });
      }}
    >
      {(formik) => <Login formik={formik} />}
    </Formik>
  );
}
