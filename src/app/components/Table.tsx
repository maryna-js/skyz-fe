import React from 'react';

interface TableProps {
  data: { column1: string; column2: string }[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="w-full py-6 pl-8 pr-4 4xl:px-24">
      <div className="flex items-center pb-2">
        <span className="h-3 w-3 bg-malibu mr-3"></span>
        <span className="uppercase text-lg font-bold text-white text-sm">TUESDAY, DECEMBER 5 2024</span>
      </div>
      <table className="border-separate w-full border-spacing-y-4">
      <tbody>
      
          <tr className="bg-gradient-to-r from-shark to-woodsmoke rounded-r-lg overflow-hidden h-20">
            <td className="py-2 pl-8 w-28">
              <img src="/logo-table.svg"/>
            </td>
            <td className="py-2 pl-8 w-28">
              <img src="/b03.svg"/>
            </td>
            <td className="py-2 pl-8 w-40">
              <div className="flex items-center border-l border-river-bed pl-10">
                <img src="/fnatic.svg"/>
                <span className="uppercase pl-3 text-white-lilac text-xs">FNATIC</span>
              </div>
            </td>
            <td className="py-2 pl-12 w-28">
              <img src="/vs.svg"/>
            </td>
            <td className="py-2 w-40">
              <div className="flex items-center">
                <img src="/vitality.svg"/>
                <span className="uppercase pl-3 text-white-lilac text-xs">Team VITALITY</span>
              </div>
            </td>
            <td className="px-3 py-2 max-w-5xl truncate">
            <div className="flex items-center">
                <img src="/esl.svg"/>
                <span className="pl-4 text-river-bed text-base">ESL Chalenger League Season 44 Europe</span>
              </div>
            </td>
            <td className="pr-16 py-2 text-sm">
            <div className="pl-20 flex items-center justify-end border-l border-river-bed h-7 text-malibu">
              22:45 PM
            </div>
            </td>
          </tr>

          <tr className="bg-gradient-to-r from-shark to-woodsmoke rounded-r-lg overflow-hidden h-20 mt-5">
            <td className="py-2 pl-8 w-28">
              <img src="/logo-table.svg"/>
            </td>
            <td className="py-2 pl-8 w-28">
              <img src="/b03.svg"/>
            </td>
            <td className="py-2 pl-8 w-40">
              <div className="flex items-center border-l border-river-bed pl-10">
                <img src="/sporut.svg"/>
                <span className="uppercase pl-3 text-white-lilac text-xs">sporut</span>
              </div>
            </td>
            <td className="py-2 pl-12 w-28">
              <img src="/vs.svg"/>
            </td>
            <td className="py-2 w-40">
              <div className="flex items-center">
                <img src="/virtus.svg"/>
                <span className="uppercase pl-3 text-white-lilac text-xs">Virtus PRO</span>
              </div>
            </td>
            <td className="px-3 py-2 max-w-5xl truncate">
            <div className="flex items-center">
                <img src="/esl.svg"/>
                <span className="pl-4 text-river-bed text-base">ESL Chalenger League Season 44 Europe</span>
              </div>
            </td>
            <td className="pr-16 py-2 text-sm">
            <div className="pl-20 flex items-center justify-end border-l border-river-bed h-7 text-white">
              LIVE
              <span className="rounded-full h-1.5 w-1.5 bg-scarlet ml-3"></span>
            </div>
            </td>
          </tr>

          <tr className="bg-gradient-to-r from-shark to-woodsmoke rounded-r-lg overflow-hidden h-20 mt-5">
            <td className="py-2 pl-8 w-28">
              <img src="/logo-table.svg"/>
            </td>
            <td className="py-2 pl-8 w-28">
              <img src="/b03.svg"/>
            </td>
            <td className="py-2 pl-8 w-40">
              <div className="flex items-center border-l border-river-bed pl-10">
                <img src="/sk.svg"/>
                <span className="uppercase pl-3 text-white-lilac text-xs">sk gaming</span>
              </div>
            </td>
            <td className="py-2 pl-12 w-28 text-white">
              <span>4:6</span>
            </td>
            <td className="py-2 w-40">
              <div className="flex items-center">
                <img src="/navi.svg"/>
                <span className="uppercase pl-3 text-white-lilac text-xs">navi</span>
              </div>
            </td>
            <td className="px-3 py-2 max-w-5xl truncate">
            <div className="flex items-center">
                <img src="/esl.svg"/>
                <span className="pl-4 text-river-bed text-base">ESL Chalenger League Season 44 Europe</span>
              </div>
            </td>
            <td className="pr-16 py-2 text-sm">
            <div className="pl-20 flex items-center justify-end border-l border-river-bed h-7 text-white">
              LIVE
              <span className="rounded-full h-1.5 w-1.5 bg-scarlet ml-3"></span>
            </div>
            </td>
          </tr>
      
      </tbody>
    </table>
  </div>
  );
}

export default Table;