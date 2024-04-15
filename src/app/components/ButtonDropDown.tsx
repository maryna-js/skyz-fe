import React from 'react';

const ButtonDropDown: React.FC = () => {
  return (
      <div>
        <button className="h-61px w-166px color-white rounded-lg flex pointer hover:opacity-90">
            <div className="bg-blaze-orange w-9/12 h-full rounded-l-lg flex justify-center items-center">
                <img src="/button-text.svg" alt="Icon" />
            </div>
            <span className="bg-river-bed h-full w-3/12 flex justify-center items-center rounded-r-lg">
                <img src="/arrow-down.svg" alt="Icon" className="h-1.5 w-2.5" />
            </span>
        </button>
      </div>
  );
}

export default ButtonDropDown;