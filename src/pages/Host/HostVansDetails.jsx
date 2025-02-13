import { useState, useEffect } from "react";
import { useParams, Link, Outlet, useLoaderData } from "react-router-dom";
import HostVanLayout from "../../Components/HostVanLayout";
import { getHostVans } from "../../hooks/useVansFetch";
import { requireAuth } from "../../utils";

export async function loader({ params }) {
  await requireAuth();
  return getHostVans(params.id);
}
export default function HostVanDetail() {
  // const { id } = useParams();
  // const [currentVan, setCurrentVan] = useState(null);
  const currentVan = useLoaderData();

  // useEffect(() => {
  //   fetch(`/api/host/vans/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setCurrentVan(data.vans));
  // }, []);

  // if (!currentVan) {
  //   return <h1>Loading...</h1>;
  // }
  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>

      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>

        <HostVanLayout />

        <Outlet context={{ currentVan }} />
      </div>
    </section>
  );
}
