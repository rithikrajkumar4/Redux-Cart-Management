import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <nav className="bg-secondary flex justify-between ps-4 pe-4 w-full">
      <h2 className="text-4xl uppercase text-primary">Logo here</h2>
      <div className="flex">
        <Link
          to={"/"}
          className="text-xl pe-3 uppercase hover:text-primaryDark hover:font-bold"
        >
          Home
        </Link>
        <Link to={"/cart"} className="flex">
          <FiShoppingBag className="text-3xl hover:text-primaryDark" />
          <p className="text-lg font-black ps-0.5">{cartItems.length}</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
