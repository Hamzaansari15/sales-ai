"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import HeaderMenu from "./HeaderMenu";
import HeaderSearch from "./HeaderSearch";

const Header = ({
  setActiveSidebar,
  activeSidebar,
}: {
  setActiveSidebar: Dispatch<SetStateAction<boolean>>;
  activeSidebar: boolean;
}) => {
  return (
    <header className={`w-full`}>
      <div className="w-full mt-6">
        <div className="w-full items-center h-auto grid sm:grid-cols-[1fr_250px] grid-cols-[1fr_100px] gap-4 ">
          <HeaderSearch
            activeSidebar={activeSidebar}
            setActiveSidebar={setActiveSidebar}
          />
          <HeaderMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
