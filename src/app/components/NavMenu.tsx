import React from 'react';

const NavMenu: React.FC = () => {
  return (
    <nav>
        <ul className="text-river-bed flex text-base">
          <li className="mr-8 hover:text-slate-gray"><a href="/">MATCHES</a></li>
          <li className="mr-8 hover:text-slate-gray"><a href="/">PROPS</a></li>
          <li className="mr-8 flex items-center hover:text-slate-gray">
            <a href="/">TOOLS</a>
            <span className="ml-2">
            <img src="/drop-down.svg" alt="Icon" className="h-1.5 w-2.5" />
            </span>
          </li>
          <li className="mr-8 hover:text-slate-gray"><a href="/">PRICING</a></li>
          <li className="mr-4 hover:text-slate-gray"><a href="/">BONUSES</a></li>
        </ul>
      </nav>
  );
}

export default NavMenu;