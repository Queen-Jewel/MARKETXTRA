import React, { ChangeEvent } from "react";
// import Image from "next/image";
interface StoreStructureProps {
  onInputChange: (name: string, value: string) => void;
}
const StoreStructure: React.FC<StoreStructureProps> = ({ onInputChange }) => {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    onInputChange(name, value);
  };
  return (
    <>
      <input
        required
        className="border-Gray-400 h-[54px] border py-3 pl-2 w-full mb-2 rounded-md relative"
        id="storename"
        type="text"
        name="store_name"
        placeholder="Store name"
        autoComplete="store_name"
        onChange={handleChange}
      />

      {/* <div className="h-[54px] flex items-center justify-between w-full border-Gray-400 border px-2 py-3 rounded-md relative">
        Category
        <Image
          src="/images/icons/arrow-down.svg"
          alt="arrow-down"
          width={12}
          height={6}
        />
      </div> */}
      <select
        required
        name="category"
        className="h-[54px] flex items-center w-full border-Gray-400 border px-2 py-3 rounded-md relative appearance-none bg-white"
        id="category"
        style={{
          backgroundImage: `url('/images/icons/arrow-down.svg')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 8px center",
          backgroundSize: "12px 6px",
        }}
        onChange={handleChange}
      >
        <option value="">Category</option>
        <option value="market">Super Market</option>
        <option value="health-and-beauty">Health and Beauty</option>
        <option value="home-and-offices">Home and Offices</option>
        <option value="appliances">Appliances</option>
        <option value="computing">Computing</option>
        <option value="electronics">Electronics</option>
        <option value="fashion">Fashion</option>
        <option value="baby-product">Baby Product</option>
        <option value="gaming">Gaming</option>
        <option value="sporting-goods">Sporting Goods</option>
        <option value="phone-and-gadgets">Phone and Gadgets</option>
        <option value="other-categories">Other Categories</option>
      </select>
    </>
  );
};

export default StoreStructure;
