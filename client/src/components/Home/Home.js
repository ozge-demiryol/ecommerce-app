import { useState, useEffect,useContext } from "react";
import { Link, useNavigate} from "react-router-dom";
import {baseService} from '../../services/ApiCall'
import Categories from "../Categories/Categories";
import ProductCard from "../ProductCard/ProductCard";
import  CartContext from "../../contexts/CartProvider";
import {ArrowRightIcon} from '@heroicons/react/solid';

const Home = () => {
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useContext(CartContext)
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);

//#region Go to product detail
  const goToDetail = (id) => {
    navigate(`/products/${id}`)}
//#endregion

//#region Fetch products
const getProducts = async () => {
  try {
      const data = await baseService.get("/products?limit=10");
      setProducts(data);
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

          setCart([...cart, cartProduct])
      }
};
//#endregion

  return (
    <main className="bg-gray-50">
      <p className="bg-indigo-600 h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>
      <Categories/>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Top 10 Products</h2>
          <Link to ="/products" className="flex items-center justify-start text-indigo-600 hover:text-indigo-400 cursor-pointer">
            <p className="font-medium">See all products</p>
            <ArrowRightIcon className="w-5 ml-2 "/>
          </Link>
        </div>
        <div className="mx-auto px-4 sm:px-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 py-10">
          {products.map((product) => (
            <div key={product.id} >
              <ProductCard img={product.image} price={product.price} title={product.title} goToDetail={() => goToDetail(product.id)}/>
              <button
                  onClick={() => {addToCart(product)}}
                  className="my-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add to bag
                </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
export default Home;
