import { NavLink } from "react-router-dom";

const navigation = {
  fontWeight: "bold",
  textDecoration: "underline",
};

function HostVanLayout() {
  return (
    <>
      <nav className="host-van-detail-nav">
        <NavLink
          style={({ isActive }) => (isActive ? navigation : null)}
          end
          to=""
        >
          Details
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? navigation : null)}
          to="pricing"
        >
          Pricing
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? navigation : null)}
          to="photos"
        >
          Photos
        </NavLink>
      </nav>
    </>
  );
}

export default HostVanLayout;
