import Link from "next/link";
import React from "react";

const LinkItem = ({ menu }: { menu: string[] }) => {
  return (
    <div className="flex flex-col space-y-5">
      {menu.map((item, id) => (
        <Link
          href={item.toLowerCase().split(" ").join("-")}
          key={id}
          className="text-[#2C3F33]"
        >
          <span className="border-[#2C3F33] hover:border-b-[2px]">{item}</span>
        </Link>
      ))}
    </div>
  );
};

export default LinkItem;
