import { useSearchParams, useLoaderData } from "react-router-dom";
import { useState } from "react";
import VanCard from "../../Components/VanCard";
import { getVans } from "../../hooks/useVansFetch";

export function loader() {
  return getVans();
}

function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const vans = useLoaderData();

  const typeFilter = searchParams.get("type");

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  // if (loading) {
  //   return <h1 aria-live="polite">Loading...</h1>;
  // }

  // if (error) {
  //   return <h1 aria-live="assertive">There was an error: {error.message}</h1>;
  // }
  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button
          onClick={() => handleFilterChange("type", "simple")}
          className={`van-type simple 
                        ${typeFilter === "simple" ? "selected" : ""}`}
        >
          Simple
        </button>
        <button
          onClick={() => handleFilterChange("type", "luxury")}
          className={`van-type luxury 
                        ${typeFilter === "luxury" ? "selected" : ""}`}
        >
          Luxury
        </button>
        <button
          onClick={() => handleFilterChange("type", "rugged")}
          className={`van-type rugged 
                        ${typeFilter === "rugged" ? "selected" : ""}`}
        >
          Rugged
        </button>

        {typeFilter ? (
          <button
            onClick={() => handleFilterChange("type", null)}
            className="van-type clear-filters"
          >
            Clear filter
          </button>
        ) : null}
      </div>
      <div className="van-list">
        {displayedVans.map((van) => (
          <VanCard
            van={van}
            key={van.id}
            searchParams={searchParams}
            typeFilter={typeFilter}
          />
        ))}
      </div>
    </div>
  );
}

export default Vans;
