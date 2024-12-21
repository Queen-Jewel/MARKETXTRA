import React from "react";

interface ButtonProps {
  name: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ name, onClick }) => {
  return (
    <button
      type="submit"
      className="bg-gradient-to-b block lg:hidden from-GreenT to-GreenL text-white py-2 px-4 rounded-lg w-full h-[44px] mt-[32px]"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
