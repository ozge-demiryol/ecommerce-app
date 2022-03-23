import { useState, useEffect } from "react";
import Categories from "../Categories/Categories";
import ProductCard from "../ProductCard/ProductCard";
import {ArrowRightIcon} from '@heroicons/react/solid'

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 10)));
  }, []);

  // const filterByCategory = (categoryName) => {
  //    const res = products.filter(x => x.category === categoryName);
  //    return res
  //   }

  return (
    <main className="bg-gray-50">
      <Categories/>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Top 10 Products</h2>
          <div className="flex items-center justify-start hover:underline cursor-pointer">
            <p className="font-medium">See all products</p>
            <ArrowRightIcon className="w-5 ml-2 "/>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((x) => (
            <div key={x.id} className="mt-10">
              {/* Linkle sarmalanacak */}
              <ProductCard img={x.image} price={x.price} title={x.title} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
export default Home;
