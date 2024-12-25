import { CDN_URL } from "../../utils/constant";

const ItemList = (props) => {
  const { itemList } = props;
  return (
    <div>
      <div>
        {itemList.map((ele) => (
          <div
            key={ele.card.info.id}
            className="p-2 m-2 border border-gray-200 border-b-2 text-left flex "
          >
            <div className="w-9/12">
              <div className="p-2">
                <span>{ele.card.info.name}</span>
                <span>
                  {" "}
                  - ₹{" "}
                  {ele.card.info.price
                    ? ele.card.info.price / 100
                    : ele.card.info.defaultPrice / 100}
                </span>
              </div>

              <p className="text-xs">{ele.card.info.description}</p>
            </div>
            <div className=" m-2 w-3/12">
              <button className="p-2 bg-black rounded-lg text-white shadow-lg mx-5 absolute">
                Add +
              </button>
              {<img src={CDN_URL + ele.card.info.imageId}></img>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ItemList;
