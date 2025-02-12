import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  return (
    <div>
      <h1>Error: {error?.message || "Something went wrong"}</h1>
      <p>
        {error?.status
          ? `${error.status} - ${error.statusText || "No details"}`
          : "Unknown error"}
      </p>
    </div>
  );
}
