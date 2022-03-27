import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import {baseService} from '../../services/ApiCall'

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = async () => {
    try {
        const data = await baseService.get("/products/categories");
        setCategories(data);
        setIsLoaded(true);
    } catch (err) {
        console.log('[ERROR]: ', err);
    }}

  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto pt-10 pb-16 sm:pb-24 lg:pb-32 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900 pb-10">Categories</h2>
          {/* Loading */}
          <div className={(!isLoaded || categories.length<=0) ? "flex flex-col items-center justify-center my-12" : "hidden"}>
          <img
                    className="h-14 w-auto animate-spin opacity-50 mb-5"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                    alt=""
                    /> Loading...
          </div>
          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-6">
            {categories.map((category,key) => (
              <div key={key} className="group relative">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src="https://picsum.photos/400/400"
                    alt=""
                    className="w-full h-full object-center object-cover cursor-pointer"
                  />  
                </div>
                <h3 className="mt-6 text-base font-semibold text-gray-900">
                    <Link to={`/categories/${category}`}>
                    <span className="absolute inset-0" />
                    {category}
                    </Link>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Outlet/>
    </section>
  );
};

export default Categories;

