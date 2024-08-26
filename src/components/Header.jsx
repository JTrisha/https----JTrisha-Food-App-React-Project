import { useState ,useContext} from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact,setBtnNameReact]=useState("Login")
  const onlineStatus=useOnlineStatus();
  const {loggedInUser}=useContext(UserContext)
  // Subscribing to store using A Selector
  const cartItems=useSelector((store)=> store.cart.items);
  console.log(cartItems)
  return (
    <div className="flex justify-between bg-green-100 sm:bg-yellow-100 lg:bg-orange-400 shadow-lg ">
      <div className="Logo-container w-40 p-[30px]">
        <img className="w-40 " src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="text-lg">Online Status:{onlineStatus?"🟢 ":"😶"}</li>
          <li className="px-4 text-lg"><Link to="/">Home</Link></li>
          <li className="px-4 text-lg"><Link to ="/about">About Us</Link></li>
          <li className="px-4 text-lg"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4 text-lg"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4 font-bold text-lg"><Link to="/cart">Cart-({cartItems.length}items)</Link></li>
          <button className="login text-lg"
          onClick={()=>{btnNameReact==="Login"?setBtnNameReact("Logout"):setBtnNameReact("Login")}}>{btnNameReact}</button>
          <li className="px-4 font-bold text-lg">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
