import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="relative w-275px h-11">
      <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
        <img src="/search.svg" alt="Icon" className="h-5 w-5" />
      </span>
      <input
        type="text"
        placeholder="Search for player, team ..."
        className="w-275px h-11 pl-10 rounded-md text-sm border border-cod-gray-opacity bg-cod-gray text-river-bed px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
      />
    </div>
  );
}

export default SearchBar;