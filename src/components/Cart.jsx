import React from "react";
// import { toast } from "react-hot-toast";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  calculatePrice,
  decrement,
  deleteFromCart,
} from "../redux/reducer";
import { toast } from "react-hot-toast";

const Cart = () => {
  const { cartItems, subTotal, shipping, tax, total } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  const incrementHandler = (id) => {
    dispatch(addToCart({ id }));
    dispatch(calculatePrice());
  };
  const decrementHandler = (id) => {
    dispatch(decrement(id));
    dispatch(calculatePrice());
  };
  const deleteHandler = (id) => {
    dispatch(deleteFromCart(id));
    toast.success("Deleted successfully");
    dispatch(calculatePrice());
  };
  return (
    <div className="h-screen grid place-items-center">
      <div className="flex justify-center pt-4 uppercase text-5xl">
        Shopping Cart
      </div>
      <div className="flex">
        <main className="p-8 m-8 w-[800px]">
          {cartItems.length > 0 ? (
            cartItems.map((i) => (
              <CartItem
                key={i.id}
                imgSrc={i.imgSrc}
                name={i.name}
                price={i.price}
                qty={i.quantity}
                id={i.id}
                decrement={decrementHandler}
                increment={incrementHandler}
                deleteHandler={deleteHandler}
              />
            ))
          ) : (
            <div className="text-6xl uppercase">No items in the carts</div>
          )}
        </main>
        <aside className=" flex flex-col rounded-xl  m-4  font-sans text-2xl tracking-[2px] w-[300px]  p-4 border-4 border-zinc-950 text-center">
          <h2 className="p-4">Sub-Total:${subTotal}</h2>
          <h2 className="p-4">Shipping:${shipping}</h2>
          <h2 className="p-4">Tax:${tax}</h2>
          <h2 className="p-4 font-bold border-2 text-secondary">
            Total:${total}
          </h2>
          <button className="text-2xl p-4 border-4 hover:bg-secondaryDark m-4">
            Buy Now
          </button>
        </aside>
      </div>
    </div>
  );
};

const CartItem = ({
  imgSrc,
  name,
  price,
  qty,
  decrement,
  increment,
  deleteHandler,
  id,
}) => (
  <div className="border-2 flex p-4 m-2 border-zinc-950 overflow-auto">
    <img className="w-[150px]" src={imgSrc} alt="item" />
    <article className="w-[300px] text-2xl flex-col text-center pt-10">
      <h3 className="">{name}</h3>
      <p className="">${price}</p>
    </article>
    <div className="flex text-center p-8 w-[210px]">
      <button
        className="font-bold w-[70px] h-12 text-[2rem] rounded-full bg-secondary hover:text-primary hover:bg-secondaryDark"
        onClick={() => decrement(id)}
      >
        -
      </button>
      <p className="w-[70px] pt-2 font-semibold text-2xl overflow-ellipsis">
        {qty}
      </p>
      <button
        className="font-bold w-[70px] h-12 text-[2rem] rounded-full bg-secondary hover:text-primary hover:bg-secondaryDark"
        onClick={() => increment(id)}
      >
        +
      </button>
    </div>
    <AiFillDelete
      className="text-4xl w-[100px] mt-8 hover:text-secondaryDark cursor-pointer"
      onClick={() => deleteHandler(id)}
    />
  </div>
);

export default Cart;
