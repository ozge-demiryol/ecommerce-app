import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 py-5 px-10 md:px-20 md:py-10">
      {/* Footer */}
      <h1 className="text-xl md:text-2xl text-zinc-100 font-bold mt-5">
        eCommerceApp
      </h1>
      <div className="grid mt-10 md:grid-cols-3 ">
        <div className="flex flex-col mb-5">
          <h5 className="font-semibold text-zinc-300 tracking-wide">Sitemap</h5>
          <br />
          <a
            href="/"
            className="text-zinc-400 font-light mb-2 hover:text-zinc-200 hover:underline"
          >
            Home
          </a>
          <a
            href="/"
            className="text-zinc-400 font-light mb-2 hover:text-zinc-200 hover:underline"
          >
            Categories
          </a>
          <a
            href="/"
            className="text-zinc-400 font-light mb-2 hover:text-zinc-200 hover:underline"
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
      <p className="text-zinc-500 text-center text-xs">
        &#169; 2022 eCommerceApp All rights reserved.
      </p>
      <br />
      {/* Attribute */}
      <p className="text-zinc-500 text-center text-xs">
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
            className="mr-4 text-zinc-400 hover:text-zinc-50"
          />
        </a>
        <a
          href="https://linkedin.com/in/ozge-demiryol"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-zinc-400 hover:text-zinc-50"
            
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
