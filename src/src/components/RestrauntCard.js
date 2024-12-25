import { useNavigate } from "react-router-dom";
import { CDN_URL } from "../../utils/constant";
import { useContext } from "react";
import UserContext from "../../utils/UserContext";

const styleCard = {
  backgroundColor: "#f0f0f0",
};
export const RestrauntCard = (props) => {
  const navigate = useNavigate();
  const { resData } = props; //destructure of object props
  const { loggedInUser } = useContext(UserContext);
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla, id } =
    resData?.info;
  return (
    <div
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"
      onClick={() => {
        // let resId = id;
        // console.log(resId);
        // navigate(`/restaurants/${resId}`);
      }}
    >
      <img
        className="rounded-lg"
        alt="res-img"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
      <h4>User :{loggedInUser}</h4>
    </div>
  );
};

// Higher Order Component

// input - RestaurantCard ==> RestaurantCardPromonted

export const withPromotedLabel = (RestrauntCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-5 p-2 rounded-lg">
          Promoted
        </label>
        <RestrauntCard {...props} />
      </div>
    );
  };
};
