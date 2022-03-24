import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import ProductCard from "../ProductCard/ProductCard";

const Category = () => {
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [categoryName]);

  const capitalize = (str) => {
    let newStr;
    str = str.split("");
    newStr = str[0].toUpperCase() + str.slice(1).join("");
    return newStr;
  };

  return (
    <main className="bg-gray-50">
      {products.length>0 ?
      (<section className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-8">
        <h1 className="pt-10 text-3xl font-extrabold text-gray-900">
          {capitalize(categoryName)}
        </h1>
        <div className="mt-6 pt-5 pb-20 space-y-12 md:grid md:grid-cols-2 md:space-y-0 lg:grid lg:grid-cols-4 md:gap-x-8">
          {products.map((product) => (
              <div key={product.id}>
                <ProductCard
                  img={product.image}
                  price={product.price}
                  title={product.title}
                />
              </div>
            ))}
        </div>
      </section>): <NotFound/> }
    </main>
  );
};

export default Category;
