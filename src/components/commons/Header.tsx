import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <header className=" flex justify-center my-2">
      <Image src="/images/logo.png" alt="logo" width={300} height={250} />
    </header>
  );
};

export default Header;
