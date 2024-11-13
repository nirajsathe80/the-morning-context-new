"use client";

import Button from "@/app/common/button";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white p-[10px] flex justify-between shadow-[rgba(0,0,0,0.25)_0px_1px_1px]">
      <div className="flex gap-4 items-center">
        <Image src={"menu.svg"} alt="menu" width={"23"} height={"16"} />
        <Image src={"logo.svg"} alt="logo" width={"105"} height={"36"} />
      </div>
      <div className="flex items-center gap-3">
        <Image src="search.svg" alt="search" width={"18"} height={"18"} />
        <Button buttonText="SIGN IN" onClick={() => {}} />
      </div>
    </header>
  );
};

export default Header;
