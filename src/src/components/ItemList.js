import { CDN_URL } from "../../utils/constant";
import { addItem } from "../../utils/cartSlice";
import { useDispatch } from "react-redux";
const ItemList = (props) => {
  const { itemList } = props;
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item));
  };
  return (
    <div>
      <div>
        {itemList.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border border-gray-200 border-b-2 text-left flex "
          >
            <div className="w-9/12">
              <div className="p-2">
                <span>{item.card.info.name}</span>
                <span>
                  {" "}
                  - ₹{" "}
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>

              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className=" m-2 w-3/12">
              <button
                className="p-2 bg-black rounded-lg text-white shadow-lg mx-5 absolute"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
              {<img src={CDN_URL + item.card.info.imageId}></img>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ItemList;
