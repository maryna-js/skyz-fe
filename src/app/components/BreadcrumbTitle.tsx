import React from 'react';

const BreadcrumbTitle: React.FC = () => {
  return (
    <div className="pt-8 pb-4 lg:py-4 4xl:py-20 px-6 lg:px-8 4xl:px-24">
      <nav className="mr-4 text-xs text-river-bed">
       <span>MYEDGE</span>
       <span className="px-2">/</span>
       <span>MATCHES</span>
       <span className="px-2">/</span>
       <span className="text-white-lilac">REBELS VS RIDERS</span>
      </nav>
      <div className="flex-col lg:flex-row flex items-center justify-between pt-3">
        <h1 className="text-lg lg:text-4xl font-bold text-white">UPCOMING LEAGUE OF LEGENDS MATCHES</h1>
        <div className="justify-between pt-6 4xl:pt-0 ml-0 4xl:-ml-6 w-full lg:w-auto">
            <button className="w-1/2 lg:w-auto bg-malibu text-blue-dianne uppercase text-sm px-4 py-2 hover:bg-curious-blue rounded-lg">UPCOMING</button>
            <button className="w-1/2 lg:w-auto bg-woodsmoke text-abbey uppercase text-sm px-4 py-2 hover:bg-cod-gray-opacity rounded-lg">Finished</button>
        </div>
      </div>
    </div>
  );
}

export default BreadcrumbTitle;
