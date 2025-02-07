import { useEffect, useState } from "react";
import VanCard from "../../Components/VanCard";

function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("/api/vans");
      const vansData = await data.json();
      setVans(vansData.vans);
    }
    fetchData();
  }, []);
  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">
        {vans.map((van) => (
          <VanCard van={van} key={van.id} />
        ))}
      </div>
    </div>
  );
}

export default Vans;
