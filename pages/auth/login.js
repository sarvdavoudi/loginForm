import { Alert, AlertIcon, Box, Button, FormControl, FormErrorMessage, FormLabel, Input, ListItem, UnorderedList } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  lastName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const login = () => {
  const [message, setMessage] = React.useState("");
  return (
    <div>
      <Formik
        initialValues={{ name: "Sasuke" }}
        validationSchema={SignupSchema}
        onSubmit={async (values, actions) => {
          try {
            const response = await axios.post("/api/auth/login", values);
            console.log(response.data);
            if (response.data.status) {
              setMessage({
                status: "success",
                message: response.data.message,
              });
            } else {
              setMessage({
                status: "warning",
                message: response.data.message,
              });
            }
          } catch (err) {
            setMessage({
              status: "error",
              message: "something went wrong",
            });
          }
        }}
      >
        {(props) => (
          <Form>

            {/* Email field */}
            <Field name="Email">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.Email && form.touched.Email}>
                  <FormLabel>Email</FormLabel>
                  <Input {...field} placeholder="Email" />
                  <FormErrorMessage>{form.errors.Email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            {/* password field */}
            <Field name="password">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.password && form.touched.password}>
                  <FormLabel>password</FormLabel>
                  <Input type="password" {...field} placeholder="password" />
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button mt={4} colorScheme="teal" isLoading={props.isSubmitting} type="submit">
              login
            </Button>
          </Form>
        )}
      </Formik>
      {/* if  message exist then show that message */}

      {message && (
        <Box px={5}>
          <Alert status={message.status}>
            <AlertIcon />
            {message.message}
          </Alert>
        </Box>
      )}

      <Box>
        <UnorderedList>
          <ListItem>register</ListItem>
          <ListItem>forget password</ListItem>
        </UnorderedList>
      </Box>
    </div>
  );
};

export default login;
