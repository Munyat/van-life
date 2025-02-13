import { redirect } from "react-router-dom";

export async function requireAuth() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    const response = redirect("/login");
    response.body = true;
    // Object.defineProperty(response, "body", { value: true });
    throw response;
  }

  return null;
}
