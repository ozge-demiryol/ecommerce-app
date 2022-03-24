/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { useState, useEffect } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { Link, Outlet, useParams } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import Spinner from "../Spinner/Spinner"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [product, setProduct] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)
  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data), setIsLoaded(true));
  }, [productId]);

  // console.log(product);

  const addToCart = (e) =>{
    e.preventDefault();
    console.log(product)
  }
  return (
    <div className="bg-white">
      { product ?
      (<div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
            <li>
              <div className="flex items-center">
                <Link to="/" className="mr-2 text-sm font-medium text-gray-900">
                  Home
                </Link>
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-4 h-5 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <Link
                  to="/categories/:category"
                  className="mr-2 text-sm font-medium text-gray-900"
                >
                  {product.category}
                </Link>
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-4 h-5 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            <li className="text-sm">
              <Link
                to="/"
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
               {product.title}
              </Link>
            </li>
          </ol>
        </nav>
        {/* Product info */}
        <div className="max-w-2/3 flex flex-col md:flex-row items-center justify-center pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8">
          <div className="w-1/2 lg:border-r lg:border-gray-200 lg:pr-8">
            <img
              src={product.image}
              alt=""
              className="w-full h-full object-center object-contain"
            />
          </div>
          {/* Product detail */}
          <div className="mt-4 lg:mt-0 pl-8">
            <h1 className="text-2xl font-extrabold mb-5 tracking-tight text-gray-900 sm:text-3xl">
              {product.title}

            </h1>
            <p className="text-3xl text-gray-900">{product.price}$</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {/* {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        product.rating.rate > 1
                          ? "text-gray-900"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))} */}
                </div>
                {/* <p className="sr-only">{product.average} out of 5 stars</p>
                <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"> 
                  {product.rating.count} reviews
                </p> */}
              </div>
            </div>
            {/* Description and details */}
            <div>
              <h3 className="font-semibold mb-2 mt-5">Description</h3>
              <div className="space-y-6">
                <p className="text-base text-gray-500">{product.description}</p>
              </div>
            </div>

            <form className="mt-10">
              <button
                type="submit"
                onClick={addToCart}
                className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add to bag
              </button>
            </form>
          </div>
        </div>
      </div>) : <NotFound/>}
      <Outlet/>
    </div>
  );
}
