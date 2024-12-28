import React from "react";

const Navbar = () => {
  const notifications: string[] = ["asdasd", "asdas"];
  return (
    <div className="lg:~lg/fxl:~pr-[17.77777px]/[25px] pr-[25px] lg:~lg/fxl:~pl-[17.7777px]/[25px] lg:~lg/fxl:~py-[17.0666px]/[24px] ~fsm/lg:~py-[16px]/[17.0666px] flex items-center">
      <button className="w-[20px] h-[20px] mr-[19px] ml-[22px]  flex flex-col items-center justify-between py-[5px] lg:hidden">
        <div className="bg-black w-[12px] h-[1px]"></div>
        <div className="bg-black w-[12px] h-[1px]"></div>
        <div className="bg-black w-[12px] h-[1px]"></div>
      </button>
      <div className="relative w-min lg:~lg/fxl:~pr-[17.0666px]/[24px] pr-[20px] bg-[#ecf1f4] lg:~lg/fxl:~rounded-[5.68888px]/[8px] rounded-[4px]">
        <input
          type="text"
          placeholder="Search"
          className="lg:~lg/fxl:~w-[318.5777px]/[448px] w-[143px] px-[3px]  ~fsm/lg:~h-[28px]/[34.1333px] lg:~lg/fxl:~h-[34.1333px]/[48px] outline-none bg-[#ecf1f4] lg:~lg/fxl:~rounded-[5.68888px]/[8px] rounded-[4px] lg:~lg/fxl:~px-[11.3777px]/[16px] lg:~lg/fxl:~py-[8.5333px]/[12px] lg:~lg/fxl:~text-[11.3777px]/[16px] relative"
        ></input>
        <button className="absolute right-0 lg:~lg/fxl:~right-[11.3777px]/[16px] top-0 bottom-0">
          <svg
            width="24"
            height="24"
            className="lg:~lg/fxl:~w-[17.0666px]/[24px] w-[20px]"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_5465_1287"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <g clipPath="url(#clip0_5465_1287)">
                <path
                  d="M14.9497 14.9498C12.2161 17.6835 7.78392 17.6835 5.05025 14.9498C2.31658 12.2162 2.31658 7.784 5.05025 5.05033C7.78392 2.31666 12.2161 2.31666 14.9497 5.05033C17.6834 7.784 17.6834 12.2162 14.9497 14.9498ZM14.9497 14.9498L20.5 20.5001"
                  stroke="#333333"
                  strokeWidth="1.5"
                />
              </g>
            </mask>
            <g mask="url(#mask0_5465_1287)">
              <rect width="24" height="24" fill="#8C8CA2" />
            </g>
            <defs>
              <clipPath id="clip0_5465_1287">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <select
        required
        className="relative appearance-none hidden lg:~lg/fxl:~w-[113.77px]/[160px] ~fsm/lg:~w-[90px]/[113.77px] lg:~lg/fxl:~text-[11.3777px]/[16px] lg:~lg/fxl:~h-[34.1333px]/[48px] text-txtgray bg-[#ecf1f4] lg:~lg/fxl:~ml-[17.0666px]/[24px] ml-[8px] lg:flex items-center lg:~lg/fxl:~rounded-[5.68888px]/[8px] lg:~lg/fxl:~p-[8.888px]/[12.5px]"
        name="category"
        id="category"
        style={{
          backgroundImage: `url('/images/icons/arrow-down.svg')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 8px center",
          backgroundSize: "15px 9px",
        }}
      >
        <option value="">Daily</option>
        <option value="market">Monthly</option>
        <option value="health-and-beauty">Weekly</option>
      </select>
      <select
        required
        className="relative appearance-none ~fsm/lg:~w-[90px]/[113.77px] lg:hidden h-[28px] text-[14px] lg:text-[16px] text-txtgray bg-[#ecf1f4] ml-[8px] flex items-center lg:~lg/fxl:~rounded-[5.68888px]/[8px] lg:p-[10px] py-[4px] pl-[10px] lg:py-0 lg:pl-0"
        name="category"
        id="category"
        style={{
          backgroundImage: `url('/images/icons/arrow-down.svg')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 8px center",
          backgroundSize: "8px 4px",
        }}
      >
        <option value="">Daily</option>
        <option value="market">Monthly</option>
        <option value="health-and-beauty">Weekly</option>
      </select>
      {/* <div className="relative appearance-none lg:~lg/fxl:~w-[113px]/[160px] lg:~lg/fxl:~text-[11.3777px]/[16px] text-txtgray bg-[#ecf1f4] lg:~lg/fxl:~ml-[17.0666px]/[24px] flex items-center lg:~lg/fxl:~rounded-[5.68888px]/[8px] lg:~lg/fxl:~p-[7.111px]/[10px]">
        Daily
        <button className="ml-auto absolute lg:~lg/fxl:~right-[7.111px]/[10px]">
          <svg
            width="15"
            height="9"
            viewBox="0 0 15 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4375 1.625L7.5 7.5625L1.5625 1.625"
              stroke="#1D2026"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div> */}
      <button className="ml-auto">
        {notifications.length === 0 ? (
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            className="lg:~lg/fxl:~w-[24.17777px]/[34px] ~fsm/lg:~w-[20px]/[24px] lg:mx-0 mx-[2px]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.46476 13.8124C7.463 12.5523 7.71067 11.3043 8.19348 10.1404C8.67629 8.9764 9.3847 7.91952 10.2779 7.03063C11.1711 6.14174 12.2313 5.43843 13.3976 4.96122C14.5639 4.48402 15.813 4.24236 17.0731 4.25018C22.3311 4.28927 26.5369 8.65974 26.5369 13.9325V14.8749C26.5369 19.6317 27.5321 22.392 28.4086 23.9006C28.503 24.0618 28.5533 24.2451 28.5543 24.4319C28.5553 24.6187 28.507 24.8025 28.4143 24.9647C28.3216 25.1269 28.1878 25.2618 28.0263 25.3557C27.8648 25.4497 27.6815 25.4994 27.4946 25.4999H6.50593C6.31909 25.4994 6.13568 25.4497 5.97421 25.3557C5.81273 25.2617 5.6789 25.1268 5.58622 24.9646C5.49353 24.8023 5.44527 24.6185 5.44631 24.4317C5.44734 24.2448 5.49763 24.0616 5.5921 23.9004C6.46909 22.3917 7.46475 19.6314 7.46475 14.8749L7.46476 13.8124Z"
              stroke="#1D2026"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.75 25.5V26.5625C12.75 27.6897 13.1978 28.7707 13.9948 29.5677C14.7918 30.3647 15.8728 30.8125 17 30.8125C18.1272 30.8125 19.2082 30.3647 20.0052 29.5677C20.8022 28.7707 21.25 27.6897 21.25 26.5625V25.5"
              stroke="#1D2026"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="34"
            height="34"
            className="lg:~lg/fxl:~w-[24.17777px]/[34px] ~fsm/lg:~w-[20px]/[24px] lg:mx-0 mx-[2px]"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.46476 13.8124C7.463 12.5523 7.71067 11.3043 8.19348 10.1404C8.67629 8.9764 9.3847 7.91952 10.2779 7.03063C11.1711 6.14174 12.2313 5.43843 13.3976 4.96122C14.5639 4.48402 15.813 4.24236 17.0731 4.25018C22.3311 4.28927 26.5369 8.65974 26.5369 13.9325V14.8749C26.5369 19.6317 27.5321 22.392 28.4086 23.9006C28.503 24.0618 28.5533 24.2451 28.5543 24.4319C28.5553 24.6187 28.507 24.8025 28.4143 24.9647C28.3216 25.1269 28.1878 25.2618 28.0263 25.3557C27.8648 25.4497 27.6815 25.4994 27.4946 25.4999H6.50593C6.31909 25.4994 6.13568 25.4497 5.97421 25.3557C5.81273 25.2617 5.6789 25.1268 5.58622 24.9646C5.49353 24.8023 5.44527 24.6185 5.44631 24.4317C5.44734 24.2448 5.49763 24.0616 5.5921 23.9004C6.46909 22.3917 7.46475 19.6314 7.46475 14.8749L7.46476 13.8124Z"
              stroke="#1D2026"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.75 25.5V26.5625C12.75 27.6897 13.1978 28.7707 13.9948 29.5677C14.7918 30.3647 15.8728 30.8125 17 30.8125C18.1272 30.8125 19.2082 30.3647 20.0052 29.5677C20.8022 28.7707 21.25 27.6897 21.25 26.5625V25.5"
              stroke="#1D2026"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="17" cy="5" r="4" fill="#FF6636" stroke="white" />
          </svg>
        )}
      </button>
      <div className="flex items-center lg:~lg/fxl:~gap-[11.3777px]/[16px] lg:~lg/fxl:~ml-[17.0666px]/[24px]">
        <div className="grid place-content-center rounded-[50%] ~lg/fxl:~text-[14px]/[16px]  font-bold  lg:~lg/fxl:~w-[30.5777px]/[43px] ~fsm/lg:~w-[24px]/[30.5777px] ~fsm/lg:~h-[24px]/[30.5777px] lg:~lg/fxl:~h-[30.5777px]/[43px] bg-[#d9d9d9] text-[#8e8e8e]">
          JJ
        </div>
        <span className="text-txtgray hidden lg:block lg:~lg/fxl:~text-[11.3777px]/[16px]">
          Jaachi Jeff
        </span>
      </div>
    </div>
  );
};

export default Navbar;
