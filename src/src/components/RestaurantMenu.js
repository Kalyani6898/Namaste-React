import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurentMenu] = useState([]);
  useEffect(() => {
    fetchDataRes();
  }, []);
  async function fetchDataRes() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=14780&catalog_qa=undefined&submitAction=ENTER"
      //      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=105258&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json.data);
    setRestaurentMenu(json.data);
  }
  //console.log(restaurantMenu.cards[2]);
  const { name, cuisines, costForTwoMessage, avgRating } = restaurantMenu;
  console.log(restaurantMenu);
  if (restaurantMenu === null) {
    return <Shimmer />;
  }
  return (
    <div className="menu">
      {/* <h1>{name}</h1>
      <h3>{cuisines}</h3>
      <h3>{costForTwoMessage}</h3>
      <h3>{avgRating}</h3> */}
      <h1>Menu</h1>
      <ul>
        <li>Biryani</li>
        <li>Dessert</li>
        <li>Diet coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;

// import React, { useEffect } from "react";

// const RestaurantMenu = () => {
//   useEffect(async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=14780&catalog_qa=undefined&submitAction=ENTER"
//     );
//     const json = await data.json();
//     console.log(json.data);
//   },[]);
//   return <div>RestaurantMenu</div>;
// };

// export default RestaurantMenu;
