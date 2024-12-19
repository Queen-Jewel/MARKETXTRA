"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
const ForgotPass = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <body className="font-Work bg-Drwhite">
      <div className="flex items-center justify-center w-full h-full">
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
          <div className="sign p-10 mt-7 bg-white">
            <div className=" mb-6 w-full min-h-[88px]">
              <h2 className="font-Work text-Graytrue-900 mt-4 font-semibold text-2xl text-center">
                Forgot password?
              </h2>
              <p className="text-center text-Gray text-sm mt-3 w-full">
                no worries, kindly input your email address to reset your
                password
              </p>
            </div>

            <input
              id="email"
              className="border-Gray-400 border py-3 pl-2 w-full mb-2 rounded-md"
              type="email"
              name="Email"
              placeholder="E-mail"
              required
              autoComplete="email"
            />

            <button
              id="forgot-pass"
              className="w-full h-[44px] mt-3 bg-gradient-to-b from-GreenT to-GreenL text-white rounded-lg"
              type="submit"
            >
              Continue
            </button>

            <a
              className="transition hover:-translate-x-1 hover:scale-100 duration-300 flex items-center justify-center mt-4 mr-5 text-[14px] text-Orange font-semibold"
              href="login.html"
            >
              <i className="ph ph-arrow-left ph-bold mr-3 text-Orange"></i> Back
              to Login
            </a>
          </div>
        </div>
      </div>
    </body>
  );
};

export default ForgotPass;
