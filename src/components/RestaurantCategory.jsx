import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory=({data,showItems,setShowIndex,dummy})=>{
    const handleClick=()=>{
setShowIndex()
    }
    return(
       <div>
       <div className="w-6/12 shadow-lg bg-gray-100 mx-auto p-4 my-4 font-bold">
       <div className="flex justify-between cursor-pointer"
       onClick={handleClick}>
<span className="font-bold text-lg ">
    {data.title}({data.itemCards.length})</span>

<span>⬇</span>
</div>
{showItems && <ItemList items={data.itemCards} dummy={dummy}/>}
       </div>
       </div>
    )
}
export default RestaurantCategory;