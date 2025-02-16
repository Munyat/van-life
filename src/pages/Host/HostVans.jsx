import HostVansCard from "../../Components/HostVansCard";
import { useEffect, useState } from "react";
import { getHostVans } from "../../hooks/useVansFetch";
import { useLoaderData } from "react-router-dom";
import { requireAuth } from "../../utils";

export async function loader({ request }) {
  await requireAuth(request);
  return getHostVans();
}

function HostVans() {
  // const [vans, setVans] = useState([]);
  const vans = useLoaderData();

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
