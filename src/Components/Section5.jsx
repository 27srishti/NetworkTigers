import React from "react";
import One from "../Images/1.png"
import Two from "../Images/Two.png"
import Three from "../Images/Three.png"
import Four from "../Images/Four.png"
const Section5 = () => {
  return (
    <div className=" py-10  mx-auto bg-gray-900 ">
      <center>
        <div className>
          <h1 className="sm:text-3xl px-10 text-center text-xl font-semibold  title-font text-green-600 ">
            Huge Selection of <br />
            <span className="text-white font-bold">
              Brands and Product Types,
            </span>{" "}
            Explore Now!
          </h1>
        </div>
      </center>
      <div className="flex flex-wrap py-10 md:-m-2 -m-1">
        <div className="flex flex-wrap w-1/2 flex justify-end">
          <div className=" hidden w-1/2 ">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block"
              src="/static/media/Two.ef44944230fb5febefcf.png"
            />
          </div>
          <div className="px-1 w-1/2  ">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block"
              src="/static/media/Two.ef44944230fb5febefcf.png"
            />
          </div>
          <div className="p-1 relative w-full">
            <img
              alt="gallery"
              className=" w-full h-full object-cover object-center block"
              src="/static/media/1.b0d962876454c79270db.png"
            />
            <div className="absolute  ml-5 md:ml-0 text-white top-3/4 left-[15%]  shadow-lg -translate-x-1/2 -translate-y-1/2">
              <a
                href="#_"
                className="relative w-20 h-7 md:w-28 md:h-10 inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
              >
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-green-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
              
              <a className=" text-center  relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                Explore
              </a></a>
            </div>
          </div>
        </div>
        <div className="flex relative flex-wrap w-1/2 ">
          <div className="p-1 w-full">
            <img
              alt="gallery"
              className="w-full h-full object-cover object-center block"
              src={Four}
            />
            <div className="absolute  ml-5 md:ml-0 text-white top-[60%] shadow-lg left-[15%] -translate-x-1/2 -translate-y-1/2">
              <a
                href="#_"
                className="relative w-20 h-7 md:w-28 md:h-10 inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
              >
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-green-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
              
              <a className=" text-center  relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                Explore
              </a></a>
            </div>
          </div>
          <div className=" relative px-1 w-1/2">
            <img
              alt="gallery"
              className=" w-full object-cover h-full object-center block"
              src="/static/media/Three.5072854ed9288802885f.png"
            />
          </div>
          <div className="p-1 w-1/2">
            <img
              alt="gallery"
              className="hidden w-full object-cover h-full object-center block"
              src="https://images.unsplash.com/photo-1617099443741-a9b51eabd2b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
            />
            <div className="flex justify-center">
              <a
                href="#_"
                className="relative w-36 my-10 h-12 md:w-40 md:h-14 inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
              >
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-green-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
              
              <a className=" text-center  relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                View All Products
              </a></a>
            </div>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
};

export default Section5;
