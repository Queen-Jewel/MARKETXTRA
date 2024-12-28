"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import AccountDetails from "@/components/CreateStore/accountDetails";
import BusinessCredentials from "@/components/CreateStore/businessCredentials";
import StoreStructure from "@/components/CreateStore/storeStructure";
import Button from "@/components/CreateStore/button";

const CreateStore = () => {
  const headings = ["storeStructure", "businessCredentials", "accountDetails"];
  const [number, setNumber] = useState(0);
  const name = headings[number];

  const [formData, setFormData] = useState({
    account_name: "",
    account_number: "",
    bank_name: "",
    description: "",
    business_email: "",
    phone_number: "",
    city: "",
    address: "",
    store_name: "",
    category: "",
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handlePreviousClick = () => {
    if (number > 0) {
      setNumber((prev) => prev - 1);
    }
  };

  const handleNextClick = () => {
    if (number === 0) {
      const { store_name, category } = formData;
      if (!store_name || !category) {
        return;
      }
    }

    if (number === 1) {
      const { description, business_email, phone_number, city, address } =
        formData;
      if (
        !description ||
        !business_email ||
        !phone_number ||
        !city ||
        !address
      ) {
        return;
      }
    }

    if (number < 2) {
      setNumber((prev) => prev + 1);
    }
  };

  return (
    <div className="font-Work bg-transparent relative h-full grid grid-cols-1 lg:grid-cols-2 grid-rows-1 auto-rows-[100vh]">
      <div className=" min-h-full h-screen w-full relative hidden lg:block">
        <div className="absolute inset-0">
          <Image
            src="/images/banners/womanWithWhiteTeeth.jpeg"
            alt="Teeth Whitening Banner"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="bg-white absolute w-[380px] lg:w-auto pb-[58px] right-[50%] transform lg:transform-none translate-x-[50%] top-[80px] lg:top-auto lg:left-auto lg:right-auto lg:bottom-auto lg:relative lg:h-screen lg:max-h-max max-h-[661px] overflow-y-scroll  lg:px-0 px-[25px] pr-[25px] lg:pl-[121px] lg:pr-24 scrollbar-none rounded-md lg:rounded-none">
        <div className="bg-white">
          <Image
            className=" mx-[-7px] mt-[42px]"
            src="/images/logos/Mx 2@2x.png"
            alt="mx2"
            layout="intrinsic"
            height={56.63}
            width={158.41}
          />
          <p className=" mt-[32px] text-[16px] lg:text-[24px]">
            {name === "storeStructure"
              ? "You’re three (3) steps away from creating your custom online store!"
              : name === "businessCredentials"
              ? "You’re two (2) steps away from creating your custom online store!"
              : "Go through this last step and you can have your custom online store"}
          </p>
          <div>
            <h1 className="text-[24px] lg:mt-[33.37px] mt-[24px] leading-snug font-semibold bg-gradient-to-b to-gradientCol-GreenT from-gradientCol-GreenL bg-clip-text text-transparent">
              {name === "storeStructure"
                ? "Store Structure"
                : name === "businessCredentials"
                ? "Business Credentials"
                : "Account Details"}
            </h1>
            <h1 className="text-[16px] mt-[8px] leading-snug bg-gradient-to-b to-gradientCol-GreenT from-gradientCol-GreenL bg-clip-text text-transparent ">
              Step {number + 1} of 3
            </h1>
            <div className="flex flex-row gap-[24px] mt-[8px]">
              <div className="flex-shrink-0 w-[86px] h-[10px] bg-gradient-to-b to-gradientCol-GreenT from-gradientCol-GreenL rounded-[5px]"></div>
              <div className="flex-shrink-0 w-[86px] h-[10px] rounded-[5px] bg-[#d9d9d9] ">
                <div
                  className={`${
                    name === "businessCredentials" || name === "accountDetails"
                      ? "w-full"
                      : "w-0"
                  } h-full bg-gradient-to-b transition-all to-gradientCol-GreenT from-gradientCol-GreenL rounded-[5px]`}
                ></div>
              </div>
              <div className="flex-shrink-0 w-[86px] h-[10px] rounded-[5px] bg-[#d9d9d9] ">
                <div
                  className={`${
                    name === "accountDetails" ? "w-full" : "w-0"
                  } h-full bg-gradient-to-b transition-all to-gradientCol-GreenT from-gradientCol-GreenL rounded-[5px]`}
                ></div>
              </div>
            </div>
            <div className="mt-[45px] lg:w-[360px] w-[325px]">
              {name === "accountDetails" && (
                <AccountDetails onInputChange={handleInputChange} />
              )}
              {name === "businessCredentials" && (
                <BusinessCredentials onInputChange={handleInputChange} />
              )}
              {name === "storeStructure" && (
                <StoreStructure onInputChange={handleInputChange} />
              )}
              <Button
                name={name !== "accountDetails" ? "Next" : "proceed to store"}
                onClick={handleNextClick}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen w-full fixed z-[-1] block lg:hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/banners/womanWithWhiteTeeth.jpeg"
            alt="Teeth Whitening Banner"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <button
        onClick={handlePreviousClick}
        className={`fixed bottom-0 hidden ${
          name !== "storeStructure" ? "lg:block" : "lg:hidden"
        } right-0 mr-[80px] mb-[25px] transform rotate-180`}
      >
        <svg
          width="54"
          height="54"
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27 47.25C38.1838 47.25 47.25 38.1838 47.25 27C47.25 15.8162 38.1838 6.75 27 6.75C15.8162 6.75 6.75 15.8162 6.75 27C6.75 38.1838 15.8162 47.25 27 47.25Z"
            stroke="url(#paint0_linear_5362_474)"
            strokeWidth="4.5"
            strokeMiterlimit="10"
          />
          <path
            d="M28.2781 34.1592L35.4375 26.9998L28.2781 19.8403"
            stroke="url(#paint1_linear_5362_474)"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.5625 27H35.4375"
            stroke="url(#paint2_linear_5362_474)"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_5362_474"
              x1="27"
              y1="6.75"
              x2="27"
              y2="47.25"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#008000" />
              <stop offset="1" stopColor="#00B800" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_5362_474"
              x1="31.8578"
              y1="19.8403"
              x2="31.8578"
              y2="34.1592"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#008000" />
              <stop offset="1" stopColor="#00B800" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_5362_474"
              x1="27"
              y1="27"
              x2="27"
              y2="28"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#008000" />
              <stop offset="1" stopColor="#00B800" />
            </linearGradient>
          </defs>
        </svg>
      </button>
      <button
        onClick={handleNextClick}
        className="fixed hidden lg:block bottom-0 right-0 mr-[25px] mb-[25px]"
      >
        <svg
          width="54"
          height="54"
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27 47.25C38.1838 47.25 47.25 38.1838 47.25 27C47.25 15.8162 38.1838 6.75 27 6.75C15.8162 6.75 6.75 15.8162 6.75 27C6.75 38.1838 15.8162 47.25 27 47.25Z"
            stroke="url(#paint0_linear_5362_474)"
            strokeWidth="4.5"
            strokeMiterlimit="10"
          />
          <path
            d="M28.2781 34.1592L35.4375 26.9998L28.2781 19.8403"
            stroke="url(#paint1_linear_5362_474)"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.5625 27H35.4375"
            stroke="url(#paint2_linear_5362_474)"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_5362_474"
              x1="27"
              y1="6.75"
              x2="27"
              y2="47.25"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#008000" />
              <stop offset="1" stopColor="#00B800" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_5362_474"
              x1="31.8578"
              y1="19.8403"
              x2="31.8578"
              y2="34.1592"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#008000" />
              <stop offset="1" stopColor="#00B800" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_5362_474"
              x1="27"
              y1="27"
              x2="27"
              y2="28"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#008000" />
              <stop offset="1" stopColor="#00B800" />
            </linearGradient>
          </defs>
        </svg>
      </button>
    </div>
  );
};

export default CreateStore;
