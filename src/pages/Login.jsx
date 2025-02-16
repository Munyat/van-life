import React from "react";
import {
  useLoaderData,
  Form,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { loginUser } from "../hooks/useVansFetch";

export default function Login() {
  const message = useLoaderData();
  const errorMessage = useActionData();
  const { state: status, ...nav } = useNavigation();

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h3 className="red">{message}</h3>}
      {errorMessage && <h3 className="red">{errorMessage}</h3>}

      <Form method="post" className="login-form" replace>
        <input name="email" type="email" placeholder="Email address" />
        <input
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="true"
        />
        <button>{status === "submitting" ? "Logging in..." : "Log in"}</button>
      </Form>
    </div>
  );
}
