import React from 'react';
import Image from 'next/image';

const ButtonDropDown: React.FC = () => {
  return (
      <div>
        <button className="h-11 4xl:h-61px w-118px 4xl:w-166px color-white rounded-lg flex pointer hover:opacity-90">
            <div className="bg-blaze-orange w-9/12 h-full rounded-l-lg flex justify-center items-center">
                <Image src="/button-text.svg" alt="Icon" width={68} height={26} />
            </div>
            <span className="bg-river-bed h-full w-3/12 flex justify-center items-center rounded-r-lg">
                <Image src="/arrow-down.svg" alt="Icon" className="h-1.5 w-2.5" width={10} height={6} />
            </span>
        </button>
      </div>
  );
}

export default ButtonDropDown;