"use client";

// import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { usePathname } from "next/navigation";
// import { useState } from "react";

const Sidebar = ({
  setActiveSidebar,
  activeSidebar,
}: {
  setActiveSidebar: Dispatch<SetStateAction<boolean>>;
  activeSidebar: boolean;
}) => {
  const pathname = usePathname();
  const tabs = [
    {
      title: "Dashboard",
      icon: "/element-4.svg",
      url: "/",
    },
    {
      title: "Call Log",
      icon: "/call-minus.svg",
      url: "/call",
    },
    {
      title: "Call Transcripts",
      icon: "/message-text.svg",
      url: "/call",
    },
    {
      title: "Existing Clients",
      icon: "/people.svg",
      url: "/existing-clients",
    },
    {
      title: "Leads",
      icon: "/ranking.svg",
      url: "/leads",
    },
    {
      title: "Distribution List",
      icon: "/document-filter.svg",
      url: "/lists",
    },
    {
      title: "System Health Monitor",
      icon: "/presention-chart.svg",
      url: "/system",
    },
  ];
  console.log(activeSidebar);
  // const [activeTab, setActiveTab] = useState(true);
  return (
    <aside
      className={`-translate-x-full z-10 lg:translate-x-0 fixed transition-all duration-700 w-[285px] h-screen pb-8 overflow-y-scroll ${
        activeSidebar ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="w-full h-auto bg-sidebar rounded-4xl border-[1px] border-[#CACACA] px-5 py-6 flex flex-col">
        {/* <div className="flex justify-center"> */}
        <div className="flex items-center relative">
          <div className="flex items-center gap-3 ml-7">
            <Image width={36} height={36} src="/Group.svg" alt="/Group.svg" />
            <p className="font-poppins text-[18px] font-[275]">Welcome , Kin</p>
          </div>
          <HiMenuAlt3
            onClick={() => setActiveSidebar(() => !activeSidebar)}
            size={32}
            className="lg:hidden inline absolute -left-2 rotate-180"
          />
        </div>
        <div className="mt-10">
          <ul>
            {tabs.map((item, index) => {
              return (
                <li key={item.title} className="mb-8">
                  <Link href={item.url}>
                    <div className="flex items-center gap-4">
                      <Image
                        width={24}
                        height={24}
                        src={item.icon}
                        alt="/Group.svg"
                      />
                      <p
                        className={`font-poppins text-[18px] ${
                          pathname === item.url ? "text-active" : "text-primary"
                        }
                    ${pathname === item.url ? "font-semibold" : "font-normal"}
                    }`}
                      >
                        {item.title}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* </div> */}
      </div>
    </aside>
  );
};

export default Sidebar;
