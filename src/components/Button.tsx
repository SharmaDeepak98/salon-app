import React from 'react'

interface ButtonProps {
    description: string;
}

const Button :React.FC<ButtonProps>= ({description}) => {
  return (
    <button className="hover:text-black hover:bg-gray-300  bg-black font-bold  py-2 px-8 rounded-md text-white">
      {description}
    </button>
  )
}

export default Button
