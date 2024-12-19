import React from "react";
import Image from "next/image";
const NewPass = () => {
  return (
    <div className="font-Work bg-Drwhite">
      <div className="flex items-center justify-center w-full h-full mt-5">
        <div className="body lg:w-1/3 md:w-2/4 sm:w-3/4 xs:w-full min-h-[772px]">
          <div className="flex justify-center w-full items-center">
            <Image
              className="mt-4 h-[80px]"
              src="/images/logos/Mx 2@2x.png"
              alt="mx2"
              layout="intrinsic"
              height={56.63}
              width={158.41}
            />{" "}
          </div>

          <div className="sign py-5 bg-white">
            <div className="flex flex-col items-center justify-center mb-6">
              <h2 className="font-Work text-Graytrue-900 font-semibold text-2xl items-center">
                Enter a new password
              </h2>
              <p className="text-center text-Gray text-sm mt-3 h-12 w-[320px]">
                Try something secure, yet memorable, this time.
              </p>
            </div>
            <div className="w-full block items-center justify-center text-[14px] px-10">
              <input
                id="new1"
                className="border-Gray-400 border py-3 pl-2 w-full mb-2 rounded-md"
                type="password"
                name="new_pass"
                placeholder="New Password"
                required
              />
              <input
                className="border-Gray-400 border py-3 pl-2 w-full mb-2 rounded-md"
                id="new2"
                type="password"
                name="confirm_pass"
                placeholder="Confirm New Password"
                required
              />
            </div>

            <div className="w-full px-10 py-10">
              <button
                id="final-submit"
                className="transition-all hover:bg-white hover:border-2 hover:border-emerald-400 w-full min-h-[44px] bg-gradient-to-b from-GreenT to-GreenL text-white rounded-lg"
                type="button"
              >
                Continue
              </button>
            </div>

            <a
              className="transition hover:-translate-x-2 hover:scale-100 duration-200 flex items-center justify-center font-Rob mt-4 mr-5 text-sm text-Orange font-semibold"
              href="login.html"
            >
              <i className="ph ph-arrow-left mr-3"></i>
              Back to Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPass;
