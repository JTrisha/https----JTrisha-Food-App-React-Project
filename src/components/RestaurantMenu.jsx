import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory"
import { useState } from "react";
const RestaurantMenu = () => {

  const {resId}=useParams();
  const dummy="dummy data";
  const resInfo=useRestaurantMenu(resId)
 const[showIndex,setShowIndex]=useState(null)
  if (resInfo === null) return <Shimmer />;
  const {  name,cuisines, costForTwo } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
const categories= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  return(
  <div className="text-center">
    <h1 className="font-bold my-6 text-2xl"> {name}</h1>
    <p className="font-bold text-lg">{cuisines.join(",")}-Rs{costForTwo/100}</p>
    {/* controlled Component */}
    {categories.map((category,index)=>(<RestaurantCategory
     key={category?.card?.card.title}
      data={category?.card?.card}
    showItems={index === showIndex ? true :false}
    setShowIndex={()=>setShowIndex(index)}
    dummy={dummy}
    />))}
  </div>)
};
export default RestaurantMenu;