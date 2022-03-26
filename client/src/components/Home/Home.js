import { useState, useEffect } from "react";
import {baseService} from '../../services/ApiCall'
import Categories from "../Categories/Categories";
import ProductCard from "../ProductCard/ProductCard";
import {ArrowRightIcon} from '@heroicons/react/solid';
import { Link, Outlet} from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  // const {productId} = useParams();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
        const data = await baseService.get("/products?limit=10");
        setProducts(data);
    } catch (err) {
        console.log('[ERROR]: ', err);
    }
}

  return (
    <main className="bg-gray-50">
      <p className="bg-indigo-600 h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>
      <Categories/>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Top 10 Products</h2>
          <Link to ="/products" className="flex items-center justify-start hover:underline cursor-pointer">
            <p className="font-medium">See all products</p>
            <ArrowRightIcon className="w-5 ml-2 "/>
          </Link>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 py-10">
          {products.map((x) => (
            <div key={x.id} >
              <ProductCard img={x.image} price={x.price} title={x.title} />
            </div>
          ))}
        </div>
      </section>
      <Outlet/>
    </main>
  );
};
export default Home;
