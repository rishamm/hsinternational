import React from "react";
import img from "/hero/image-sec.png";
const WhatWeDO = () => {
  const phoneNumber = "+917306661706";
  const message = "Hello! I would like to know more about your services 🎉";

  const handleClick = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div
      className={`h-[800px]  bg-[#870000] bg-[url('/hero/image-sec.png')] bg-no-repeat bg-right-top   lg:block flex justify-center items-center  overflow-hidden lg:relative`}
    >
      <div className="container mx-auto flex flex-col  lg:justify-end  w-full lg:gap-10 ">
        <div className="text-[#FFF5E0] font-kanit w-full grid grid-cols-2 ">
          <div></div>
        </div>
        <div className="lg:w-full lg:pl-24  lg:flex flex-col-2 gap-12">
          <div></div>
          <div className=" bg-white md:rounded-bl-3xl md:rounded-tl-3xl lg:grid lg:grid-cols-2 sm:grid sm:grid-cols-1 md:px-12 py-12 bg-opacity-[0.8] lg:absolute xl:top-40">
            <div className="">
              <img
                src="/hero/image-th.png"
                className="absolute hidden right-[50%] lg:block"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex justify-start ">
                <h6 className="sm:text-4xl text-3xl sm:text-left font-kanit font-semibold  text-[#000E41] text-center">
                  WHY CHOOSE US ?
                </h6>
              </div>
              <div className=" flex flex-col-2 ">
                <p className="  font-kanit text-[#000E41] lg:leading-8 xl:text-lg xl:leading-10  lg:text-base sm:text-2xl text-sm  leading-10  text-left  sm:w-[90%]  ">
                  Embark on a journey of discovery with our comprehensive suite
                  of services designed to make your dreams a reality. Whether
                  you're seeking to study abroad, pursue career opportunities
                  with a job visa, or start a new chapter with migration visa
                  assistance, our experienced team is here to guide you every
                  step of the way. Immerse yourself in new cultures, broaden
                  your horizons, and build a brighter future with our tailored
                  solutions. And for those seeking adventure, our curated tours
                  and travel packages offer unforgettable experiences in every
                  corner of the globe. Let us be your trusted partner in
                  exploration and achievement. Your journey starts here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDO;
