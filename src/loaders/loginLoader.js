import { redirect } from "react-router-dom";
import { loginUser } from "../hooks/useVansFetch";

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const pathname = new URL(request.url).searchParams.get("redirectTo") || "..";
  try {
    const data = await loginUser({ email, password });
    localStorage.setItem("loggedin", true);
    const response = redirect(pathname);

    response.body = true;
    return response;
  } catch (error) {
    return error.message;
  }
}
export function loader({ request }) {
  const message = new URL(request.url).searchParams.get("message");
  return message;
}
