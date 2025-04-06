"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import HeaderMenu from "./HeaderMenu";
import HeaderSearch from "./HeaderSearch";
import { usePathname } from "next/navigation";

const Header = ({
  setActiveSidebar,
  activeSidebar,
}: {
  setActiveSidebar: Dispatch<SetStateAction<boolean>>;
  activeSidebar: boolean;
}) => {
  const pathname = usePathname();
  return (
    <header className={`w-full`}>
      {pathname === "/" ? (
        <div className="w-full mt-6">
          <div className="w-full items-center h-auto grid sm:grid-cols-[1fr_250px] grid-cols-[1fr_100px] gap-4 ">
            <HeaderSearch
              activeSidebar={activeSidebar}
              setActiveSidebar={setActiveSidebar}
            />
            <HeaderMenu />
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-end pr-3 sm:pr-6 mt-6">
          <div className="w-fit flex gap-4 items-center">
            <div className="w-64 h-9 flex gap-4 bg-[#D9D9D9] px-4 rounded-3xl">
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
            <Image
              width={32}
              height={32}
              src="/images/profile-circle.svg"
              alt="Profiles"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
