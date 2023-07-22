import Cart from "@/components/Cart";

const Cart = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-6rem)] flex flex-col text-slate-800 md:flex-row">
      {/* PRODUCT CONTAINER */}
      <div className="flex flex-col justify-center p-4 overflow-y-scroll md:overflow-hidden h-1/2 md:h-full md:w-2/3">
        <Cart />
      </div>
      {/* PAYMENT CONTAINER */}
      <div className="flex flex-col justify-center gap-4 p-4 h-1/2 md:h-full md:w-1/3 bg-gray-50 ">
        <div className="flex justify-between">
          <span>Subtotal (3 items)</span>
          <span>$81.20</span>
        </div>
        <div className="flex justify-between">
          <span>Service Cost</span>
          <span>$5</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Free</span>
          <span className="uppercase text-rose-400">Free</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="uppercase">Total(Inc VAT)</span>
          <span className="uppercase">$0</span>
        </div>
        <button className="self-end w-1/2 p-3 text-white uppercase rounded-md bg-slate-900">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
