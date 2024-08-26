import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const { resData } = props;
    const{loggedInUser}=useContext(UserContext)
    const{name,cuisines,avgRating,costForTwo,cloudinaryImageId,sla}=resData?.info
    return (
      <div className="m-5 p-4 max-w-[210px] rounded-lg bg-gray-100 hover:bg-gray-300 " >
        <img
          className="rounded-lg"
          alt="res-logo"
          src={
           CDN_URL + cloudinaryImageId
          }
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4 className="font-medium">{cuisines.join(",")}</h4>
        <h4 className="font-medium">{avgRating}⭐</h4>
        <h5 className="font-medium">{costForTwo }</h5>
        <h5 className="font-medium">{sla.deliveryTime}minutes</h5>
        
      </div>
    );
  };
  export default RestaurantCard;