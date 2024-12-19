import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="font-Work bg-Drwhite">
      <div className="w-full font-Work flex items-center justify-center bg-Drwhite">
        <div className="body lg:w-1/3 md:w-2/4 sm:w-3/4 xs:w-full min-h-[772px]">
          <div className="flex justify-center w-full items-center">
            <Image
              className="mt-4 h-[80px]"
              src="/images/logos/Mx 2@2x.png"
              alt="mx2"
              layout="intrinsic"
              height={56.63}
              width={158.41}
            />
          </div>
          <div className="sign py-5 bg-white">
            <div className="flex flex-col items-center justify-center mb-6">
              <div className="w-full flex flex-col items-center justify-center ">
                <h2 className="font-Rob text-Graytrue font-semibold text-2xl items-center mb-3">
                  Verify your email
                </h2>

                <p className="h-12 font-Rob font-normal text-base text-txtgray px-5 flex items-center justify-center">
                  We have sent you an email for verification. Follow the link
                  provided to finalize the sign up process.
                </p>
              </div>

              <p className="mt-12 w-full h-5 text-[14px] flex items-center justify-center">
                Didn&apos;t receive the mail?
                <a
                  href="#"
                  className="bg-gradient-to-b from-GreenT to-GreenL bg-clip-text text-transparent underline font-semibold"
                >
                  Click to resend
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
