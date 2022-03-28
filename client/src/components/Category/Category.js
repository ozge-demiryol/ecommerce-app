import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import CartContext from "../../contexts/CartProvider";

const Category = () => {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { cart, setCart } = useContext(CartContext)
  const { categoryName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data), setIsLoaded(true));
  }, [categoryName]);

//#region Go to category detail
const goToDetail = (id) => {
  navigate(`/products/${id}`)}
//#endregion

  const capitalize = (str) => {
    let newStr;
    str = str.split("");
    newStr = str[0].toUpperCase() + str.slice(1).join("");
    return newStr;
  };

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

  return (
    <main className="bg-gray-50">
      <section className="mx-auto px-4 sm:px-12 lg:px-8">
        <h1 className="pt-10 text-3xl font-extrabold text-gray-900">
          {capitalize(categoryName)}
        </h1>
        {/* Loading */}
        <div className={(!isLoaded || products.length<=0) ? "flex flex-col items-center justify-center my-12" : "hidden"}>
          <img
                    className="h-14 w-auto animate-spin opacity-50 mb-5"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                    alt=""
                    /> Loading...
          </div>
        <div className="mt-6 pt-5 pb-20 space-y-12 md:grid md:grid-cols-2 md:space-y-0 lg:grid lg:grid-cols-4 md:gap-x-8">
          {products && products.map((product) => (
              <div key={product.id}>
                <ProductCard
                  img={product.image}
                  price={product.price}
                  title={product.title}
                  goToDetail={() => goToDetail(product.id)}
                />
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

export default Category;
