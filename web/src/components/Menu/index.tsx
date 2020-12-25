import React from "react";

import Link from "next/link";

const Menu: React.FC = () => {
  return (
    <div className="fixed flex flex-row items-center w-full h-auto pt-0 bg-kult-primary text-center md:flex-col md:w-64 md:min-h-full">
      <Link href="/">
        <img src="/kult.svg" alt="" className="cursor-pointer w-auto h-12 md:w-full md:h-auto" />
      </Link>

      {/* NAVIGATION MENU */}
      <ul className="flex flex-row justify-evenly flex-1 md:flex-col md:justify-start">
        <li className="p-0 m-0 flex flex-row items-center justify-start border-2 border-transparent rounded-lg cursor-pointer
        hover:rounded-lg hover:border-white hover:border-solid md:bg-red-40 md:p-4">
          <img src="/write.svg" alt="" className="w-6" />
          <Link href="/post">
            <h2 className="text-secondary text-sm flex-1 md:ml-2">New Post</h2>
          </Link>
        </li>
        <li className="p-0 m-0 flex flex-row items-center justify-start border-2 border-transparent rounded-lg cursor-pointer
        hover:rounded-lg hover:border-white hover:border-solid md:bg-red-40 md:p-4">
          <img src="/user.svg" alt="" className="w-6" />
          <Link href="/profile">
            <h2 className="text-secondary text-sm flex-1 md:ml-2">My Profile</h2>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
