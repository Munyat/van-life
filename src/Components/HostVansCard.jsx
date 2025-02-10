import { Link } from "react-router-dom";

function HostVansCard({ van }) {
  if (!van) {
    return <h2>Van data is not available</h2>;
  }

  return (
    <Link to={`${van.id}`} className="host-van-link-wrapper">
      <div className="host-van-single">
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
  );
}

export default HostVansCard;
