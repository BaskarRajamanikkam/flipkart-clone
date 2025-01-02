import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products?search=${keyword}`);
    } else {
      navigate("/products");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-full px-4 py-1 "
    >
      <button type="submit">
        <FaSearch className="text-gray-400 font-normal" />
      </button>
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        type="text"
        placeholder="Search for Products, Brands and More"
        className="w-full px-4 py-1 text-base bg-transparent outline-none border-none"
      />
    </form>
  );
};

export default SearchInput;
