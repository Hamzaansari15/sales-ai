import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { HiMenuAlt3 } from "react-icons/hi";

const HeaderSearch = ({
  setActiveSidebar,
  activeSidebar,
}: {
  setActiveSidebar: Dispatch<SetStateAction<boolean>>;
  activeSidebar: boolean;
}) => {
  return (
    <div className="w-full flex gap-4 items-center">
      <HiMenuAlt3
        onClick={() => setActiveSidebar(() => !activeSidebar)}
        size={32}
        className="lg:hidden inline"
      />
      <div className="w-5/6 h-9 flex gap-4 bg-[#D9D9D9] px-4 rounded-3xl">
        <Image
          width={20}
          height={20}
          src="/magnifyingglass.svg"
          alt="magnifyingglass"
        />
        <input
          placeholder="Search"
          className="w-full border-none outline-none"
          type="text"
          name=""
          id=""
        />
      </div>
    </div>
  );
};

export default HeaderSearch;
