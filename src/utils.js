import { redirect } from "react-router-dom";

export async function requireAuth(request) {
  const isLoggedIn = localStorage.getItem("loggedin");
  const pathName = new URL(request.url).pathname;

  if (!isLoggedIn) {
    const response = redirect(
      `/login?message=Login to access page&redirectTo=${pathName}`
    );
    response.body = true;
    // Object.defineProperty(response, "body", { value: true });
    throw response;
  }
}
