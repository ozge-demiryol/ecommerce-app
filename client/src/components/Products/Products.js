import { useState, useEffect, useContext } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import CartContext from "../../contexts/CartProvider";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useContext(CartContext)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

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
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto sm:py-12 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900 text-center">
            All products
          </h2>
          <div className="mt-6 space-y-12 md:space-y-0 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 md:gap-x-6">
            {products.map((product) => (
              <div key={product.id} className="">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 mt-8">
                  <Link to={`/products/${product.id}`}>
                  <img
                    src={product.image}
                    alt=""
                    className="w-full h-full object-center object-contain"
                  />
                  </Link>
                </div>
                <h3 className="mt-6 text-base font-normal truncate text-gray-900">
                  <span className="absolute inset-0" />
                  {product.title}
                </h3>
                <p className="mt-1 text-lg font-bold text-gray-900">
                  {product.price} $
                </p>
                <button
                  onClick={() => {addToCart(product)}}
                  className="my-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add to bag
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Outlet />
    </section>
  );
};

export default Products;
