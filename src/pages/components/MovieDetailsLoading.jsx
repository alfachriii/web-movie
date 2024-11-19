import React from "react";

const MovieDetailsLoading = () => {
  return (
    <>
      <div className="w-full h-fit">
        <div className="w-fit h-fit px-2 bg-gray-700 text-gray-700 rounded-sm animate-pulse lg:text-3xl text-xl">
          Movie Details - Load
        </div>
        <div className="w-full xl:h-80 lg:h-72 md:h-80 sm:h-72 h-40 mt-5 bg-gray-700 rounded-sm animate-pulse"></div>
        <div className="w-11/12 h-fit flex mt-5">
          <div className="w-4/12 sm:h-56 h-36 bg-gray-700 rounded-sm animate-pulse"></div>
          <div className="w-full h-fit flex flex-col pl-5">
            <div>
              <div className="w-fit h-fit px-3 bg-gray-700 text-gray-700 rounded-sm animate-pulse lg:text-xl sm:text-base text-sm">
                status
              </div>
              <div className="w-fit h-fit px-3 mt-3 bg-gray-700 text-gray-700 rounded-sm animate-pulse sm:text-sm text-xs">
                Lorem ipsum dolor sit amet.
              </div>
            </div>
            <div className="mt-5">
              <div className="w-fit h-fit px-3 bg-gray-700 text-gray-700 rounded-sm animate-pulse lg:text-xl sm:text-base text-sm">
                status
              </div>
              <div className="w-fit h-fit px-3 mt-3 bg-gray-700 text-gray-700 rounded-sm animate-pulse sm:text-sm text-xs">
                Lorem ipsum dolor sit amet.
              </div>
            </div>
            <div className="mt-5">
              <div className="w-fit h-fit px-3 bg-gray-700 text-gray-700 rounded-sm animate-pulse lg:text-xl sm:text-base text-sm">
                status
              </div>
              <div className="w-fit h-fit px-3 mt-3 bg-gray-700 text-gray-700 rounded-sm animate-pulse sm:text-sm text-xs">
                Lorem ipsum dolor sit amet.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetailsLoading;
