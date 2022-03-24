import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="bg-indigo-50 py-5 px-10 md:px-20 md:py-10">
      {/* Footer */}
      <div className="flex items-center">
      <img
        className="h-8 w-auto mr-3"
        src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
        alt=""
      />
      <h1 className="text-xl md:text-2xl text-gray-600 font-bold ">
        eCommerceApp
      </h1>
      </div>
      <div className="grid mt-10 md:grid-cols-3 ">
        <div className="flex flex-col mb-5">
          <h5 className="font-semibold text-indigo-700 tracking-wide">
            Sitemap
          </h5>
          <br />
          <a
            href="/"
            className="text-gray-500 font-normal mb-2 hover:text-indigo-500 hover:underline"
          >
            Home
          </a>
          <a
            href="/"
            className="text-gray-500 font-light mb-2 hover:text-indigo-500 hover:underline"
          >
            Categories
          </a>
          <a
            href="/"
            className="text-gray-500 font-light mb-2 hover:text-zinc-200 hover:underline"
          >
            Orders
          </a>
        </div>
        <div>
          <h5 className="font-semibold text-zinc-300 tracking-wide">
            Customer Service
          </h5>
        </div>
        <div>
          <h5 className="font-semibold text-zinc-300 tracking-wide">
            Contact Us
          </h5>
        </div>
      </div>
      <p className="text-zinc-400 text-center text-xs">
        &#169; 2022 eCommerceApp All rights reserved.
      </p>
      <br />
      {/* Attribute */}
      <p className="text-zinc-400 text-center text-xs">
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
