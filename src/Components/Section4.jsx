import React from "react";

const Section4 = () => {
  return (
    
    <div className="bg-gray-100 ">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">
            {" "}
            Product Collections
          </h2>
          <div className="mt-6  space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img
                  src="https://i.postimg.cc/RVXhTLZW/Screenshot-2023-02-04-031739.png"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <a>
                  <span className="absolute inset-0" />
                  Module Slot Switch
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900">
                Cisco WS-C3750X-48PF-S 48x 1GB PoE+ RJ-45 1x Module Slot Switch
              </p>
            </div>
            <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img
                  src="https://i.postimg.cc/gJF20MNT/image.png"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <a>
                  <span className="absolute inset-0" />
                  Rack Mount Gromments
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900">
                For APC AP7800 and AP7900 PDUs - Cabinet Rack Mount Grommets
              </p>
            </div>
            <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img
                  src="https://i.postimg.cc/T1kxnQJG/image.png"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <a>
                  <span className="absolute inset-0" />
                  Switches
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900">
                HPE J9534A 5400zl Series 24x 1GB PoE+ RJ-45 Switch Module
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
