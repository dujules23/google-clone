import React from "react";
import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Header */}
      <HomeHeader />

      {/* Body */}

      <div className="flex flex-col items-center mt-24"> 
        <Image 
        alt='Google Logo'
        width='300'
        height='100'
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
        />
        <HomeSearch />
      </div>
    </>
  )
}
