"use client";

import Image from "next/image";
// import PieChart from "../../components/Chart.jsx";
// import LineChart from "../../components/LineChart.jsx";
import dynamic from "next/dynamic";

const PieChart = dynamic(() => import("../../components/Chart"), {
  ssr: false,
});
const LineChart = dynamic(() => import("../../components/LineChart"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_250px] mt-12">
        <div className="flex flex-col gap-12">
          <div className="md:w-5/6 w-full flex justify-center gap-[4vw]">
            {/* <div className="w-full flex justify-center"> */}
            <div className="w-[200px] flex items-center justify-center">
              <div className="w-full py-4 px-3 bg-white border-[1px] border-[#CACACA] rounded-3xl custom-box-shadow">
                <div className="w-full relative mt-6 flex justify-center">
                  <button className="w-12 cursor-pointer absolute h-12 -top-6 bg-success rounded-2xl flex justify-center">
                    <Image
                      width={24}
                      height={24}
                      src="/images/call-received.svg"
                      alt="Phone"
                    />
                  </button>
                  <div className="w-full cursor-pointer flex justify-center bg-success text-white font-poppins font-semibold text-[16px] h-[50px] rounded-2xl">
                    <p className="mt-4 relative z-10 font-responsive">
                      Successful calls
                    </p>
                  </div>
                </div>
                <div className="mt-6 ml-2 flex justify-center">
                  <h2 className="leading-16 text-center font-poppins text-[64px] text-success font-bold">
                    82
                  </h2>
                  <p className="mt-2 ml-1 text-success font-bold font-poppins">
                    %
                  </p>
                </div>
              </div>
              {/* </div> */}
            </div>
            {/* <div className="w-full flex justify-center"> */}
            <div className="w-[200px] flex items-center justify-center">
              <div className="w-full py-4 px-3 bg-white border-[1px] border-[#CACACA] rounded-3xl custom-box-shadow">
                <div className="w-full relative mt-6 flex justify-center">
                  <button className="w-12 cursor-pointer absolute h-12 -top-6 bg-cancel rounded-2xl flex justify-center">
                    <Image
                      width={24}
                      height={24}
                      src="/images/call-received.svg"
                      alt="Phone"
                    />
                  </button>
                  <div className="w-full cursor-pointer flex justify-center bg-cancel text-white font-poppins font-semibold text-[16px] h-[50px] rounded-2xl">
                    <p className="mt-4 relative z-10 font-responsive">
                      Failed calls
                    </p>
                  </div>
                </div>
                <div className="mt-6 ml-2 flex justify-center">
                  <h2 className="leading-16 text-center font-poppins text-[64px] text-cancel font-bold">
                    82
                  </h2>
                  <p className="mt-2 ml-1 text-cancel font-bold font-poppins">
                    %
                  </p>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
          <div className="md:w-5/6 w-full flex justify-center">
            <div className="w-64 custom-button-shadow flex justify-center items-center relative h-[77px] rounded-[28px] bg-active">
              <button className="w-11 h-11 flex justify-center items-center z-10 absolute bg-active -right-4 -top-4 rounded-full">
                <Image
                  width={24}
                  height={24}
                  src="/images/arrow-right.svg"
                  alt="Filter"
                />
              </button>
              <div className="flex gap-3 items-center">
                <Image
                  width={32}
                  height={32}
                  src="/images/grid-edit.svg"
                  alt="Edit"
                />
                <p className="font-poppins font-semibold text-lg text-white">
                  Create Report
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-0 w-full flex flex-col items-center">
          <h4 className="font-poppins font-semibold text-center">
            Telephony Service Limit
          </h4>
          <PieChart />

          <div className="w-full h-[1px] bg-black opacity-10 mt-4" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_250px] mt-8 md:mt-12">
        <div className="w-full md:w-[92%]">
          <div className="second-custom-box-shadow rounded-4xl px-2">
            <LineChart />
          </div>
        </div>
        <div className="w-full mt-20 md:mt-0 relative flex flex-col items-center">
          <h4 className="font-poppins absolute -top-10 font-semibold text-center">
            Recent Calls
          </h4>
          <div className="w-full border-[1px] border-[#CACACA] rounded-4xl flex flex-col items-center">
            <div className="h-[64px] mt-3 w-[86%] border-b-[1px] border-[#CACACA] flex justify-between items-center">
              <Image
                width={28}
                height={28}
                src="/images/call-calling.svg"
                alt="call"
              />
              <div>
                <p className="font-poppins mb-[2px] text-xs font-medium text-[#787878]">
                  Ongoing
                </p>
                <p className="font-poppins text-xs text-[#787878]">12:45</p>
              </div>
            </div>
            <div className="h-[64px] mt-3 w-[86%] border-b-[1px] border-[#CACACA] flex justify-between items-center">
              <Image
                width={28}
                height={28}
                src="/images/call-calling.svg"
                alt="call"
              />
              <div>
                <p className="font-poppins mb-[2px] text-xs font-medium text-[#787878]">
                  Ongoing
                </p>
                <p className="font-poppins text-xs text-[#787878]">12:45</p>
              </div>
            </div>
            <div className="h-[64px] mt-3 w-[86%] border-b-[1px] border-[#CACACA] flex justify-between items-center">
              <Image
                width={28}
                height={28}
                src="/images/call-calling.svg"
                alt="call"
              />
              <div>
                <p className="font-poppins mb-[2px] text-xs font-medium text-[#787878]">
                  Ongoing
                </p>
                <p className="font-poppins text-xs text-[#787878]">12:45</p>
              </div>
            </div>
            <div className="h-[64px] mt-3 w-[86%] border-b-[1px] border-[#CACACA] flex justify-between items-center">
              <Image
                width={28}
                height={28}
                src="/images/call-calling.svg"
                alt="call"
              />
              <div>
                <p className="font-poppins mb-[2px] text-xs font-medium text-[#787878]">
                  Ongoing
                </p>
                <p className="font-poppins text-xs text-[#787878]">12:45</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
