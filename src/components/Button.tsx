import React from "react";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  description: string;
  onClick?: () => void;
  to?: string;
}

const Button: React.FC<ButtonProps> = ({ description, onClick, to }) => {

  const navigate = useNavigate();


  const handleClick = ()=>{
    if (to){
      navigate(to)
      window.scrollTo(0, 0)
    }else if(onClick){
      onClick()
    }
  }

  return (
    <button
      onClick={handleClick}
      className="tracking-wider hover:text-black hover:bg-gray-300  bg-black font-bold  py-2 px-8 rounded-md text-white shadow-md">
      {description}
    </button>
  );
};

export default Button;
