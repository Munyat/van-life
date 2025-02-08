import HostVansCard from "../../Components/HostVansCard";
import { useEffect, useState } from "react";

function HostVans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("/api/host/vans");
      const vansData = await data.json();
      setVans([...vansData.vans]);
    }
    fetchData();
  }, []);
  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        {vans ? (
          vans.length > 0 ? (
            vans.map((van) => <HostVansCard van={van} key={van.id} />)
          ) : (
            <h2>No vans listed</h2>
          )
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </section>
  );
}

export default HostVans;
