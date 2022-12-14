import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import screenLoader from "../images/a.gif";
import "../StyleSheet/HouseListed.css";
import { Link } from "react-router-dom";
import filterSearchAction from "../store/Actions/filterSearchAction";
const FilterSearchResults = () => {
  const { loading, error, filterSearch } = useSelector(
    (state) => state.filterSearchResult
  );
  const location = window.location.href.split("/")[5];
  const display = location.split("%20");
  const prefix = display[0];
  const suffix = display[1] || "";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filterSearchAction(location));
  }, []);
  return (
    <div className="Houses__container">
      {loading ? (
        <img src={screenLoader} alt="Fetching-DATA" className="loadingScreen" />
      ) : error ? (
        <h1>SERVER IS CURRENTLY DOWN :(</h1>
      ) : (
        <div className="Container">
          <h3>{`Search Results: ${prefix} ${suffix}`}</h3>
          <div className="listedHouses">
            {filterSearch.length === 0 ? (
              <h1>{`No Listed Cars For ${prefix} ${suffix}`}</h1>
            ) : (
              filterSearch.map((house) => {
                return (
                  <div className="House__details" key={house._id}>
                    <div className="img-conatiner">
                      <Link
                        to={`/house/description/${house._id}`}
                      >
                        <img className="img"
                          src={house.house_details.house_image}
                          alt="House"
                        />
                      </Link>
                    </div>
                    <div className="House__priceAndDetails">
                      <h4 className="House__price">{`R${house.house_details.price}`}</h4>
                      <h4 className="House__snipDescription">{`${house.house_details.numOfBedRooms} Bedroom house for sale in ${house.house_location.city}`}</h4>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterSearchResults;