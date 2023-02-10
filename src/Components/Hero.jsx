import React from "react";
import "tw-elements";
import hero from "../Images/hero.jpg";
import { motion, useAnimation } from "framer-motion";
const Hero = () => {
  return (
    <section className="rounded rounded-3xl  ">
      <section className="  bg-gray-900">
        <div className="max-w-screen-2xl mx-auto  ">
          <div className=" place-self-center  lg:col-span-7">
            <div className="  lg:mt-0 lg:col-span-5 lg:flex">
              <img className="   w-full relative  " src={hero} alt="mockup" />
            </div>
            <div className="  px-10 absolute">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.5, duration: 3, type: "spring" }}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <h1 className=" -mt-[7rem] md:-mt-[24rem] max-w-2xl mb-4 text-xl font-bold text-center md:text-left md:font-extrabold tracking-tight leading-none md:text-3xl xl:text-5xl text-green-600">
                  Affortdable, Reliable And fast Delivery{" "}
                  <span className="text-gray-100">Of Your Network</span>
                </h1>
              </motion.div>
              <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.9, duration: 3, type: "spring" }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
              <p className=" invisible md:visible max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Browser our massive portfolio of the best selling, globally
                recognized brands as well as the vast variety og network
                equipment types.
              </p></motion.div>
              <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 1, duration: 10, type: "spring" }}
                  variants={{
                    hidden: { opacity: 0, x: 0 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
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
              </a></motion.div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
