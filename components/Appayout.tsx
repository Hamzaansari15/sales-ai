"use client";

import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useState } from "react";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [activeSidebar, setActiveSidebar] = useState(false);
  return (
    <>
      <Sidebar
        activeSidebar={activeSidebar}
        setActiveSidebar={setActiveSidebar}
      />
      <div
        className={` mb-6 transition-all duration-500 ease-in-out lg:ml-[340px] ml-4 w-full`}
      >
        <Header
          activeSidebar={activeSidebar}
          setActiveSidebar={setActiveSidebar}
        />
        {children}
      </div>
    </>
  );
};

export default Layout;
