import React, { ChangeEvent } from "react";

interface AccountDetailsProps {
  onInputChange: (name: string, value: string) => void;
}

const AccountDetails: React.FC<AccountDetailsProps> = ({ onInputChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onInputChange(name, value);
  };

  return (
    <>
      <input
        className="border w-full min-h-[54px] mb-3 ml-[1px] pl-2 rounded-lg"
        type="text"
        name="account_name"
        placeholder="Account name"
        required
        onChange={handleChange}
      />
      <input
        className="border w-full min-h-[54px] mb-3 ml-[1px] pl-2 rounded-lg"
        type="text"
        name="account_number"
        placeholder="Account number"
        required
        onChange={handleChange}
      />
      <input
        className="border w-full min-h-[54px] mb-3 ml-[1px] pl-2 rounded-lg"
        type="text"
        name="bank_name"
        placeholder="Bank name"
        required
        onChange={handleChange}
      />
    </>
  );
};

export default AccountDetails;
