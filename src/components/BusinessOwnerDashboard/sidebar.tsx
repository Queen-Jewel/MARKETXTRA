import React from "react";
import Image from "next/image";
import Link from "next/link";
const Sidebar = ({ page }: { page: string }) => {
  return (
    <div className="~lg/fxl:~w-[189.8666px]/[267px] hidden lg:block fixed h-full left-0 top-0 bottom-0  bg-white">
      <Image
        className="mx-auto mt-[24px] ~lg/fxl:~max-w-[112.64px]/[158.41px]"
        src="/images/logos/Mx 2@2x.png"
        width={158.41}
        height={56.63}
        alt="logo"
        layout="responsive"
      />
      <div className="flex items-start flex-col gap-[24px] mx-auto ~lg/fxl:~mt-[29.86px]/[42px] ~lg/fxl:~max-w-[83.2px]/[117px]">
        <Link
          href="/business_owner_dashboard/my-store"
          className={`flex items-center flex-shrink-0 gap-[8px] ${
            page === "my-store" ? "text-Orange font-bold" : ""
          } hover:text-Orange hover:font-bold transition-all duration-100`}
        >
          <svg
            width="24"
            className="~lg/fxl:~max-w-[17.0666px]/[24px]"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.20508 13.7168V20.1304C5.20508 20.3293 5.2841 20.5201 5.42475 20.6607C5.5654 20.8014 5.75617 20.8804 5.95508 20.8804H19.4551C19.654 20.8804 19.8448 20.8014 19.9854 20.6607C20.1261 20.5201 20.2051 20.3293 20.2051 20.1304V13.7169"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.7708 4.38086H19.6394C19.8023 4.38086 19.9609 4.43395 20.091 4.5321C20.2211 4.63025 20.3157 4.76811 20.3605 4.92482L21.7051 9.63086H3.70508L5.04966 4.92482C5.09444 4.76811 5.18904 4.63025 5.31916 4.5321C5.44927 4.43395 5.60782 4.38086 5.7708 4.38086Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.70508 9.63086V11.1309C9.70508 11.9265 9.38901 12.6896 8.8264 13.2522C8.26379 13.8148 7.50073 14.1309 6.70508 14.1309C5.90943 14.1309 5.14637 13.8148 4.58376 13.2522C4.02115 12.6896 3.70508 11.9265 3.70508 11.1309V9.63086"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.7051 9.63086V11.1309C15.7051 11.9265 15.389 12.6896 14.8264 13.2522C14.2638 13.8148 13.5007 14.1309 12.7051 14.1309C11.9094 14.1309 11.1464 13.8148 10.5838 13.2522C10.0211 12.6896 9.70508 11.9265 9.70508 11.1309V9.63086"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.7051 9.63086V11.1309C21.7051 11.9265 21.389 12.6896 20.8264 13.2522C20.2638 13.8148 19.5007 14.1309 18.7051 14.1309C17.9094 14.1309 17.1464 13.8148 16.5838 13.2522C16.0211 12.6896 15.7051 11.9265 15.7051 11.1309V9.63086"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="~lg/fxl:~text-[11.37777px]/[16px] ~lg/fxl:~leading-[15.9px]/[22.4px]">
            My Store
          </span>
        </Link>
        <Link
          href="/business_owner_dashboard/dashboard"
          className={`flex items-center flex-shrink-0 gap-[8px] ${
            page === "dashboard" ? "text-Orange font-bold" : ""
          } hover:text-Orange hover:font-bold transition-all duration-100`}
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            className="~lg/fxl:~max-w-[17.0666px]/[24px]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.83008 10.3809H17.5801"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.83008 13.3809H17.5801"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.70508 20.1309V5.88086C3.70508 5.68195 3.7841 5.49118 3.92475 5.35053C4.0654 5.20988 4.25617 5.13086 4.45508 5.13086H20.9551C21.154 5.13086 21.3448 5.20988 21.4854 5.35053C21.6261 5.49118 21.7051 5.68195 21.7051 5.88086V20.1309L18.7051 18.6309L15.7051 20.1309L12.7051 18.6309L9.70508 20.1309L6.70508 18.6309L3.70508 20.1309Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span className="~lg/fxl:~text-[11.37777px]/[16px] ~lg/fxl:~leading-[15.9px]/[22.4px]">
            DashBoard
          </span>
        </Link>
        <Link
          href="/business_owner_dashboard/products"
          className={`flex items-center flex-shrink-0 gap-[8px] ${
            page === "products" ? "text-Orange font-bold" : ""
          } hover:text-Orange hover:font-bold transition-all duration-100`}
        >
          <svg
            width="24"
            height="24"
            className="~lg/fxl:~max-w-[17.0666px]/[24px]"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.705 17.2546V8.00684C21.705 7.87376 21.6695 7.74308 21.6024 7.6282C21.5352 7.51333 21.4386 7.4184 21.3227 7.35315L13.0727 2.71253C12.9604 2.64938 12.8338 2.61621 12.705 2.61621C12.5762 2.61621 12.4495 2.64938 12.3373 2.71253L4.08726 7.35315C3.97127 7.4184 3.87473 7.51333 3.80755 7.6282C3.74037 7.74308 3.70496 7.87376 3.70496 8.00684V17.2546C3.70496 17.3876 3.74037 17.5183 3.80755 17.6332C3.87473 17.7481 3.97127 17.843 4.08726 17.9082L12.3373 22.5489C12.4495 22.612 12.5762 22.6452 12.705 22.6452C12.8338 22.6452 12.9604 22.612 13.0727 22.5489L21.3227 17.9082C21.4386 17.843 21.5352 17.7481 21.6024 17.6332C21.6695 17.5183 21.705 17.3876 21.705 17.2546Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.3008 14.9288V10.0538L8.20496 5.03711"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.6016 7.62691L12.7939 12.6306L3.80884 7.62598"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.7939 12.6309L12.7059 22.6454"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span className="~lg/fxl:~text-[11.37777px]/[16px] ~lg/fxl:~leading-[15.9px]/[22.4px]">
            Products
          </span>
        </Link>
        <Link
          href="/business_owner_dashboard/orders"
          className={`flex items-center flex-shrink-0 ${
            page === "orders" ? "text-Orange font-bold" : ""
          } gap-[8px] hover:text-Orange hover:font-bold transition-all duration-100`}
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.70496 9.63086H15.705"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.70496 12.6309H15.705"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.70496 15.6309H12.705"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.3943 20.8809H5.20496C5.00604 20.8809 4.81528 20.8018 4.67463 20.6612C4.53397 20.5205 4.45496 20.3298 4.45496 20.1309V5.13086C4.45496 4.93195 4.53397 4.74118 4.67463 4.60053C4.81528 4.45988 5.00604 4.38086 5.20496 4.38086H20.205C20.4039 4.38086 20.5946 4.45988 20.7353 4.60053C20.8759 4.74118 20.955 4.93195 20.955 5.13086V15.3202C20.955 15.4187 20.9356 15.5162 20.8979 15.6072C20.8602 15.6982 20.8049 15.7809 20.7353 15.8505L15.9246 20.6612C15.855 20.7308 15.7723 20.7861 15.6813 20.8238C15.5903 20.8615 15.4928 20.8809 15.3943 20.8809V20.8809Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.8871 15.6299H15.705V20.8124"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span className="~lg/fxl:~text-[11.37777px]/[16px] ~lg/fxl:~leading-[15.9px]/[22.4px]">
            Orders
          </span>
        </Link>
        <Link
          href="/business_owner_dashboard/customers"
          className={`flex items-center flex-shrink-0 gap-[8px] ${
            page === "customers" ? "text-Orange font-bold" : ""
          } hover:text-Orange hover:font-bold transition-all duration-100`}
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.95496 15.6309C11.6473 15.6309 13.83 13.4482 13.83 10.7559C13.83 8.06347 11.6473 5.88086 8.95496 5.88086C6.26257 5.88086 4.07996 8.06347 4.07996 10.7559C4.07996 13.4482 6.26257 15.6309 8.95496 15.6309Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
            />
            <path
              d="M15.2748 6.06259C15.9453 5.87367 16.6485 5.83064 17.3371 5.93638C18.0256 6.04212 18.6835 6.29419 19.2665 6.67561C19.8494 7.05702 20.3438 7.55893 20.7164 8.14752C21.0891 8.73611 21.3312 9.39771 21.4266 10.0878C21.522 10.7778 21.4684 11.4803 21.2695 12.1479C21.0705 12.8155 20.7308 13.4328 20.2732 13.958C19.8156 14.4833 19.2508 14.9044 18.6167 15.193C17.9827 15.4816 17.2942 15.6309 16.5976 15.631"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.20459 19.1368C2.96597 18.0538 3.97674 17.1699 5.15157 16.5597C6.32641 15.9495 7.63082 15.6309 8.95467 15.6309C10.2785 15.6308 11.583 15.9493 12.7578 16.5594C13.9327 17.1695 14.9436 18.0533 15.705 19.1363"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5977 15.6309C17.9216 15.6299 19.2263 15.948 20.4013 16.5582C21.5763 17.1684 22.5869 18.0527 23.3477 19.1363"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span className="~lg/fxl:~text-[11.37777px]/[16px] ~lg/fxl:~leading-[15.9px]/[22.4px]">
            Customers
          </span>
        </Link>
        <Link
          href={"/business_owner_dashboard/settings"}
          className={`flex items-center flex-shrink-0 gap-[8px] ${
            page === "customers" ? "text-Orange font-bold" : ""
          } hover:text-Orange hover:font-bold transition-all duration-100`}
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.60817 9.21825C5.77692 8.862 5.9738 8.5245 6.1988 8.19637L6.1613 5.75887C6.1613 5.53387 6.25505 5.31825 6.43317 5.16825C7.30505 4.437 8.2988 3.84637 9.39567 3.45262C9.6113 3.37762 9.84567 3.39637 10.0332 3.51825L12.1238 4.7745C12.5176 4.74637 12.9113 4.74637 13.305 4.7745L15.3957 3.51825C15.5925 3.40575 15.8269 3.37762 16.0425 3.45262C17.1113 3.837 18.1144 4.40887 19.005 5.15887C19.1738 5.2995 19.2769 5.5245 19.2675 5.7495L19.23 8.187C19.455 8.51512 19.6519 8.85262 19.8207 9.20887L21.9488 10.3901C22.1457 10.5026 22.2863 10.6901 22.3238 10.9151C22.5207 12.0307 22.53 13.1932 22.3238 14.3276C22.2863 14.5526 22.1457 14.7401 21.9488 14.8526L19.8207 16.0339C19.6519 16.3901 19.455 16.7276 19.23 17.0557L19.2675 19.4932C19.2675 19.7182 19.1738 19.9339 18.9957 20.0839C18.1238 20.8151 17.13 21.4057 16.0332 21.7995C15.8175 21.8745 15.5832 21.8557 15.3957 21.7339L13.305 20.4776C12.9113 20.5057 12.5176 20.5057 12.1238 20.4776L10.0332 21.7339C9.8363 21.8464 9.60192 21.8745 9.3863 21.7995C8.31755 21.4151 7.31442 20.8432 6.4238 20.0932C6.25505 19.9526 6.15192 19.7276 6.1613 19.5026L6.1988 17.0651C5.9738 16.737 5.77692 16.3995 5.60817 16.0432L3.48005 14.862C3.28317 14.7495 3.14255 14.562 3.10505 14.337C2.90817 13.2214 2.8988 12.0589 3.10505 10.9245C3.14255 10.6995 3.28317 10.512 3.48005 10.3995L5.60817 9.21825Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.705 17.1309C15.1902 17.1309 17.205 15.1161 17.205 12.6309C17.205 10.1456 15.1902 8.13086 12.705 8.13086C10.2197 8.13086 8.20496 10.1456 8.20496 12.6309C8.20496 15.1161 10.2197 17.1309 12.705 17.1309Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span className="~lg/fxl:~text-[11.37777px]/[16px] ~lg/fxl:~leading-[15.9px]/[22.4px]">
            Settings
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
