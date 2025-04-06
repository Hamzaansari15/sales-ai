"use client";

import { Pagination } from "antd";
import Image from "next/image";
import React from "react";

const ExistingClients = () => {
  return (
    <div>
      <div className="flex sm:flex-row flex-col justify-between sm:items-center my-6 gap-2">
        <div className="text-xl sm:text-3xl font-poppins font-semibold text-active">
          Existing Clients
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
      <div className="w-full bg-[#E3F0FF] rounded-[30px] p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((item) => {
            return (
              <div
                key={item}
                className="relative w-full flex flex-col gap-3 col-span-1 bg-white rounded-4xl p-6 border-[1px] border-[#CACACA] custom-card-shadow"
              >
                <Image
                  className="absolute right-6 top-4"
                  width={20}
                  height={20}
                  src="/images/export.svg"
                  alt="Arrow"
                />
                <div className="flex items-center gap-4">
                  <span className="font-poppins text-2xl font-semibold">
                    Cl-0786
                  </span>
                  <button className="w-[88px] h-8 bg-[#2D764F33] rounded-4xl text-[#2E9E62]">
                    Active
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <Image
                    width={52}
                    height={52}
                    src="/images/image.png"
                    alt="Image"
                  />
                  <span className="font-poppins font-medium">Carla Johns</span>
                </div>
                <div className="border-[1px] border-[#CACACA]" />
                <div className="flex gap-3">
                  <div className="flex flex-col gap-2 justify-center">
                    <span className="font-poppins text-[#121212] font-medium text-sm">
                      Region:
                    </span>
                    <span className="font-poppins text-[#121212] font-medium text-sm">
                      Domain:
                    </span>
                    <span className="font-poppins text-[#121212] font-medium text-sm">
                      Joining:
                    </span>
                    <span className="font-poppins text-[#121212] font-medium text-sm">
                      Leads:
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 justify-center">
                    <span className="font-poppins text-sm text-[#787878]">
                      Miami, US
                    </span>
                    <span className="font-poppins text-sm text-[#787878]">
                      Medical
                    </span>
                    <span className="font-poppins text-sm text-[#787878]">
                      MM/DD/YYYY
                    </span>
                    <span className="font-poppins text-sm text-[#787878]">
                      1357
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-4 flex w-full justify-end">
          <Pagination
            onChange={(value) => console.log(value)}
            defaultCurrent={1}
            total={500}
          />
        </div>
      </div>
    </div>
  );
};

export default ExistingClients;
