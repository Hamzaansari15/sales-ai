import React from "react";
import CustomTable from "../../../components/Table";
import Image from "next/image";

const ListPage = () => {
  return (
    <div className="w-full pr-2 my-6">
      <div className="flex sm:flex-row flex-col justify-between sm:items-center mb-6 gap-2">
        <div className="text-xl sm:text-3xl font-poppins font-semibold text-active">
          Distribution List
        </div>
        <div className="flex gap-3">
          <button className="relative w-10 h-7 border-[1px] border-[#CACACA] px-2 py-1 rounded-[12px]">
            <Image
              className="absolute top-[7px] left-[11px]"
              width={16}
              height={16}
              src="/images/magnifyingglass.svg"
              alt="Search"
            />
          </button>
          <button className="flex items-center gap-1.5 w-20 h-7 border-[1px] border-[#CACACA] px-2 py-1 rounded-[12px]">
            <Image
              className=""
              width={16}
              height={16}
              src="/images/Vectora.svg"
              alt="Search"
            />
            <span className="font-poppins font-light text-xs">Filters</span>
          </button>
          <button className="flex items-center gap-1.5 bg-active w-20 h-7 border-[1px] border-[#CACACA] px-2 py-1 rounded-[12px]">
            <Image
              className=""
              width={16}
              height={16}
              src="/images/Vector.svg"
              alt="Search"
            />
            <span className="font-poppins text-white font-light text-xs">
              Export
            </span>
          </button>
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <div className="w-full min-w-[780px]">
          <CustomTable />
        </div>
      </div>
    </div>
  );
};

export default ListPage;
