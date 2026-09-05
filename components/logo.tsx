import React from 'react';
import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
      src="/logo.jpg"
      alt="Logo"
      width={32}
      height={32}
      className="rounded-md"
      />
      <span className="font-bold text-primary">
        راهنمای نرم افزار
        </span>
        </div>
  );
};

export default Logo;