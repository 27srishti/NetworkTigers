import React from "react";
import { motion, useAnimation } from "framer-motion";
const Section3 = () => {
  return (
    <div className="bg-black">
      <div className="px-4 py-16 w  text-gray-100   mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8  sm:grid-cols-2 lg:grid-cols-4">
        <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.1, duration: 2, type: "spring" }}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
          <div className="text-center border border-green-500 rounded p-5 ">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400  text-green-700 sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="text-4xl font-bold text-green-700 text-deep-purple-accent-400">
              810K
            </h6>
            <p className="mb-2 font-semibold text-md">Costumers</p>
            <p className="text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          </motion.div>
          <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.5, duration: 2, type: "spring" }}
                  variants={{
                    hidden: { opacity: 0, y: 60 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
          <div className="text-center border border-green-500 rounded p-5  ">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-green-700 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="text-4xl font-bold text-green-700 text-deep-purple-accent-400">
              730K
            </h6>
            <p className="mb-2 font-semibold text-md">Happy Costomers</p>
            <p className="text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          </motion.div>
          <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.7, duration: 2, type: "spring" }}
                  variants={{
                    hidden: { opacity: 0, y: 70 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  
          <div className="text-center border border-green-500 rounded p-5 ">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400 text-green-700 sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="text-4xl font-bold text-green-700 text-deep-purple-accent-400">
              650k
            </h6>
            <p className="mb-2 font-semibold text-md">Home Served</p>
            <p className="text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          </motion.div>
          <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 1, duration: 2, type: "spring" }}
                  variants={{
                    hidden: { opacity: 0, y: 90 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
          <div className="text-center border border-green-500 rounded p-5 ">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400 text-green-700 sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="text-4xl font-bold text-green-700 text-deep-purple-accent-400">
              460
            </h6>
            <p className="mb-2 font-semibold text-md">Products</p>
            <p className="text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
