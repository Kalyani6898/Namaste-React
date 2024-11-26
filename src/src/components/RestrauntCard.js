import { CDN_URL } from "../../utils/constant";

const styleCard={
    backgroundColor :"#f0f0f0",
  }
export const RestrauntCard = (props) => {
    const { resData } = props
    const {name ,cuisines,avgRating,costForTwo,cloudinaryImageId,sla} = resData?.info
    return (
      <div className="res-card" style={styleCard} onClick ={()=>{
       console.log('Hi');
      }}>
        <img className="res-logo" alt = "res-img" src={CDN_URL+ cloudinaryImageId}/>
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.slaString}</h4>
      </div>
    );
  };

  