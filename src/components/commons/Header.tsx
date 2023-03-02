import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-[600px] flex justify-center mb-10">
      <Image src="/images/logo.png" alt="logo" width={300} height={250} />
    </header>
  );
};

export default Header;
