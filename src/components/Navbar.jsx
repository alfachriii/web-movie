import React, { useState } from "react";
import { Link } from "wouter";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useGetGenreLists } from "../features/useGetGenreLists";
import { api } from "../features/configAxios";
import { useSelector } from "react-redux";

const Navbar = ({ wSearch = true, value, onChange, onSearch }) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [genreToggle, setGenreToggle] = useState(false);

  const genreLists = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
  ];
  // const genreLists = useGetGenreLists();
  // console.log(genreLists)
  const reload = () => {
    setTimeout(() => {

      location.reload()
    }, 10)
  }

  const handleGenre = () => {
    setGenreToggle(false);
    reload()
  }

  return (
    <div className=" top-0 sm:w-3/4 w-11/12 h-fit flex items-center text-stone-300 pt-4">
      <div className="nav flex lg:items-baseline lg:gap-16 gap-0 lg:justify-normal justify-between w-full ">
        <div className="logo">
          <h2 className="lg:text-4xl text-2xl font-bold">almoviee</h2>
        </div>
        <div className="nav-list lg:w-full w-fit flex justify-between items-baseline text-xs">
          <ul className="flex gap-8">
            <li>
              <Link href="/home">
                <h3 className="hover:text-stone-200">Home</h3>
              </Link>
            </li>
            <li className="relative">
              <div
                onClick={() => setGenreToggle(!genreToggle)}
                className="flex items-center gap-2 hover:text-stone-200 cursor-pointer"
              >
                <h3 className="">Genres</h3>
                {genreToggle ? (
                  <IoIosArrowUp className="text-xl transition duration-150 ease-in-out" />
                ) : (
                  <IoIosArrowDown className="text-xl transition duration-150 ease-in-out" />
                )}
              </div>
              {genreToggle && (
                <div className="absolute top-7 -left-1 z-50 w-56 h-fit flex py-2 px-4 text-gray-400 bg-gray-700 rounded-sm">
                  <div className="border-e pr-5 border-gray-400">
                    {genreLists.slice(0, 5).map((genre) => (
                      <Link key={genre.id} to={`/genre/${genre.name.toLowerCase()}/${genre.id}`} onClick={handleGenre}>
                        <h4 className="text-base hover:text-gray-300">{genre.name}</h4>
                      </Link>
                    ))}
                  </div>
                  <div className="pl-5">
                    {genreLists.slice(5, 10).map((genre) => (
                      <Link key={genre.id} to={`/genre/${genre.name.toLowerCase()}/${genre.id}`} onClick={handleGenre}>
                        <h4 className="text-base hover:text-gray-300">{genre.name}</h4>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
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
