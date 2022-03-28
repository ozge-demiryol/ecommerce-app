import { useState, useEffect,useContext } from "react";
import { Link, useParams } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
//Context
import CartContext from "../../contexts/CartProvider";
//Services
import {baseService} from '../../services/ApiCall'

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { cart, setCart } = useContext(CartContext)
  const { productId } = useParams();
  
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  }
  useEffect(() => {
    getProducts();
  });

//#region Fetch data
const getProducts = async () => {
  try {
      const data = await baseService.get(`/products/${productId}`);
      setIsLoaded(true)
      setProduct(data);
  } catch (err) {
      console.log('[ERROR]: ', err);
  }
}
//#endregion

 //#region Add to cart
 const addToCart = (product) => {
   let cartProduct = cart.find(q => q.id === product.id)

   if (cartProduct) {
       cartProduct.quantity += 1

       setCart([...cart])
   } else {
       const cartProduct = {
           id: product.id,
           title: product.title,
           price: product.price,
           image:product.image,
           quantity: 1
       }

       setCart(prev => [...prev, cartProduct])
   }
   
}
 //#endregion
  
  return (
    <div className="bg-gray-50">
      {product ? (
        <div className={classNames(isLoaded ? "pt-6" : "hidden")}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb">
            <ol className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
              <li>
                <div className="flex items-center">
                  <Link
                    to="/"
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
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
                    to={`/categories/${product.category}`}
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
          <div className=" flex flex-col mx-auto md:flex-row items-center justify-center pt-10 pb-16 px-4 sm:px-6 max-w-2/3 lg:pt-16 lg:pb-24 lg:px-8">
            <div className="lg:pr-14">
              <img
                src={product.image}
                alt=""
                className="w-full lg:w-96 h-full object-center object-contain rounded-lg"
              />
            </div>
            {/* Product detail */}
            <div className="mt-4 lg:mt-0 px-5 lg:py-10 lg:pl-20 lg:max-w-2xl lg:border-l lg:border-gray-200">
              <h1 className="text-2xl font-extrabold mb-5 tracking-tight text-gray-900 sm:text-3xl">
                {product.title}
              </h1>
              <p className="text-3xl text-gray-900">{product.price}$</p>

              {/* Reviews */}
              <div className="mt-6 w-1/2">
                <div className="flex items-center">
                    
                  {/* <div className={product.rating ? "flex items-center" : "hidden"}>
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product.rating?.rate > 2.5
                            ? "text-gray-900"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    {product.rating?.count} reviews
                  </p> */}
                </div>
              </div>
              {/* Description and details */}
              <div>
                <h3 className="font-semibold mb-2 mt-5 text-justify">Description</h3>
                <div className="space-y-6">
                  <p className="text-base text-gray-500 ">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <button
                  type="submit"
                  onClick={() => addToCart(product)}
                  className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add to bag
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
}

export default ProductDetail;