import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="w-full h-full flex items-center justify-center">
        <h1 className=" text-4xl font-Fraunces text-light_pallete/90 text-center mb-[200px] border-b-2 z-30">
          Exclusive Collection
        </h1>
      </div>
      <div className="w-[500px] m-auto">
        <span className="w-[300px] h-[1px] bg-light_pallete/50 absolute top-[350px] -left-10 rotate-90 m-auto z-40">
          .
        </span>
        <span className="w-[300px] h-[1px] bg-light_pallete/50 absolute top-[250px] left-[100px] rotate-90 z-40">
          .
        </span>
      </div>
      <div className="absolute w-[200px] z-[1] top-[30px]">
        <div className="relative w-full bg-[#F89107]  rounded-lg ">
          <img src="mockup/hoodie.png" alt="" className=" scale-[1.4]" />
          <div className="absolute top-0 right-2 animate-[spin_5s_linear_infinite]">
            <img src="mockup/hoodie_txt.png" alt="" className="w-[50px]" />
          </div>
        </div>
      </div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Hero;
