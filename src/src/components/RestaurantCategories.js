import React, { useContext } from "react";
import ItemList from "./ItemList";
import UserContext from "../../utils/UserContext";

const RestaurantCategory = (props) => {
  const { loggedInUser } = useContext(UserContext);
  const { data, showItem, setShowIndex } = props;
  return (
    <div>
      {}
      <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 cursor-pointer">
        <div className="flex justify-between" onClick={() => setShowIndex()}>
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItem && <ItemList itemList={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
