import React from "react";

const CustomTitle = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h1 className={`text-[24px] tracking-tighter text-[#393939] ${className}`}>
      {title}
    </h1>
  );
};

export default CustomTitle;
