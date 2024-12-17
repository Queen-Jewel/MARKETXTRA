import TypingEffect from "@/components/typingEffect/typingEffect";
import Image from "next/image";
import Link from "next/link";
import styles from "./landingPage.module.css";
export default function Home() {
  return (
    <div className="w-full font-Work bg-Drwhite text-txtgray">
      <header>
        <nav className="h-[86px] flex items-center justify-between mx-6 md:mx-10">
          <div className="flex items-center justify-center">
            {/* Menu */}
            <div className="relative md:hidden w-5 h-5 flex flex-col items-center justify-center mr-2">
              <Image
                // onClick={toggleDropdown3()}
                src="/images/icons/Menu.png"
                id="ham"
                className="md:hidden w-5 h-5 flex flex-col items-center justify-center mr-2"
                alt="Menu"
                fill
              />
            </div>
            <div className="w-[100px] h-[30px] md:w-[151.05px] md:h-[54px] relative">
              <Image
                className=""
                src="/images/logos/Mx 2@2x.png"
                alt="Mx"
                fill
              />
            </div>
          </div>
          {/* pages */}
          <div className="md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
            <ul className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">How it works</a>
              </li>
              <li>
                <a href="#">Category</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
            </ul>
          </div>
          <div>
            <button
              className="w-[105px] h-[34px] md:w-[131px] md:h-12 flex items-center justify-center px-3 py-5 text-sm md:text-base rounded-lg border-transparent bg-gradient-to-b from-GreenT to-GreenL text-white"
              type="submit"
            >
              Get Started
            </button>
          </div>
        </nav>
      </header>
      {/* SHOWCASE */}
      <div className={`grid grid-cols-1 md:grid-cols-2 `}>
        <div className={`order-2 md:order-1 px-5 `}>
          <h1 className="font-extrabold block md:hidden text-[32px] md:text-5xl mt-10 md:mt-[55px] xs:text-center lg:text-left lg:h-[80px] xs:h-[100px] sm:h-[100px]">
            Amplify Your Business Reach Online
          </h1>
          <h1
            className="font-extrabold hidden md:block md:h-[5rem] text-[32px] md:text-4xl mt-10 md:mt-[55px] xs:text-center lg:text-left"
            id="elementTyped"
          >
            <TypingEffect
              strings={[
                "Effortlessly Scale up Your Business Online!",
                "Grow Your Online Presence Today!",
                "Easily Elevate Your Business to New Heights!",
                "Expand Your Digital Footprint!",
                "Boost Your Online Success!",
                "Amplify Your Business Reach Online!",
              ]}
            />
          </h1>
          <p className="hidden md:block font-normal text-base text-newT mt-10">
            MarketXtra empowers small businesses in Africa to grow their sales,
            brand and customer base.Bring your business online by simply
            creating a professional online store in minutes and your business is
            on its way to reach a global audience.Get started today and discover
            the power of e-commerce made simple.
          </p>

          <p className="md:hidden font-normal text-sm text-newT text-center mt-5">
            MarketXtra empowers small businesses in Africa to grow their sales,
            brand and customer base. Get started today and discover the power of
            e-commerce made simple.
          </p>
          <button
            className={`w-[245px] ${styles.ButtonMargin} h-[45px] md:w-[235px] md:h-[50px] flex items-center justify-center px-5 py-4 mt-10 rounded-lg border-transparent bg-gradient-to-b from-GreenT to-GreenL text-white text-xl font-medium`}
            type="submit"
          >
            Scale Now!
          </button>
          <div className="hidden md:block">
            <div className="w-[540px] h-10 flex items-start justify-between mt-20 mb-5">
              <p>MarketXtra</p>
              <Image
                src="/images/icons/RG.png"
                alt=""
                width={20}
                height={20}
                layout="intrinsic"
              />
              <p>Effortless marketing</p>
              <Image
                src="/images/icons/RO.png"
                alt=""
                width={20}
                height={20}
                layout="intrinsic"
              />
              <p>Seamless registration</p>
            </div>
            <div className="w-[540px] h-10 flex items-start justify-between">
              <p>MarketXtra</p>
              <Image src="/images/icons/RG.png" alt="" width={20} height={20} />
              <p>Effortless marketing</p>
              <Image src="/images/icons/RO.png" alt="" width={20} height={20} />
              <p>Seamless registration</p>
            </div>
          </div>
        </div>
        <div className="grid order-1 md:order-2 place-content-center">
          <div className={`${styles.bgImage}`}>
            <svg
              width="28"
              height="27"
              viewBox="0 0 28 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${styles.orangeSvg}`}
            >
              <path
                d="M27.2651 12.7544C17.3852 12.6568 14.1421 10.0345 13.1628 0.0208554C10.4225 9.97564 7.57659 12.9217 0.462798 14.1662C10.0562 15.1189 13.0159 18.0448 14.5652 26.8998C14.8186 18.0954 17.7376 15.0948 27.2651 12.7544Z"
                fill="#D45800"
              />
            </svg>

            <div className="w-4/5 relative mx-auto Div">
              <Image
                src="/images/icons/miva Div.png"
                alt=""
                layout="intrinsic"
                width={520}
                height={641}
                className="object-contain"
              />
            </div>

            <div className={`${styles.centerRectangle} relative `}>
              <Image
                src="/images/icons/Rectangle 122.png"
                alt="BLANK"
                width={573}
                height={215}
                layout="intrinsic"
              />
            </div>
            <div className={`${styles.Inset}`}>
              <Image
                src="/images/pictures/Miva.png"
                alt="Miva"
                width={470}
                height={579}
                layout="intrinsic"
              />
            </div>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${styles.whiteSvg}`}
            >
              <path
                d="M35.2653 16.7542C22.2657 16.6257 17.9986 13.1754 16.71 -3.8743e-05C13.1045 13.098 9.36 16.9743 1.27956e-05 18.6117C12.6225 19.8652 16.5168 23.7151 18.5553 35.3659C18.8887 23.7817 22.7294 19.8335 35.2653 16.7542Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* 1st section */}
      <section className="w-full flex flex-col items-center justify-between mt-[100px]">
        <h3 className="w-[254px] text-center h-[38px] md:w-[669px] md:h-6 font-extrabold text-base md:text-2xl mt-12 md:mt-[0px]">
          Bring Your Business Online In 3 Simple Steps
        </h3>
        <div className="w-full flex flex-row md:flex-col items-center justify-start">
          <div className="w-[80%] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
            <Image
              src="/images/pictures/step 1.png"
              className="mb-[30px] mt-[80px]"
              alt=""
              width={250}
              layout="intrinsic"
              height={506}
            />
            <Image
              className="mt-[80px] mb-[30px]"
              src="/images/pictures/step 2.png"
              alt=""
              width={250}
              layout="intrinsic"
              height={506}
            />
            <Image
              src="/images/pictures/step 3.png"
              className="mb-[30px] mt-[80px]"
              alt=""
              width={250}
              layout="intrinsic"
              height={506}
            />
          </div>
          <div className="w-1/4 flex flex-col md:flex-row items-center justify-center">
            <Image src="/images/icons/C1.svg" alt="" width={50} height={50} />

            <div className="hidden md:block w-[4px] h-[4px] rounded-[50%] flex-shrink-0 bg-gradient-to-b from-GreenT to-GreenL"></div>
            <div className="hidden md:block flex-shrink-0 bg-gradient-to-b from-GreenT to-GreenL w-[340.05px] h-[1px]"></div>
            <div className="hidden md:block w-[4px] h-[4px] rounded-[50%] flex-shrink-0 bg-gradient-to-b from-GreenT to-GreenL"></div>

            <Image
              src="/images/icons/VL.svg"
              alt=""
              className="md:hidden"
              width={6}
              height={0}
            />
            <Image src="/images/icons/C2.svg" alt="" width={50} height={50} />

            <div className="hidden md:block w-[4px] h-[4px] rounded-[50%] flex-shrink-0 bg-gradient-to-b from-GreenT to-GreenL"></div>
            <div className="hidden md:block flex-shrink-0 bg-gradient-to-b from-GreenT to-GreenL w-[340.05px] h-[1px]"></div>
            <div className="hidden md:block w-[4px] h-[4px] rounded-[50%] flex-shrink-0 bg-gradient-to-b from-GreenT to-GreenL"></div>

            <Image
              src="/images/icons/VL.svg"
              alt=""
              className="md:hidden"
              width={6}
              height={0}
            />
            <Image src="/images/icons/C3.svg" alt="" width={50} height={50} />
          </div>
          <div className="w-1/4 md:w-2/3 flex flex-col md:flex-row items-center justify-between mt-5 md:mt-[3px]">
            <p>Store structure</p>
            <p className="md:mx-[100px] my-[400px] md:my-[0px]">
              Business credentials
            </p>
            <p>Account details</p>
          </div>
        </div>
      </section>
      {/* 2nd section  */}
      <section className="w-full flex flex-col items-center justify-start md:mt-20">
        <h3 className="w-[254px] text-center h-[38px] md:w-[669px] md:h-6 font-extrabold text-base md:text-2xl my-12 md:my-[0px]">
          Keep Track Of Your Sales And Profit
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-between md:mt-20">
          <Image
            className="md:h-[205px] lg:h-[300px]"
            src="/images/pictures/MacBook Pro 2.png"
            alt=""
            width={495}
            height={360}
          />
          <Image
            className="md:h-[205px] lg:h-[300px] mt-7 md:mt-[0px] md:ml-[50px]"
            src="/images/pictures/MacBook Pro 1.png"
            alt=""
            width={495}
            height={390}
          />
        </div>
      </section>
      {/* 3rd section */}
      <div className="w-full lg:px-10 xs:px-5 sm:px-10">
        <section className="w-full px-10 pb-[50px] pt-[50px] z-10 bg-GreenB border-[5px] border-white rounded-[24px] md:rounded-[32px] flex flex-col items-center justify-start mt-[150px] mb-[-150px] relative">
          <div className="flex flex-col items-center px-12 justify-start md:text-base text-sm place-content-center mt-4">
            {/* first */}
            <div className="flex flex-wrap items-center justify-center">
              <div className="mt-5 rounded-lg p-[10px] bg-white flex items-center justify-between ml-4">
                <p>Professional e-commerce store</p>
                <i className="ph ph-check-circle text-green-600 text-2xl ml-5"></i>
              </div>
              <div className="mt-5 rounded-lg p-[10px] bg-white flex items-center justify-between ml-4">
                <p>Manage inventory</p>
                <i className="ph ph-check-circle text-green-600 text-2xl ml-5"></i>
              </div>
              <div className="mt-5 rounded-lg p-[10px] bg-white flex items-center justify-between ml-4">
                <p>Record sales</p>
                <i className="ph ph-check-circle text-green-600 text-2xl ml-5"></i>
              </div>
              <div className="mt-5 rounded-lg p-[10px] bg-white flex items-center justify-between ml-4">
                <p>Get business analytics and data</p>
                <i className="ph ph-check-circle text-green-600 text-2xl ml-5"></i>
              </div>

              <div className="mt-5 rounded-lg p-[10px] bg-white flex items-center justify-between ml-4">
                <p>Access to business growth community</p>
                <i className="ph ph-check-circle text-green-600 text-2xl ml-5"></i>
              </div>
              <div className="mt-5 rounded-lg p-[10px] bg-white flex items-center justify-between ml-4">
                <p>Receive payments from customers seamlessly</p>
                <i className="ph ph-check-circle text-green-600 text-2xl ml-5"></i>
              </div>
              <div className="mt-5 rounded-lg p-[10px] bg-white flex items-center justify-between ml-4">
                <p>Receive payments seamlessly</p>
                <i className="ph ph-check-circle text-green-600 text-2xl ml-5"></i>
              </div>
              <div className="mt-5 rounded-lg p-[10px] bg-white flex items-center justify-between ml-4">
                <p>Manage customer list</p>
                <i className="ph ph-check-circle text-green-600 text-2xl ml-5"></i>
              </div>
            </div>
          </div>

          <h3 className="font-bold text-base md:text-2xl flex items-center justify-center text-white my-6 md:my-[0px] md:mt-12 md:mb-16">
            All For NGN0.00 Cost. 100% FREE
          </h3>
          <button
            id="button"
            className="py-2 px-10 text-sm md:text-xl font-bold md:font-medium border-white border-[2px] md:border-[3px] bg-gradient-to-b from-GreenT to-GreenL text-white rounded-lg"
            type="submit"
          >
            Create your store now!
          </button>
        </section>
      </div>
      <footer className="w-full bg-black md:w-fit lg:px-20 xs:px-3 sm:px-5">
        <div className="flex flex-wrap items-center justify-between pt-[200px]">
          {/* left */}
          <div className="lg:w-1/3 sm:w-full md:w-1/2 xs:w-full items-start justify-start p-3">
            <div className="lg:justify-start sm:justify-center xs:justify-center flex">
              <Image
                src="/images/logos/Mx 6.png"
                alt=""
                width={162.24}
                height={51.8}
              />
            </div>
            <p className="text-white w-full sm:text-center lg:text-left xs:text-center">
              MarketXtra empowers small businesses in Africa to grow their
              sales, brand and customer base.
            </p>
          </div>

          {/* middle */}
          <div className="lg:w-1/3 sm:w-full md:w-1/2 xs:w-full xs:w-full flex items-center xs:justify-center my-10">
            <div className="w-1/2">
              <div>
                <a href="#" className="text-white mt-3">
                  Home
                </a>
              </div>
              <div>
                <a href="#" className="text-white hover:font-bold mt-3">
                  About
                </a>
              </div>
              <div>
                <a href="#" className="text-white hover:font-bold mt-3">
                  How it works
                </a>
              </div>
              <div>
                <a href="#" className="text-white hover:font-bold mt-3">
                  Category
                </a>
              </div>
              <div>
                <a href="#" className="text-white hover:font-bold mt-3">
                  Pricing
                </a>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="lg:w-1/3 sm:w-full md:w-1/2 xs:w-full flex flex-col items-center md:items-start justify-start">
            <p className="font-bold text-white">
              Get Updated On What is New On MarketXtra
            </p>
            <input
              type="text"
              placeholder="Enter e-mail address"
              className="rounded-lg border-[1px] w-full border-white p-[10px] text-white bg-black my-4"
            />
            <button
              className="px-10 py-3 bg-gradient-to-b from-GreenT to-GreenL text-white rounded-lg flex items-center justify-center"
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex w-full justify-between mt-10 pb-10">
          <div className="w-1/2">
            <p className="text-white">
              © 2024 MarketXtra. All rights reserved.
            </p>
          </div>
          {/* logos */}
          <div className="w-1/2 ml-4 mb-12 md:mb-[0px] h-6 flex justify-end">
            <div className="flex">
              <i className="ph ph-facebook-logo text-white text-2xl ml-5"></i>
              <i className="ph ph-instagram-logo text-white text-2xl ml-5"></i>
              <i className="ph ph-twitter-logo text-white text-2xl ml-5"></i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
