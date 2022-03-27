import { Link } from "react-router-dom";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faLocationPin,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="bg-indigo-50 py-5 px-10 md:px-20 md:py-10">
      {/* Footer */}
      <div className="flex items-center">
        <Link to="/">
          <img
            className="h-8 w-auto mr-3"
            src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
            alt=""
          />
        </Link>
        <h1 className="text-xl md:text-2xl text-gray-600 font-bold ">
          eCommerceApp
        </h1>
      </div>
      <div className="grid mt-10 md:grid-cols-3 ">
        {/* Sitemap */}
        <div className="flex flex-col mt-5 md:mt-0">
          <h5 className="font-semibold text-indigo-500 tracking-wide mb-5">
            Sitemap
          </h5>
          <Link
            to="/"
            className="text-gray-500 font-normal mb-2 hover:text-indigo-500 hover:underline"
          >
            Home
          </Link>
          <Link
            to="/categories"
            className="text-gray-500 font-normal mb-2 hover:text-indigo-500 hover:underline"
          >
            Categories
          </Link>
          <Link
            to="/products"
            className="text-gray-500 font-normal mb-2 hover:text-indigo-500 hover:underline"
          >
            Products
          </Link>
          <Link
            to="/orders"
            className="text-gray-500 font-normal mb-2 hover:text-indigo-500 hover:underline"
          >
            Orders
          </Link>
        </div>
        {/* Customer Service */}
        <div className="flex flex-col mt-5 md:mt-0">
          <h5 className="font-semibold text-indigo-500 mb-5">
            Customer Service
          </h5>
          <Link
            to="#"
            className="text-gray-500 font-normal mb-2 hover:text-indigo-500 hover:underline"
          >
            Shipping
          </Link>
          <Link
            to="#"
            className="text-gray-500 font-normal mb-2 hover:text-indigo-500 hover:underline"
          >
            Product changing
          </Link>
          <Link
            to="#"
            className="text-gray-500 font-normal mb-2 hover:text-indigo-500 hover:underline"
          >
            Product return
          </Link>
        </div>
        {/* Contact */}
        <div className="flex flex-col mt-5 md:mt-0">
          <h5 className="font-semibold text-indigo-500 tracking-wide mb-5">
            Contact Us
          </h5>
          <div className="flex items-center mb-3">
            <FontAwesomeIcon icon={faPhone} className="text-indigo-500 mr-5" />
            <p className="text-gray-500">(123) 12345678901</p>
          </div>
          <div className="flex items-center mb-3">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-indigo-500 mr-5"
            />
            <p className="text-gray-500">customer@ecommerce.com</p>
          </div>
          <div className="flex items-center mb-3">
            <FontAwesomeIcon
              icon={faLocationPin}
              className="text-indigo-500 mr-5"
            />
            <p className="text-gray-500 w-3/4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      <p className="text-zinc-400 text-center text-xs mt-10">
        &#169; 2022 eCommerceApp All rights reserved.
      </p>
      {/* Attribute */}
      <p className="text-zinc-400 text-center text-xs mt-4">
        Coded & Designed by Özge Demiryol
      </p>
      <div className="flex flex-row items-center justify-center mt-5">
        <a
          href="https://github.com/ozge-demiryol"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="mr-4 text-zinc-400 hover:text-indigo-500"
          />
        </a>
        <a
          href="https://linkedin.com/in/ozge-demiryol"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-zinc-400 hover:text-indigo-500"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
