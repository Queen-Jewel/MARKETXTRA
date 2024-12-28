import React, { FC } from "react";
import Navbar from "@/components/BusinessOwnerDashboard/navbar";
import Footer from "@/components/BusinessOwnerDashboard/footer";
import Link from "next/link";

const Dashboard: FC = () => {
  const store = [];
  if (store.length === 0) {
    return (
      <>
        <div className="lg:~lg/fxl:~pr-[49.066666px]/[69px]">
          <Navbar />
        </div>

        <div className="lg:~lg/fxl:~pl-[17.7777px]/[25px] px-[25px] lg:px-0 lg:~lg/fxl:~pr-[49.066666px]/[69px]">
          <div className=" w-full lg:~lg/fxl:~h-[46.93333px]/[66px] ~/lg:~h-[44px]/[46.93333px] bg-[#ff8e8e]/30 lg:~lg/fxl:~mt-[34.1333px]/[48px] lg:~lg/fxl:~mb-[49.7777px]/[70px] mb-[16px] lg:~lg/fxl:~rounded-[5.68888px]/[8px] rounded-[8px] flex items-center justify-between p-[12px] lg:px-4">
            <span className="text-[#ff5747] hidden lg:block lg:~lg/fxl:~text-[11.37777px]/[16px]  lg:~lg/fxl:~leading-[15.928888px]/[22.4px]">
              Ready to experience revolutionary sales?
            </span>
            <span className="text-[#ff5747] block lg:hidden lg:~lg/fxl:~text-[11.37777px]/[16px]  lg:~lg/fxl:~leading-[15.928888px]/[22.4px]">
              Ready to get Started{" "}
            </span>
            <Link
              href="/create-store"
              className="text-[#ff5747] underline underline-offset-2 text-[14px] lg:~lg/fxl:~text-[11.37777px]/[16px]  lg:~lg/fxl:~leading-[17.066px]/[24px]"
            >
              Create your store now!
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-[8px]  lg:grid-cols-3  lg:~lg/fxl:~gap-[7.111px]/[10px]">
            <div className="bg-GreenB rounded-[8px] ~fsm/lg:~pl-[13px]/[19px] ~fsm/lg:~pr-[11px]/[17px] lg:~lg/fxl:~h-[109.51111px]/[154px] ~fsm/lg:~h-[67px]/[109px] lg:~lg/fxl:~pr-[17.0666px]/[24px] lg:~lg/fxl:~pl-[19.2px]/[27px] lg:~lg/fxl:~py-[13.5111px]/[19px] overflow-hidden pt-[7px] pb-[8px] flex flex-col">
              <div className="text-white lg:~lg/fxl:~text-[17.0666px]/[24px] ~fsm/lg:~text-[14px]/[17px] flex h-min">
                <span className=" font-[500] lg:~lg/fxl:~leading-[20.01777]/[28.15px] flex items-center">
                  Total Sales
                </span>
                <span className="ml-auto">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    className="lg:~lg/fxl:~w-[24.17777px]/[34px] lg:~lg/fxl:~h-[24.17777px]/[34px]  ~fsm/lg:~w-[16px]/[24px] ~fsm/lg:~h-[16px]/[24px]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.4375 24.4375H9.27273L5.56772 4.05993C5.5232 3.81512 5.39418 3.5937 5.20315 3.43426C5.01211 3.27483 4.77118 3.1875 4.52235 3.1875H2.125"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.625 29.75C12.092 29.75 13.2812 28.5608 13.2812 27.0938C13.2812 25.6267 12.092 24.4375 10.625 24.4375C9.15799 24.4375 7.96875 25.6267 7.96875 27.0938C7.96875 28.5608 9.15799 29.75 10.625 29.75Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24.4375 29.75C25.9045 29.75 27.0938 28.5608 27.0938 27.0938C27.0938 25.6267 25.9045 24.4375 24.4375 24.4375C22.9705 24.4375 21.7812 25.6267 21.7812 27.0938C21.7812 28.5608 22.9705 29.75 24.4375 29.75Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.30681 19.125H24.9822C25.4799 19.125 25.9617 18.9503 26.3438 18.6315C26.7259 18.3126 26.9839 17.8698 27.0729 17.3801L28.6875 8.5H6.375"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div className="flex mt-auto lg:mt-auto">
                <div className="flex flex-row lg:flex-col gap-[3px] lg:gap-0 w-min h-min">
                  <span className="font-bold text-white ~fsm/lg:~text-[16px]/[22px] ~fsm/lg:~leading-[18.77px]/[22px] lg:~lg/fxl:~text-[22.75555px]/[32px] lg:~lg/fxl:~leading-[26.695111px]/[37.54px] tracking-[-2%]">
                    NGN
                  </span>
                  <span className="font-bold text-white ~fsm/lg:~text-[16px]/[22px] ~fsm/lg:~leading-[18.77px]/[22px] lg:~lg/fxl:~text-[22.75555px]/[32px] lg:~lg/fxl:~leading-[26.695111px]/[37.54px] tracking-[-2%]">
                    0
                  </span>
                </div>
                <div className="ml-auto text-[10px] lg:~lg/fxl:~text-[11.3777px]/[16px] leading-[14px] lg:leading-[22.4px] mt-auto underline text-white flex-shrink-0 w-max">
                  See report
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-b lg:~lg/fxl:~h-[109.51111px]/[154px] ~fsm/lg:~h-[67px]/[109px] pt-[7px] pb-[8px] from-gradientCol-GreenT to-gradientCol-GreenL ~fsm/lg:~pl-[13px]/[19px] ~fsm/lg:~pr-[11px]/[17px] rounded-[8px] lg:~lg/fxl:~pr-[17.0666px]/[24px] lg:~lg/fxl:~pl-[19.2px]/[27px] lg:~lg/fxl:~py-[13.5111px]/[19px] overflow-hidden flex flex-col">
              <div className="text-white lg:~lg/fxl:~text-[17.0666px]/[24px] ~fsm/lg:~text-[14px]/[17px] flex ">
                <span className=" font-[500] lg:~lg/fxl:~leading-[20.01777]/[28.15px]">
                  Total Profit
                </span>
                <span className="ml-auto">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    className="lg:~lg/fxl:~w-[24.17777px]/[34px] lg:~lg/fxl:~h-[24.17777px]/[34px]  ~fsm/lg:~w-[16px]/[24px] ~fsm/lg:~h-[16px]/[24px]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.4375 24.4375H9.27273L5.56772 4.05993C5.5232 3.81512 5.39418 3.5937 5.20315 3.43426C5.01211 3.27483 4.77118 3.1875 4.52235 3.1875H2.125"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.625 29.75C12.092 29.75 13.2812 28.5608 13.2812 27.0938C13.2812 25.6267 12.092 24.4375 10.625 24.4375C9.15799 24.4375 7.96875 25.6267 7.96875 27.0938C7.96875 28.5608 9.15799 29.75 10.625 29.75Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24.4375 29.75C25.9045 29.75 27.0938 28.5608 27.0938 27.0938C27.0938 25.6267 25.9045 24.4375 24.4375 24.4375C22.9705 24.4375 21.7812 25.6267 21.7812 27.0938C21.7812 28.5608 22.9705 29.75 24.4375 29.75Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.30681 19.125H24.9822C25.4799 19.125 25.9617 18.9503 26.3438 18.6315C26.7259 18.3126 26.9839 17.8698 27.0729 17.3801L28.6875 8.5H6.375"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div className="flex mt-auto lg:mt-auto">
                <div className="flex flex-row lg:flex-col gap-[3px] lg:gap-0 w-min h-min">
                  <span className="font-bold text-white ~fsm/lg:~text-[16px]/[22px] ~fsm/lg:~leading-[18.77px]/[22px] lg:~lg/fxl:~text-[22.75555px]/[32px] lg:~lg/fxl:~leading-[26.695111px]/[37.54px] tracking-[-2%]">
                    NGN
                  </span>
                  <span className="font-bold text-white ~fsm/lg:~text-[16px]/[22px] ~fsm/lg:~leading-[18.77px]/[22px] lg:~lg/fxl:~text-[22.75555px]/[32px] lg:~lg/fxl:~leading-[26.695111px]/[37.54px] tracking-[-2%]">
                    0
                  </span>
                </div>
                <div className="ml-auto mt-auto text-[10px] lg:~lg/fxl:~text-[11.3777px]/[16px] leading-[14px] lg:leading-[22.4px]  underline text-white flex-shrink-0 w-max">
                  See report
                </div>
              </div>
            </div>
            <div className="bg-Orange lg:~lg/fxl:~h-[109.51111px]/[154px] ~fsm/lg:~h-[67px]/[109px] pt-[7px] pb-[8px] ~fsm/lg:~pr-[11px]/[17px] ~fsm/lg:~pl-[13px]/[19px] rounded-[8px] lg:~lg/fxl:~pr-[17.0666px]/[24px] lg:~lg/fxl:~pl-[19.2px]/[27px] lg:~lg/fxl:~py-[13.5111px]/[19px] overflow-hidden flex flex-col">
              <div className="text-white lg:~lg/fxl:~text-[17.0666px]/[24px] ~fsm/lg:~text-[14px]/[17px] flex">
                <span className=" font-[500] lg:~lg/fxl:~leading-[20.01777]/[28.15px] leading-[19.6px]">
                  Total Customers
                </span>
                <span className="ml-auto">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    className="lg:~lg/fxl:~w-[24.17777px]/[34px] lg:~lg/fxl:~h-[24.17777px]/[34px]  ~fsm/lg:~w-[16px]/[24px] ~fsm/lg:~h-[16px]/[24px]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.4375 24.4375H9.27273L5.56772 4.05993C5.5232 3.81512 5.39418 3.5937 5.20315 3.43426C5.01211 3.27483 4.77118 3.1875 4.52235 3.1875H2.125"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.625 29.75C12.092 29.75 13.2812 28.5608 13.2812 27.0938C13.2812 25.6267 12.092 24.4375 10.625 24.4375C9.15799 24.4375 7.96875 25.6267 7.96875 27.0938C7.96875 28.5608 9.15799 29.75 10.625 29.75Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24.4375 29.75C25.9045 29.75 27.0938 28.5608 27.0938 27.0938C27.0938 25.6267 25.9045 24.4375 24.4375 24.4375C22.9705 24.4375 21.7812 25.6267 21.7812 27.0938C21.7812 28.5608 22.9705 29.75 24.4375 29.75Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.30681 19.125H24.9822C25.4799 19.125 25.9617 18.9503 26.3438 18.6315C26.7259 18.3126 26.9839 17.8698 27.0729 17.3801L28.6875 8.5H6.375"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div className="flex mt-auto lg:mt-auto">
                <div className="flex flex-col gap-0 w-min h-min">
                  <span className="font-bold text-white ~fsm/lg:~text-[16px]/[22px] ~fsm/lg:~leading-[18.77px]/[22px] lg:~lg/fxl:~text-[22.75555px]/[32px] lg:~lg/fxl:~leading-[26.695111px]/[37.54px] tracking-[-2%]">
                    <br className="lg:block hidden"></br>0
                  </span>
                </div>
                <div className="ml-auto mt-auto text-[10px] lg:~lg/fxl:~text-[11.3777px]/[16px] leading-[14px] lg:leading-[22.4px] underline text-white flex-shrink-0 w-max">
                  See report
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:~lg/fxl:~mt-[49.7777px]/[70px] ~fsm/lg:~mt-[32px]/[49px]">
            <h1 className="text-txtgray font-[400] lg:font-[500] text-[16px] lg:~lg/fxl:~text-[17.066px]/[24px] lg:~lg/fxl:~leading-[20.01777px]/[28.15px]">
              Transaction History
            </h1>
            <div className="lg:~lg/fxl:~h-[46.93333px]/[66px] h-[56px] text-txtgray lg:~lg/fxl:~pl-[32px]/[45px] lg:~lg/fxl:~leading-[15.928888px]/[22.4px] lg:~lg/fxl:~text-[11.37777px]/[16px] text-[14px] w-full bg-footer lg:~lg/fxl:~rounded-[5.68888px]/[8px] mt-[16px] rounded-[8px] pl-[12px]  flex items-center text">
              Create your store to view recent transactions
            </div>
          </div>
          <div className="w-full lg:~lg/fxl:~mt-[51.2px]/[72px] ~fsm/lg:~mt-[32px]/[49px]">
            <h1 className="text-txtgray font-[400] lg:font-[500] text-[16px] lg:~lg/fxl:~text-[17.066px]/[24px] lg:~lg/fxl:~leading-[20.01777px]/[28.15px]">
              Recent Sales
            </h1>
            <div className="lg:~lg/fxl:~h-[46.93333px]/[66px] mt-[16px] pl-[12px]  h-[56px] text-txtgray text-[14px] lg:~lg/fxl:~pl-[32px]/[45px] lg:~lg/fxl:~leading-[15.928888px]/[22.4px]  w-full bg-footer lg:~lg/fxl:~rounded-[5.68888px]/[8px] lg:~lg/fxl:~mt-[11.37777px]/[16px] rounded-[8px] flex items-center text">
              Create your store to view recent sales
            </div>
          </div>
          <div className="w-full lg:~lg/fxl:~mt-[51.2px]/[72px] lg:~lg/fxl:~mb-[85.333px]/[120px] ~fsm/lg:~mt-[32px]/[49px]">
            <h1 className="text-txtgray font-[400] lg:font-[500]  text-[16px] lg:~lg/fxl:~text-[17.066px]/[24px] lg:~lg/fxl:~leading-[20.01777px]/[28.15px]">
              Recent Store Visits
            </h1>
            <div className="lg:~lg/fxl:~h-[46.93333px]/[66px] h-[56px] mt-[16px] text-txtgray text-[14px] pl-[12px] lg:~lg/fxl:~pl-[32px]/[45px] lg:~lg/fxl:~leading-[15.928888px]/[22.4px] lg:~lg/fxl:~text-[11.37777px]/[16px] w-full bg-footer lg:~lg/fxl:~rounded-[5.68888px]/[8px] rounded-[8px] flex items-center text">
              Create your store to view recent store visits
            </div>
          </div>
        </div>
        <div className="mt-[95px] lg:mt-0">
          <Footer />
        </div>
      </>
    );
  }
  return (
    <>
      <Navbar />

      <div>Dashboard</div>
    </>
  );
};

export default Dashboard;
