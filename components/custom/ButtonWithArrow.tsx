import { ArrowRight } from "lucide-react";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const ButtonHover: React.FC<ButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button className={`${className} group`} {...props}>
      {children}
      <span className="absolute inset-y-0 right-2 flex items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <ArrowRight />
      </span>
    </button>
  );
};

export default ButtonHover;
