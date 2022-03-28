import { useState, useEffect, useContext } from "react";
import {useNavigate} from "react-router-dom";
import CartContext from "../../contexts/CartProvider";
import { baseService } from "../../services/ApiCall";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);

//#region Go to product detail
const goToDetail = (id) => {
  navigate(`/products/${id}`)}
//#endregion

//#region 
const getProducts = async () => {
  try {
      const data = await baseService.get("/products");
      setProducts(data);
      setIsLoaded(true)
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
                title: product.name,
                price: product.unitPrice,
                quantity: 1
            }

            setCart([...cart, cartProduct])
        }
  };
  //#endregion

  return (
    <main className="bg-gray-50 pb-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900 py-10">
            All products
          </h2>
          {/* Loading */}
          <div className={(!isLoaded || products.length<=0) ? "flex flex-col items-center justify-center my-12" : "hidden"}>
          <img
                    className="h-14 w-auto animate-spin opacity-50 mb-5"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                    alt=""
                    /> Loading...
          </div>
          {/* Products */}
          <div className="mt-12 space-y-12 md:space-y-0 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 md:gap-x-6">
            {products.map((product) => (
              <div key={product.id}>
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

export default Products;
