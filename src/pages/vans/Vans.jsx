import { useSearchParams, useLoaderData, defer, Await } from "react-router-dom";
import { Suspense, useState, CSSProperties } from "react";
import VanCard from "../../Components/VanCard";
import { getVans } from "../../hooks/useVansFetch";

import ClipLoader from "react-spinners/ClipLoader";

export function loader() {
  return defer({ vans: getVans() });
}

const override = {
  display: "block",
  margin: "auto auto",
  color: "red",
};

function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const promiseData = useLoaderData();

  const typeFilter = searchParams.get("type");

  function renderVans(vans) {
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
    return (
      <>
        {" "}
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
      </>
    );
  }
  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <Suspense fallback={<ClipLoader cssOverride={override} />}>
        <Await resolve={promiseData.vans}>{renderVans}</Await>
      </Suspense>
    </div>
  );
}

export default Vans;
