import React from "react";
import bannerdt from "../../assets/bannerdt.webp";
import bannermb from "../../assets/bannermb.webp";
export const Banner = () => {
  return (
    <div class="relative w-full h-full block">
      <img src={bannerdt} className="hidden md:block w-full h-full object-center object-cover max-w-full" alt="Banner"/>
      <img src={bannermb} className="md:hidden w-full h-full object-center object-cover max-w-full" alt="Banner"/>
    </div>
  );
};