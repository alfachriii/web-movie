import React, { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { IoClose, IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useGetGenreLists } from "../features/useGetGenreLists";
import { api } from "../features/configAxios";
import { useSelector } from "react-redux";

const Navbar = ({ wSearch = true, value, onChange, onSearch }) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [genreToggle, setGenreToggle] = useState(false);
  const [isSidebar, setIsSidebar] = useState(false);

  const sidebar = useRef(null)

  useEffect(() => {
    if(isSidebar && sidebar.current) {
      sidebar.current.classList.remove("hidden")
    } 
    if(!isSidebar && sidebar.current) {
      sidebar.current.classList.add("hidden")
    }
  }, [isSidebar])

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
      location.reload();
    }, 10);
  };

  const handleGenre = () => {
    setGenreToggle(false);
    reload();
  };

  // console.log(isSidebar)

  return (
    <>
    {isSidebar && <div onClick={() => setIsSidebar(false)} className="fixed top-0 right-0 w-screen h-screen z-40"></div>}
      
      <div className=" top-0 sm:w-3/4 w-11/12 h-fit flex items-center text-stone-300 pt-4">
        <div className="nav flex lg:items-baseline lg:gap-16 gap-0 lg:justify-normal justify-between w-full ">
          <div className="logo">
            <h2 className="lg:text-4xl text-2xl font-bold">almoviee</h2>
          </div>
          <div className="nav-list lg:w-full w-11/12 flex lg:justify-between justify-center items-baseline text-xs">
            <ul ref={sidebar} className="lg:gap-8 gap-2 lg:flex hidden items-center lg:flex-row flex-col lg:relative fixed top-0 right-0 lg:px-0 px-7 lg:h-fit h-svh lg:bg-transparent bg-gray-700 z-50">
            <IoClose onClick={() => setIsSidebar(false)} className="absolute lg:hidden flex top-5 right-5 md:text-2xl text-x cursor-pointerl" />
              <li className="lg:mt-0 mt-14">
                <Link href="/home">
                  <h3 className="hover:text-stone-200 md:text-xl text-base">Home</h3>
                </Link>
              </li>
              <li className="relative ">
                <div
                  onClick={() => setGenreToggle(!genreToggle)}
                  className="flex items-center gap-2 hover:text-stone-200 cursor-pointer"
                >
                  <h3 className="md:text-xl text-base">Genres</h3>
                  {genreToggle ? (
                    <IoIosArrowUp className="lg:text-xl md:text-base transition duration-150 ease-in-out" />
                  ) : (
                    <IoIosArrowDown className="lg:text-xl md:text-base transition duration-150 ease-in-out" />
                  )}
                </div>
                {genreToggle && (
                  <div className="absolute top-7 -left-1 z-50 w-56 h-fit flex lg:flex-row flex-col lg:py-2 py-0 lg:px-4 px-0 text-gray-400 bg-gray-700 rounded-sm transition duration-300 ease-in-out">
                    <div className="border-e pr-5 border-gray-400">
                      {genreLists.slice(0, 5).map((genre) => (
                        <Link
                          key={genre.id}
                          to={`/genre/${genre.name.toLowerCase()}/${genre.id}`}
                          onClick={handleGenre}
                        >
                          <h4 className="text-base hover:text-gray-300">
                            {genre.name}
                          </h4>
                        </Link>
                      ))}
                    </div>
                    <div className="lg:pl-5">
                      {genreLists.slice(5, 10).map((genre) => (
                        <Link
                          key={genre.id}
                          to={`/genre/${genre.name.toLowerCase()}/${genre.id}`}
                          onClick={handleGenre}
                        >
                          <h4 className="text-base hover:text-gray-300">
                            {genre.name}
                          </h4>
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
                    className="lg:text-xl sm:text-base text-sm bg-gray-700 md:w-96 w-full lg:p-3 p-2 sm:ps-7 ps-4 m-0 rounded-full"
                  />
                  <button type="submit">
                    <IoSearch className="absolute lg:top-3 top-2 sm:right-6 right-4 cursor-pointer text-gray-400 hover:text-stone-200 lg:text-2xl sm:text-xl text-base" />
                  </button>
                </form>
              )}
            </div>
          </div>
          <div className="pt-2">
            <RxHamburgerMenu onClick={() => setIsSidebar(true)} className="lg:hidden text-lg cursor-pointer hover:text-stone-200" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
