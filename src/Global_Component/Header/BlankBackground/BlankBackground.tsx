"use client";
import Link from "next/link";
import React from "react";

interface IBlankBackground {
  data: {
    id: number;
    text: string;
    subMenu: {
      id: number;
      text: string;
      href: string;
    }[];
  };
  setNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}

const BlankBackground = ({ data, setNavbar }: IBlankBackground) => {
  return (
    <section>
      <div className="flex flex-col gap-1">
        {data?.subMenu.map((subItem) => (
          <Link
            href={{
              pathname: `/categories/${subItem.id}`,
              query: { category: `${subItem.text}` },
            }}
            key={subItem.id}
            className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-2 py-1 rounded-md hover:bg-gray-100/50 hover:font-semibold dark:hover:bg-gray-800/50"
          >
            <span
              className="text-sm"
              onClick={() => {
                setNavbar(false);
              }}
            >
              {subItem?.text}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlankBackground;
