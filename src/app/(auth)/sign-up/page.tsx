import React from "react";
import Image from "next/image";
const SignUp = () => {
  // <script src="js/form.js"></script>

  return (
    <div className="font-Work bg-Drwhite text-black">
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

          <div className="sign py-5 bg-white">
            <div className="flex flex-col items-center justify-center mb-6">
              <h2 className="text-Graytrue-900 font-semibold text-2xl items-center mt-4">
                Sign up
              </h2>
              <p className="text-Gray text-sm mt-3">
                Start your sales journey with Marketxtra.
              </p>
            </div>

            <div className="w-full block items-center justify-center text-[14px] px-10">
              <input
                id="username"
                className="border-Gray-400 border py-3 pl-2 w-full mb-2 rounded-md"
                type="text"
                name="username"
                placeholder="Full Name"
                required
                autoComplete="given-name"
              />
              <input
                className="border-Gray-400 border py-3 pl-2 w-full mb-2 rounded-md"
                id="email"
                type="email"
                name="email"
                placeholder="E-mail"
                required
                autoComplete="email"
              />
              <div className="relative">
                <input
                  className="border-Gray-400 border py-3 pl-2 w-full mb-2 rounded-md relative"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  autoComplete="current-password"
                />
                <span
                  id="togglePassword"
                  className="cursor-pointer absolute w-5 h-5 top-[12px] right-[10px]"
                >
                  <i className="ph ph-eye-slash"></i>
                </span>
              </div>
            </div>

            <div className="w-full px-10 py-10">
              <button
                id="create-account"
                className="transition-all hover:bg-white hover:border-2 hover:border-emerald-400 w-full min-h-[44px] bg-gradient-to-b from-GreenT to-GreenL text-white rounded-lg"
                type="button"
              >
                Create account
              </button>
            </div>

            <p className="w-full text-[14px] text-center p-5">
              Already have an account?
              <a
                className="text-Orange underline font-[600] ml-1"
                href="login.html"
              >
                Login
              </a>
            </p>

            <div className="or flex items-center justify-center mt-2 mb-5 w-full h-5">
              <span className="border-gray-300 border-[0.3px] w-[150px]"></span>
              <p className="mx-4">or</p>
              <span className="border-gray-300 border-[0.3px] w-[150px]"></span>
            </div>

            <div className="w-full flex items-center justify-center px-10 py-3">
              <div className="cursor-pointer goo font-Work font-medium text-[16px] border-[1px] border-GreenB flex items-center justify-center w-full h-[44px] rounded-[8px] py-[10px] px-[10px] mb-2">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[24px] h-[24px] text-TextGray mr-3"
                >
                  <path
                    d="M21.8055 10.6719H21V10.6304H12V14.6304H17.6515C16.827 16.9589 14.6115 18.6304 12 18.6304C8.6865 18.6304 6 15.9439 6 12.6304C6 9.31693 8.6865 6.63043 12 6.63043C13.5295 6.63043 14.921 7.20743 15.9805 8.14993L18.809 5.32143C17.023 3.65693 14.634 2.63043 12 2.63043C6.4775 2.63043 2 7.10793 2 12.6304C2 18.1529 6.4775 22.6304 12 22.6304C17.5225 22.6304 22 18.1529 22 12.6304C22 11.9599 21.931 11.3054 21.8055 10.6719Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M3.153 7.97593L6.4385 10.3854C7.3275 8.18443 9.4805 6.63043 12 6.63043C13.5295 6.63043 14.921 7.20743 15.9805 8.14993L18.809 5.32143C17.023 3.65693 14.634 2.63043 12 2.63043C8.159 2.63043 4.828 4.79893 3.153 7.97593Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M12 22.6305C14.583 22.6305 16.93 21.642 18.7045 20.0345L15.6095 17.4155C14.5718 18.2047 13.3037 18.6315 12 18.6305C9.399 18.6305 7.1905 16.972 6.3585 14.6575L3.0975 17.17C4.7525 20.4085 8.1135 22.6305 12 22.6305Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M21.8055 10.6719H21V10.6304H12V14.6304H17.6515C17.2571 15.7386 16.5467 16.707 15.608 17.4159L15.6095 17.4149L18.7045 20.0339C18.4855 20.2329 22 17.6304 22 12.6304C22 11.9599 21.931 11.3054 21.8055 10.6719Z"
                    fill="#1976D2"
                  />
                </svg>

                <span>Continue with Google</span>
              </div>
            </div>

            <p className="font-Work font-medium text-xs px-10 text-TextGray leading-[18px] w-full min-h-[36px]">
              By creating an account, you acknowledge you have read and agreed
              to our
              <a className="font-bold text-black" href="terms.html">
                Terms of Use and Privacy Policy.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
