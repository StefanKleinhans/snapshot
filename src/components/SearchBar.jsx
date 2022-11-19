import React, { useEffect, useReducer, useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FlickrReducer, getPhotos } from "../shared/reducers/flickr.reducer";
import Gallery from "./Gallery";

const initialState = {
  photos: null,
};

const SearchBar = () => {
  const [state, dispatch] = useReducer(FlickrReducer, initialState);
  const [allow, setAllow] = useState(false);
  const [search, setSearch] = useState([]);

  const onSearchHandler = async () => {
    dispatch(await getPhotos(search));
    setAllow(true);
  };

  const onSearchValueHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const onButtonHandler = async (e) => {
    dispatch(await getPhotos(e.target.value));
    setAllow(true);
    setSearch(e.target.value);
  };

  return (
    <div className="flex flex-col items-center mt-4 h-9">
      <div className="flex flex-row mb-4">
        <input
          className="py-1 px-3 border-2 border-gray-300 bg-gray-200 rounded-l-md text-gray-700"
          type="text"
          placeholder="Search..."
          value={search}
          onChange={onSearchValueHandler}
        />
        <button
          className="px-3 h-full bg-gray-300 rounded-tr-md rounded-br-md"
          onClick={onSearchHandler}
        >
          <HiMagnifyingGlass />
        </button>
      </div>
      <div className="search-buttons flex flex-row justify-between w-3xl my-6">
        <button onClick={onButtonHandler} value="Mountain">
          Mountain
        </button>
        <button onClick={onButtonHandler} value="Beaches">
          Beaches
        </button>
        <button onClick={onButtonHandler} value="Birds">
          Birds
        </button>
        <button onClick={onButtonHandler} value="Food">
          Food
        </button>
      </div>
      {allow && <Gallery gallery={state} search={search} />}
    </div>
  );
};

export default SearchBar;
