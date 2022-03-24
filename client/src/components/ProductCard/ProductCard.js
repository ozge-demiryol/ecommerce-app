import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const addToCart = (product) => {
    console.log(product)
  }
  return (
    <div key={props.key} className="group relative">
      <div className="w-full aspect-w-1 aspect-h-1 bg-white rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={props.img}
          alt=""
          className="w-full h-full object-center object-contain"
          onClick={() => console.log("click")}
        />
      </div>
      <h3 className="mt-6 truncate text-base font-normal text-gray-900">
          <span className="absolute inset-0" />
          {props.title}
      </h3>
      <p className="mt-1 text-lg font-bold text-gray-900">{props.price} $</p>
    </div>
  );
};

export default ProductCard;
