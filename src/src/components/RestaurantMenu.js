import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestauratMenu from "../../utils/useRestauratMenu";
import RestaurantCategory from "./RestaurantCategories";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestauratMenu(resId);
  const [showIndex, setShowIndex] = useState();
  if (resId === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo.data.cards[2].card.card.info; // use cards[2]
  const { itemCards } =
    resInfo.data.cards[0].groupedCard.cardGroupMap.REGULAR.cards[1].card.card; //cards[4]
  const categories =
    resInfo.data.cards[0].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (f) =>
        f.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(", ")}</p>
      {categories.map((category, index) => (
        //controlled component
        <RestaurantCategory
          data={category.card.card}
          key={category.card.card.itemCards[0].card.info.id}
          showItem={index === showIndex ? true : false}
          setShowIndex={() => {
            setShowIndex(index);
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
