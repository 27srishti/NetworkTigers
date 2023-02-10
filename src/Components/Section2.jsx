import React from "react";
import { motion, useAnimation } from "framer-motion";
const Section2 = () => {
  return ( <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 2, duration: 5, type: "spring" }}
                  variants={{
                    hidden: { opacity: 0, y: -150 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
    <div className=" xl:px-20 px-6  py-20 xl:mx-auto xl:container">
  
      <h1 className="xl:text-3xl md:text-2xl text-2xl font-semibold leading-tight text-center text-gray-800 sm:mb-0 mb-12">
        Today, Network<span className="text-green-600">Tigers' </span>Work Is
        Nationwide Having Express Shipped Many
        <br /> Thousands Of Critical Parts...
      </h1>
      <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
        <img
          src="https://i.ibb.co/KjrPCyW/map.png"
          alt="world map image"
          className="w-full xl:h-full  h-96 object-cover object-fill sm:block hidden"
        />
        <img
          src="https://i.ibb.co/SXKj9Mf/map-bg.png"
          alt="mobile-image"
          className="sm:hidden -mt-10 block w-full h-96 object-cover object-fill absolute z-0"
        />
            
        '<div className="shadow-lg w-40  xl:p-6 p-4 sm:w-auto bg-white sm:absolute relative z-20 sm:mt-0 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12">
          <p className="text-3xl font-semibold text-gray-800">20K+</p>
          <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
            Recently Installed Units
          </p>
        </div>
        <div className="shadow-lg w-40 xl:p-6 p-4 w-48 ml-48 sm:w-auto  bg-white sm:absolute relative z-20 sm:mt-0 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
          <p className="text-3xl font-semibold text-gray-800">8K+</p>
          <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
            Active shipping
          </p>
        </div>
        
        <div className="shadow-lg w-40 xl:p-6 p-4 sm:w-auto ml-32  bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24">
          <p className="text-3xl font-semibold text-gray-800">15K+</p>
          <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
            Regular Customers
          </p>
        </div>
       
      </div>
    </div></motion.div>
  );
};
export default Section2;
