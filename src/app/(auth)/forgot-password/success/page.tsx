import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div>
      <div className="container font-Work flex items-center justify-center bg-Drwhite max-w-[100%]">
        <div className="flex flex-col font-Work items-center  w-[439px] h-[732px]">
          <Image
            className="mt-4 h-[80px]"
            src="/images/logos/Mx 2@2x.png"
            alt="mx2"
            layout="intrinsic"
            height={56.63}
            width={158.41}
          />

          <div className="body  flex flex-col items-center justify-center bg-white">
            <div className="flex flex-col items-center justify-center w-[360px] h-[182px] mt-10 text-Graytrue ">
              <svg
                width="81"
                height="81"
                viewBox="0 0 81 81"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.0002 64.797L12.6668 62.7137C12.0557 62.6026 11.5418 62.2831 11.1252 61.7554C10.7085 61.2276 10.5557 60.6304 10.6668 59.9637L11.8335 49.9637L5.25016 42.297C4.80572 41.8526 4.5835 41.297 4.5835 40.6304C4.5835 39.9637 4.80572 39.4081 5.25016 38.9637L11.8335 31.3804L10.6668 21.3804C10.5557 20.7137 10.7085 20.1165 11.1252 19.5887C11.5418 19.0609 12.0557 18.7415 12.6668 18.6304L23.0002 16.547L28.1668 7.63037C28.5002 7.07482 28.9724 6.68593 29.5835 6.4637C30.1946 6.24148 30.8057 6.26926 31.4168 6.54704L40.5002 10.797L49.5835 6.54704C50.1946 6.26926 50.8196 6.2137 51.4585 6.38037C52.0974 6.54704 52.5557 6.93593 52.8335 7.54704L58.0835 16.547L68.3335 18.6304C68.9446 18.7415 69.4585 19.0609 69.8752 19.5887C70.2918 20.1165 70.4446 20.7137 70.3335 21.3804L69.1668 31.3804L75.7502 38.9637C76.1946 39.4081 76.4168 39.9637 76.4168 40.6304C76.4168 41.297 76.1946 41.8526 75.7502 42.297L69.1668 49.9637L70.3335 59.9637C70.4446 60.6304 70.2918 61.2276 69.8752 61.7554C69.4585 62.2831 68.9446 62.6026 68.3335 62.7137L58.0835 64.797L52.8335 73.7137C52.5557 74.3248 52.0974 74.7137 51.4585 74.8804C50.8196 75.047 50.1946 74.9915 49.5835 74.7137L40.5002 70.4637L31.4168 74.7137C30.8057 74.9915 30.1946 75.0193 29.5835 74.797C28.9724 74.5748 28.5002 74.1859 28.1668 73.6304L23.0002 64.797ZM35.1668 49.9637C35.6668 50.4637 36.2502 50.7137 36.9168 50.7137C37.5835 50.7137 38.1668 50.4637 38.6668 49.9637L54.0835 34.7137C54.5279 34.2693 54.7363 33.6998 54.7085 33.0054C54.6807 32.3109 54.4168 31.7137 53.9168 31.2137C53.4168 30.7137 52.8196 30.4776 52.1252 30.5054C51.4307 30.5331 50.8057 30.797 50.2502 31.297L36.9168 44.547L30.8335 38.1304C30.3335 37.5748 29.7085 37.3109 28.9585 37.3387C28.2085 37.3665 27.5835 37.6581 27.0835 38.2137C26.5835 38.7693 26.3196 39.4081 26.2918 40.1304C26.2641 40.8526 26.5279 41.4637 27.0835 41.9637L35.1668 49.9637Z"
                  fill="#12B76A"
                />
              </svg>

              <h1 className="font-semibold text-[30px] mt-3">Success!</h1>

              <p className="w-[300px] text-Graytrue text-center text-md font-[400] mt-3">
                Hooo! Your password change was successfully.
              </p>
            </div>

            <div className=" h-11 mt-5 mb-5">
              <a
                className="w-[355px] h-[44px] relative text-md font-[500] bg-gradient-to-b from-GreenT to-GreenL text-white rounded-lg flex justify-center items-center"
                href="login.html"
              >
                <i className="text-2xl ph ph-arrow-circle-left mr-3"></i>
                Back to Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
