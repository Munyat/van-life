import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function VanDetails() {
  const params = useParams();
  const [van, setVan] = useState(null);
  const location = useLocation();
  // console.log(location);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(`/api/vans/${params.id}`);
      const vanData = await data.json();
      setVan({ ...vanData.vans });
    }
    fetchData();
  }, [params]);
  // console.log(van);
  const search = location.state?.search || "";
  // console.log(search.split("=")[1]);
  const type = location.state?.type || "all";

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>Back to {type} vans</span>
      </Link>
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default VanDetails;
