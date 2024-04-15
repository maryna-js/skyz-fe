import React from 'react';
import ButtonDropDown from './ButtonDropDown';
import SearchBar from './SearchBar';
import NavMenu from './NavMenu';
import Button from './Button';

const Header: React.FC = () => {
  return (
    <header className="w-full h-28 py-4 px-24 flex justify-between items-center border border-b border-shark">
      <div className="w-1/2 flex justify-start items-center">
      <div className="mr-36">
        <img src="/logo.png" alt="Logo" />
      </div>
      <div className="flex items-center">
        <div className="mr-12">
          <ButtonDropDown />
        </div>
        <SearchBar />
      </div>
      </div>
      <div className="w-1/2 flex justify-end items-center">
      <NavMenu />
      <div className="flex ml-10">
        <Button className="bg-cod-gray text-white uppercase hover:bg-cod-gray-opacity px-7 py-3 border border-shark rounded-lg text-sm mr-4">
          SIGN UP
        </Button>
        <Button className="bg-blaze-orange text-tuft-bush uppercase hover:bg-trinidad px-7 py-3 border border-atomic-tangerine rounded-lg text-sm">
          SIGN IN
        </Button>
      </div>
      </div>
    </header>
  );
}

export default Header;