"use client";
import React, { ChangeEvent } from "react";

interface BusinessCredentialsProps {
  onInputChange: (name: string, value: string) => void;
}

const businessCredentials: React.FC<BusinessCredentialsProps> = ({
  onInputChange,
}) => {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    onInputChange(name, value);
  };

  return (
    <>
      <textarea
        className="border w-full h-[140px] mb-3 ml-[1px] px-3 text-[14px] rounded-lg"
        name="description"
        placeholder="Write a brief description about your business"
        required
        onChange={handleChange}
      ></textarea>
      <input
        className="border w-full h-[54px] mb-3 ml-[1px] pl-2 rounded-lg"
        type="text"
        name="business_email"
        placeholder="Business E-mail"
        required
        onChange={handleChange}
      />
      <input
        className="border w-full h-[54px] mb-3 ml-[1px] pl-2 rounded-lg"
        type="text"
        name="phone_number"
        placeholder="phone number"
        required
        onChange={handleChange}
      />
      <input
        className="border w-full h-[54px] mb-3 ml-[1px] pl-2 rounded-lg"
        type="text"
        name="city"
        placeholder="City"
        required
        onChange={handleChange}
      />
      <input
        className="border w-full h-[54px] mb-3 ml-[1px] pl-2 rounded-lg"
        type="text"
        name="address"
        placeholder="Address"
        required
        onChange={handleChange}
      />
    </>
  );
};

export default businessCredentials;
