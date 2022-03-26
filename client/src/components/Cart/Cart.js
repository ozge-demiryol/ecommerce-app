import { useContext, useEffect } from "react";
import CartContext from "../../contexts/CartProvider";
import { Link } from "react-router-dom";
import {InformationCircleIcon} from '@heroicons/react/outline'

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  // const cart = JSON.parse(localStorage.getItem('cart'));
  useEffect(() => {}, []);
  console.log(cart);

  const calculateSubtotal = cart.reduce((a, b) => a + b.price * b.quantity, 0);

  //orders under 100$ shipping charge is 10% of total charge
  const calculateShipping = (total) => {
    let res;
    parseFloat(total) >= 100 ? (res = 0 ) : (res = (parseFloat(total) / 10).toFixed(2));
    return parseFloat(res);
  };

  
  //Total amount to be paid
  const calculateTotal = () => {return parseFloat(calculateSubtotal + calculateShipping(calculateSubtotal))};

  const addOrder = () => {};
  const removeItem = () => {};

  return (
    <>
      <div className="mt-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pb-20">
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 pb-6">
              Shopping Cart
            </h1>
          </div>
          <div className={cart.length>0 ? "hidden" : "flex items-center min-w-full p-3 mt-4 rounded-md bg-indigo-100"}>
              <InformationCircleIcon className="h-5 w-5 mr-4 text-indigo-700"/>
                <p className="text-md font-semibold text-indigo-800">
                  Your cart is empty.
                </p>
              </div>
          <div className="flex flex-col justify-between md:flex-row">
            {/* Products */}
            <div className="flex flex-col py-6 md:py-0 border-t border-gray-200">
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
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">Qty {product.quantity}</p>

                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
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
                  ? "flex flex-col py-8 px-10 lg:px-14 bg-gray-50 rounded-lg h-max md:grow md:ml-10"
                  : "hidden"
              }
            >
              <h3 className="text-xl mb-4 font-semibold">Order Summary</h3>
              <div className="flex justify-between text-sm border-b border-gray-300 py-4">
                <p className="text-gray-500 font-medium">Subtotal</p>
                <p className="text-gray-900 font-semibold">
                  ${calculateSubtotal}
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
                <p className="">${calculateTotal()}</p>
              </div>
              {/* <p className="mt-0.5 text-sm text-gray-500">
                Shipping and taxes calculated at checkout.
              </p> */}
              <div className="mt-6 flex flex-col">
                <button className="rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
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
                    className="font-medium text-indigo-600 hover:text-indigo-500 ml-2"
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
