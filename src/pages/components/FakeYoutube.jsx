import React from "react";
import youtubeIcon from "../../assets/youtube.svg"

const FakeYoutube = ({src}) => {
  return (
    <div className="relative img-preview w-full h-full cursor-pointer">
      <div className="img w-full h-full">
        <img
          src={src}
          className="w-full h-full object-cover rounded-lg opacity-80"
          alt=""
        />
        <div className="overlay absolute top-0 right-0 w-full h-full bg-black opacity-55 ">
        </div>
        <div className="scale-50 hover:scale-75 transition duration-300 ease-in-out z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-gray-800 sm:w-20 w-10 sm:h-20 h-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute"></div>
            <img src={youtubeIcon} alt="" className="scale-50"/>
        </div>
      </div>
    </div>
  );
};

export default FakeYoutube;
