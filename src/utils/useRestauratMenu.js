import { useEffect, useState } from "react";
import { MENU_URL, RestaurantMenuJson } from "./constant";

const useRestauratMenu = (resId) => {
  const [resInfo, setResInfo] = useState(RestaurantMenuJson);

  //================= Commented bcoz of API issue ==================

  /*const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResInfo(json);
  }
*/
  //========================= Mock Data Used Due To Api issue ================

  return resInfo;
};

export default useRestauratMenu;
