import { RestrauntCard, withPromotedLabel } from "./RestrauntCard";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { Json } from "../../utils/constant";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
const Body = () => {
  const onlineStatus = useOnlineStatus();
  //==================commented due to api facing issue======================

  // const [searchText, setSearchText] = useState("");
  // const arr = useState([]);
  // const [listOfRestaurant, setListOfRestaurant] = arr; // destructoring the array
  // console.log(arr);
  // const [filterRestaurant, setFilterRestaurant] = useState([]);
  // useEffect(() => {
  //   fetchDataRes();
  // }, []);
  // async function fetchDataRes() {
  //   const data = await fetch(
  //     "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.11610&lng=79.07060&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const json = await data();
  //   console.log(json);
  //   setListOfRestaurant(
  //     arr?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  //   setFilterRestaurant(
  //     arr?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  // }

  //=========================  MOck Data Used Due To Api issue  ================
  const [searchText, setSearchText] = useState("");
  const { loggedInUser, setUserInfo } = useContext(UserContext);
  const RestaurantCardPromoted = withPromotedLabel(RestrauntCard);
  const [listOfRestaurant, setListOfRestaurant] = useState(
    Json.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  );
  const [filterRestaurant, setFilterRestaurant] = useState(
    Json.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  );
  if (onlineStatus === false) {
    return (
      <h1>Looks like you are offline, Please check Internet connection</h1>
    );
  }
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="search-box border border-solid
            border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="bg-green-200 px-4, py-2 mx-3 rounded-lg"
            onClick={() => {
              console.log(searchText);
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
        <div className="search m-4 p-4">
          <button
            className="filter-btn bg-gray-100"
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
          <label className="ml-2">UserName</label>
          <input
            className=" border border-black p-2"
            value={loggedInUser}
            onChange={(e) => {
              setUserInfo(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterRestaurant?.map((restaurant) => (
          <Link to={`/restaurants/${restaurant.info.id}`}>
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestrauntCard key={restaurant.info.id} resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
console.log(<Body />);
export default Body;
