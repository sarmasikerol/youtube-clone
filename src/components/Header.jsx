import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { IoMdVideocam } from "react-icons/io";
import { MdVideoLibrary } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    //* inputta aratılan metni al
    let text = e.target[0].value;

    //* kullanıcıyı arama sonuçları sayfasına yönlendir
    //* search_query paramatresi ekle (aratılan metni)
    navigate(`/result?search_query=${text}`);
  };
  return (
    <div className="flex justify-between items-center p-4">
      <Link to="/" className="flex items-center gap-2">
        <FaYoutube size={50} className="text-[red] " />
        <h1 className="text-2xl font-mono max-sm:hidden">Youtube</h1>
      </Link>

      <form
        onSubmit={handleSubmit}
        className="flex border border-gray-400 rounded-[20px] overflow-hidden"
      >
        <input
          type="text"
          className="bg-black outline-none text-white px-5 py-2 border border-transparent focus:border-blue-500 rounded-l-[20px]"
        />
        <button className="px-4 text-2xl bg-zinc-800 hover:bg-zinc-600 transition duration-300">
          <IoIosSearch />
        </button>
      </form>

      <div className="flex gap-3 text-xl cursor-pointer">
        <FaBell className="hover:text-gray-400 transition duration-200" />
        <IoMdVideocam className="hover:text-gray-400 transition duration-200" />
        <MdVideoLibrary className="hover:text-gray-400 transition duration-200" />
      </div>
    </div>
  );
};

export default Header;
