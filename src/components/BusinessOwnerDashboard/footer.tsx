import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="lg:~lg/fxl:~h-[73.24444px]/[103px] h-[58px] bg-footer w-full flex gap-[10px] items-center lg:~lg/fxl:~gap-[25.6px]/[36px] lg:~lg/fxl:~pl-[17.7777px]/[25px] pl-[22px]">
      <Image
        src="/images/logos/Mx 1.png"
        height={47}
        width={47}
        className="lg:~lg/fxl:~max-w-[33.4222px]/[47px] max-w-[32px]"
        alt="logo"
        layout="responsive"
      />
      <div className="flex items-center gap-[8px] lg:gap-[3px]">
        <span>
          <svg
            width="24"
            height="24"
            className="lg:~lg/fxl:~w-[17.066px]/[24px] w-[20px]"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
              stroke="#424242"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.0005 14.2506C14.5282 14.8801 13.8698 15.345 13.1186 15.5796C12.3674 15.8141 11.5614 15.8064 10.8148 15.5574C10.0682 15.3085 9.41886 14.831 8.95872 14.1925C8.49858 13.5541 8.25098 12.787 8.25098 12C8.25097 11.213 8.49857 10.446 8.95869 9.80751C9.41882 9.16904 10.0682 8.69151 10.8147 8.44257C11.5613 8.19362 12.3673 8.18586 13.1185 8.4204C13.8698 8.65493 14.5282 9.11988 15.0005 9.74937"
              stroke="#424242"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="lg:~lg/fxl:~text-[11.37777px]/[16px] text-[14px]">
          2024, Powered by Marketxtra.
        </span>
      </div>
    </div>
  );
};

export default Footer;
