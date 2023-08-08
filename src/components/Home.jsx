import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCart, calculatePrice } from "../redux/reducer";

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";
const Home = () => {
  const productList = [
    {
      name: "Mac Book",
      price: 12000,
      imgSrc: img1,
      id: "asdhajsdbhjabhsjdfdfv",
    },
    {
      name: "Black Shoes",
      price: 490,
      imgSrc: img2,
      id: "sdjfdlaajsdbhjabhsjdfdfv",
    },
  ];
  const dispatch = useDispatch();
  const addtoCartHandler = (option) => {
    dispatch(addToCart(option));
    dispatch(calculatePrice());
    toast.success("Added to cart");
  };
  return (
    <div className="flex p-12 justify-center flex-wrap">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addtoCartHandler}
        />
      ))}
    </div>
  );
};
const ProductCard = ({ name, price, id, handler, imgSrc }) => (
  <div className="bg-tertiary w-50 m-8 rounded-md p-8 flex flex-col justify-center">
    <img className="w-40 pb-2" src={imgSrc} alt={name} />
    <p className="text-primary font-bold uppercase text-2xl h-12">{name}</p>
    <h4 className="text-primary font-extrabold pt-4 text-2xl pb-4">${price}</h4>
    <button
      className="text-primary bg-secondary rounded-3xl text-xl p-3 transition duration-350 hover:text-tertiary hover:bg-secondaryDark"
      onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}
    >
      Add to Cart
    </button>
  </div>
);
export default Home;
