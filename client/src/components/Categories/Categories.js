import { useState, useEffect } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import {baseService} from '../../services/ApiCall'

const callouts = [
  {
    name: "Electronics",
    imageSrc: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
  },
  {
    name: "Jewelery",
    imageSrc:
      "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
  },
  {
    name: "Men's clothing",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
  },
  {
    name: "Women's clothing",
    imageSrc: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
  },
];

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = async () => {
    try {
        const data = await baseService.get("/products/categories");
        setCategories(data);
    } catch (err) {
        console.log('[ERROR]: ', err);
    }}

  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900">Categories</h2>
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

