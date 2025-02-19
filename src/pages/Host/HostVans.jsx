import HostVansCard from "../../Components/HostVansCard";
import { Suspense, useEffect, useState } from "react";
import { getHostVans } from "../../hooks/useVansFetch";
import { useLoaderData, defer, Await } from "react-router-dom";
import { requireAuth } from "../../utils";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "auto auto",
  color: "red",
};

export async function loader({ request }) {
  await requireAuth(request);
  return defer({ vans: getHostVans() });
}

function HostVans() {
  // const [vans, setVans] = useState([]);
  const PromiseVans = useLoaderData();

  function renderHostVans(vans) {
    return (
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
    );
  }

  return (
    <section className="host">
      <h1 className="host-vans-title">Your listed vans</h1>
      <Suspense fallback={<ClipLoader cssOverride={override} />}>
        <Await resolve={PromiseVans.vans}>{renderHostVans}</Await>
      </Suspense>
    </section>
  );
}

export default HostVans;
