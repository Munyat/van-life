import { useState, useEffect } from "react";
import "../../server";

function useVansFetch(request) {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(request);
        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        setVans([...data]); // Assumes data is an array or object depending on endpoint
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []); // Re-run effect when `request` changes

  return [vans, loading, error];
}

export default useVansFetch;
