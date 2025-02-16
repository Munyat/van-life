// import React from "react";
// import { useLoaderData, useNavigate } from "react-router-dom";

// export function loader({ request }) {
//   const message = new URL(request.url).searchParams.get("message");
//   return message;
// }

// export default function Login() {
//   const [loginFormData, setLoginFormData] = React.useState({
//     email: "",
//     password: "",
//   });
//   const message = useLoaderData();
//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(loginFormData);
//   }

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setLoginFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   }

//   return (
//     <div className="login-container">
//       <h1>Sign in to your account</h1>
//       {message && <h2 className="red">{message}</h2>}
//       <form onSubmit={handleSubmit} className="login-form">
//         <input
//           name="email"
//           onChange={handleChange}
//           type="email"
//           placeholder="Email address"
//           value={loginFormData.email}
//         />
//         <input
//           name="password"
//           onChange={handleChange}
//           type="password"
//           placeholder="Password"
//           value={loginFormData.password}
//         />
//         <button>Log in</button>
//       </form>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";

// export function loader({ request }) {
//   const message = new URL(request.url).searchParams.get("message");
//   return message;
// }

// export default function Login() {
//   const [loginFormData, setLoginFormData] = React.useState({
//     email: "",
//     password: "",
//   });

//   const initialMessage = useLoaderData();
//   const [message, setMessage] = useState(initialMessage);

//   useEffect(() => {
//     if (message) {
//       const timer = setTimeout(() => {
//         setMessage(""); // Remove message after 3 seconds
//       }, 3000);

//       return () => clearTimeout(timer); // Cleanup timeout on unmount
//     }
//   }, [message]);

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(loginFormData);
//   }

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setLoginFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   }

//   return (
//     <div className="login-container">
//       <h1>Sign in to your account</h1>
//       {message && <h2 className="red fade-out">{message}</h2>}
//       <form onSubmit={handleSubmit} className="login-form">
//         <input
//           name="email"
//           onChange={handleChange}
//           type="email"
//           placeholder="Email address"
//           value={loginFormData.email}
//         />
//         <input
//           name="password"
//           onChange={handleChange}
//           type="password"
//           placeholder="Password"
//           value={loginFormData.password}
//         />
//         <button>Log in</button>
//       </form>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import { useLoaderData, Form } from "react-router-dom";
// import { redirect } from "react-router-dom";
// import { loginUser } from "../hooks/useVansFetch";

// export async function action({ request }) {
//   const formData = await request.formData();
//   const email = formData.get("email");
//   const password = formData.get("password");
//   const data = await loginUser({ email, password });
//   localStorage.setItem("loggedin", true);
//   return redirect("/host");
// }

// export function loader({ request }) {
//   const message = new URL(request.url).searchParams.get("message");
//   return message;
// }

// export default function Login() {
//   const initialMessage = useLoaderData();
//   const [message, setMessage] = useState(initialMessage);
//   const [showPopup, setShowPopup] = useState(!!initialMessage);
//   const [status, setStatus] = React.useState("idle");
//   const [error, setError] = React.useState(null);

//   useEffect(() => {
//     if (message) {
//       const timer = setTimeout(() => {
//         setShowPopup(false);
//       }, 3000);

//       return () => clearTimeout(timer);
//     }
//   }, [message]);

//   return (
//     <div className="login-container">
//       <h1>Sign in to your account</h1>

//       {error && <h3 className="red">{error.message}</h3>}
//       {showPopup && (
//         <div className="popup">
//           <p>{message}</p>
//         </div>
//       )}

//       <Form method="post" className="login-form">
//         <input name="email" type="email" placeholder="Email address" />
//         <input
//           name="password"
//           autoComplete="true"
//           type="password"
//           placeholder="Password"
//         />
//         <button disabled={status === "submitting"}>
//           {status === "submitting" ? "Logging in..." : "Log in"}
//         </button>
//       </Form>
//     </div>
//   );
// }
