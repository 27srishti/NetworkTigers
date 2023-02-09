import React from "react";
import "tw-elements";
import hero from "../Images/hero.jpg";
const Hero = () => {
  return (
    <section className="rounded rounded-3xl  ">
      <nav className="bg-white shadow text-sm dark:bg-gray-800">
        <div className="container flex items-center justify-center p-4 mx-auto text-gray-600 capitalize dark:text-gray-300">
          <a
            href="#"
            className="text-gray-800  dark:text-gray-200 border-b-2 border-blue-500 mx-3 sm:mx-6"
          >
            Home
          </a>
          <a
            href="#"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-3 sm:mx-6"
          >
            About Us
          </a>
          <a
            href="#"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-3 sm:mx-6"
          >
            All Products
          </a>
          <a
            href="#"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-3 sm:mx-6"
          >
            Blogs
          </a>
          <a
            href="#"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-3 sm:mx-6"
          >
            FAQ's
          </a>
          <a
            href="#"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-3 sm:mx-6"
          >
            Contact Us
          </a>
        </div>
      </nav>
      <section className="  bg-gray-900">
        <div className="max-w-screen-2xl mx-auto  ">
          <div className=" place-self-center  lg:col-span-7">
            <div className="  lg:mt-0 lg:col-span-5 lg:flex">
              <img
                className="   w-full relative  "
                src={hero}
                alt="mockup"
              />
            </div>
            <div className="  px-10 absolute">
              <h1 className=" -mt-[7rem] md:-mt-[24rem] max-w-2xl mb-4 text-xl font-bold text-center md:text-left md:font-extrabold tracking-tight leading-none md:text-3xl xl:text-5xl text-green-600">
                Affortdable, Reliable And fast Delivery{" "}
                <span className="text-gray-100">Of Your Network</span>
              </h1>
              <p className=" invisible md:visible max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Browser our massive portfolio of the best selling, globally
                recognized brands as well as the vast variety og network
                equipment types.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 ml-20 md:ml-1 text-base font-medium text-center text-white rounded-lg bg-green-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Explore Now
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className=" invisible md:visible inline-flex items-center ml-3 justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Speak to Sales
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
