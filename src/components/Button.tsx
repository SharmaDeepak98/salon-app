import React from "react";

interface ButtonProps {
  description: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ description, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="tracking-wider hover:text-black hover:bg-gray-300  bg-black font-bold  py-2 px-8 rounded-md text-white shadow-md">
      {description}
    </button>
  );
};

export default Button;
