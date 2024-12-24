"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { featuredProducts, products } from "../../../../lib/store_arrays";
const Store = () => {
  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="bg-[#fafafa]">
      <div className="bg-[#556b2f] h-[38px] md:h-[52.4444px] fxl:h-[59px] flex justify-center items-center text-white text-[14px] md:text-[14.222px] fxl:text-[16px] ">
        Hello there, you’re welcome to my online store
      </div>
      <div className="bg-white flex md:justify-between items-center h-[80.8888px] fxl:h-[91px] pl-[22px] md:pl-[64px] fxl:pl-[72px] pr-[17px] md:pr-[68px]">
        <button className="w-[20px] h-[20px] mr-[16px] flex flex-col items-center justify-between py-[5px] md:hidden">
          <div className="bg-black w-[12px] h-[1px]"></div>
          <div className="bg-black w-[12px] h-[1px]"></div>
          <div className="bg-black w-[12px] h-[1px]"></div>
        </button>
        <div className="flex items-center gap-[91.5px]">
          <div className="flex justify-between items-center w-[91px] md:w-[113.777px]">
            <div className="w-[16px] md:w-[38.2222px] h-[16px] md:h-[38.222px] rounded-[50%] bg-stepgray"></div>
            <div className="text-[14px] md:text-[14.2222px] fxl:text-[16px]">
              Your Logo
            </div>
          </div>
          <span className="w-[96px] flex items-center justify-between text-[14px] md:hidden">
            Category
            <Image
              src="/images/icons/arrow-down.svg"
              className="md:hidden block"
              height={6}
              width={12}
              alt="arrow-down"
            />
          </span>
          <div className="hidden md:flex gap-[21.3333px] fxl:gap-[24px] items-center">
            <span className="text-[14.2222px] fxl:text-[16px] leading-snug font-semibold bg-gradient-to-b to-gradientCol-GreenT from-gradientCol-GreenL bg-clip-text text-transparent">
              Home
            </span>
            <span className="w-[109.333px] fxl:w-[123px] flex items-center justify-between px-[8.333px] fxl:px-[10px]">
              category
              <Image
                src="/images/icons/arrow-down.svg"
                className="block fxl:hidden"
                height={5.333}
                width={10.66666}
                alt="arrow-down"
              />
              <Image
                src="/images/icons/arrow-down.svg"
                className="hidden fxl:block"
                height={6}
                width={12}
                alt="arrow-down"
              />
            </span>
            <span className=" text-[14.222px] fxl:text-[16px]">about us</span>
          </div>
        </div>
        <Image
          src="/images/icons/Cart.svg"
          height={26.6666}
          className="hidden md:block fxl:hidden"
          width={26.6666}
          alt="arrow-down"
        />
        <Image
          src="/images/icons/Cart.svg"
          height={26.6666}
          className="hidden fxl:block"
          width={26.6666}
          alt="arrow-down"
        />
        <Image
          src="/images/icons/Cart.svg"
          height={16}
          className="ml-auto md:hidden block"
          width={16}
          alt="arrow-down"
        />
        <div className="w-[20px] h-[20px] ml-[24px] flex flex-col items-center justify-between py-[5px] md:hidden">
          <div className="bg-black w-[1.88px] h-[1.88px] rounded-[50%]"></div>
          <div className="bg-black w-[1.88px] h-[1.88px] rounded-[50%]"></div>
          <div className="bg-black w-[1.88px] h-[1.88px] rounded-[50%]"></div>
        </div>
      </div>
      <div className="h-[239px] md:h-[427.5555px] fxl:h-[481px] text-white font-bold text-[24px] leading-[28.15px] md:text-[56.8888px] fxl:text-[64px] fxl:leading-[75.07px] md:leading-[62.7288px] grid place-content-center bg-[url('/images/banners/StorePlaceholder.png')] bg-cover bg-center">
        We Sell The Best
        <br /> Quality of T-shirts
      </div>
      {/* Featured Products */}
      <div className="mt-[24px] md:mt-[71.1111px] fxl:mt-[80px] w-[89%] mx-auto max-w-[1400px]">
        <h1 className="text-[16px] md:text-[21.3333px] fxl:text-[24px] fxl:leading-[28.15px] leading-[25.111px] font-bold">
          Featured Products
        </h1>
        <div className="mt-[16px] md:mt-[28.44px] fxl:mt-[32px] grid grid-cols-2 md:grid-cols-3 gap-[17px] md:gap-[21.333px] fxl:gap-[24px]">
          {featuredProducts.map(
            (
              product: {
                image_url: string;
                description: string;
                price: number;
                previous_price: number;
              },
              index: number
            ) => (
              <div
                key={index}
                className="h-[298px] md:h-[467.55px] fxl:h-[526px] bg-[#ecf1f4] text-white flex flex-col"
              >
                <div
                  className="h-[46%] md:h-[61%] relative rounded-t-md bg-cover bg-no-repeat"
                  style={{ backgroundImage: `url(${product.image_url})` }}
                ></div>
                <div className="h-[54%] md:h-[39%] bg-white">
                  <h4 className="text-[14px] md:text-[14.2222px] fxl:text-[16px] text-gray-500 mt-[8px] md:mt-[20.80px] fxl:mt-[23.41px] ml-[10px] md:ml-4 fxl:ml-[18px] mr-[8.21px] md:mr-0">
                    {product.description}
                  </h4>
                  <div className="flex items-center mt-[16px] md:mt-[14.22px] fxl:mt-[16px] gap-[8px] md:gap-[9.04px]">
                    <span className="ml-4 fxl:ml-[18px]  text-txtgray  flex items-center text-[16px] md:text-[22.222px] fxl:text-[24px] font-bold">
                      <Image
                        src="/images/icons/naira.svg"
                        height={25.777}
                        className="hidden md:block fxl:hidden"
                        width={25.7777}
                        alt="ads"
                      />

                      <Image
                        src="/images/icons/naira.svg"
                        height={29}
                        className="hidden fxl:block"
                        width={29}
                        alt="ads"
                      />
                      <Image
                        src="/images/icons/naira.svg"
                        height={15}
                        className="block md:hidden"
                        width={15}
                        alt="ads"
                      />
                      {product.price.toString()}
                    </span>
                    <span className="gap-[3.84px] fxl:gap-[4.31px] flex items-center ">
                      <Image
                        src="/images/icons/small_naira.svg"
                        width={11}
                        height={11}
                        className="block md:hidden"
                        alt="sd"
                      />
                      <Image
                        src="/images/icons/small_naira.svg"
                        width={13}
                        className="hidden md:block"
                        height={13}
                        alt="sd"
                      />

                      <span className="line-through text-txtgray text-[12px] md:text-[14.22px] fxl:text-[16px] flex items-center ">
                        {product.previous_price}
                      </span>
                    </span>
                  </div>
                  <button className="w-[91%] mx-auto md:text-[14.222px] fxl:text-[16px] h-[37.333px] fxl:h-[42px] mt-[38.59px] md:mt-[42.666px] fxl:mt-[48px] grid place-content-center bg-gradient-to-b to-gradientCol-GreenT from-gradientCol-GreenL rounded-md">
                    {" "}
                    Add to cart
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div className="mt-[40px] md:mt-[71.111px] w-[89%] mx-auto max-w-[1400px]">
        <h1 className="text-[16px] md:text-[21.3333px] fxl:text-[24px] fxl:leading-[28.15px] leading-[25.111px] font-bold">
          Product Catalogue
        </h1>
        <div className="mt-[16px] md:mt-[28.44px] fxl:mt-[32px] grid grid-cols-2 md:grid-cols-3 gap-y-[32px] md:gap-y-[64px] gap-[17px] md:gap-[21.333px] fxl:gap-[24px]">
          {products.map(
            (
              product: {
                image_url: string;
                description: string;
                price: number;
                previous_price: number;
              },
              index: number
            ) => (
              <div
                key={index}
                className="h-[298px] md:h-[467.55px] fxl:h-[526px] bg-[#ecf1f4] text-white flex flex-col"
              >
                <div
                  className="h-[46%] md:h-[61%] relative rounded-t-md bg-cover bg-no-repeat"
                  style={{ backgroundImage: `url(${product.image_url})` }}
                ></div>
                <div className="h-[54%] md:h-[39%] bg-white">
                  <h4 className="text-[14px] md:text-[14.2222px] fxl:text-[16px] text-gray-500 mt-[8px] md:mt-[20.80px] fxl:mt-[23.41px] ml-[10px] md:ml-4 fxl:ml-[18px] mr-[8.21px] md:mr-0">
                    {product.description}
                  </h4>
                  <div className="flex items-center mt-[16px] md:mt-[14.22px] fxl:mt-[16px] gap-[8px] md:gap-[9.04px]">
                    <span className="ml-4 fxl:ml-[18px]  text-txtgray  flex items-center text-[16px] md:text-[22.222px] fxl:text-[24px] font-bold">
                      <Image
                        src="/images/icons/naira.svg"
                        height={25.777}
                        className="hidden md:block fxl:hidden"
                        width={25.7777}
                        alt="ads"
                      />

                      <Image
                        src="/images/icons/naira.svg"
                        height={29}
                        className="hidden fxl:block"
                        width={29}
                        alt="ads"
                      />
                      <Image
                        src="/images/icons/naira.svg"
                        height={15}
                        className="block md:hidden"
                        width={15}
                        alt="ads"
                      />
                      {product.price.toString()}
                    </span>
                    <span className="gap-[3.84px] fxl:gap-[4.31px] flex items-center ">
                      <Image
                        src="/images/icons/small_naira.svg"
                        width={11}
                        height={11}
                        className="block md:hidden"
                        alt="sd"
                      />
                      <Image
                        src="/images/icons/small_naira.svg"
                        width={13}
                        className="hidden md:block"
                        height={13}
                        alt="sd"
                      />

                      <span className="line-through text-txtgray text-[12px] md:text-[14.22px] fxl:text-[16px] flex items-center ">
                        {product.previous_price}
                      </span>
                    </span>
                  </div>
                  <button className="w-[91%] mx-auto md:text-[14.222px] fxl:text-[16px] h-[37.333px] fxl:h-[42px] mt-[38.59px] md:mt-[42.666px] fxl:mt-[48px] grid place-content-center bg-gradient-to-b to-gradientCol-GreenT from-gradientCol-GreenL rounded-md">
                    {" "}
                    Add to cart
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div className=" flex items-center h-[83px] md:h-[113.77px] bg-[#424242] mt-[90px] md:mt-[78.22px] pl-[26px] md:pl-[63.111px] pr-[25px] md:pr-[59.5555px] justify-between">
        <div className="flex flex-col gap-y-[8px] md:flex-row justify-between md:items-center w-[113.777px]">
          <div className="w-[16px] h-[16px] md:w-[38.2222px] md:h-[38.222px] rounded-[50%] bg-stepgray"></div>
          <div className="text-[14px] md:text-[14.2222px] fxl:text-[16px] text-white">
            Your Logo
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-[8px] md:gap-[14.222px] fxl:gap-[16px]">
          <span className="text-[14px] md:text-[14.22px] fxl:text-[16px] text-white">
            Contact Us
          </span>
          <span className="flex gap-[16px] md:gap-0">
            <Image
              src="/images/icons/InstagramIcon.svg"
              className="hidden fxl:block"
              height={34}
              width={34}
              alt="twitter icon"
            />
            <Image
              src="/images/icons/InstagramIcon.svg"
              className="hidden md:block fxl:hidden"
              height={30.22}
              width={30.22}
              alt="twitter icon"
            />
            <Image
              src="/images/icons/InstagramIcon.svg"
              className="block md:hidden"
              height={16}
              width={16}
              alt="twitter icon"
            />
            <Image
              src="/images/icons/FacebookIcon.svg"
              className="hidden md:block fxl:hidden"
              height={30.22}
              width={30.22}
              alt="twitter icon"
            />
            <Image
              src="/images/icons/FacebookIcon.svg"
              className="block md:hidden"
              height={16}
              width={16}
              alt="twitter icon"
            />
            <Image
              src="/images/icons/FacebookIcon.svg"
              className="hidden fxl:block"
              height={34}
              width={34}
              alt="twitter icon"
            />
            <Image
              src="/images/icons/TwitterIcon.svg"
              height={30.22}
              className="hidden md:block fxl:hidden"
              width={30.22}
              alt="twitter icon"
            />
            <Image
              src="/images/icons/TwitterIcon.svg"
              height={34}
              className="hidden fxl:block"
              width={34}
              alt="twitter icon"
            />
            <Image
              src="/images/icons/TwitterIcon.svg"
              height={16}
              className="block md:hidden"
              width={16}
              alt="twitter icon"
            />
          </span>
        </div>
        <button className="hidden md:flex w-[229.33px] fxl:w-[258px] fxl:h-[48px] h-[42.666px] justify-center items-center border-[2px] text-[14.222px] fxl:text-[16px] rounded-md text-white border-white">
          Create your own store now
        </button>
        <button className="flex items-center w-[136px] border-[2px] border-white text-[14px] justify-center text-white h-[27px] md:hidden rounded-md">
          Create store Now
        </button>
      </div>
    </div>
  );
};

export default Store;
