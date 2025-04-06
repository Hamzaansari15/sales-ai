"use client";

import Image from "next/image";
import React from "react";
import { useState } from "react";

const LeadPage = () => {
  const [state, setState] = useState<boolean>(true);
  return (
    <div>
      <div className="text-3xl font-poppins font-semibold text-active mt-2">
        Leads
      </div>
      <div className="h-auto w-full flex flex-col justify-center items-center">
        {state ? (
          <div className="mr-0 md:mr-30 flex flex-col items-center">
            <Image
              width={300}
              height={300}
              src="/images/lead-image.png"
              alt="Images"
            />
            <div className="flex flex-col gap-4 items-center">
              <p className="text-xl text-[#787878] font-poppins text-center">
                No files found. Upload files here to continue..{" "}
              </p>
              <button
                onClick={() => setState((value) => !value)}
                className="cursor-pointer w-[300px] sm:w-[420px] h-12 bg-active font-bold text-white font-poppins text-xl rounded-full"
              >
                Upload
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-col gap-16">
            <div className="mr-0 md:mr-30 flex flex-col items-center mt-8 gap-4">
              <Image
                width={140}
                height={140}
                src="/images/lead-image2.png"
                alt="Images"
              />
              <div className="flex flex-col gap-4">
                <p className="text-xl text-[#787878] text-center font-poppins">
                  Upload more files
                </p>
                <button
                  onClick={() => setState((state) => !state)}
                  className="cursor-pointer w-[300px] h-12 bg-active font-medium text-white font-poppins text-lg rounded-full"
                >
                  Upload
                </button>
              </div>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {Array.from({ length: 6 }, (_, i) => {
                return (
                  <div
                    key={i + 1}
                    className="col-span-1 w-full border-[1px] border-[#CACACA] rounded-4xl py-4 px-5 flex justify-between"
                  >
                    <div>
                      <p className="text-xl text-[#121212] font-poppins font-semibold">
                        Clients.xls
                      </p>
                      <p className="text-sm font-poppins text-[#787878]">
                        Uploaded on: Jan 22, 2025
                      </p>
                    </div>
                    <Image
                      width={24}
                      height={24}
                      src="/images/document-download.svg"
                      alt="Image"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadPage;
