"use client";
import { remove } from "@/redux/cartSlice";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
const Cart = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart.cart);
  return (
    
      <div>
        {data.length === 0 ? (
          <h1 className="text-2xl font-bold text-center">No Items in Cart</h1>
        ) : (
          <div>
            {data?.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between mb-4 singleItem">
                <img src={item.image} alt="image" height={100} width={100} />
                <div>
                  <h1 className="text-xl font-bold uppercase">{item.title}</h1>
                </div>
                <h2 className="font-bold text-gray-500">${item.price}</h2>

                <RxCross2
                  onClick={() => dispatch(remove(item.id))}
                  size={28}
                  className="cursor-pointer"
                />
              </div>
            ))}
          </div>
        )}
      </div>
  );
};

export default Cart;
