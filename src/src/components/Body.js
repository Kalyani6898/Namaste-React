import { RestrauntCard } from "./RestrauntCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const arr = useState([]);
  const [listOfRestaurant, setListOfRestaurant] = arr; // destructoring the array
  console.log(arr);
  const [filterRestaurant, setFilterRestaurant] =  useState([]);
  useEffect(() => {
    fetchData();
    console.log('éffet render')
  }, []);
  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  // if(listOfRestaurant.length === 0){
  //  return (<Shimmer/>);
  // }
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              console.log(e.target.value)
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              console.log(searchText)
              let filterSearchRestr = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText)
              );
              setFilterRestaurant(filterSearchRestr);
              console.log(filterSearchRestr);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            filterRestaurant = listOfRestaurant?.filter(
              (res) => res.info.avgRating > 4.2
            );
            //  console.log('listofRes',listOfRestaurant);
            setListOfRestaurant(filterRestaurant);
            console.log(filterRestaurant);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-conntainer">
        {filterRestaurant?.map((restaurant) => (
          <RestrauntCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
console.log(<Body />);
export default Body;
