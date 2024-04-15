import React from 'react';
import ButtonDropDown from './ButtonDropDown';
import SearchBar from './SearchBar';
import NavMenu from './NavMenu';
import Button from './Button';

const Header: React.FC = () => {
  return (
    <header className="w-full h-24 lg:h-28 py-4 pl-8 pr-4 4xl:px-24 flex justify-start lg:justify-between items-center border border-b border-shark">
      <div className="w-full lg:w-1/2 flex justify-between lg:justify-start items-center">
        <div className="mr-16 lg:mr-6 xl:mr-10 4xl:mr-36 flex items-center">
          <img src="/logo.png" alt="Logo" className="w-28" />
        </div>
        <div className="flex items-center justify-end">
          <div className="flex items-center justify-end">
            <ButtonDropDown />
            <button className="flex lg:hidden ml-4">
                <img src="/hamburger.svg" className="w-9"/>
            </button>
          </div>
          <div className="hidden lg:block ml-4 xl:ml-8">
            <SearchBar />
          </div>
        </div>
      </div>
      <div className="w-1/2 hidden lg:flex justify-end items-center">
      <NavMenu />
      <div className="flex ml-10">
        <Button className="bg-cod-gray text-white uppercase hover:bg-cod-gray-opacity px-4 2xl:px-7 py-2 xl:py-3 border border-shark rounded-lg text-xxs xl:text-xs 2xl:text-sm mr-2 xl:mr-4">
          SIGN UP
        </Button>
        <Button className="bg-blaze-orange text-tuft-bush uppercase hover:bg-trinidad px-4 2xl:px-7 py-2 xl:py-3 border border-atomic-tangerine rounded-lg text-xxs xl:text-xs 2xl:text-sm">
          SIGN IN
        </Button>
      </div>
      </div>
    </header>
  );
}

export default Header;