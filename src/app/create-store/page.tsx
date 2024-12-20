import React from "react";
import Image from "next/image";
const CreateStore = () => {
  return (
    <div className="font-Work bg-transparent relative h-full grid grid-cols-1 lg:grid-cols-2 grid-rows-1 auto-rows-[100vh]">
      <div className="bg-black min-h-full h-screen w-full relative hidden lg:block">
        <div className="absolute inset-0">
          <Image
            src="/images/banners/womanWithWhiteTeeth.jpeg"
            alt="Teeth Whitening Banner"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="bg-white lg:h-screen pt-[46px] pl-[25px] pr-[25px] lg:pl-[121px]">
        <div className="bg-white">
          <Image
            className=" mx-[-7px]"
            src="/images/logos/Mx 2@2x.png"
            alt="mx2"
            layout="intrinsic"
            height={56.63}
            width={158.41}
          />
          <p className=" mt-[32px] text-[24px]">
            Go through this last step and you can have your custom online store
          </p>
          <div>
            <h1 className="text-[24px] mt-[33.37px] leading-snug font-semibold bg-gradient-to-b to-gradientCol-GreenT from-gradientCol-GreenL bg-clip-text text-transparent">
              Store Structure
            </h1>
            <h1 className="text-[16px] mt-[8px] leading-snug bg-gradient-to-b to-gradientCol-GreenT from-gradientCol-GreenL bg-clip-text text-transparent ">
              Step 1 of 3
            </h1>
            <div className="flex flex-row gap-[24px] mt-[8px]">
              <div className="flex-shrink-0 w-[86px] h-[10px] bg-gradient-to-b to-gradientCol-GreenT from-gradientCol-GreenL rounded-[5px]"></div>
              <div className="flex-shrink-0 w-[86px] h-[10px] bg-gradient-to-b to-gradientCol-GreenT from-gradientCol-GreenL rounded-[5px]"></div>
              <div className="flex-shrink-0 w-[86px] h-[10px] bg-gradient-to-b to-gradientCol-GreenT from-gradientCol-GreenL rounded-[5px]"></div>
            </div>
            <div></div>
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
    </div>
  );
};

export default CreateStore;
