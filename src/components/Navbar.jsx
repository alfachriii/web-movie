import React from "react";
import { Link } from "wouter";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({ wSearch = true, value, onChange, onSearch }) => {
  return (
    <div className=" top-0 sm:w-3/4 w-11/12 h-fit flex items-center text-stone-300 pt-4">
      <div className="nav flex lg:items-baseline lg:gap-16 gap-0 lg:justify-normal justify-between w-full ">
        <div className="logo">
          <h2 className="lg:text-4xl text-2xl font-bold">alMovieee</h2>
        </div>
        <div className="nav-list lg:w-full w-fit flex justify-between items-baseline text-xs">
          <ul className="flex gap-8">
            <li>
              <Link href="/home">
                <h3 className="hover:text-stone-200">Home</h3>
              </Link>
            </li>
            <li>
              <Link href="/movielist">
                <h3 className="hover:text-stone-200">Movie List</h3>
              </Link>
            </li>
          </ul>
          <div className="input mb-5 relative">
            {wSearch && (
              <form onSubmit={onSearch}>
                <input
                  type="text"
                  placeholder="Search movie"
                  value={value}
                  onChange={onChange}
                  className="lg:text-xl sm:text-base text-sm bg-gray-700 md:w-96 sm:w-72 w-44 lg:p-3 p-2 sm:ps-7 ps-4 m-0 rounded-full"
                />
                <button type="submit">
                  <IoSearch className="absolute lg:top-3 top-2 right-6 cursor-pointer hover:text-stone-200 lg:text-2xl text-xl" />
                </button>
              </form>
            )}
          </div>
        </div>
        <div className="pt-2">
          <RxHamburgerMenu className="lg:hidden text-lg cursor-pointer hover:text-stone-200" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
