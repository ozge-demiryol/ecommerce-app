import { useState, useContext, Fragment } from "react";
import CartContext from "../../contexts/CartProvider";
import { Link } from "react-router-dom";
import {
  InformationCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/outline";
import { Dialog, Transition } from "@headlessui/react";
import { baseService } from "../../services/ApiCall";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  //#region Close modal
  const closeModal = () => {
    setIsOpen(false);
  };
  //#endregion

  //#region Total price and shipping calculating operations
  const calculateSubtotal = parseFloat(
    cart.reduce((a, b) => a + b.price * b.quantity, 0).toFixed(2)
  );
  //orders under 100$ shipping charge is 10% of total charge
  const calculateShipping = (total) => {
    let price = parseFloat(total);
    let res;
    price >= 100 ? (res = 0) : (res = (price / 10).toFixed(2));
    return parseFloat(res);
  };
  //#endregion

  //#region Total amount to be paid
  const calculateTotal = () => {
    return parseFloat(
      (calculateSubtotal + calculateShipping(calculateSubtotal)).toFixed(2)
    );
  };
  //#endregion

  //#region Amount of items in cart
  const increaseQuantity = (product) => {
    setCart((prev) => {
      let cartItem = prev.find((q) => q.id === product.id);
      product.quantity < 10
        ? (cartItem.quantity += 1)
        : (cartItem.quantity = 10);
      return [...prev];
    });
  };
  const decreaseQuantity = (product) => {
    setCart((prev) => {
      let cartItem = prev.find((q) => q.id === product.id);
      product.quantity > 2 ? (cartItem.quantity -= 1) : (cartItem.quantity = 1);
      return [...prev];
    });
  };

  //#endregion

  //#region Remove item from cart
  const removeItem = (id) => {
    setCart((prev) => prev.filter((q) => q.id !== id));
  };
  //#endregion

  //#region Add order
  const addOrder = async () => {
    try {
      if (cart.length > 0) {
        const products = cart.map((x) => ({
          productId: x.id,
          quantity: x.quantity,
        }));
        const d = new Date();
        const data = { userId: 2, date: d, products: products };
        await baseService.post("/carts", data);
        console.log("Successfully added to cart", data);
        setCart([]);
        setIsOpen(true);
      } else {
        throw new Error("[ERROR]: Cart is empty");
      }
    } catch (err) {
      console.log("[ERROR]:", err);
    }
    // console.log(cart);
  };
  //#endregion

  return (
    <>
      <div className="mt-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pb-20">
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 pb-6">
              Shopping Cart
            </h1>
          </div>
          {/*#region Order Successfully added to cart*/}
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 z-10 overflow-y-auto"
              onClose={closeModal}
            >
              <div className="min-h-screen px-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="fixed inset-0 bg-black/40"/>
                </Transition.Child>

                {/* This element is to trick the browser into centering the modal contents. */}
                <span
                  className="inline-block h-screen align-middle"
                  aria-hidden="true"
                >
                  &#8203;
                </span>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <div className="inline-block w-full max-w-md py-8 my-8 overflow-hidden text-center align-middle transition-all transform bg-white shadow-xl rounded-lg">
                    <CheckCircleIcon className="w-14 h-14 text-indigo-600 text-center mx-auto mb-4" />
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900 text-center"
                    >
                      Thank you!
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500 w-4/5 m-auto mb-5">
                        Your order has been successfully created. We’ve sent you
                        an email with all of the details of your order.
                      </p>
                    </div>
                    <Link
                      to="/"
                      className="text-indigo-600 tracking-tight font-semibold hover:text-indigo-400"
                    >
                      Go to home page
                    </Link>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition>
          {/*#endregion */}

          <div
            className={
              cart.length > 0
                ? "hidden"
                : "flex items-center min-w-full p-3 mt-4 rounded-md bg-indigo-100"
            }
          >
            <InformationCircleIcon className="h-5 w-5 mr-4 text-indigo-700" />
            <p className="text-md font-semibold text-indigo-800">
              Your cart is empty.
            </p>
          </div>
          <div className="flex flex-col flex-grow justify-between md:flex-row">
            {/* Products */}
            <div className="flex flex-col md:w-2/3 py-6 md:py-0 border-t border-gray-200">
              {cart &&
                cart.map((product) => (
                  <div
                    key={product.id}
                    className="py-6 border-b border-gray-200 flex flex-row "
                  >
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={product.image}
                        alt=""
                        className="h-full w-full object-contain object-center"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href={product.href}> {product.title} </a>
                          </h3>
                          <p className="ml-4 font-semibold">
                            {product.price * product.quantity} $
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-1 mt-5 items-end justify-between text-sm">
                        <div className="flex items-center">
                          <button
                            onClick={() => decreaseQuantity(product)}
                            className="flex items-center justify-center w-6 h-6 pb-1 rounded-full bg-indigo-100  font-bold text-indigo-600 active:bg-indigo-300"
                          >
                            -
                          </button>
                          <p className="text-gray-500 px-3 ">
                            {product.quantity}
                          </p>
                          <button
                            onClick={() => increaseQuantity(product)}
                            className="flex items-center justify-center w-6 h-6 pb-1 rounded-full bg-indigo-100  font-bold text-indigo-600 active:bg-indigo-300"
                          >
                            +
                          </button>
                        </div>
                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-400"
                            onClick={() => removeItem(product.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            {/* Order Summary*/}
            <div
              className={
                cart.length > 0
                  ? "flex flex-col py-8 px-8 lg:px-14 bg-gray-50 rounded-lg h-max md:w-1/3 md:ml-10"
                  : "hidden"
              }
            >
              <h3 className="text-xl mb-4 font-semibold">Order Summary</h3>
              <div className="flex justify-between text-sm border-b border-gray-300 py-4">
                <p className="text-gray-500 font-medium">Subtotal</p>
                <p className="text-gray-900 font-semibold">
                  {calculateSubtotal} $
                </p>
              </div>
              <div className="flex justify-between text-sm border-b border-gray-300 py-4">
                <p className="text-gray-500 font-medium">Shipping</p>
                <p className="text-gray-900 font-semibold">
                  {calculateShipping(calculateSubtotal)} $
                </p>
              </div>
              {/* Total */}
              <div className="flex justify-between text-md text-gray-900 font-semibold py-5">
                <p>Total</p>
                <p className="">{calculateTotal()} $</p>
              </div>
              <div className="mt-6 flex flex-col">
                <button
                  className="rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  onClick={addOrder}
                >
                  Checkout
                </button>
                <button
                  className={
                    cart.length > 0
                      ? "mt-5 rounded-md border-2 border-indigo-600 px-6 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-600 hover:border-transparent hover:text-white"
                      : "hidden"
                  }
                  onClick={() => setCart([])}
                >
                  Empty the cart
                </button>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or
                  <Link
                    to="/products"
                    className="font-medium text-indigo-600 hover:text-indigo-400 ml-2"
                  >
                    Continue Shopping<span aria-hidden="true"> &rarr;</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
